import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Bath, Building2, CheckCircle, MapPin, Phone } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Seregno() {
  return (
    <div className="min-h-screen animate-fade-in">
      <SEOHead
        title="Ristrutturazioni Economiche Seregno | Abdul Edilizia - Alta Qualità Prezzi Competitivi"
        description="Ristrutturazioni economiche di altissima qualità a Seregno: prezzi competitivi, materiali premium. Miglior rapporto qualità-prezzo in Brianza. Preventivo gratuito!"
        keywords="ristrutturazioni economiche seregno, impresa edile prezzi competitivi seregno, rifacimento conveniente, qualità prezzo"
        canonicalUrl="/citta/seregno"
      />

      <section className="py-20 md:py-28 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <MapPin className="h-4 w-4" />
              <span className="text-sm font-medium">Seregno (MB)</span>
            </div>
            
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              Ristrutturazioni Edili a Seregno
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Ristrutturazioni professionali a Seregno con Abdul Edilizia. 
              Esperienza locale, qualità garantita.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contatti">Richiedi Preventivo Gratuito</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:3392553291">
                  <Phone className="h-4 w-4 mr-2" />
                  339 255 3291
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
              Esperti di Ristrutturazioni a Seregno
            </h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 mb-12">
              <p>
                Seregno è un'area di forte presenza per Abdul Edilizia. La città, nel cuore della Brianza, presenta un patrimonio 
                immobiliare variegato che richiede competenze specifiche. Operiamo a Seregno su appartamenti in condomini moderni, 
                ville storiche e immobili da riqualificare. La nostra esperienza ci permette di affrontare ogni tipo di intervento, 
                dalla ristrutturazione leggera a quella completa.
              </p>
              
              <p>
                A Seregno gestiamo progetti di rifacimento bagni e cucine, installazione di cappotti termici, restauro facciate e 
                rifacimento tetti. Conosciamo le normative locali e gestiamo tutte le pratiche edilizie necessarie. I nostri clienti 
                apprezzano la puntualità, la trasparenza dei preventivi e la qualità dei materiali utilizzati.
              </p>

              <p>
                Dal centro storico alle zone residenziali più moderne, Abdul Edilizia è il partner ideale per ogni progetto di 
                ristrutturazione a Seregno. Lavoriamo con passione e dedizione per garantire risultati eccellenti.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover-elevate transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex p-4 bg-primary/10 rounded-full">
                    <Home className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Appartamenti</h3>
                  <p className="text-sm text-muted-foreground">
                    Ristrutturazioni complete
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-elevate transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex p-4 bg-primary/10 rounded-full">
                    <Bath className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Bagni Moderni</h3>
                  <p className="text-sm text-muted-foreground">
                    Design e funzionalità
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-elevate transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex p-4 bg-primary/10 rounded-full">
                    <Building2 className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Facciate</h3>
                  <p className="text-sm text-muted-foreground">
                    Restauro e cappotti termici
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-3xl mb-8 text-center">
              Servizi a Seregno
            </h2>

            <div className="space-y-4">
              {[
                "Ristrutturazioni chiavi in mano",
                "Rifacimento completo bagni",
                "Cucine moderne su misura",
                "Cappotti termici e isolamento",
                "Impianti certificati a norma",
                "Pavimenti e rivestimenti premium",
                "Pratiche Comune di Seregno",
                "Assistenza clienti dedicata"
              ].map((service, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-lg hover-elevate transition-smooth">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
