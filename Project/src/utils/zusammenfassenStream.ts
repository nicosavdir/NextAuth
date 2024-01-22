import endent from 'endent';
import {
  createParser,
  ParsedEvent,
  ReconnectInterval,
} from 'eventsource-parser';

const createPrompt = (content: string) => {
  const data = (content: any) => {
    return endent`
Du wirst im nachfolgenden einen Text bekommen und hast den Auftrag ihn zusammen zu fassen.
Fasse den Inhalt zurerst in kurzen Sitchpunkten zusammen. Die Stichpunkte sollten extrem kurz sein und wirklich nur die aller wichtigsten Oberthemen nennen, ohne dabei auf den Inhalt einzugehen, die Stichpunkte sollten nur zur groben Übersicht der Struktur von dem Text dienen.
Fasse danach den Text in möglichst kurzer form zusammen, achte dabei allerdings darauf, dass keine wichtigen Kernelemente des Textes ausgelassen werden.
Hier der Text:
    ${content}
    `;
  };

  return data(content);

};

export const OpenAIStream = async (
  content: string,
  model: string,
  key: string | undefined,
) => {
  const prompt = createPrompt(content);

  const system = { role: 'system', content: prompt };

  const res = await fetch(`https://api.openai.com/v1/chat/completions`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${key || process.env.OPENAI_API_KEY}`,
    },
    method: 'POST',
    body: JSON.stringify({
      model,
      messages: [system],
      temperature: 0,
      stream: true,
    }),
  });

  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  if (res.status !== 200) {
    const statusText = res.statusText;
    const result = await res.body?.getReader().read();
    throw new Error(
      `OpenAI API returned an error: ${
        decoder.decode(result?.value) || statusText
      }`,
    );
  }

  const stream = new ReadableStream({
    async start(controller) {
      const onParse = (event: ParsedEvent | ReconnectInterval) => {
        if (event.type === 'event') {
          const data = event.data;

          if (data === '[DONE]') {
            controller.close();
            return;
          }

          try {
            const json = JSON.parse(data);
            const text = json.choices[0].delta.content;
            const queue = encoder.encode(text);
            controller.enqueue(queue);
          } catch (e) {
            controller.error(e);
          }
        }
      };

      const parser = createParser(onParse);

      for await (const chunk of res.body as any) {
        parser.feed(decoder.decode(chunk));
      }
    },
  });

  return stream;
};