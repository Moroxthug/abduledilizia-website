import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Home, Shield, Thermometer } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import roofImage from '@assets/generated_images/Roof_renovation_project_e894097f.png';

export default function Tetti() {
  const features = [
    "Rifacimento completo manto di copertura",
    "Isolamento termico ad alte prestazioni",
    "Impermeabilizzazione professionale",
    "Lattonerie e grondaie",
    "Lucernari e finestre per tetti",
    "Bonifica amianto certificata",
    "Manutenzione programmata",
    "Garanzia decennale"
  ];

  return (
    <div className="min-h-screen animate-fade-in">
      <SEOHead
        title="Rifacimento Tetti Economico | Abdul Edilizia - Alta Qualità Prezzi Competitivi"
        description="Rifacimento tetti economico di altissima qualità: prezzi competitivi, isolamento termico premium, impermeabilizzazione certificata. Miglior rapporto qualità-prezzo. Preventivo gratuito!"
        keywords="rifacimento tetti economico, riparazione tetto prezzi competitivi, isolamento qualità prezzo, coperture convenienti"
        canonicalUrl="/servizi/tetti"
      />

      <section className="py-20 md:py-28 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <Link href="/servizi" className="text-sm text-muted-foreground hover:text-foreground mb-4 inline-flex items-center transition-colors">
                ← Torna ai Servizi
              </Link>
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
                Rifacimento Tetti
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Interventi specializzati per tetti sicuri, performanti ed efficienti dal punto di vista energetico.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contatti">Richiedi Preventivo</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/portfolio">Vedi Progetti Tetti</Link>
                </Button>
              </div>
            </div>
            <div className="animate-slide-up">
              <img 
                src={roofImage} 
                alt="Rifacimento tetto"
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
              Il Servizio Include
            </h2>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Sicurezza", desc: "Ponteggi certificati e rispetto totale delle norme di sicurezza" },
              { icon: Thermometer, title: "Isolamento", desc: "Materiali ad alte prestazioni per efficienza energetica" },
              { icon: Home, title: "Protezione", desc: "Impermeabilizzazione completa contro infiltrazioni" }
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
