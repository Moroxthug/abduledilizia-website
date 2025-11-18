import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Bath, Building2, CheckCircle, MapPin, Phone } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Milano() {
  return (
    <div className="min-h-screen animate-fade-in">
      <SEOHead
        title="Ristrutturazioni Economiche Milano | Abdul Edilizia - Alta Qualità Prezzi Competitivi"
        description="Ristrutturazioni economiche di altissima qualità a Milano: prezzi competitivi, materiali premium, lavori garantiti. Miglior rapporto qualità-prezzo. Preventivo gratuito!"
        keywords="ristrutturazioni economiche milano, impresa edile prezzi competitivi milano, rifacimento conveniente milano, ristrutturazioni qualità prezzo milano"
        canonicalUrl="/citta/milano"
      />

      <section className="py-20 md:py-28 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <MapPin className="h-4 w-4" />
              <span className="text-sm font-medium">Milano (MI)</span>
            </div>
            
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              Ristrutturazioni Edili Professionali a Milano
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Da Muggiò al centro di Milano: ristrutturazioni complete per appartamenti, 
              ville e uffici nell'area metropolitana.
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
              Abdul Edilizia a Milano: Esperienza e Competenza
            </h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 mb-12">
              <p>
                Milano rappresenta un mercato strategico per Abdul Edilizia. Pur avendo sede a Muggiò, operiamo regolarmente in tutta 
                l'area metropolitana milanese, dalle zone semicentrali come Bicocca, Niguarda e Greco, fino ai quartieri più periferici 
                dell'hinterland nord. La nostra posizione nella Brianza ci consente di raggiungere rapidamente qualsiasi zona di Milano, 
                garantendo la stessa qualità e professionalità che ci contraddistingue.
              </p>
              
              <p>
                A Milano ci specializziamo in ristrutturazioni di appartamenti in condomini moderni e d'epoca. Comprendiamo le sfide 
                specifiche del contesto urbano milanese: spazi ridotti da ottimizzare, normative condominiali stringenti, necessità di 
                interventi rapidi per minimizzare i disagi. Abbiamo esperienza consolidata nel coordinamento con amministratori condominiali, 
                nella gestione dei permessi comunali e nel rispetto delle tempistiche che il vivace mercato immobiliare milanese richiede.
              </p>

              <p>
                I nostri progetti a Milano spaziano dal rifacimento completo di bagni e cucine in appartamenti di pregio, alla ristrutturazione 
                totale di bilocali e trilocali per investitori immobiliari. Lavoriamo anche su ville unifamiliari nelle zone residenziali 
                dell'hinterland nord milanese. Ogni progetto viene gestito con la massima attenzione ai dettagli, utilizzando materiali di 
                prima scelta e rispettando scrupolosamente tempi e budget concordati. La nostra squadra di professionisti qualificati garantisce 
                risultati eccellenti, dalla progettazione alla consegna finale chiavi in mano.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover-elevate transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex p-4 bg-primary/10 rounded-full">
                    <Home className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Appartamenti Milano</h3>
                  <p className="text-sm text-muted-foreground">
                    Ristrutturazioni complete centro e hinterland
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
                    Design contemporaneo e funzionale
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-elevate transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex p-4 bg-primary/10 rounded-full">
                    <Building2 className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Uffici e Commerciale</h3>
                  <p className="text-sm text-muted-foreground">
                    Spazi professionali su misura
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
              Servizi Completi per Milano
            </h2>

            <div className="space-y-4">
              {[
                "Ristrutturazioni appartamenti centro Milano",
                "Rifacimento bagni e cucine moderne",
                "Ottimizzazione spazi ridotti",
                "Impianti elettrici domotici",
                "Pavimenti e rivestimenti di design",
                "Cartongesso e controsoffitti",
                "Pratiche Comune di Milano",
                "Consegna chiavi in mano garantita"
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
