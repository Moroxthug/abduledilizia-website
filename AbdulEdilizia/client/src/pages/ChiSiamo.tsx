import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Award, CheckCircle, Users, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ChiSiamo() {
  const values = [
    {
      icon: Award,
      title: "Qualità",
      description: "Utilizziamo solo materiali certificati e le migliori tecniche di lavorazione per garantire risultati duraturi."
    },
    {
      icon: CheckCircle,
      title: "Affidabilità",
      description: "Rispettiamo tempi e budget concordati, mantenendo sempre la massima trasparenza con i nostri clienti."
    },
    {
      icon: Users,
      title: "Professionalità",
      description: "Il nostro team è formato da professionisti esperti e certificati, pronti ad affrontare ogni sfida."
    },
    {
      icon: Heart,
      title: "Passione",
      description: "Amiamo il nostro lavoro e lo facciamo con dedizione, curando ogni dettaglio per la tua soddisfazione."
    }
  ];

  return (
    <div className="min-h-screen animate-fade-in">
      <SEOHead
        title="Chi Siamo Abdul Edilizia | Economico e Premium"
        description="15+ anni di esperienza in ristrutturazioni economiche premium. Qualità garantita, prezzi competitivi, materiali di lusso. Muggiò, Monza, Milano."
        keywords="abdul edilizia, impresa edile economica muggiò, qualità prezzo, ristrutturazioni convenienti"
        canonicalUrl="https://www.abduledilizia.it/chi-siamo"
        ogTitle="Chi Siamo Abdul Edilizia | Economico e Premium"
        ogDescription="15+ anni di ristrutturazioni economiche di altissima qualità a Muggiò e Monza."
        ogImage="https://www.abduledilizia.it/hero-og.png"
      />
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">
                Chi Siamo
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Da oltre 15 anni siamo il punto di riferimento per le ristrutturazioni 
                nell'area di Muggiò, Monza, Milano e Brianza.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="fade-left">
              <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
                La Nostra Storia
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Abdul Edilizia</strong> nasce dalla passione e dall'esperienza 
                  nel settore dell'edilizia e delle ristrutturazioni. Con sede a Muggiò, in provincia di Monza e Brianza, 
                  operiamo sul territorio da più di 15 anni.
                </p>
                <p>
                  La nostra missione è trasformare gli spazi abitativi dei nostri clienti, 
                  garantendo qualità, affidabilità e un servizio completo che va dalla progettazione 
                  alla realizzazione finale.
                </p>
                <p>
                  Ogni progetto è per noi un'opportunità per dimostrare la nostra competenza 
                  e la cura che dedichiamo ai dettagli. Lavoriamo con professionalità, 
                  utilizzando materiali di prima qualità e le tecniche più moderne del settore.
                </p>
              </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-right" delay={200}>
              <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="font-heading font-bold text-4xl text-primary mb-2">15+</div>
                  <p className="text-sm text-muted-foreground">Anni di Esperienza</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="font-heading font-bold text-4xl text-primary mb-2">500+</div>
                  <p className="text-sm text-muted-foreground">Progetti Completati</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="font-heading font-bold text-4xl text-primary mb-2">300+</div>
                  <p className="text-sm text-muted-foreground">Clienti Soddisfatti</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="font-heading font-bold text-4xl text-primary mb-2">4.9/5</div>
                  <p className="text-sm text-muted-foreground">Valutazione Media</p>
                </CardContent>
              </Card>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
                I Nostri Valori
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Principi che guidano il nostro lavoro quotidiano e il rapporto con i clienti.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <ScrollAnimation key={index} animation="scale" delay={index * 100}>
                <Card className="text-center hover-elevate transition-all">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex p-4 bg-primary/10 rounded-lg">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-center">
                Perché Scegliere Abdul Edilizia
              </h2>
              <div className="space-y-4">
              {[
                "Oltre 15 anni di esperienza nel settore delle ristrutturazioni",
                "Team di professionisti qualificati e certificati",
                "Utilizzo di materiali di prima qualità e certificati",
                "Rispetto dei tempi e del budget concordati",
                "Assistenza completa dalla progettazione alla consegna",
                "Servizio post-vendita e garanzia sui lavori eseguiti",
                "Conoscenza approfondita del territorio locale",
                "Preventivi gratuiti e senza impegno"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
