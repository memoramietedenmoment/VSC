import { Link } from "wouter";

export default function AGB() {
  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      {/* Header */}
      <header className="bg-[oklch(0.22_0.06_155)] text-white py-16">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Allgemeine Geschäftsbedingungen</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Vertragsbedingungen für die Vermietung von Eventausstattung
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="py-16">
        <div className="container max-w-4xl">
          <div className="prose prose-lg mx-auto text-gray-700">

            {/* Geltungsbereich */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">§ 1 Geltungsbereich</h2>
              <p className="mb-6">
                Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen memora
                (nachfolgend "Vermieter" oder "wir") und dem Kunden (nachfolgend "Mieter" oder "Sie")
                über die Vermietung von Eventausstattung. Abweichende Bedingungen des Mieters werden
                nicht anerkannt, es sei denn, der Vermieter stimmt ihrer Geltung ausdrücklich schriftlich zu.
              </p>
            </section>

            {/* Vertragsschluss */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">§ 2 Vertragsschluss</h2>
              <p className="mb-6">
                Der Vertrag kommt durch Annahme des Mietangebots durch den Vermieter zustande.
                Die Annahme erfolgt entweder schriftlich, per E-Mail oder durch Übergabe der Mietsache.
                Mündliche Nebenabreden bedürfen der schriftlichen Bestätigung.
              </p>
              <p className="mb-6">
                Der Vermieter behält sich das Recht vor, Mietanfragen ohne Angabe von Gründen abzulehnen.
              </p>
            </section>

            {/* Mietgegenstand */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">§ 3 Mietgegenstand</h2>
              <p className="mb-6">
                Der Vermieter vermietet dem Mieter die in der Mietvereinbarung aufgeführten Gegenstände
                (Eventausstattung) für den vereinbarten Zeitraum. Die Mietsache befindet sich in einem
                ordnungsgemäßen Zustand, es sei denn, der Mieter wird bei Übergabe auf Mängel hingewiesen.
              </p>
              <p className="mb-6">
                Der Mieter verpflichtet sich, die Mietsache pfleglich zu behandeln und nur bestimmungsgemäß zu verwenden.
              </p>
            </section>

            {/* Mietzeit */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">§ 4 Mietzeit</h2>
              <p className="mb-6">
                Die Mietzeit beginnt mit der Übergabe der Mietsache an den Mieter und endet mit der
                Rückgabe an den Vermieter. Die vereinbarte Mietzeit ist verbindlich. Eine Verlängerung
                der Mietzeit bedarf der Zustimmung des Vermieters und kann mit zusätzlichen Kosten verbunden sein.
              </p>
            </section>

            {/* Preise und Zahlung */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">§ 5 Preise und Zahlung</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">5.1 Mietpreis</h3>
              <p className="mb-6">
                Die Mietpreise ergeben sich aus der aktuellen Preisliste des Vermieters oder der
                individuellen Mietvereinbarung. Alle Preise verstehen sich zuzüglich der gesetzlichen
                Mehrwertsteuer.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">5.2 Zahlungsbedingungen</h3>
              <p className="mb-6">
                Der Mietpreis ist bei Vertragsabschluss fällig, es sei denn, es wurde eine andere
                Zahlungsweise vereinbart. Bei Zahlungsverzug ist der Vermieter berechtigt,
                Verzugszinsen in Höhe von 5% über dem Basiszinssatz der Europäischen Zentralbank zu verlangen.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">5.3 Kaution</h3>
              <p className="mb-6">
                Der Vermieter kann eine Kaution in Höhe des Mietpreises verlangen. Die Kaution wird
                nach ordnungsgemäßer Rückgabe der Mietsache innerhalb von 14 Tagen zurückerstattet.
              </p>
            </section>

            {/* Übergabe und Rückgabe */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">§ 6 Übergabe und Rückgabe</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">6.1 Übergabe</h3>
              <p className="mb-6">
                Die Übergabe erfolgt am vereinbarten Ort und Zeitpunkt. Der Mieter hat die Mietsache
                auf Vollständigkeit und Funktionstüchtigkeit zu überprüfen und etwaige Mängel
                unverzüglich zu melden.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">6.2 Rückgabe</h3>
              <p className="mb-6">
                Die Rückgabe hat am vereinbarten Ort und Zeitpunkt in gereinigtem und funktionsfähigem
                Zustand zu erfolgen. Der Mieter haftet für Beschädigungen oder Verlust der Mietsache.
              </p>
            </section>

            {/* Haftung des Mieters */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">§ 7 Haftung des Mieters</h2>
              <p className="mb-6">
                Der Mieter haftet für alle Schäden an der Mietsache, die während der Mietzeit entstehen,
                gleichgültig aus welchem Grund. Dies gilt auch für Schäden durch Dritte oder höhere Gewalt.
                Der Mieter verpflichtet sich, die Mietsache gegen Diebstahl und Beschädigung zu versichern.
              </p>
              <p className="mb-6">
                Bei Verlust oder Zerstörung der Mietsache hat der Mieter den Wiederbeschaffungswert zu ersetzen.
              </p>
            </section>

            {/* Gewährleistung */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">§ 8 Gewährleistung</h2>
              <p className="mb-6">
                Der Vermieter gewährleistet, dass die Mietsache zum Zeitpunkt der Übergabe funktionsfähig ist.
                Mängel, die während der Mietzeit auftreten und nicht auf unsachgemäße Behandlung durch den
                Mieter zurückzuführen sind, werden vom Vermieter behoben, sofern dies möglich ist.
              </p>
              <p className="mb-6">
                Bei Mängeln, die eine Nutzung der Mietsache unmöglich machen, kann der Mieter vom Vertrag zurücktreten.
              </p>
            </section>

            {/* Haftung des Vermieters */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">§ 9 Haftung des Vermieters</h2>
              <p className="mb-6">
                Der Vermieter haftet nur für Schäden, die auf grobe Fahrlässigkeit oder Vorsatz zurückzuführen sind.
                Die Haftung ist auf den Mietpreis beschränkt. Eine Haftung für Folgeschäden ist ausgeschlossen.
              </p>
            </section>

            {/* Datenschutz */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">§ 10 Datenschutz</h2>
              <p className="mb-6">
                Die Erhebung, Verarbeitung und Nutzung personenbezogener Daten erfolgt gemäß unserer
                Datenschutzerklärung, die Sie unter <Link href="/datenschutz" className="text-blue-600 hover:underline">datenschutz</Link> finden.
              </p>
            </section>

            {/* Kündigung */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">§ 11 Kündigung</h2>
              <p className="mb-6">
                Beide Vertragsparteien können den Mietvertrag ordentlich mit einer Frist von 14 Tagen kündigen.
                Bei Vorliegen eines wichtigen Grundes kann fristlos gekündigt werden. Als wichtiger Grund
                gilt insbesondere die Verletzung wesentlicher Vertragspflichten.
              </p>
            </section>

            {/* Schlussbestimmungen */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">§ 12 Schlussbestimmungen</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">12.1 Gerichtsstand</h3>
              <p className="mb-6">
                Gerichtsstand ist Karlsruhe, soweit der Mieter Kaufmann, juristische Person des öffentlichen
                Rechts oder öffentlich-rechtliches Sondervermögen ist.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">12.2 Salvatorische Klausel</h3>
              <p className="mb-6">
                Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit
                der übrigen Bestimmungen unberührt.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">12.3 Anwendbares Recht</h3>
              <p className="mb-6">
                Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts.
              </p>
            </section>

            {/* Stand */}
            <section className="mb-12">
              <p className="text-sm text-gray-500">
                Stand: April 2025
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