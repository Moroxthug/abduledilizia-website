import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Bath, Building2, CheckCircle, MapPin, Phone } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Desio() {
  return (
    <div className="min-h-screen animate-fade-in">
      <SEOHead
        title="Ristrutturazioni Economiche Desio | Abdul Edilizia - Alta Qualità Prezzi Competitivi"
        description="Ristrutturazioni economiche di altissima qualità a Desio: prezzi competitivi, materiali premium. Vicinissimi da Muggiò. Miglior rapporto qualità-prezzo. Preventivo gratuito!"
        keywords="ristrutturazioni economiche desio, impresa edile prezzi competitivi desio, rifacimento conveniente desio, qualità prezzo"
        canonicalUrl="/citta/desio"
      />

      <section className="py-20 md:py-28 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <MapPin className="h-4 w-4" />
              <span className="text-sm font-medium">Desio (MB)</span>
            </div>
            
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              Ristrutturazioni Edili Professionali a Desio
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Abdul Edilizia è il tuo partner di fiducia per ristrutturazioni a Desio. 
              Vicinanza, qualità e professionalità per la tua casa.
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
              Abdul Edilizia a Desio: Vicinanza e Competenza
            </h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 mb-12">
              <p>
                Desio è una delle aree principali di attività per Abdul Edilizia. La vicinanza geografica tra Muggiò e Desio ci permette di 
                garantire interventi rapidi, sopralluoghi frequenti e un'assistenza costante durante tutte le fasi dei lavori. Conosciamo 
                perfettamente il tessuto urbano di Desio, dai quartieri storici del centro alle moderne zone residenziali. Operiamo 
                regolarmente su appartamenti in condomini, ville unifamiliari e immobili commerciali.
              </p>
              
              <p>
                A Desio ci specializziamo in ristrutturazioni complete chiavi in mano, rifacimento di bagni e cucine, installazione di 
                cappotti termici e restauro di facciate. La nostra esperienza locale ci permette di gestire efficacemente tutte le pratiche 
                burocratiche presso il Comune di Desio e di coordinarci con gli amministratori condominiali. Ogni progetto viene seguito con 
                la massima attenzione ai dettagli, utilizzando materiali di prima scelta e rispettando rigorosamente i tempi concordati.
              </p>

              <p>
                I nostri clienti a Desio apprezzano la trasparenza dei preventivi, la qualità delle finiture e la disponibilità del nostro 
                team. Lavoriamo con passione e dedizione per trasformare ogni abitazione in uno spazio moderno, funzionale e accogliente.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover-elevate transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex p-4 bg-primary/10 rounded-full">
                    <Home className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Ristrutturazioni</h3>
                  <p className="text-sm text-muted-foreground">
                    Complete chiavi in mano
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-elevate transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex p-4 bg-primary/10 rounded-full">
                    <Bath className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Bagni e Cucine</h3>
                  <p className="text-sm text-muted-foreground">
                    Moderne e funzionali
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-elevate transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex p-4 bg-primary/10 rounded-full">
                    <Building2 className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Facciate e Tetti</h3>
                  <p className="text-sm text-muted-foreground">
                    Cappotti termici
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
              Servizi a Desio
            </h2>

            <div className="space-y-4">
              {[
                "Ristrutturazioni complete appartamenti e ville",
                "Rifacimento bagni moderni",
                "Cucine su misura",
                "Cappotti termici condomini",
                "Impianti elettrici e idraulici certificati",
                "Pavimenti e rivestimenti di qualità",
                "Pratiche edilizie Comune di Desio",
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
