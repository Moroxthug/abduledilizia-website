import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import ProjectCard from "@/components/ProjectCard";
import CTASection from "@/components/CTASection";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Button } from "@/components/ui/button";
import bathroomImage from '@assets/generated_images/Bathroom_renovation_project_65b527ad.png';
import kitchenImage from '@assets/generated_images/Kitchen_renovation_project_faa60a29.png';
import facadeImage from '@assets/generated_images/Facade_renovation_project_7f92e325.png';
import roofImage from '@assets/generated_images/Roof_renovation_project_e894097f.png';
import completeImage from '@assets/generated_images/Complete_renovation_project_fa5c131e.png';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<string>("Tutti");

  const projects = [
    {
      image: bathroomImage,
      title: "Ristrutturazione Bagno Moderno",
      category: "Bagno",
      location: "Monza",
      description: "Completa ristrutturazione con finiture di lusso, box doccia in cristallo e pavimenti in gres porcellanato."
    },
    {
      image: kitchenImage,
      title: "Cucina Contemporanea",
      category: "Cucina",
      location: "Muggiò",
      description: "Cucina open space con isola centrale, elettrodomestici di ultima generazione e piano in quarzo."
    },
    {
      image: facadeImage,
      title: "Restauro Facciata Condominio",
      category: "Facciata",
      location: "Milano",
      description: "Intervento di ripristino completo con cappotto termico e tinteggiatura di alta qualità."
    },
    {
      image: roofImage,
      title: "Rifacimento Tetto",
      category: "Tetto",
      location: "Monza",
      description: "Sostituzione completa del manto di copertura con nuovo isolamento termico e impermeabilizzazione."
    },
    {
      image: completeImage,
      title: "Appartamento Completo",
      category: "Ristrutturazione Completa",
      location: "Milano",
      description: "Ristrutturazione totale di appartamento 120mq con design moderno e funzionale."
    },
    {
      image: bathroomImage,
      title: "Bagno di Servizio",
      category: "Bagno",
      location: "Brugherio",
      description: "Realizzazione nuovo bagno di servizio con ottimizzazione degli spazi disponibili."
    },
    {
      image: kitchenImage,
      title: "Cucina Classica",
      category: "Cucina",
      location: "Monza",
      description: "Ristrutturazione cucina con stile classico, ante in legno massello e finiture eleganti."
    },
    {
      image: facadeImage,
      title: "Facciata Villa",
      category: "Facciata",
      location: "Muggiò",
      description: "Restauro facciata villa d'epoca con ripristino intonaci originali e nuova tinteggiatura."
    },
    {
      image: completeImage,
      title: "Loft Industriale",
      category: "Ristrutturazione Completa",
      location: "Milano",
      description: "Trasformazione completa di spazio industriale in moderno loft abitativo."
    }
  ];

  const categories = ["Tutti", "Bagno", "Cucina", "Facciata", "Tetto", "Ristrutturazione Completa"];

  const filteredProjects = activeFilter === "Tutti" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen animate-fade-in">
      <SEOHead
        title="Portfolio Abdul Edilizia | Economico e Premium"
        description="Lavori economici di alta qualità: bagni, cucine, ristrutturazioni complete a Muggiò e Monza. Prezzi competitivi, risultati eccellenti. Vedi i progetti!"
        keywords="portfolio ristrutturazioni economiche, progetti qualità prezzo, lavori completati convenienti monza"
        canonicalUrl="https://www.abduledilizia.it/portfolio"
        ogTitle="Portfolio Abdul Edilizia | Lavori Economici Premium"
        ogDescription="Scopri i nostri progetti di ristrutturazione economici di alta qualità a Muggiò e Monza."
        ogImage="https://www.abduledilizia.it/hero-og.png"
      />
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">
                Portfolio
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Scopri alcuni dei nostri progetti più significativi realizzati 
                nell'area di Monza, Milano e Brianza.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => setActiveFilter(category)}
                data-testid={`button-filter-${category.toLowerCase().replace(/\s/g, '-')}`}
              >
                {category}
              </Button>
            ))}
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ScrollAnimation key={index} animation="scale" delay={(index % 3) * 100}>
                <ProjectCard
                  image={project.image}
                  title={project.title}
                  category={project.category}
                  location={project.location}
                  description={project.description}
                  loading={index < 3 ? "eager" : "lazy"}
                />
              </ScrollAnimation>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                Nessun progetto trovato per questa categoria.
              </p>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
