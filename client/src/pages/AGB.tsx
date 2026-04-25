import { Link } from "wouter";
import BackButton from "@/components/BackButton";
import Seo from "@/components/Seo";
import { SITE_NAME, SITE_URL } from "@/lib/seo";
import { useState } from "react";
import { MenuIcon, Instagram } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
    </svg>
  );
}

function TikTokIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.35V2h-3.2v12.39a2.93 2.93 0 0 1-2.93 2.93 2.93 2.93 0 0 1-2.93-2.93 2.93 2.93 0 0 1 2.93-2.93c.29 0 .56.04.82.12V8.33a6.1 6.1 0 0 0-.82-.06 6.12 6.12 0 0 0-6.12 6.12 6.12 6.12 0 0 0 6.12 6.12 6.12 6.12 0 0 0 6.12-6.12V8.1a8 8 0 0 0 4.57 1.43V6.35c-.26 0-.54-.02-.8-.06z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

function SiteNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[oklch(0.22_0.06_155)] shadow-lg">
      <div className="container relative flex items-center h-16">
        <Link href="/" className="flex items-center gap-2 group">
          <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663559905199/naWukJUn4HFLcrakq5tncW/memora_Logo_9da7fd54.png" alt="memora Logo" className="h-10 w-auto filter invert" />
        </Link>
        <div className="md:hidden absolute right-4">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:text-[oklch(0.75_0.14_80)] hover:bg-white/10">
                <MenuIcon className="h-5 w-5" />
                <span className="sr-only">Menü öffnen</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-[oklch(0.22_0.06_155)] border-l border-white/20">
              <div className="flex flex-col gap-6 mt-6">
                <nav className="flex flex-col gap-4 items-center">
                  <Link href="/#wie-es-funktioniert" className="text-white/80 hover:text-[oklch(0.75_0.14_80)] transition-colors text-lg font-medium text-center" onClick={() => setIsMenuOpen(false)}>So geht's</Link>
                  <Link href="/#produkte" className="text-white/80 hover:text-[oklch(0.75_0.14_80)] transition-colors text-lg font-medium text-center" onClick={() => setIsMenuOpen(false)}>Produkte</Link>
                  <Link href="/#bewertungen" className="text-white/80 hover:text-[oklch(0.75_0.14_80)] transition-colors text-lg font-medium text-center" onClick={() => setIsMenuOpen(false)}>Bewertungen</Link>
                  <Link href="/#kontakt" className="text-white/80 hover:text-[oklch(0.75_0.14_80)] transition-colors text-lg font-medium text-center" onClick={() => setIsMenuOpen(false)}>Kontakt</Link>
                  <Link href="/#warum-memora" className="text-white/80 hover:text-[oklch(0.75_0.14_80)] transition-colors text-lg font-medium text-center" onClick={() => setIsMenuOpen(false)}>Warum memora</Link>
                </nav>
                <div className="flex flex-col gap-4 pt-4 border-t border-white/20 items-center">
                  <a href="tel:+4915225896570" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                    <PhoneIcon />
                    <span>0152 258 96570</span>
                  </a>
                  <a href="https://wa.me/4915225896570?text=Hallo%20memora-Team,%20" target="_blank" rel="noopener noreferrer" className="btn-gold px-4 py-3 rounded-lg text-sm font-bold pulse-gold w-full text-center max-w-xs flex items-center justify-center gap-2">
                    <WhatsAppIcon />
                    Jetzt anfragen
                  </a>
                  <div className="flex gap-6 pt-4">
                    <a href="https://www.instagram.com/memora_miete_den_moment/?igsh=MnFhYTBtNGowMjhk" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[oklch(0.75_0.14_80)] transition-colors" onClick={() => setIsMenuOpen(false)}>
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a href="https://www.tiktok.com/@memora303?_t=ZN-90SplgHjs6Y&_r=1" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[oklch(0.75_0.14_80)] transition-colors" onClick={() => setIsMenuOpen(false)}>
                      <TikTokIcon className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden md:flex items-center justify-between w-full ml-4">
          <nav className="flex items-center gap-6 text-sm text-white/80">
            <Link href="/#wie-es-funktioniert" className="hover:text-[oklch(0.75_0.14_80)] transition-colors">So geht's</Link>
            <Link href="/#produkte" className="hover:text-[oklch(0.75_0.14_80)] transition-colors">Produkte</Link>
            <Link href="/#bewertungen" className="hover:text-[oklch(0.75_0.14_80)] transition-colors">Bewertungen</Link>
            <Link href="/#kontakt" className="hover:text-[oklch(0.75_0.14_80)] transition-colors">Kontakt</Link>
            <Link href="/#warum-memora" className="hover:text-[oklch(0.75_0.14_80)] transition-colors">Warum memora</Link>
          </nav>
          <div className="flex items-center gap-2">
            <a href="tel:+4915225896570" className="hidden sm:flex items-center gap-1.5 text-white/80 hover:text-white text-sm transition-colors">
              <PhoneIcon />
              <span className="hidden lg:inline">0152 258 96570</span>
            </a>
            <a href="https://wa.me/4915225896570?text=Hallo%20memora-Team,%20" target="_blank" rel="noopener noreferrer" className="btn-gold pulse-gold px-4 py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2">
              <WhatsAppIcon />
              Anfragen
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Agb() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <Seo
        title="AGB - Allgemeine Geschäftsbedingungen | memora Eventausstattung"
        description="Alle Geschäftsbedingungen für die Vermietung von Eventausstattung bei memora in Karlsruhe. Mietbedingungen, Vertragsbedingungen und rechtliche Informationen."
        canonicalUrl={`${SITE_URL}/agb`}
        robots="noindex,follow"
      />

      {/* Header */}
      <header className="bg-[oklch(0.22_0.06_155)] text-white pt-28 pb-10 sm:pb-16">
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
          <div className="mb-8 hidden md:block">
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