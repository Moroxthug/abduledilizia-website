import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Bath, Building2, CheckCircle, MapPin, Phone, Award } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Alessandria() {
  return (
    <div className="min-h-screen animate-fade-in">
      <SEOHead
        title="Ristrutturazioni Economiche Alessandria | Abdul Edilizia - Alta Qualità Prezzi Competitivi"
        description="Ristrutturazioni economiche di altissima qualità ad Alessandria: prezzi competitivi, materiali premium, lavori garantiti. Miglior rapporto qualità-prezzo in Piemonte. Preventivo gratuito!"
        keywords="ristrutturazioni economiche alessandria, impresa edile prezzi competitivi alessandria, rifacimento conveniente alessandria, qualità prezzo piemonte"
        canonicalUrl="/citta/alessandria"
      />

      <section className="py-20 md:py-28 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <MapPin className="h-4 w-4" />
              <span className="text-sm font-medium">Alessandria (AL)</span>
            </div>
            
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              Ristrutturazioni Edili Professionali ad Alessandria
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Abdul Edilizia estende la propria esperienza anche ad Alessandria: 
              ristrutturazioni di qualità con professionalità certificata.
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
              Abdul Edilizia ad Alessandria: Competenza Certificata
            </h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 mb-12">
              <p>
                Alessandria rappresenta un'importante espansione strategica per Abdul Edilizia nel territorio piemontese. Pur avendo la 
                nostra sede principale a Muggiò, in provincia di Monza e Brianza, abbiamo sviluppato negli ultimi anni una solida presenza 
                anche nell'area alessandrina, dove portiamo la stessa esperienza, professionalità e attenzione al cliente che ci 
                contraddistingue da oltre quindici anni nel settore delle ristrutturazioni edili. Alessandria, città di grande tradizione 
                storica e architettonica, situata strategicamente nel cuore del Basso Piemonte, presenta un patrimonio immobiliare 
                eterogeneo che richiede competenze specifiche e approcci differenziati.
              </p>
              
              <p>
                Operando ad Alessandria, ci siamo specializzati in diverse tipologie di interventi: dalle ristrutturazioni complete di 
                appartamenti nel centro storico, dove è fondamentale rispettare i vincoli architettonici e le caratteristiche degli edifici 
                d'epoca, alle riqualificazioni di ville unifamiliari nei quartieri residenziali come Orti, Cristo e Pista, fino agli 
                interventi su immobili commerciali e direzionali nelle zone più moderne della città. La nostra organizzazione ci permette 
                di gestire con efficienza anche progetti a distanza dalla sede, garantendo forniture puntuali di materiali attraverso una 
                rete di fornitori selezionati sul territorio, coordinamento professionale delle maestranze e supervisione costante dei 
                cantieri attraverso sopralluoghi programmati e comunicazione continua con i clienti.
              </p>

              <p>
                Ciò che rende Abdul Edilizia un partner affidabile per i clienti alessandrini è il nostro approccio metodico e 
                professionale. Ogni progetto inizia con un sopralluogo tecnico approfondito e gratuito, durante il quale i nostri tecnici 
                valutano accuratamente lo stato dell'immobile, le sue caratteristiche strutturali, le eventuali problematiche da risolvere 
                e le potenzialità da valorizzare. Questa fase iniziale è cruciale per elaborare un progetto su misura che risponda 
                perfettamente alle esigenze del cliente, ottimizzando gli spazi disponibili e proponendo soluzioni tecniche innovative. 
                Segue la redazione di un preventivo dettagliato e trasparente, con voci di spesa chiaramente specificate e costi certi, 
                senza sorprese o costi aggiuntivi nascosti.
              </p>

              <p>
                Durante l'esecuzione dei lavori ad Alessandria, garantiamo il rispetto scrupoloso delle tempistiche concordate, aspetto 
                fondamentale per chi deve pianificare la propria vita attorno ai tempi di un cantiere. Utilizziamo esclusivamente materiali 
                di prima scelta, selezionati tra produttori certificati, e affidiamo ogni lavorazione a professionisti specializzati con 
                esperienza pluriennale. Gestiamo inoltre in completa autonomia tutte le pratiche burocratiche necessarie, dalle comunicazioni 
                al Comune di Alessandria alle richieste di autorizzazioni, dalle SCIA ai permessi di costruire, liberando il cliente da ogni 
                incombenza amministrativa. Il nostro servizio si completa con un'assistenza post-vendita dedicata e garanzie complete su tutti 
                i lavori eseguiti, assicurando al cliente la massima tranquillità nel tempo.
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
                    Interventi in tutta l'area alessandrina
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-elevate transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex p-4 bg-primary/10 rounded-full">
                    <Award className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Professionalità</h3>
                  <p className="text-sm text-muted-foreground">
                    Oltre 15 anni di esperienza certificata
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
                    Servizio chiavi in mano garantito
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
              Servizi Completi ad Alessandria
            </h2>

            <div className="space-y-4">
              {[
                "Ristrutturazioni complete chiavi in mano",
                "Rifacimento bagni con materiali premium",
                "Cucine moderne e funzionali",
                "Restauro edifici storici centro città",
                "Cappotti termici e isolamento",
                "Impianti certificati e a norma",
                "Pratiche edilizie Comune di Alessandria",
                "Garanzia totale lavori eseguiti"
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
