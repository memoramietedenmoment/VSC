import { Link } from "wouter";
import BackButton from "@/components/BackButton";
import Seo from "@/components/Seo";
import { SITE_URL } from "@/lib/seo";
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

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <Seo
        title="Datenschutzerklärung | memora Eventausstattung Vermietung"
        description="Datenschutzerklärung und Datenschutzrichtlinien für memora. Wir schützen Ihre persönlichen Daten beim Mieten von Eventausstattung in Karlsruhe."
        canonicalUrl={`${SITE_URL}/datenschutz`}
        robots="noindex,follow"
      />
      <SiteNav />
      {/* Header */}
      <header className="bg-[oklch(0.22_0.06_155)] text-white pt-28 pb-16">
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
          <div className="mb-8 hidden md:block">
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