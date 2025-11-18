import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Home, Clock, Shield, Users } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import completeImage from '@assets/generated_images/Complete_renovation_project_fa5c131e.png';

export default function RistrutturazioniComplete() {
  const features = [
    "Progettazione architettonica completa",
    "Gestione completa pratiche edilizie",
    "Demolizioni e opere murarie",
    "Rifacimento impianti elettrici e idraulici",
    "Nuovi pavimenti e rivestimenti",
    "Tinteggiature e finiture di pregio",
    "Coordinamento totale dei lavori",
    "Consegna chiavi in mano"
  ];

  const process = [
    { step: "1", title: "Sopralluogo e Consulenza", desc: "Visita gratuita per valutare lo stato attuale e discutere le tue esigenze" },
    { step: "2", title: "Progetto e Preventivo", desc: "Elaborazione progetto dettagliato con preventivo trasparente e definitivo" },
    { step: "3", title: "Pratiche Edilizie", desc: "Gestione completa di tutte le autorizzazioni e documenti necessari" },
    { step: "4", title: "Realizzazione", desc: "Esecuzione lavori con team qualificato e supervisione costante" },
    { step: "5", title: "Consegna", desc: "Verifica finale, pulizia e consegna della tua nuova casa" }
  ];

  return (
    <div className="min-h-screen animate-fade-in">
      <SEOHead
        title="Ristrutturazioni Complete Economiche | Abdul Edilizia - Alta Qualità Prezzi Competitivi"
        description="Ristrutturazioni complete economiche di altissima qualità a Muggiò, Monza e Brianza. Prezzi competitivi, materiali premium. Miglior rapporto qualità-prezzo. Preventivo gratuito!"
        keywords="ristrutturazioni complete economiche, ristrutturazione casa prezzi competitivi, appartamento qualità prezzo brianza, rifacimento conveniente"
        canonicalUrl="/servizi/ristrutturazioni-complete"
      />

      <section className="py-20 md:py-28 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <Link href="/servizi" className="text-sm text-muted-foreground hover:text-foreground mb-4 inline-flex items-center transition-colors">
                ← Torna ai Servizi
              </Link>
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
                Ristrutturazioni Complete
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Trasformiamo completamente i tuoi spazi abitativi con progetti chiavi in mano. 
                Dalla prima idea alla consegna finale, ci occupiamo di tutto.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contatti">Richiedi Preventivo Gratuito</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/portfolio">Vedi i Nostri Progetti</Link>
                </Button>
              </div>
            </div>
            <div className="animate-slide-up">
              <img 
                src={completeImage} 
                alt="Ristrutturazione completa appartamento"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Cosa Include il Servizio
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Un servizio completo che ti libera da ogni preoccupazione
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-lg hover-elevate transition-smooth">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Il Nostro Metodo di Lavoro
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Un processo collaudato per garantire risultati eccellenti
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {process.map((item, i) => (
              <Card key={i} className="text-center hover-elevate transition-smooth relative">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground font-bold text-2xl flex items-center justify-center mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Perché Sceglierci
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Garanzia Totale", desc: "Garanzia su tutti i lavori eseguiti e materiali utilizzati" },
              { icon: Clock, title: "Tempi Certi", desc: "Rispettiamo sempre i tempi concordati per la consegna" },
              { icon: Users, title: "Team Esperto", desc: "Professionisti qualificati con oltre 15 anni di esperienza" },
              { icon: Home, title: "Chiavi in Mano", desc: "Ti consegniamo la casa pronta per essere abitata" }
            ].map((item, i) => (
              <Card key={i} className="text-center hover-elevate transition-smooth">
                <CardContent className="p-8">
                  <div className="mb-4 inline-flex p-4 bg-primary/10 rounded-full">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
