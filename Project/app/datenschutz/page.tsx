/*eslint-disable*/
'use client';
import { Text } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';

export default function Settings() {
  // Chakra Color Mode
  return (
    <Box mt={{ base: '70px', md: '0px', xl: '0px' }}>
      <Text as="b" fontSize="40px">
        Datenschutzerklärung
      </Text>
      <br />
      <Text>
        Willkommen auf unserer Website. Wir verpflichten uns, Ihre persönlichen
        Daten zu schützen und Ihre Privatsphäre zu respektieren. Diese
        Datenschutzerklärung beschreibt die Arten personenbezogener Daten, die
        wir sammeln, und wie wir sie verwenden.
      </Text>
      <Text as="b" fontSize="30px">
        Wer wir sind
      </Text>
      <Text>
        Unser Unternehmen heißt textwerk.ai und unsere Website-Adresse ist
        textwerk.ai
      </Text>
      <br />
      <Text as="b" fontSize="30px">
        Welche personenbezogenen Daten wir sammeln und warum wir sie sammeln
      </Text>
      <Text>
        Kommentare: Wenn Besucher Kommentare auf der Website hinterlassen,
        erfassen wir die Daten, die im Kommentarformular angezeigt werden, die
        IP-Adresse des Besuchers und die Browser-User-Agent-Zeichenfolge. Wir
        sammeln diese Informationen, um Spam zu erkennen und zu verhindern.
      </Text>
      <br />
      <Text as="b">Cookies:</Text>
      <Text>
        Wenn Sie auf unserer Seite einen Kommentar hinterlassen, können Sie sich
        dafür entscheiden, Ihren Namen, Ihre E-Mail-Adresse und Ihre Website in
        Cookies zu speichern. Diese Cookies dienen Ihrem Komfort, damit Sie Ihre
        Daten nicht erneut eingeben müssen, wenn Sie einen weiteren Kommentar
        hinterlassen. Wir verwenden Cookies, um Informationen über Ihren Besuch
        auf unserer Website zu sammeln, einschließlich der Seiten, die Sie
        angesehen haben, der Links, auf die Sie geklickt haben, und der Dauer
        Ihres Besuchs. Wir verwenden diese Informationen, um unsere Website zu
        verbessern und um eine bessere Benutzererfahrung zu bieten.
      </Text>
      <br />
      <Text as="b">Eingebetteter Inhalt von anderen Websites:</Text>
      <Text>
        Artikel auf dieser Seite können eingebettete Inhalte enthalten, wie
        Videos, Bilder und Artikel, die sich genauso verhalten können, als ob
        der Besucher die andere Website besucht hätte. Diese Websites können
        Daten über Sie sammeln, Cookies verwenden, zusätzliches Tracking durch
        Dritte einbetten und Ihre Interaktion mit diesem eingebetteten Inhalt
        überwachen.
      </Text>
      <br />
      <Text as="b" fontSize="30px">
        Analytik
      </Text>
      <Text>
        Wir verwenden Google Analytics, um Informationen über Ihren Besuch auf
        unserer Website zu sammeln, einschließlich der Seiten, die Sie angesehen
        haben, der Links, auf die Sie geklickt haben, und der Dauer Ihres
        Besuchs. Wir verwenden diese Informationen, um unsere Website zu
        verbessern und um eine bessere Benutzererfahrung zu bieten.
      </Text>
      <br />
      <Text as="b" fontSize="30px">
        Affiliate-Offenlegung
      </Text>
      <Text>
        Wir sind Affiliate-Partner von vielen Online-Tools, Dienstleistungen und
        Produkten. Links auf dieser Website können Affiliate-Links sein, und wir
        können Provisionen für Käufe verdienen, die von Besuchern der Website
        getätigt werden. Dies sind Werbelinks, die verwendet werden können, um
        den Kauf eines Besuchers nachzuverfolgen und uns gutzuschreiben.
      </Text>
      <br />
      <Text>
        Wir ergreifen angemessene Maßnahmen, um Informationen über Sie vor
        Verlust, Diebstahl, Missbrauch und unberechtigtem Zugriff, Offenlegung,
        Veränderung und Zerstörung zu schützen.
      </Text>
      <br />
      <Text as="b" fontSize="30px">
        Informationen, die Sie uns zur Verfügung stellen
      </Text>
      <Text>
        Wir sammeln Informationen, die Sie uns direkt zur Verfügung stellen. Zum
        Beispiel erfassen wir Informationen, wenn Sie sich für einen Newsletter
        oder eine E-Mail-Liste anmelden, an einer Veranstaltung, Umfrage, einem
        Wettbewerb oder einer Promotion teilnehmen, über
        Drittanbieter-Social-Media-Seiten mit uns kommunizieren, Informationen
        über ein Kontaktformular bereitstellen oder auf andere Weise mit uns
        kommunizieren. Die Arten von Informationen, die wir möglicherweise
        sammeln, umfassen Ihren:
      </Text>
      <li>Namen</li>
      <li>E-Mail-Adresse</li>
      <li>Postanschrift</li>
      <li>Telefonnummer</li>
      <li>Alle anderen Informationen, die Sie bereitstellen möchten</li>
      <br />
      <Text as="b" fontSize="30px">
        Sicherheit
      </Text>
      <Text>
        Wir ergreifen angemessene Maßnahmen, um Informationen über Sie vor
        Verlust, Diebstahl, Missbrauch und unberechtigtem Zugriff, Offenlegung,
        Veränderung und Zerstörung zu schützen.
      </Text>
      <br />
      <Text as="b" fontSize="30px">
        Soziales Teilen
      </Text>
      <Text>
        Diese Website kann Funktionen zum sozialen Teilen und andere integrierte
        Tools (wie den Facebook „Gefällt mir“-Button) anbieten, die es Ihnen
        ermöglichen, Aktionen, die Sie auf unserer Website ausführen, mit
        anderen Medien-Diensten zu teilen. Ihre Nutzung dieser Tools ermöglicht
        das Teilen von Informationen mit der Öffentlichkeit, abhängig von den
        Einstellungen, die Sie mit Ihren sozialen Netzwerken festlegen.
      </Text>
      <br />
      <Text as="b" fontSize="30px">
        Änderungen unserer Datenschutzerklärung
      </Text>
      <Text>
        Wir behalten uns das Recht vor, diese Datenschutzerklärung jederzeit zu
        ändern. Alle Änderungen werden auf dieser Seite widergespiegelt.
      </Text>
      <br />
      <Text as="b" fontSize="30px">
        Kontaktieren Sie uns
      </Text>
      <Text>
        Wenn Sie Fragen zu dieser Datenschutz haben, können Sie uns unter
        info@textwerk.ai erreichen.
      </Text>
      <br />
    </Box>
  );
}
