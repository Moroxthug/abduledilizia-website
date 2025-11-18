import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Bath, Building2, CheckCircle, MapPin, Phone, Award } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Brescia() {
  return (
    <div className="min-h-screen animate-fade-in">
      <SEOHead
        title="Ristrutturazioni Economiche Brescia | Abdul Edilizia - Qualità Premium Prezzi Competitivi"
        description="Ristrutturazioni economiche di altissima qualità a Brescia: prezzi competitivi, materiali premium certificati. Miglior rapporto qualità-prezzo. Preventivo gratuito!"
        keywords="ristrutturazioni economiche brescia, impresa edile prezzi competitivi brescia, rifacimento conveniente brescia, qualità prezzo brescia"
        canonicalUrl="/citta/brescia"
      />

      <section className="py-20 md:py-28 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <MapPin className="h-4 w-4" />
              <span className="text-sm font-medium">Brescia (BS)</span>
            </div>
            
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              Ristrutturazioni Edili Professionali a Brescia
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Abdul Edilizia estende la propria competenza anche a Brescia: 
              ristrutturazioni complete con qualità e professionalità garantite.
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
              Abdul Edilizia a Brescia: Esperienza e Affidabilità
            </h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 mb-12">
              <p>
                Brescia rappresenta un'importante area di espansione per Abdul Edilizia, dove portiamo la nostra consolidata esperienza nel 
                settore delle ristrutturazioni edili. Pur avendo sede a Muggiò, la nostra organizzazione ci permette di operare con efficienza 
                anche nell'area bresciana, garantendo gli stessi standard qualitativi che ci contraddistinguono in Brianza. Brescia, con il suo 
                ricco patrimonio storico-architettonico e la vivace economia, richiede competenze specifiche che il nostro team ha sviluppato 
                attraverso formazione continua e aggiornamento sulle normative locali.
              </p>
              
              <p>
                Nel contesto bresciano, ci siamo distinti per la capacità di gestire progetti complessi sia nel centro storico, dove sono 
                necessarie competenze specialistiche per intervenire su edifici antichi rispettando i vincoli della Soprintendenza, sia nei 
                quartieri residenziali moderni come Mompiano, Porta Venezia e San Polo, dove le esigenze sono orientate verso soluzioni 
                contemporanee di alta efficienza energetica. La nostra esperienza comprende ristrutturazioni complete di appartamenti in 
                palazzi d'epoca, rifacimento di ville unifamiliari nelle zone collinari, e interventi su immobili commerciali e direzionali 
                nelle aree produttive della città.
              </p>

              <p>
                Ciò che rende Abdul Edilizia un partner affidabile per i clienti bresciani è il nostro approccio metodico e trasparente. 
                Ogni progetto inizia con un sopralluogo approfondito e gratuito, durante il quale i nostri tecnici valutano lo stato 
                dell'immobile, le sue caratteristiche strutturali e le possibilità di intervento. Segue la fase di progettazione, dove 
                ascoltiamo attentamente le esigenze del cliente e proponiamo soluzioni tecniche ottimali, sempre accompagnate da un preventivo 
                dettagliato e vincolante. Durante l'esecuzione dei lavori, garantiamo coordinamento costante, rispetto scrupoloso delle 
                tempistiche e comunicazione trasparente su ogni fase dell'intervento.
              </p>

              <p>
                A Brescia curiamo particolarmente la selezione dei materiali, privilegiando fornitori locali di comprovata qualità e prodotti 
                certificati che garantiscano durabilità ed estetica. Che si tratti di pavimenti in gres porcellanato, sanitari di design, 
                serramenti ad alte prestazioni o sistemi di isolamento termico, ogni elemento viene scelto per assicurare il massimo valore 
                all'investimento del cliente. Il nostro team gestisce inoltre tutte le pratiche burocratiche necessarie, dalle comunicazioni 
                al Comune di Brescia alle autorizzazioni paesaggistiche, offrendo un servizio chiavi in mano che libera il cliente da ogni 
                preoccupazione amministrativa e gli permette di concentrarsi esclusivamente sul risultato finale del suo progetto.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="hover-elevate transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex p-4 bg-primary/10 rounded-full">
                    <Home className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Centro e Periferia</h3>
                  <p className="text-sm text-muted-foreground">
                    Ristrutturazioni in tutta l'area bresciana
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-elevate transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex p-4 bg-primary/10 rounded-full">
                    <Award className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Garanzia Totale</h3>
                  <p className="text-sm text-muted-foreground">
                    Lavori certificati e garantiti
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-elevate transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex p-4 bg-primary/10 rounded-full">
                    <Building2 className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Progetti Completi</h3>
                  <p className="text-sm text-muted-foreground">
                    Dalla progettazione alla consegna
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
              Servizi Completi a Brescia
            </h2>

            <div className="space-y-4">
              {[
                "Ristrutturazioni complete chiavi in mano",
                "Rifacimento bagni e cucine moderne",
                "Restauro immobili centro storico",
                "Cappotti termici e isolamento",
                "Facciate ventilate e intonaci",
                "Impianti certificati e a norma",
                "Pratiche edilizie Comune di Brescia",
                "Assistenza post-vendita garantita"
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
