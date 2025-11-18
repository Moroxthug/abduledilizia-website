import SEOHead from "@/components/SEOHead";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import TestimonialCard from "@/components/TestimonialCard";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Home as HomeIcon, Bath, ChefHat, Hammer, Building2, Zap } from "lucide-react";
import bathroomImage from '@assets/generated_images/Bathroom_renovation_project_65b527ad.png';
import kitchenImage from '@assets/generated_images/Kitchen_renovation_project_faa60a29.png';
import completeImage from '@assets/generated_images/Complete_renovation_project_fa5c131e.png';

export default function Home() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Abdul Edilizia Muggiò | Economico e Alta Qualità"
        description="Ristrutturazioni economiche di altissima qualità a Muggiò e Monza. Prezzi competitivi, materiali premium, garanzia totale. Preventivo gratuito!"
        keywords="ristrutturazioni economiche muggiò, impresa edile prezzi competitivi monza, rifacimento bagni qualità prezzo milano, ristrutturazioni convenienti brianza"
        canonicalUrl="https://www.abduledilizia.it/"
        ogTitle="Abdul Edilizia | Ristrutturazioni Economiche di Alta Qualità"
        ogDescription="Prezzi competitivi e qualità premium: ristrutturazioni complete, bagni, cucine. Rapporto qualità-prezzo imbattibile in Brianza."
        ogImage="https://www.abduledilizia.it/hero-og.png"
      />
      <Hero />

      {/* Perché Scegliere Abdul Edilizia */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-center">
                Perché Scegliere Abdul Edilizia per le Tue Ristrutturazioni
              </h2>
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  Da oltre 15 anni, <strong>Abdul Edilizia</strong> è il punto di riferimento per <strong>ristrutturazioni economiche di altissima qualità</strong> a Muggiò, Monza e in tutta la Brianza. La nostra filosofia si basa su un principio semplice ma fondamentale: offrire servizi professionali a <strong>prezzi competitivi</strong> senza mai compromettere la qualità dei materiali e del lavoro svolto.
                </p>
                <p>
                  Nel settore dell'edilizia, spesso si è costretti a scegliere tra qualità e convenienza. Noi di Abdul Edilizia abbiamo dimostrato che questa scelta non è necessaria. Grazie a rapporti consolidati con i migliori fornitori e a un'organizzazione del lavoro ottimizzata, riusciamo a garantire <strong>materiali premium</strong> e <strong>lavorazioni certificate</strong> mantenendo costi accessibili per ogni budget.
                </p>
                <p>
                  La nostra squadra è composta da professionisti specializzati in ogni ambito: dalle ristrutturazioni complete di appartamenti e ville, al rifacimento di bagni e cucine, fino agli interventi più complessi su tetti, facciate e impianti. Ogni progetto viene seguito con la massima attenzione ai dettagli, dalla fase di sopralluogo iniziale fino alla consegna finale, garantendo sempre il <strong>rispetto delle tempistiche concordate</strong>.
                </p>
                <p>
                  Ciò che ci distingue è la trasparenza: forniamo <strong>preventivi dettagliati e gratuiti</strong>, senza sorprese o costi nascosti. Ogni cliente riceve un progetto personalizzato, studiato sulle sue specifiche esigenze e possibilità economiche. La soddisfazione dei nostri clienti è testimoniata da oltre 500 progetti completati con successo nell'area di Monza, Milano, Bergamo e provincia.
                </p>
                <p>
                  Scegliere Abdul Edilizia significa affidarsi a professionisti che mettono al primo posto il <strong>rapporto qualità-prezzo</strong>, la puntualità e il risultato eccellente. Contattaci oggi per un preventivo gratuito e scopri come possiamo trasformare i tuoi spazi con un investimento che rispetta il tuo budget.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
                I Nostri Servizi
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Offriamo una gamma completa di servizi di ristrutturazione per trasformare 
                la tua casa con professionalità e qualità garantita.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ScrollAnimation animation="fade-up" delay={100}>
              <ServiceCard
                icon={HomeIcon}
                title="Ristrutturazioni Complete"
                description="Trasformiamo completamente i tuoi spazi con progetti chiavi in mano, dalla progettazione alla realizzazione finale."
                href="/servizi/ristrutturazioni-complete"
              />
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up" delay={200}>
              <ServiceCard
                icon={Bath}
                title="Ristrutturazione Bagni"
                description="Bagni moderni e funzionali, con materiali di qualità e soluzioni personalizzate per ogni esigenza."
                href="/servizi/bagni"
              />
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up" delay={300}>
              <ServiceCard
                icon={ChefHat}
                title="Ristrutturazione Cucine"
                description="Cucine su misura che uniscono estetica e funzionalità, con le migliori tecnologie disponibili."
                href="/servizi/cucine"
              />
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up" delay={100}>
              <ServiceCard
                icon={Hammer}
                title="Rifacimento Tetti"
                description="Interventi specializzati per tetti e coperture, garantendo isolamento termico e impermeabilizzazione."
                href="/servizi/tetti"
              />
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up" delay={200}>
              <ServiceCard
                icon={Building2}
                title="Restauro Facciate"
                description="Ripristino e valorizzazione delle facciate esterne, con tecniche moderne e materiali certificati."
                href="/servizi/facciate"
              />
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up" delay={300}>
              <ServiceCard
                icon={Zap}
                title="Impianti"
                description="Installazione e rifacimento di impianti elettrici, idraulici e termici a norma di legge."
                href="/servizi/impianti"
              />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <StatsSection />

      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
                Progetti in Evidenza
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Scopri alcuni dei nostri lavori più recenti nell'area di Monza e Brianza.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ScrollAnimation animation="scale" delay={100}>
              <ProjectCard
                image={bathroomImage}
                title="Ristrutturazione Bagno Moderno"
                category="Bagno"
                location="Monza"
                description="Completa ristrutturazione con finiture di lusso, box doccia in cristallo e pavimenti in gres porcellanato."
              />
            </ScrollAnimation>
            <ScrollAnimation animation="scale" delay={200}>
              <ProjectCard
                image={kitchenImage}
                title="Cucina Contemporanea"
                category="Cucina"
                location="Muggiò"
                description="Cucina open space con isola centrale, elettrodomestici di ultima generazione e piano in quarzo."
              />
            </ScrollAnimation>
            <ScrollAnimation animation="scale" delay={300}>
              <ProjectCard
                image={completeImage}
                title="Appartamento Completo"
                category="Ristrutturazione Completa"
                location="Milano"
                description="Ristrutturazione totale di appartamento 120mq con design moderno e funzionale."
              />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
                Cosa Dicono i Nostri Clienti
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                La soddisfazione dei nostri clienti è la nostra migliore referenza.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollAnimation animation="fade-left" delay={100}>
              <TestimonialCard
                quote="Abdul Edilizia ha trasformato completamente il nostro bagno. Lavoro impeccabile, puntualità e grande professionalità. Consigliatissimi!"
                author="Marco Rossi"
                location="Monza"
                initials="MR"
              />
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up" delay={200}>
              <TestimonialCard
                quote="Ho ristrutturato la mia cucina con loro e non potrei essere più soddisfatto. Ottimo rapporto qualità-prezzo e attenzione ai dettagli."
                author="Giulia Bianchi"
                location="Muggiò"
                initials="GB"
              />
            </ScrollAnimation>
            <ScrollAnimation animation="fade-right" delay={300}>
              <TestimonialCard
                quote="Professionisti seri e competenti. Hanno rispettato i tempi e il budget concordato. La nostra casa è rinata!"
                author="Andrea Colombo"
                location="Milano"
                initials="AC"
              />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
