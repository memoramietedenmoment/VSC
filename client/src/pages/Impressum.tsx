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

export default function Impressum() {
  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <SiteNav />
      <Seo
        title="Impressum | memora Eventausstattung Vermietung Karlsruhe"
        description="Impressum und Kontaktinformationen von memora - Eventausstattung Vermietung in Karlsruhe, Rastatt, Baden-Baden und Umgebung."
        canonicalUrl={`${SITE_URL}/impressum`}
        robots="noindex,follow"
      />
      {/* Header */}
      <header className="bg-[oklch(0.22_0.06_155)] text-white pt-28 pb-16">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Impressum</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
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

            {/* Angaben gemäß § 5 TMG */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Anbieterinformationen</h2>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Diensteanbieter</h3>
                <p className="mb-2"><strong>memora - miete den moment​ Daniel Zimmer Simon Bleier GbR</strong></p>
                <p className="mb-2">Mühlstraße 8c</p>
                <p className="mb-2">76571 Gaggenau</p>
                <p className="mb-2">Deutschland</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Kontakt</h3>
                <p className="mb-2">
                  <strong>Telefon:</strong>{" "}
                  <a href="tel:+4915225896570" className="text-blue-600 hover:underline">
                    0152 258 96570
                  </a>
                </p>
                <p className="mb-2">
                  <strong>E-Mail:</strong>{" "}
                  <a href="mailto:info@mietedenmoment.de" className="text-blue-600 hover:underline">
                    info@mietedenmoment.de
                  </a>
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Vertreten durch:</h3>
                <p>Daniel Zimmer, Simon Bleier (Geschäftsführer)</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Zuständige Aufsichtsbehörde:</h3>
                <p>Gewerbeamt der Stadt Gaggenau</p>
              </div>
            </section>

            {/* Haftungsausschluss */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Haftungsausschluss (Disclaimer)</h2>

              <p className="mb-6">
                Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
              
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Haftung für Links</h3>
              <p className="mb-6">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
                Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
              </p>
              <p className="mb-6">
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte
                einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige
                Links umgehend entfernen.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Urheberrecht</h3>
              <p className="mb-6">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
                deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
                außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen
                Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht
                kommerziellen Gebrauch gestattet.
              </p>
              <p className="mb-6">
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
                Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
                trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden
                Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>
            </section>

            {/* Streitbeilegung */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Streitbeilegung</h2>
              <p className="mb-6">
                Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle weder verpflichtet noch bereit.​ 
              </p>
            </section>

            {/* Quelle */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Quelle</h2>
              <p className="mb-6">
                Dieses Impressum wurde mit Hilfe des{" "}
                <a
                  href="https://www.impressum-generator.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Impressum-Generators
                </a>{" "}
                von eRecht24 erstellt.
              </p>
            </section>

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