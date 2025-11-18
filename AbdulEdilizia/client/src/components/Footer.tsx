import { Link } from "wouter";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t mt-auto">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Abdul Edilizia</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Professionisti delle ristrutturazioni a Muggiò, Monza e Brianza. 
              Qualità, affidabilità e competenza al vostro servizio.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Via Aldo Moro 6, Muggiò (MB)</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:3392553291" className="hover:text-foreground" data-testid="link-phone-footer">
                  339 255 3291
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:abdul@abduledilizia.it" className="hover:text-foreground" data-testid="link-email-footer">
                  abdul@abduledilizia.it
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Link Rapidi</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground" data-testid="link-footer-home">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/chi-siamo" className="text-muted-foreground hover:text-foreground" data-testid="link-footer-chi-siamo">
                  Chi Siamo
                </Link>
              </li>
              <li>
                <Link href="/servizi" className="text-muted-foreground hover:text-foreground" data-testid="link-footer-servizi">
                  I Nostri Servizi
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-muted-foreground hover:text-foreground" data-testid="link-footer-portfolio">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contatti" className="text-muted-foreground hover:text-foreground" data-testid="link-footer-contatti">
                  Contatti
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4">I Nostri Servizi</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Ristrutturazioni Complete</li>
              <li>Ristrutturazione Bagni</li>
              <li>Ristrutturazione Cucine</li>
              <li>Rifacimento Tetti</li>
              <li>Restauro Facciate</li>
              <li>Impianti Elettrici e Idraulici</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p className="mb-2">
            © {new Date().getFullYear()} Abdul Edilizia - P.IVA: 09976150962
          </p>
          <p>
            Servizi di ristrutturazione professionale a Muggiò, Monza, Milano e Brianza
          </p>
        </div>
      </div>
    </footer>
  );
}
