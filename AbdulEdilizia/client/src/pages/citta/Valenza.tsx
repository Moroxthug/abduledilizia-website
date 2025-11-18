import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Bath, Building2, CheckCircle, MapPin, Phone, Award } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Valenza() {
  return (
    <div className="min-h-screen animate-fade-in">
      <SEOHead
        title="Ristrutturazioni Economiche Valenza | Abdul Edilizia - Qualità Premium Prezzi Competitivi"
        description="Ristrutturazioni economiche di altissima qualità a Valenza: prezzi competitivi, materiali premium, lavori certificati. Miglior rapporto qualità-prezzo. Preventivo gratuito!"
        keywords="ristrutturazioni economiche valenza, impresa edile prezzi competitivi valenza, rifacimento conveniente valenza, qualità prezzo valenza"
        canonicalUrl="/citta/valenza"
      />

      <section className="py-20 md:py-28 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <MapPin className="h-4 w-4" />
              <span className="text-sm font-medium">Valenza (AL)</span>
            </div>
            
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              Ristrutturazioni Edili di Qualità a Valenza
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Abdul Edilizia estende i propri servizi professionali anche a Valenza: 
              esperienza, competenza e qualità per il tuo immobile.
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
              Abdul Edilizia a Valenza: Professionalità e Dedizione
            </h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 mb-12">
              <p>
                Valenza, celebre in tutto il mondo come capitale italiana dell'oreficeria, rappresenta per Abdul Edilizia un'area di 
                espansione strategica in Piemonte. Pur avendo la nostra sede principale a Muggiò, in provincia di Monza e Brianza, abbiamo 
                esteso i nostri servizi anche a Valenza e al circondario, portando in questa terra ricca di tradizione artigiana la stessa 
                passione, competenza e attenzione ai dettagli che ci contraddistingue da oltre quindici anni nel settore delle ristrutturazioni 
                edili. La città di Valenza, affacciata sul fiume Po e caratterizzata da un centro storico di grande fascino e da quartieri 
                residenziali ben sviluppati, presenta un patrimonio immobiliare variegato che richiede approcci differenziati e competenze 
                specifiche.
              </p>
              
              <p>
                A Valenza operiamo su diverse tipologie di immobili: appartamenti nel centro storico che richiedono interventi di 
                riqualificazione rispettando le caratteristiche architettoniche originali, ville unifamiliari nelle zone residenziali che 
                necessitano di ristrutturazioni complete per adeguarle agli standard di comfort moderni, e immobili commerciali legati 
                all'importante settore orafo locale che devono essere trasformati o rinnovati. La nostra organizzazione, rodataattraverso 
                anni di attività in Lombardia, ci consente di operare con la stessa efficienza anche in territorio piemontese, garantendo 
                forniture puntuali attraverso una rete selezionata di fornitori di materiali edili, coordinamento professionale delle 
                maestranze e supervisione costante attraverso sopralluoghi programmati e comunicazione continua con i clienti.
              </p>

              <p>
                Ciò che rende Abdul Edilizia un partner affidabile anche per i clienti valenzani è il nostro metodo di lavoro strutturato 
                e trasparente. Ogni progetto inizia con un sopralluogo tecnico approfondito e completamente gratuito, durante il quale i 
                nostri tecnici esperti valutano con precisione lo stato dell'immobile, identificano le eventuali problematiche strutturali 
                o impiantistiche da risolvere, e discutono con il cliente le sue esigenze, aspettative e preferenze estetiche. Questa fase 
                iniziale è fondamentale per elaborare un progetto personalizzato che risponda perfettamente alle necessità specifiche, 
                ottimizzando gli spazi e proponendo soluzioni tecniche all'avanguardia. Al termine del sopralluogo, redigiamo un preventivo 
                dettagliato con tutte le voci di spesa chiaramente specificate, garantendo massima trasparenza e costi certi senza sorprese.
              </p>

              <p>
                Durante l'esecuzione dei lavori a Valenza, manteniamo gli stessi elevati standard qualitativi che ci caratterizzano in 
                tutti i nostri cantieri. Utilizziamo esclusivamente materiali certificati di prima scelta – dal gres porcellanato ai sanitari 
                di design, dai serramenti ad alte prestazioni ai sistemi di isolamento termico – selezionati tra i migliori produttori 
                italiani ed europei. Ogni lavorazione viene affidata a professionisti specializzati con esperienza pluriennale nei rispettivi 
                settori. Gestiamo in completa autonomia tutte le pratiche burocratiche necessarie, dalle comunicazioni al Comune di Valenza 
                alle eventuali autorizzazioni paesaggistiche o storiche, dalle SCIA ai permessi di costruire, liberando completamente il 
                cliente da ogni incombenza amministrativa. Il nostro impegno si estende oltre la consegna del progetto, con un servizio di 
                assistenza post-vendita dedicato e garanzie complete su tutti i lavori eseguiti e i materiali installati.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="hover-elevate transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex p-4 bg-primary/10 rounded-full">
                    <Home className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Case e Appartamenti</h3>
                  <p className="text-sm text-muted-foreground">
                    Ristrutturazioni complete a Valenza
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-elevate transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex p-4 bg-primary/10 rounded-full">
                    <Award className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Esperienza Ventennale</h3>
                  <p className="text-sm text-muted-foreground">
                    Oltre 15 anni nel settore edile
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-elevate transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex p-4 bg-primary/10 rounded-full">
                    <Building2 className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">Servizio Completo</h3>
                  <p className="text-sm text-muted-foreground">
                    Chiavi in mano e pratiche incluse
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
              Servizi Completi a Valenza
            </h2>

            <div className="space-y-4">
              {[
                "Ristrutturazioni complete chiavi in mano",
                "Rifacimento bagni e cucine premium",
                "Restauro immobili centro storico",
                "Cappotti termici e isolamento",
                "Impianti elettrici e idraulici certificati",
                "Pavimenti e rivestimenti di pregio",
                "Pratiche edilizie Comune di Valenza",
                "Garanzia totale e assistenza post-vendita"
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
