import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Bath, Building2, CheckCircle, MapPin, Phone, Award } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Como() {
  return (
    <div className="min-h-screen animate-fade-in">
      <SEOHead
        title="Ristrutturazioni Economiche Como | Abdul Edilizia - Qualità Premium Prezzi Competitivi"
        description="Ristrutturazioni economiche di altissima qualità a Como: ville e appartamenti, prezzi competitivi, materiali premium. Miglior rapporto qualità-prezzo sul lago. Preventivo gratuito!"
        keywords="ristrutturazioni economiche como, impresa edile prezzi competitivi como, rifacimento conveniente lago, qualità prezzo como"
        canonicalUrl="/citta/como"
      />

      <section className="py-20 md:py-28 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <MapPin className="h-4 w-4" />
              <span className="text-sm font-medium">Como (CO)</span>
            </div>
            
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              Ristrutturazioni Edili di Prestigio a Como
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Abdul Edilizia estende i propri servizi anche a Como e dintorni: 
              ristrutturazioni di qualità per immobili di pregio sul lago.
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
              Abdul Edilizia a Como: Eccellenza e Competenza
            </h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 mb-12">
              <p>
                Como rappresenta un mercato di particolare prestigio per Abdul Edilizia. Pur avendo sede a Muggiò, in provincia di Monza e 
                Brianza, abbiamo esteso la nostra attività anche all'area comasca, portando la stessa qualità e professionalità che ci 
                contraddistingue nel nostro territorio d'origine. Como, con il suo straordinario contesto paesaggistico affacciato sul lago 
                e il ricco patrimonio architettonico che spazia dal centro storico medievale alle ville liberty e alle moderne residenze 
                panoramiche, richiede competenze tecniche elevate e una particolare sensibilità estetica, caratteristiche che il nostro 
                team ha sviluppato attraverso formazione continua e progetti di eccellenza.
              </p>
              
              <p>
                Nell'area di Como e dei comuni limitrofi ci siamo specializzati in ristrutturazioni di immobili di pregio, dove ogni 
                dettaglio conta. Lavoriamo su ville storiche che richiedono interventi di restauro conservativo rispettando i vincoli della 
                Soprintendenza, su appartamenti panoramici nel centro città dove le esigenze sono orientate verso soluzioni di design 
                contemporaneo, e su seconde case affacciate sul lago che necessitano di essere riqualificate mantenendo il fascino originale. 
                La nostra esperienza comprende ristrutturazioni complete con redistribuzione degli spazi, rifacimento di bagni e cucine di 
                lusso, installazione di impianti domotici, e interventi di efficientamento energetico su edifici storici.
              </p>

              <p>
                Ciò che distingue Abdul Edilizia nel contesto comasco è la capacità di coniugare tradizione e innovazione. Utilizziamo 
                tecniche costruttive all'avanguardia e materiali di prima scelta, selezionati tra i migliori fornitori italiani ed europei, 
                sempre nel rispetto delle caratteristiche architettoniche degli edifici. Per ogni progetto a Como, il nostro approccio 
                prevede un sopralluogo approfondito e gratuito, durante il quale valutiamo attentamente le condizioni dell'immobile, le sue 
                potenzialità e le eventuali criticità. Segue una fase di progettazione personalizzata, dove ascoltiamo le esigenze del 
                cliente e proponiamo soluzioni tecniche ottimali, sempre accompagnate da un preventivo dettagliato, trasparente e vincolante.
              </p>

              <p>
                La nostra organizzazione logistica ci permette di operare efficacemente anche nell'area comasca, garantendo forniture 
                puntuali di materiali, coordinamento professionale delle maestranze specializzate e supervisione costante dei cantieri. 
                Gestiamo in completa autonomia tutte le pratiche burocratiche necessarie, dalle comunicazioni al Comune di Como alle 
                richieste di autorizzazioni paesaggistiche per gli immobili soggetti a vincoli, dalle SCIA ai permessi di costruire, 
                liberando il cliente da ogni incombenza amministrativa. Durante l'esecuzione dei lavori, garantiamo comunicazione trasparente 
                su ogni fase dell'intervento, rispetto scrupoloso delle tempistiche concordate e massima attenzione alla tutela dell'immobile 
                e delle aree circostanti, aspetto particolarmente importante per le ville di pregio e gli appartamenti in contesti residenziali 
                esclusivi.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="hover-elevate transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex p-4 bg-primary/10 rounded-full">
                    <Home className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Ville e Appartamenti</h3>
                  <p className="text-sm text-muted-foreground">
                    Ristrutturazioni di prestigio sul lago
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-elevate transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex p-4 bg-primary/10 rounded-full">
                    <Award className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Qualità Premium</h3>
                  <p className="text-sm text-muted-foreground">
                    Materiali di eccellenza certificati
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-elevate transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex p-4 bg-primary/10 rounded-full">
                    <Building2 className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Restauro Conservativo</h3>
                  <p className="text-sm text-muted-foreground">
                    Esperti in edifici storici
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
              Servizi Completi a Como
            </h2>

            <div className="space-y-4">
              {[
                "Ristrutturazioni ville di pregio sul lago",
                "Restauro conservativo edifici storici",
                "Appartamenti di lusso centro Como",
                "Bagni e cucine di design",
                "Impianti domotici integrati",
                "Efficientamento energetico certificato",
                "Pratiche Comune e Soprintendenza",
                "Servizio chiavi in mano esclusivo"
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
