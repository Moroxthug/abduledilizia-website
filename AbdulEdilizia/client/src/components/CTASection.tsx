import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-16 md:py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 text-center">
        <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
          Pronto a Trasformare la Tua Casa?
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Contattaci oggi per un preventivo gratuito e senza impegno. 
          Il nostro team è a tua disposizione per realizzare il progetto dei tuoi sogni.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            variant="outline"
            className="text-base border-primary-foreground/30 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground hover:bg-primary-foreground/20"
            data-testid="button-cta-contact"
            asChild
          >
            <Link href="/contatti">Richiedi Preventivo</Link>
          </Button>
          <div className="flex items-center gap-6 text-sm">
            <a 
              href="tel:3392553291" 
              className="flex items-center gap-2 hover:text-primary-foreground/80 transition-colors"
              data-testid="link-cta-phone"
            >
              <Phone className="h-4 w-4" />
              339 255 3291
            </a>
            <a 
              href="mailto:abdul@abduledilizia.it"
              className="flex items-center gap-2 hover:text-primary-foreground/80 transition-colors"
              data-testid="link-cta-email"
            >
              <Mail className="h-4 w-4" />
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
