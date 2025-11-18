import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Bath, Building2, CheckCircle, MapPin, Phone } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function SestoSanGiovanni() {
  return (
    <div className="min-h-screen animate-fade-in">
      <SEOHead
        title="Ristrutturazioni Economiche Sesto San Giovanni | Abdul Edilizia - Qualità Prezzi Competitivi"
        description="Ristrutturazioni economiche di altissima qualità a Sesto San Giovanni: prezzi competitivi, materiali premium. Miglior rapporto qualità-prezzo. Preventivo gratuito!"
        keywords="ristrutturazioni economiche sesto, impresa edile prezzi competitivi sesto san giovanni, rifacimento conveniente sesto"
        canonicalUrl="/citta/sesto-san-giovanni"
      />

      <section className="py-20 md:py-28 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <MapPin className="h-4 w-4" />
              <span className="text-sm font-medium">Sesto San Giovanni (MI)</span>
            </div>
            
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              Ristrutturazioni Edili a Sesto San Giovanni
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Abdul Edilizia è il tuo partner di fiducia per ristrutturazioni complete a Sesto San Giovanni. 
              Dalla Brianza a Sesto: vicinanza, qualità e professionalità.
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
              Abdul Edilizia a Sesto San Giovanni
            </h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 mb-12">
              <p>
                Sesto San Giovanni rappresenta un'area strategica per Abdul Edilizia. La vicinanza tra Muggiò e Sesto ci permette di 
                garantire interventi rapidi e una presenza costante in cantiere. Conosciamo perfettamente il tessuto urbano sestese, dai 
                quartieri storici legati alla tradizione industriale come Marelli e Falck, alle moderne aree residenziali in continua 
                espansione. A Sesto San Giovanni operiamo su diverse tipologie di immobili: appartamenti in condomini anni '60-'70 che 
                necessitano di ammodernamento, ville unifamiliari nelle zone più esclusive, e uffici da riconvertire in spazi abitativi.
              </p>
              
              <p>
                La nostra esperienza a Sesto San Giovanni comprende ristrutturazioni complete di appartamenti, rifacimento di bagni e 
                cucine, installazione di cappotti termici su condomini e restauro di facciate. Gestiamo tutte le pratiche burocratiche 
                necessarie, dalle comunicazioni al Comune alle autorizzazioni condominiali. I nostri clienti a Sesto apprezzano la rapidità 
                di intervento, la qualità dei materiali e il rispetto dei tempi concordati.
              </p>

              <p>
                Dal quartiere Cascina Gatti a Rondinella, da Pelucca a Campari, Abdul Edilizia è il partner ideale per ogni progetto di 
                ristrutturazione a Sesto San Giovanni. La nostra squadra di professionisti qualificati garantisce risultati eccellenti, 
                utilizzando materiali certificati e tecniche all'avanguardia.
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
                    Ristrutturazioni complete a Sesto
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
                    Rifacimento e design
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-elevate transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex p-4 bg-primary/10 rounded-full">
                    <Building2 className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Condomini</h3>
                  <p className="text-sm text-muted-foreground">
                    Cappotti e facciate
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
              Servizi a Sesto San Giovanni
            </h2>

            <div className="space-y-4">
              {[
                "Ristrutturazioni complete appartamenti",
                "Rifacimento bagni e cucine",
                "Cappotti termici condomini",
                "Impianti elettrici e idraulici",
                "Pavimenti e rivestimenti",
                "Pratiche Comune di Sesto San Giovanni",
                "Consegna chiavi in mano",
                "Garanzia lavori eseguiti"
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
