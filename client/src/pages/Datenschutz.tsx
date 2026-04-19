import { Link } from "wouter";
import BackButton from "@/components/BackButton";

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      {/* Header */}
      <header className="bg-[oklch(0.22_0.06_155)] text-white py-16">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Datenschutzerklärung</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Informationen über die Verarbeitung eurer personenbezogenen Daten
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="py-16">
        <div className="container max-w-4xl">
          <div className="mb-8">
            <BackButton />
          </div>

          <div className="prose prose-lg mx-auto text-gray-700">

            {/* Verantwortlicher */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Verantwortlicher</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-2"><strong>memora miete den moment Daniel Zimmer Simon Bleier GbR</strong></p>
                <p className="mb-2">Mühlstraße 8c</p>
                <p className="mb-2">76571 Gaggenau</p>
                <p className="mb-2">Deutschland</p>
                <p className="mb-2">
                  <strong>E-Mail:</strong>{" "}
                  <a href="mailto:info@mietedenmoment.de" className="text-blue-600 hover:underline">
                    info@mietedenmoment.de
                  </a>
                </p>
                <p className="mb-2">
                  <strong>Telefon:</strong>{" "}
                  <a href="tel:+4915225896570" className="text-blue-600 hover:underline">
                    0152 258 96570
                  </a>
                </p>
              </div>
            </section>

            {/* Datenschutz auf einen Blick */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Datenschutz auf einen Blick</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">2.1 Allgemeine Hinweise </h3>
              <p className="mb-6">
                Der Schutz eurer persönlichen Daten ist uns wichtig. Personenbezogene Daten sind alle Daten, mit denen ihr persönlich identifiziert werden könnt. Beim Besuch dieser Website werden personenbezogene Daten nur im technisch erforderlichen Umfang sowie dann verarbeitet, wenn ihr uns diese freiwillig mitteilt (z. B. über Kontaktformular, E-Mail oder WhatsApp).
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">2.2 Rechtsgrundlage für die Verarbeitung personenbezogener Daten</h3>
              <p className="mb-6">
                Soweit wir für Verarbeitungsvorgänge personenbezogener Daten eine Einwilligung der betroffenen Person
                einholen, dient Art. 6 Abs. 1 lit. a EU-Datenschutz-Grundverordnung (DSGVO) als Rechtsgrundlage.
                </p>
              <p className="mb-6">
                Bei der Verarbeitung von personenbezogenen Daten, die zur Erfüllung eines Vertrages, dessen Vertragspartei
                die betroffene Person ist, erforderlich ist, dient Art. 6 Abs. 1 lit. b DSGVO als Rechtsgrundlage. Dies
                gilt auch für Verarbeitungsvorgänge, die zur Durchführung vorvertraglicher Maßnahmen erforderlich sind.
              </p>
              <p className="mb-6">
                Soweit eine Verarbeitung personenbezogener Daten zur Erfüllung einer rechtlichen Verpflichtung erforderlich
                ist, der unser Unternehmen unterliegt, dient Art. 6 Abs. 1 lit. c DSGVO als Rechtsgrundlage.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">2.3 Wie erfassen wir eure Daten? </h3>
              <p className="mb-6">
                Eure Daten werden zum einen dadurch erhoben, dass ihr sie uns mitteilt – zum Beispiel, wenn ihr ein Kontaktformular ausfüllt oder euch für unseren Newsletter anmeldet.
Andere Daten werden automatisch oder nach eurer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Diese Erfassung passiert automatisch, sobald ihr unsere Seite betretet.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">2.4 Wofür nutzen wir eure Daten? </h3>
              <p className="mb-6">
                Ein Teil der Daten wird erhoben, um die Website fehlerfrei bereitzustellen. Andere Daten können zur Analyse eures Nutzerverhaltens verwendet werden oder um euch gezielt Inhalte anzuzeigen, die euch interessieren.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">2.5 Welche Rechte habt ihr in Bezug auf eure Daten? </h3>
              <p className="mb-6">
                Ihr habt jederzeit das Recht, kostenlos Auskunft über Herkunft, Empfänger und Zweck eurer gespeicherten personenbezogenen Daten zu bekommen. Außerdem könnt ihr die Berichtigung oder Löschung eurer Daten verlangen.
Wenn ihr uns eine Einwilligung zur Datenverarbeitung gegeben habt, könnt ihr diese jederzeit für die Zukunft widerrufen.
Außerdem habt ihr das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung eurer personenbezogenen Daten zu verlangen. Des Weiteren steht euch ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz könnt ihr euch jederzeit an uns wenden.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">2.6 Datenlöschung und Speicherdauer</h3>
              <p className="mb-6">
                Die personenbezogenen Daten der betroffenen Person werden gelöscht oder gesperrt, sobald der Zweck der
                Speicherung entfällt. Eine Speicherung kann darüber hinaus erfolgen, wenn dies durch den europäischen
                oder nationalen Gesetzgeber in unionsrechtlichen Verordnungen, Gesetzen oder sonstigen Vorschriften,
                denen der Verantwortliche unterliegt, vorgesehen wurde.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">2.7 Analyse-Tools und Tools von Drittanbietern </h3>
              <p className="mb-6">
                Beim Besuch unserer Website kann euer Surfverhalten statistisch ausgewertet werden. Das passiert vor allem mit sogenannten Analyseprogrammen.
Detaillierte Infos dazu findet ihr in dieser Datenschutzerklärung.
              </p>
            </section>

            {/* Hosting */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Hosting</h2>
              <p className="mb-6">
                Diese Website wird bei Netlify, Inc., 44 Montgomery Street, Suite 300, San Francisco, California 94104, USA gehostet.
</p>
<p className="mb-6">
Beim Besuch dieser Website verarbeitet Netlify technische Zugriffsdaten (z. B. IP-Adresse, Browserinformationen, Betriebssystem und Server-Logfiles), um die sichere und stabile Bereitstellung der Website zu gewährleisten.
</p>
<p className="mb-6">
Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
</p>
<p className="mb-6">
Weitere Informationen:
{" "}
                <a
                  href="https://www.netlify.com/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  https://www.netlify.com/privacy/
                </a>{" "}
              </p>
            </section>

            {/* Bereitstellung der Website */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Bereitstellung der Website und Erstellung von Logfiles</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">4.1 Beschreibung und Umfang der Datenverarbeitung</h3>
              <p className="mb-6">
                Bei jedem Aufruf unserer Internetseite erfasst unser System automatisiert Daten und Informationen vom
                Computersystem des aufrufenden Rechners. Folgende Daten werden hierbei erhoben:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>IP-Adresse des Nutzers</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Websites, von denen das System des Nutzers auf unsere Internetseite gelangt</li>
                <li>Websites, die vom System des Nutzers über unsere Website aufgerufen werden</li>
                <li>Verwendeter Internet-Browser und ggf. Betriebssystem des Rechners</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">4.2 Rechtsgrundlage für die Datenverarbeitung</h3>
              <p className="mb-6">
                Rechtsgrundlage für die vorübergehende Speicherung der Daten und der Logfiles ist Art. 6 Abs. 1 lit. f DSGVO.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">4.3 Zweck der Datenverarbeitung</h3>
              <p className="mb-6">
                Die vorübergehende Speicherung der IP-Adresse durch das System ist notwendig, um eine Auslieferung der
                Website an den Rechner des Nutzers zu ermöglichen. Hierfür muss die IP-Adresse des Nutzers für die Dauer
                der Sitzung gespeichert bleiben.
              </p>
            </section>

            {/* Kontaktaufnahme */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Kontaktaufnahme</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">5.1 Beschreibung und Umfang der Datenverarbeitung</h3>
              <p className="mb-6">
                Auf unserer Internetseite ist ein Kontaktformular vorhanden, welches für die elektronische Kontaktaufnahme
                genutzt werden kann. Nimmt ein Nutzer diese Möglichkeit wahr, so werden die in der Eingabemaske eingegebenen
                Daten an uns übermittelt und gespeichert. Diese Daten sind:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Name</li>
                <li>Telefonnummer</li>
                <li>Event-Datum</li>
                <li>Produkte</li>
                <li>Optionale Nachricht</li>
              </ul>
              <p className="mb-6">
                Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO oder Art. 6 Abs. 1 lit. f DSGVO.
              </p>
              <p className="mb-6">
                Die Daten verbleiben bei uns, bis der Zweck der Verarbeitung entfällt oder gesetzliche Aufbewahrungspflichten entgegenstehen.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">5.2 Rechtsgrundlage für die Datenverarbeitung</h3>
              <p className="mb-6">
                Rechtsgrundlage für die Verarbeitung der Daten ist bei Vorliegen einer Einwilligung des Nutzers Art. 6
                Abs. 1 lit. a DSGVO. Rechtsgrundlage für die Verarbeitung der Daten, die im Zuge einer Übersendung einer
                E-Mail übermittelt werden, ist Art. 6 Abs. 1 lit. f DSGVO.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">5.3 Zweck der Datenverarbeitung</h3>
              <p className="mb-6">
                Die Verarbeitung der personenbezogenen Daten aus der Eingabemaske dient uns allein zur Bearbeitung der
                Kontaktaufnahme. Im Falle einer Kontaktaufnahme per E-Mail liegt hieran auch das erforderliche berechtigte
                Interesse an der Verarbeitung der Daten.
              </p>

               <h3 className="text-xl font-semibold text-gray-900 mb-4">5.3 Kontaktaufnahme per WhatsApp</h3>
              <p className="mb-6">
                Für die Kommunikation über WhatsApp nutzen wir WhatsApp Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland. Bitte beachtet, dass bei Nutzung von WhatsApp personenbezogene Daten auch an Unternehmen der Meta-Gruppe übermittelt werden können.
               </p>
<p className="mb-6">
Weitere Informationen:
{" "}
                <a
                  href="https://www.whatsapp.com/legal/privacy-policy-eea"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  https://www.whatsapp.com/legal/privacy-policy-eea
                </a>{" "}
              </p>
            </section>

            {/* Cookies */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Cookies</h2>
              <p className="mb-6">
                Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Datenpakete und richten auf eurem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf eurem Endgerät gespeichert. Session-Cookies werden nach Ende eures Besuchs automatisch gelöscht. Permanente Cookies bleiben auf eurem Endgerät gespeichert, bis ihr diese selbst löscht oder eine automatische Löschung durch euren Webbrowser erfolgt.
              </p>
              <p className="mb-6">
                Cookies können von uns (First-Party-Cookies) oder von Drittunternehmen stammen (sog. Third-Party-Cookies). Third-Party-Cookies ermöglichen die Einbindung bestimmter Dienstleistungen von Drittunternehmen innerhalb von Webseiten (z. B. Cookies zur Abwicklung von Zahlungsdienstleistungen).
              </p>
              <p className="mb-6">
                Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte Webseitenfunktionen ohne diese nicht funktionieren würden (z. B. die Warenkorbfunktion oder die Anzeige von Videos). Andere Cookies können zur Auswertung des Nutzerverhaltens oder zu Werbezwecken verwendet werden.
                 </p>
              <p className="mb-6">
                Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs, zur Bereitstellung bestimmter, von euch erwünschter Funktionen (z. B. für die Warenkorbfunktion) oder zur Optimierung der Website (z. B. Cookies zur Messung des Webpublikums) erforderlich sind (notwendige Cookies), werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage angegeben wird. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von notwendigen Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Sofern eine Einwilligung zur Speicherung von Cookies und vergleichbaren Wiedererkennungstechnologien abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG); die Einwilligung ist jederzeit widerrufbar.
                </p>
              <p className="mb-6">
                Ihr können euren Browser so einstellen, dass ihr über das Setzen von Cookies informiert werdet und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.
Welche Cookies und Dienste auf dieser Website eingesetzt werden, könnt ihr dieser Datenschutzerklärung entnehmen.
              </p>
            </section>

            {/* Rechte der betroffenen Person */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Rechte der betroffenen Person</h2>
              <p className="mb-6">
                Sie haben das Recht:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen</li>
                <li>gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen</li>
                <li>gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen</li>
                <li>gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen</li>
                <li>gemäß Art. 20 DSGVO Ihre personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten</li>
                <li>gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung einzulegen</li>
              </ul>
            </section>

            {/* Widerspruchsrecht */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Widerspruchsrecht</h2>
              <p className="mb-6">
                Sofern Ihre personenbezogenen Daten auf Grundlage von berechtigten Interessen gemäß Art. 6 Abs. 1 S. 1
                lit. f DSGVO verarbeitet werden, haben Sie das Recht, gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung
                Ihrer personenbezogenen Daten einzulegen, soweit dafür Gründe vorliegen, die sich aus Ihrer besonderen
                Situation ergeben.
              </p>
            </section>

            {/* Änderungen */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Änderungen der Datenschutzerklärung</h2>
              <p className="mb-6">
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen
                Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen,
                z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
              </p>
            </section>

            {/* Quelle */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Quelle</h2>
              <p className="mb-6">
                Diese Datenschutzerklärung wurde mit Hilfe des{" "}
                <a
                  href="https://www.datenschutz-generator.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Datenschutz-Generators
                </a>{" "}
                von SOS Recht erstellt.
              </p>
            </section>

          </div>

          {/* Back to Home */}
          <div className="text-center mt-12">
            <Link href="/">
              <button className="btn-gold px-6 py-3 rounded-lg font-bold">
                Zurück zur Startseite
              </button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[oklch(0.15_0.04_155)] text-white/70 py-8">
        <div className="container text-center">
          <p className="text-sm">© 2025 memora – miete den moment. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>
  );
}