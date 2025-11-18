import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Bath, Building2, CheckCircle, MapPin, Phone, Award } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Bergamo() {
  return (
    <div className="min-h-screen animate-fade-in">
      <SEOHead
        title="Ristrutturazioni Economiche Bergamo | Abdul Edilizia - Alta Qualità Prezzi Competitivi"
        description="Ristrutturazioni economiche di altissima qualità a Bergamo: prezzi competitivi, materiali premium, esperienza ventennale. Miglior rapporto qualità-prezzo. Preventivo gratuito!"
        keywords="ristrutturazioni economiche bergamo, impresa edile prezzi competitivi bergamo, rifacimento conveniente bergamo, qualità prezzo bergamo"
        canonicalUrl="/citta/bergamo"
      />

      <section className="py-20 md:py-28 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <MapPin className="h-4 w-4" />
              <span className="text-sm font-medium">Bergamo (BG)</span>
            </div>
            
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              Ristrutturazioni Edili di Qualità a Bergamo
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Abdul Edilizia porta la propria esperienza ventennale anche a Bergamo: 
              ristrutturazioni professionali con la massima qualità e affidabilità.
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
              Perché Abdul Edilizia è la Scelta Giusta anche a Bergamo
            </h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 mb-12">
              <p>
                Bergamo rappresenta un'espansione naturale del raggio d'azione di Abdul Edilizia. Pur avendo sede principale a Muggiò, 
                in provincia di Monza e Brianza, abbiamo sviluppato negli anni una solida presenza anche nell'area bergamasca, dove operiamo 
                con la stessa professionalità e dedizione che ci contraddistingue nel nostro territorio d'origine. La città di Bergamo, 
                con il suo straordinario patrimonio architettonico che spazia dalla Città Alta storica ai moderni quartieri residenziali 
                di Città Bassa, richiede competenze specifiche che il nostro team ha acquisito attraverso numerosi interventi di successo.
              </p>
              
              <p>
                A Bergamo ci siamo specializzati particolarmente nelle ristrutturazioni di immobili storici, dove è fondamentale coniugare 
                il rispetto delle caratteristiche architettoniche originali con le esigenze moderne di comfort e efficienza energetica. 
                Conosciamo perfettamente le normative edilizie del Comune di Bergamo, i vincoli della Soprintendenza per la Città Alta e 
                le specificità tecniche richieste per intervenire su edifici d'epoca. Il nostro approccio prevede sempre un'attenta fase di 
                sopralluogo e progettazione, durante la quale valutiamo le caratteristiche strutturali dell'immobile, le sue potenzialità 
                e le migliori soluzioni tecniche da adottare.
              </p>

              <p>
                Operando a Bergamo, gestiamo progetti di diverse tipologie: dalla ristrutturazione completa di appartamenti in palazzi 
                storici del centro, al rifacimento di ville unifamiliari nei quartieri residenziali come Redona, Borgo Palazzo e Colognola, 
                fino agli interventi su immobili commerciali e uffici nelle zone più moderne della città. La nostra organizzazione logistica 
                ci permette di garantire forniture puntuali di materiali, coordinamento efficiente delle maestranze e presenza costante in 
                cantiere, assicurando il rispetto rigoroso dei tempi concordati.
              </p>

              <p>
                Ciò che distingue Abdul Edilizia nel mercato bergamasco è l'attenzione maniacale alla qualità dei materiali utilizzati 
                e alla cura dei dettagli esecutivi. Lavoriamo esclusivamente con fornitori certificati, utilizziamo prodotti di prima scelta 
                e affidiamo ogni lavorazione a professionisti specializzati. Per i nostri clienti di Bergamo questo si traduce in interventi 
                duraturi nel tempo, finiture impeccabili e la certezza di un investimento immobiliare valorizzato. Inoltre, offriamo un 
                servizio completo di gestione delle pratiche burocratiche, dalle comunicazioni al Comune alle richieste di autorizzazione, 
                liberando il cliente da ogni incombenza amministrativa e permettendogli di concentrarsi unicamente sulla scelta delle 
                soluzioni progettuali più adatte alle sue esigenze.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="hover-elevate transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex p-4 bg-primary/10 rounded-full">
                    <Home className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Città Alta e Bassa</h3>
                  <p className="text-sm text-muted-foreground">
                    Ristrutturazioni immobili storici e moderni
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-elevate transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex p-4 bg-primary/10 rounded-full">
                    <Award className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Qualità Certificata</h3>
                  <p className="text-sm text-muted-foreground">
                    Materiali di prima scelta e garanzie
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-elevate transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex p-4 bg-primary/10 rounded-full">
                    <Building2 className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Esperienza Storica</h3>
                  <p className="text-sm text-muted-foreground">
                    Specialisti in edifici d'epoca
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
              Servizi Completi a Bergamo
            </h2>

            <div className="space-y-4">
              {[
                "Ristrutturazioni complete appartamenti e ville",
                "Restauro conservativo immobili storici",
                "Rifacimento bagni con materiali premium",
                "Cucine moderne su misura",
                "Isolamento termico e cappotti",
                "Facciate e interventi condominiali",
                "Pratiche edilizie Comune di Bergamo",
                "Consulenza architettonica e progettuale"
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
