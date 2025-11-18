import ProjectCard from '../ProjectCard';
import bathroomImage from '@assets/generated_images/Bathroom_renovation_project_65b527ad.png';
import kitchenImage from '@assets/generated_images/Kitchen_renovation_project_faa60a29.png';
import facadeImage from '@assets/generated_images/Facade_renovation_project_7f92e325.png';

export default function ProjectCardExample() {
  return (
    <div className="p-8 bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        <ProjectCard
          image={bathroomImage}
          title="Ristrutturazione Bagno Moderno"
          category="Bagno"
          location="Monza"
          description="Completa ristrutturazione con finiture di lusso, box doccia in cristallo e pavimenti in gres porcellanato."
        />
        <ProjectCard
          image={kitchenImage}
          title="Cucina Contemporanea"
          category="Cucina"
          location="Muggiò"
          description="Cucina open space con isola centrale, elettrodomestici di ultima generazione e piano in quarzo."
        />
        <ProjectCard
          image={facadeImage}
          title="Restauro Facciata Condominio"
          category="Facciata"
          location="Milano"
          description="Intervento di ripristino completo con cappotto termico e tinteggiatura di alta qualità."
        />
      </div>
    </div>
  );
}
