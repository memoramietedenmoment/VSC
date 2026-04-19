import { Link } from "wouter";
import BackButton from "@/components/BackButton";

export default function Agb() {
  return (
    <div className="min-h-screen bg-background">

      {/* Header */}
      <header className="bg-[oklch(0.22_0.06_155)] text-white py-10 sm:py-16">
        <div className="container px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Allgemeine Geschäftsbedingungen</h1>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
            Vertragsbedingungen für die Vermietung von Eventausstattung
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="py-16">
        <div className="container max-w-4xl">
          <div className="mb-8">
            <BackButton />
          </div>

          <div className="prose prose-sm sm:prose-base lg:prose-lg mx-auto text-gray-700 max-w-none break-words">

            {/* Geltungsbereich */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">§ 1 Geltungsbereich</h2>
              <p className="mb-6">
                Diese Allgemeinen Geschäftsbedingungen gelten für alle Mietverträge zwischen der memora - miete den moment​ Daniel Zimmer Simon Bleier GbR (im weiteren Verlauf: memora) und ihren Kunden über die Vermietung von Geräten und Accessoires für Veranstaltungen.
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
                Kleinere Gebrauchsspuren, die die Funktion nicht beeinträchtigen, stellen keinen Mangel dar.
              </p>
              <p className="mb-6">
                Der Mieter verpflichtet sich, die Mietsache pfleglich zu behandeln und nur bestimmungsgemäß zu verwenden.
              </p>
            </section>

            {/* Mietdauer & Rückgabe */}
            <section className="mb-12">

              <h2 className="text-2xl font-bold text-gray-900 mb-6">§ 4 Mietdauer & Rückgabe</h2>
              <p className="mb-6">
                Die Mietdauer wird individuell vereinbart. Der Mieter ist verpflichtet, die Mietgegenstände fristgerecht und in ordnungsgemäßem Zustand zurückzugeben. Schäden oder Verluste sind unverzüglich zu melden.
Verlängert der Mieter die Mietdauer ohne Absprache, kann memora eine Nachberechnung erheben.
Schäden oder Verluste sind unverzüglich mitzuteilen.
              </p>
            </section>

            {/* Preise und Zahlung */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">§ 5 Preise und Zahlung</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">5.1 Mietpreis</h3>
              <p className="mb-6">
                Die Mietpreise ergeben sich aus der aktuellen Preisliste des Vermieters oder der
                individuellen Mietvereinbarung. Alle Preise verstehen sich gemäß § 19 UStG ohne Ausweis von Umsatzsteuer. memora nimmt als Kleinunternehmen gemäß § 19 UStG keine Umsatzsteuer ein und weist daher auf den Rechnungen keine Mehrwertsteuer aus.
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

            {/* Zubehör & Verbrauchsmaterialien */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">§ 6 Zubehör & Verbrauchsmaterialien</h2>
              <p className="mb-6">
                memora bietet zu bestimmten Mietgegenständen ergänzendes Zubehör oder Verbrauchsmaterialien (z. B. Hot-Dog-Tüten, Popcorn-Tüten, Zuckerwatte-Stäbchen etc.) an.
              </p>
              <p className="mb-6">
                Diese Artikel sind nicht Bestandteil des Mietgegenstands, sondern separate Kaufartikel und werden gemäß der Angabe auf den entsprechenden Produktdetailseiten berechnet.
                </p>
              <p className="mb-6">
                Verbrauchsmaterialien sind von der Rückgabe ausgeschlossen. Eine Rückerstattung nicht genutzter Artikel erfolgt nicht.
              </p>
            </section>

            {/* Abholung & Lieferung */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">§ 7 Abholung & Lieferung</h2>
              <p className="mb-6">
               Abholung: Unsere Mietgeräte können kostenlos an unserem Standort abgeholt werden.
              </p>
              <p className="mb-6">
                Auf Wunsch liefern wir die Geräte gerne direkt zu eurer Eventlocation. Die Liefergebühren richten sich nach der Entfernung vom Standort:
              </p>
              <p className="mb-6">
Innerhalb von 50 km ab unserem Standort: 50,- €. Innerhalb von 100 km ab unserem Standort: 100,- €
</p>
              <p className="mb-6">
                Die Abrechnung der Liefergebühren erfolgt zusammen mit dem Mietpreis. Für Entfernungen über 100 km erstellen wir gerne ein individuelles Angebot.   
            </p>
            </section>

            {/* Übergabe und Rückgabe */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">§ 8 Übergabe und Rückgabe</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">8.1 Übergabe</h3>
              <p className="mb-6">
                Die Übergabe erfolgt am vereinbarten Ort und Zeitpunkt. Der Mieter hat die Mietsache
                auf Vollständigkeit und Funktionstüchtigkeit zu überprüfen und etwaige Mängel
                unverzüglich zu melden.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">8.2 Rückgabe</h3>
              <p className="mb-6">
                Die Rückgabe hat am vereinbarten Ort und Zeitpunkt in gereinigtem und funktionsfähigem
                Zustand zu erfolgen. Der Mieter haftet für Beschädigungen oder Verlust der Mietsache.
              </p>
            </section>

            {/* Haftung des Mieters & Schäden */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">§ 9 Haftung des Mieters & Schäden</h2>
              <p className="mb-6">
                Der Mieter haftet für alle Schäden an der Mietsache, die während der Mietzeit entstehen,
                gleichgültig aus welchem Grund. Dies gilt auch für Schäden durch Dritte oder höhere Gewalt.
                Der Mieter verpflichtet sich, die Mietsache gegen Diebstahl und Beschädigung zu versichern.
              </p>
              <p className="mb-6">
                Bei Verlust oder Zerstörung der Mietsache hat der Mieter den Wiederbeschaffungswert zu ersetzen. Für gewöhnliche Abnutzung der Geräte haftet der Mieter nicht.
              </p>
            </section>

            {/* Pflichten des Mieters */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">§ 10 Pflichten des Mieters</h2>
              <p className="mb-6">
                Der Mieter verpflichtet sich, die Mietgegenstände sorgfältig zu behandeln und nur bestimmungsgemäß zu verwenden,
                die Geräte sauber und vollständig zurückzugeben (soweit keine Reinigungsgebühr anfällt)
                und die Mietgegenstände nicht an Dritte weiterzugeben oder zu verändern.
              </p>
            </section>

            {/* Besondere Nutzungshinweise für Effektgeräte (Nebel / Seifenblasen) */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">§ 11 Besondere Nutzungshinweise für Effektgeräte</h2>
<h3 className="text-xl font-semibold text-gray-900 mb-4">11.1 Nebelmaschinen</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Der Mieter verpflichtet sich, die Nutzung der Nebelmaschine vorab mit dem Betreiber der Veranstaltungsstätte abzustimmen. Dies gilt insbesondere im Hinblick auf vorhandene Rauchmelder, Brandmeldeanlagen oder sonstige sicherheitsrelevante Einrichtungen.</li>
                <li>Der Mieter nimmt zur Kenntnis, dass der Betrieb der Nebelmaschine Fehlalarme auslösen und dadurch Kosten entstehen können (z. B. Gebühren für Feuerwehreinsatz, Sicherheitsdienst oder Gebäudemanagement).</li>
                <li>Die Nebelmaschine darf ausschließlich bestimmungsgemäß und nur mit geeignetem Nebelfluid betrieben werden. Die Verwendung von Wasser oder sonstigen Fremdflüssigkeiten ist untersagt.</li>
                <li>Der Betrieb hat nur in geeigneten, ausreichend belüfteten Bereichen zu erfolgen. Der Nebelausstoß darf nicht direkt auf Personen gerichtet werden. Flucht- und Rettungswege sind stets freizuhalten.</li>
                <li>Für Kosten, Schäden oder Folgeschäden, die durch eine nicht abgestimmte oder unsachgemäße Nutzung entstehen, haftet der Mieter.</li>
              </ul>
<h3 className="text-xl font-semibold text-gray-900 mb-4">11.2 Seifenblasenmaschinen</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Der Mieter nimmt zur Kenntnis, dass beim Betrieb einer Seifenblasenmaschine Seifenblasenfluid auf dem Boden oder anderen Oberflächen abgelagert werden kann. Dadurch kann Rutschgefahr entstehen.</li>
                <li>Der Mieter ist verpflichtet, den Einsatzbereich vorab auf Eignung zu prüfen und geeignete Maßnahmen zur Vermeidung von Unfällen zu treffen (z. B. Platzierung außerhalb von Laufwegen, Absicherung von glatten Böden, regelmäßige Reinigung).</li>
                <li>Der Betrieb hat ausschließlich bestimmungsgemäß und nur mit geeignetem Seifenblasenfluid zu erfolgen. Die Verwendung anderer Flüssigkeiten ist untersagt.</li>
                <li>Für Schäden, Reinigungskosten oder Folgekosten (z. B. beschädigte Bodenbeläge, Ausrutschen von Gästen, zusätzliche Reinigung durch die Location), die durch den Einsatz der Seifenblasenmaschine entstehen, haftet der Mieter, soweit diese durch unsachgemäßen Betrieb oder fehlende Absicherung verursacht wurden.</li>
              </ul>
            </section>

            {/* Gewährleistung */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">§ 12 Gewährleistung</h2>
              <p className="mb-6">
                Der Vermieter gewährleistet, dass die Mietsache zum Zeitpunkt der Übergabe funktionsfähig ist.
                Mängel, die während der Mietzeit auftreten und nicht auf unsachgemäße Behandlung durch den
                Mieter zurückzuführen sind, werden vom Vermieter behoben, sofern dies möglich ist.
              </p>
              <p className="mb-6">
                Bei Mängeln, die eine Nutzung der Mietsache unmöglich machen, kann der Mieter vom Vertrag zurücktreten.
              </p>
            </section>

            {/* Stornierungen */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">§ 13 Stornierungen</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>Stornierungen bis 14 Tage vor Mietbeginn sind kostenlos.</li>
                <li>Bei Stornierungen 13 bis 7 Tage vor Mietbeginn fallen 50 % des Mietpreises an.</li>
                <li>Bei Stornierungen ab 6 Tage vor Mietbeginn ist der volle Mietpreis fällig.</li>
              </ul>
              <p className="mb-6">
                Die Stornierung kann formfrei ohne Angabe von Gründen erfolgen, sollte jedoch per WhatsApp oder E-Mail erfolgen, um Missverständnisse zu vermeiden.
              </p>
              </section>

            {/* Haftungsausschluss / Haftungsbegrenzung des Vermieters */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">§ 14 Haftungsausschluss / Haftungsbegrenzung des Vermieters</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>memora haftet im Rahmen der gesetzlichen Vorschriften unbeschränkt für Schäden, die memora vorsätzlich oder grob fahrlässig verursacht hat, sowie bei Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit. Für Schäden, die durch (grob) fahrlässiges oder vorsätzliches Verhalten des Mieters oder von Veranstaltungsteilnehmern entstehen, haftet ausschließlich der Mieter.</li>
                <li>Bei einfacher Fahrlässigkeit haftet memora nur bei Verletzung wesentlicher Vertragspflichten (Kardinalpflichten). In diesem Fall ist die Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt.</li>
                <li>memora haftet nicht für Ausfälle oder Schäden, die durch äußere Umstände entstehen, auf die memora keinen Einfluss hat (z. B. Wetter, Stromausfall, behördliche Anordnungen, Eingriffe Dritter).</li>
                <li>memora übernimmt keine Haftung für Schäden und Folgekosten, die durch unsachgemäße Nutzung der Mietgeräte oder fehlende Abstimmung mit der Location entstehen (z. B. ausgelöste Brandmeldeanlage, zusätzliche Reinigungskosten, Feuerwehreinsatzkosten).</li>
              </ul>
            </section>

            {/* Datenschutz */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">§ 15 Datenschutz</h2>
              <p className="mb-6">
                Die Erhebung, Verarbeitung und Nutzung personenbezogener Daten erfolgt gemäß unserer
                Datenschutzerklärung, die Ihr unter <Link href="/datenschutz" className="text-blue-600 hover:underline">Datenschutz</Link> einsehen könnt.
              </p>
            </section>

            {/* Zahlungsverzug / Rücktrittsrecht des Vermieters */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">§ 16 Zahlungsverzug / Rücktrittsrecht des Vermieters</h2>
              <p className="mb-6">
                Wenn vereinbarte Zahlungen (insbesondere Anzahlung oder Restzahlung) nicht fristgerecht eingehen und der Kunde auch nach einer angemessenen Nachfrist von 7 Kalendertagen nicht leistet, sind wir berechtigt, vom Vertrag zurückzutreten. In diesem Fall entfällt unsere Leistungspflicht. Weitergehende gesetzliche Rechte, insbesondere Ansprüche wegen Verzuges, bleiben unberührt.
              </p>
            </section>

             {/* Eigentumsvorbehalt */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">§ 17 Eigentumsvorbehalt</h2>
              <p className="mb-6">
                Alle Mietgegenstände bleiben Eigentum von memora.
Eine Weiterveräußerung, Verpfändung oder sonstige Überlassung an Dritte ist nicht gestattet.
              </p>
            </section>

            {/* Schlussbestimmungen */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">§ 18 Schlussbestimmungen</h2>
              <p className="mb-6">
                Es gilt deutsches Recht. Gerichtsstand ist, soweit zulässig, der Sitz von memora. Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
              </p>
            </section>

            {/* Geschäftsführer */}
            <section id="geschaeftsfuehrer" className="mb-12 rounded-xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">§ 19 Geschäftsführer</h2>
              <p className="mb-2 text-gray-800">Vertreten durch die geschäftsführenden Gesellschafter:</p>
              <p className="mb-0 text-gray-800">
                Daniel Zimmer
                <br />
                Simon Bleier
              </p>
            </section>

            {/* Stand */}
            <section className="mb-12">
              <p className="text-sm text-gray-500">Stand: April 2026</p>
              <p className="text-sm text-gray-500">
                memora – miete den moment | Daniel Zimmer & Simon Bleier GbR
              </p>
            </section>

          </div>

          {/* Back to Home */}
          <div className="text-center mt-10 sm:mt-12">
            <Link
              href="/"
              className="btn-gold inline-flex w-full sm:w-auto items-center justify-center px-6 py-3 rounded-lg font-bold"
            >
              Zurück zur Startseite
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