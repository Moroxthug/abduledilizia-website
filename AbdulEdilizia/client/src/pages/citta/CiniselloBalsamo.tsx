import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Bath, Building2, CheckCircle, MapPin, Phone } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function CiniselloBalsamo() {
  return (
    <div className="min-h-screen animate-fade-in">
      <SEOHead
        title="Ristrutturazioni Economiche Cinisello Balsamo | Abdul Edilizia - Qualità Prezzi Competitivi"
        description="Ristrutturazioni economiche di altissima qualità a Cinisello Balsamo: prezzi competitivi, materiali premium. Miglior rapporto qualità-prezzo. Preventivo gratuito!"
        keywords="ristrutturazioni economiche cinisello, impresa edile prezzi competitivi cinisello balsamo, rifacimento conveniente"
        canonicalUrl="/citta/cinisello-balsamo"
      />

      <section className="py-20 md:py-28 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <MapPin className="h-4 w-4" />
              <span className="text-sm font-medium">Cinisello Balsamo (MI)</span>
            </div>
            
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              Ristrutturazioni Edili a Cinisello Balsamo
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Abdul Edilizia opera a Cinisello Balsamo con professionalità e competenza. 
              Ristrutturazioni complete per la tua casa.
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
              Servizi di Ristrutturazione a Cinisello Balsamo
            </h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 mb-12">
              <p>
                Cinisello Balsamo è un'altra area di forte presenza per Abdul Edilizia. La città, strategicamente posizionata tra Milano e 
                Monza, presenta un interessante mix di architetture: dai quartieri storici del centro alle moderne zone residenziali come 
                Crocetta, Bettola e Borgo Misto. Operiamo a Cinisello con particolare attenzione alle ristrutturazioni di appartamenti in 
                condomini, dove la nostra esperienza nella gestione delle pratiche condominiali e nel coordinamento con gli amministratori 
                fa la differenza.
              </p>
              
              <p>
                A Cinisello Balsamo ci occupiamo di ristrutturazioni complete, rifacimento di bagni e cucine, installazione di impianti 
                moderni e interventi di efficientamento energetico. Conosciamo le specificità del territorio e le normative locali, garantendo 
                interventi a norma e di qualità. La nostra squadra gestisce ogni fase del progetto, dalla progettazione iniziale alla consegna 
                finale, con trasparenza e professionalità.
              </p>

              <p>
                I clienti di Cinisello Balsamo apprezzano la nostra puntualità, la qualità dei materiali utilizzati e il rispetto dei budget 
                concordati. Lavoriamo con fornitori selezionati e utilizziamo solo prodotti certificati, garantendo durabilità e valore 
                all'investimento immobiliare.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover-elevate transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex p-4 bg-primary/10 rounded-full">
                    <Home className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Case e Appartamenti</h3>
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
                  <h3 className="font-heading font-semibold text-lg mb-2">Bagni e Cucine</h3>
                  <p className="text-sm text-muted-foreground">
                    Progettazione su misura
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-elevate transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex p-4 bg-primary/10 rounded-full">
                    <Building2 className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Efficienza Energetica</h3>
                  <p className="text-sm text-muted-foreground">
                    Cappotti e isolamento
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
              Servizi Completi a Cinisello Balsamo
            </h2>

            <div className="space-y-4">
              {[
                "Ristrutturazioni chiavi in mano",
                "Rifacimento bagni completo",
                "Cucine moderne e funzionali",
                "Impianti certificati",
                "Pavimenti e rivestimenti",
                "Tinteggiature professionali",
                "Pratiche Comune Cinisello Balsamo",
                "Assistenza post-vendita"
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
