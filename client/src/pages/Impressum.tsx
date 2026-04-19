import { Link } from "wouter";
import BackButton from "@/components/BackButton";
export default function Impressum() {
  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      {/* Header */}
      <header className="bg-[oklch(0.22_0.06_155)] text-white py-16">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Impressum</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
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