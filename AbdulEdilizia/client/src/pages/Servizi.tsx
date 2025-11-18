import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Home, Bath, ChefHat, Hammer, Building2, Zap, CheckCircle, Construction, Trash2 } from "lucide-react";
import bathroomImage from '@assets/generated_images/Bathroom_renovation_project_65b527ad.png';
import kitchenImage from '@assets/generated_images/Kitchen_renovation_project_faa60a29.png';
import facadeImage from '@assets/generated_images/Facade_renovation_project_7f92e325.png';
import roofImage from '@assets/generated_images/Roof_renovation_project_e894097f.png';
import completeImage from '@assets/generated_images/Complete_renovation_project_fa5c131e.png';

export default function Servizi() {
  return (
    <div className="min-h-screen animate-fade-in">
      <SEOHead
        title="Servizi Abdul Edilizia | Economico e Alta Qualità"
        description="Ristrutturazioni economiche premium: bagni, cucine, tetti, facciate. Prezzi competitivi e materiali di qualità. Preventivo gratuito Muggiò e Monza."
        keywords="servizi ristrutturazione economici, bagni qualità prezzo, cucine prezzi competitivi, ristrutturazioni convenienti monza"
        canonicalUrl="https://www.abduledilizia.it/servizi"
        ogTitle="Servizi Abdul Edilizia | Economico e Alta Qualità"
        ogDescription="Ristrutturazioni complete, bagni, cucine, tetti. Prezzi competitivi e qualità premium in Brianza."
        ogImage="https://www.abduledilizia.it/hero-og.png"
      />
      <ServizContent />
    </div>
  );
}

function ServizContent() {
  const services = [
    {
      icon: Home,
      title: "Ristrutturazioni Complete",
      description: "Progetti chiavi in mano per trasformare completamente i tuoi spazi abitativi.",
      image: completeImage,
      features: [
        "Progettazione architettonica",
        "Demolizioni e opere murarie",
        "Nuovi pavimenti e rivestimenti",
        "Impianti elettrici e idraulici",
        "Tinteggiature e finiture",
        "Coordinamento totale dei lavori"
      ]
    },
    {
      icon: Bath,
      title: "Ristrutturazione Bagni",
      description: "Bagni moderni, funzionali e su misura per le tue esigenze.",
      image: bathroomImage,
      features: [
        "Rifacimento completo bagno",
        "Box doccia e vasche moderne",
        "Sanitari di ultima generazione",
        "Pavimenti e rivestimenti",
        "Impianto idraulico a norma",
        "Sistemi di riscaldamento"
      ]
    },
    {
      icon: ChefHat,
      title: "Ristrutturazione Cucine",
      description: "Cucine personalizzate che uniscono design e funzionalità.",
      image: kitchenImage,
      features: [
        "Progettazione cucina su misura",
        "Mobili e ante di qualità",
        "Piani di lavoro in quarzo/granito",
        "Elettrodomestici da incasso",
        "Impianto elettrico dedicato",
        "Sistemi di illuminazione LED"
      ]
    },
    {
      icon: Hammer,
      title: "Rifacimento Tetti",
      description: "Interventi specializzati per tetti sicuri e performanti.",
      image: roofImage,
      features: [
        "Rifacimento manto di copertura",
        "Isolamento termico",
        "Impermeabilizzazione",
        "Lattonerie e grondaie",
        "Lucernari e finestre per tetti",
        "Manutenzione programmata"
      ]
    },
    {
      icon: Building2,
      title: "Restauro Facciate",
      description: "Ripristino e valorizzazione delle facciate esterne.",
      image: facadeImage,
      features: [
        "Cappotto termico esterno",
        "Tinteggiatura professionale",
        "Ripristino intonaci",
        "Pulizia facciate",
        "Sistemazione balconi",
        "Ponteggi certificati"
      ]
    },
    {
      icon: Zap,
      title: "Impianti",
      description: "Installazione e rifacimento impianti a norma di legge.",
      image: null,
      features: [
        "Impianti elettrici civili",
        "Impianti idraulici",
        "Riscaldamento e climatizzazione",
        "Domotica e automazione",
        "Certificazioni e collaudi",
        "Manutenzione e assistenza"
      ]
    },
    {
      icon: Construction,
      title: "Allestimento Ponteggi",
      description: "Ponteggi certificati e sicuri per ogni tipo di cantiere.",
      image: null,
      features: [
        "Ponteggi certificati",
        "Installazione rapida",
        "Noleggio flessibile",
        "Conformità normative",
        "Manutenzione inclusa",
        "Smontaggio e ritiro"
      ]
    },
    {
      icon: Trash2,
      title: "Smaltimento Macerie",
      description: "Gestione completa di macerie e rifiuti edili.",
      image: null,
      features: [
        "Smaltimento macerie",
        "Ritiro rifiuti speciali",
        "Demolizioni controllate",
        "Pulizia cantiere",
        "Documentazione completa",
        "Servizio certificato"
      ]
    }
  ];

  return (
    <>
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">
                I Nostri Servizi
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Offriamo una gamma completa di servizi di ristrutturazione per ogni esigenza, 
                dalla progettazione alla realizzazione, con la massima qualità e professionalità.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {services.map((service, index) => (
        <section 
          key={index} 
          className={`py-16 md:py-20 ${index % 2 === 0 ? 'bg-background' : 'bg-card'}`}
        >
          <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
              <ScrollAnimation animation={index % 2 === 0 ? 'fade-left' : 'fade-right'} className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-lg">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
                  {service.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {service.description}
                </p>
                <div className="space-y-3">
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation={index % 2 === 0 ? 'fade-right' : 'fade-left'} delay={200} className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                {service.image ? (
                  <Card className="overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-[400px] object-cover"
                    />
                  </Card>
                ) : (
                  <Card className="h-[400px] flex items-center justify-center bg-muted">
                    <service.icon className="h-24 w-24 text-muted-foreground/20" />
                  </Card>
                )}
              </ScrollAnimation>
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
                Il Nostro Processo
              </h2>
              <p className="text-muted-foreground">
                Un metodo collaudato per garantire il successo di ogni progetto
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Sopralluogo", desc: "Visita gratuita per valutare il progetto" },
              { step: "2", title: "Preventivo", desc: "Offerta dettagliata e trasparente" },
              { step: "3", title: "Realizzazione", desc: "Esecuzione dei lavori con precisione" },
              { step: "4", title: "Consegna", desc: "Verifica finale e garanzia sui lavori" }
            ].map((item, i) => (
              <ScrollAnimation key={i} animation="fade-up" delay={i * 100}>
                <Card className="text-center hover-elevate transition-all">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl flex items-center justify-center mx-auto mb-3">
                      {item.step}
                    </div>
                    <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
