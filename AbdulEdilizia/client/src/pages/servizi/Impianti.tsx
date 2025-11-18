import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Zap, Droplets, Gauge } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Impianti() {
  const features = [
    "Impianti elettrici civili a norma",
    "Impianti idraulici e sanitari",
    "Riscaldamento e climatizzazione",
    "Domotica e automazione casa",
    "Fotovoltaico e energie rinnovabili",
    "Certificazioni e collaudi",
    "Manutenzione programmata",
    "Assistenza e pronto intervento"
  ];

  return (
    <div className="min-h-screen animate-fade-in">
      <SEOHead
        title="Impianti Economici Certificati | Abdul Edilizia - Alta Qualità Prezzi Competitivi"
        description="Impianti economici di altissima qualità: elettrico, idraulico, riscaldamento, domotica. Prezzi competitivi, certificazioni incluse. Miglior rapporto qualità-prezzo. Preventivo gratuito!"
        keywords="impianti economici certificati, impianti elettrici prezzi competitivi, idraulici convenienti, domotica qualità prezzo"
        canonicalUrl="/servizi/impianti"
      />

      <section className="py-20 md:py-28 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <Link href="/servizi" className="text-sm text-muted-foreground hover:text-foreground mb-4 inline-flex items-center transition-colors">
              ← Torna ai Servizi
            </Link>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              Impianti Elettrici e Idraulici
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Installazione e rifacimento impianti a norma di legge. 
              Sicurezza, efficienza e tecnologia per la tua casa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contatti">Richiedi Preventivo</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/portfolio">Vedi i Nostri Lavori</Link>
              </Button>
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
              { icon: Zap, title: "Elettrico", desc: "Impianti elettrici certificati, illuminazione LED, domotica" },
              { icon: Droplets, title: "Idraulico", desc: "Tubazioni, sanitari, caldaie, sistemi di riscaldamento" },
              { icon: Gauge, title: "Climatizzazione", desc: "Condizionatori, pompe di calore, ventilazione" }
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
