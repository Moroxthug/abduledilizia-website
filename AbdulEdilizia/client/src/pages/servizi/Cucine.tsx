import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ChefHat, Lightbulb, Paintbrush } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import kitchenImage from '@assets/generated_images/Kitchen_renovation_project_faa60a29.png';

export default function Cucine() {
  const features = [
    "Progettazione cucina su misura",
    "Cucine moderne e classiche",
    "Mobili e ante di alta qualità",
    "Piani di lavoro in quarzo o granito",
    "Elettrodomestici da incasso",
    "Impianto elettrico dedicato",
    "Illuminazione LED integrata",
    "Isole e penisole cucina"
  ];

  return (
    <div className="min-h-screen animate-fade-in">
      <SEOHead
        title="Ristrutturazione Cucine Economiche | Abdul Edilizia - Qualità Premium Prezzi Competitivi"
        description="Cucine economiche di altissima qualità: prezzi competitivi, design moderno, materiali premium. Miglior rapporto qualità-prezzo in Brianza. Preventivo gratuito!"
        keywords="cucine economiche qualità, cucine su misura prezzi competitivi, cucine moderne convenien ti brianza, progettazione qualità prezzo"
        canonicalUrl="/servizi/cucine"
      />

      <section className="py-20 md:py-28 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <Link href="/servizi" className="text-sm text-muted-foreground hover:text-foreground mb-4 inline-flex items-center transition-colors">
                ← Torna ai Servizi
              </Link>
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
                Ristrutturazione Cucine
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Cucine personalizzate che uniscono estetica e funzionalità. 
                Il cuore della tua casa merita il meglio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contatti">Richiedi Preventivo</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/portfolio">Vedi Progetti Cucine</Link>
                </Button>
              </div>
            </div>
            <div className="animate-slide-up">
              <img 
                src={kitchenImage} 
                alt="Ristrutturazione cucina moderna"
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
              { icon: ChefHat, title: "Design Funzionale", desc: "Ottimizziamo gli spazi per massima praticità e comfort" },
              { icon: Paintbrush, title: "Stile Personalizzato", desc: "Dalla cucina moderna a quella classica, realizziamo la tua visione" },
              { icon: Lightbulb, title: "Tecnologia", desc: "Elettrodomestici di ultima generazione e illuminazione smart" }
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
