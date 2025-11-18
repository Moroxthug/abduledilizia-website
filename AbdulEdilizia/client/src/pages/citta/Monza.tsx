import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Bath, Building2, CheckCircle, MapPin, Phone } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Monza() {
  return (
    <div className="min-h-screen animate-fade-in">
      <SEOHead
        title="Ristrutturazioni Economiche a Monza | Abdul Edilizia - Qualità Premium a Prezzi Competitivi"
        description="Ristrutturazioni economiche di altissima qualità a Monza: prezzi competitivi, materiali premium. Abdul Edilizia: rapporto qualità-prezzo eccellente. Preventivo gratuito!"
        keywords="ristrutturazioni economiche monza, impresa edile prezzi competitivi monza, rifacimento bagno conveniente monza, ristrutturazioni qualità prezzo monza"
        canonicalUrl="/citta/monza"
      />

      <section className="py-20 md:py-28 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <MapPin className="h-4 w-4" />
              <span className="text-sm font-medium">Monza (MB)</span>
            </div>
            
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              Ristrutturazioni Edili di Alta Qualità a Monza
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Abdul Edilizia è la tua impresa di fiducia per ristrutturazioni complete a Monza. 
              Con sede a Muggiò, serviamo professionalmente tutta l'area monzese.
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
              Perché Scegliere Abdul Edilizia a Monza
            </h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 mb-12">
              <p>
                Monza rappresenta una delle aree di maggiore attività per Abdul Edilizia. La vicinanza dalla nostra sede di Muggiò 
                ci permette di garantire interventi rapidi, sopralluoghi puntuali e una presenza costante durante tutte le fasi dei lavori. 
                Conosciamo perfettamente il tessuto urbanistico di Monza, dalle eleganti ville liberty del centro storico agli appartamenti 
                dei quartieri residenziali come San Fruttuoso, Triante e Regina Pacis.
              </p>
              
              <p>
                A Monza ci occupiamo prevalentemente di ristrutturazioni complete di appartamenti in condomini storici, dove è fondamentale 
                rispettare le normative condominiali e i vincoli architettonici. Abbiamo maturato esperienza specifica nel restauro di 
                immobili d'epoca, nel rifacimento di bagni e cucine in spazi ridotti, e nell'installazione di cappotti termici per 
                migliorare l'efficienza energetica degli edifici monzesi. Il nostro team gestisce tutte le pratiche burocratiche necessarie, 
                comprese le comunicazioni al Comune di Monza e le eventuali autorizzazioni paesaggistiche.
              </p>

              <p>
                I nostri clienti a Monza apprezzano particolarmente la trasparenza dei preventivi, il rispetto scrupoloso dei tempi di 
                consegna e la qualità dei materiali utilizzati. Lavoriamo con fornitori locali selezionati e possiamo garantire interventi 
                in tempi brevi grazie alla nostra vicinanza logistica. Dal quartiere Sant'Albino a San Rocco, da Cederna ai Triante, 
                Abdul Edilizia è il partner ideale per ogni progetto di ristrutturazione a Monza.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover-elevate transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex p-4 bg-primary/10 rounded-full">
                    <Home className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Ristrutturazioni Complete</h3>
                  <p className="text-sm text-muted-foreground">
                    Appartamenti e ville a Monza
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
                    Rifacimento moderno e funzionale
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-elevate transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex p-4 bg-primary/10 rounded-full">
                    <Building2 className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Facciate Condominiali</h3>
                  <p className="text-sm text-muted-foreground">
                    Cappotti termici e restauro
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
              I Nostri Servizi a Monza
            </h2>

            <div className="space-y-4">
              {[
                "Ristrutturazioni complete chiavi in mano",
                "Rifacimento bagni con sanitari moderni",
                "Cucine su misura e funzionali",
                "Cappotti termici per condomini",
                "Restauro facciate edifici storici",
                "Rifacimento tetti e impermeabilizzazioni",
                "Impianti elettrici e idraulici a norma",
                "Pratiche edilizie e autorizzazioni"
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
