import { Link } from "wouter";

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      {/* Header */}
      <header className="bg-[oklch(0.22_0.06_155)] text-white py-16">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Datenschutzerklärung</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Informationen über die Verarbeitung Ihrer personenbezogenen Daten
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="py-16">
        <div className="container max-w-4xl">
          <div className="prose prose-lg mx-auto text-gray-700">

            {/* Verantwortlicher */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Verantwortlicher</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-2"><strong>memora</strong></p>
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

            {/* Datenschutzbeauftragter */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Datenschutzbeauftragtragter</h2>
              <p>
                Da wir weniger als 10 Personen beschäftigen, sind wir nicht verpflichtet, einen Datenschutzbeauftragten
                zu benennen. Bei Fragen zum Datenschutz können Sie uns jedoch jederzeit kontaktieren.
              </p>
            </section>

            {/* Allgemeines zur Datenverarbeitung */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Allgemeines zur Datenverarbeitung</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">3.1 Umfang der Verarbeitung personenbezogener Daten</h3>
              <p className="mb-6">
                Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur Bereitstellung
                einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Die Verarbeitung
                personenbezogener Daten unserer Nutzer erfolgt regelmäßig nur nach Einwilligung des Nutzers. Eine
                Ausnahme gilt in solchen Fällen, in denen eine vorherige Einholung einer Einwilligung aus tatsächlichen
                Gründen nicht möglich ist und die Verarbeitung der Daten durch gesetzliche Vorschriften gestattet ist.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">3.2 Rechtsgrundlage für die Verarbeitung personenbezogener Daten</h3>
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

              <h3 className="text-xl font-semibold text-gray-900 mb-4">3.3 Datenlöschung und Speicherdauer</h3>
              <p className="mb-6">
                Die personenbezogenen Daten der betroffenen Person werden gelöscht oder gesperrt, sobald der Zweck der
                Speicherung entfällt. Eine Speicherung kann darüber hinaus erfolgen, wenn dies durch den europäischen
                oder nationalen Gesetzgeber in unionsrechtlichen Verordnungen, Gesetzen oder sonstigen Vorschriften,
                denen der Verantwortliche unterliegt, vorgesehen wurde.
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
                <li>E-Mail-Adresse</li>
                <li>Nachricht</li>
                <li>Event-Datum</li>
              </ul>

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
            </section>

            {/* Cookies */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Cookies</h2>
              <p className="mb-6">
                Unsere Internetseite verwendet Cookies. Cookies sind Textdateien, welche über einen Internetbrowser auf
                einem Computersystem abgelegt und gespeichert werden. Zahlreiche Internetseiten und Server verwenden Cookies.
                Viele Cookies enthalten eine sogenannte Cookie-ID. Eine Cookie-ID ist eine eindeutige Kennung des Cookies.
                Sie besteht aus einer Zeichenfolge, durch welche Internetseiten und Server dem konkreten Internetbrowser
                zugeordnet werden können, in dem das Cookie gespeichert wurde.
              </p>
              <p className="mb-6">
                Durch den Einsatz von Cookies kann unser Unternehmen den Nutzern unserer Internetseite nutzerfreundlichere
                Services bereitstellen, die ohne die Cookie-Setzung nicht möglich wären.
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