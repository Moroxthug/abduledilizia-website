import { Router } from "wouter";
import ServiceCard from '../ServiceCard';
import { Home, Bath, ChefHat, Hammer, Building2, Zap } from "lucide-react";

export default function ServiceCardExample() {
  return (
    <Router>
      <div className="p-8 bg-background">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <ServiceCard
            icon={Home}
            title="Ristrutturazioni Complete"
            description="Trasformiamo completamente i tuoi spazi con progetti chiavi in mano, dalla progettazione alla realizzazione finale."
          />
          <ServiceCard
            icon={Bath}
            title="Ristrutturazione Bagni"
            description="Bagni moderni e funzionali, con materiali di qualità e soluzioni personalizzate per ogni esigenza."
          />
          <ServiceCard
            icon={ChefHat}
            title="Ristrutturazione Cucine"
            description="Cucine su misura che uniscono estetica e funzionalità, con le migliori tecnologie disponibili."
          />
          <ServiceCard
            icon={Hammer}
            title="Rifacimento Tetti"
            description="Interventi specializzati per tetti e coperture, garantendo isolamento termico e impermeabilizzazione."
          />
          <ServiceCard
            icon={Building2}
            title="Restauro Facciate"
            description="Ripristino e valorizzazione delle facciate esterne, con tecniche moderne e materiali certificati."
          />
          <ServiceCard
            icon={Zap}
            title="Impianti"
            description="Installazione e rifacimento di impianti elettrici, idraulici e termici a norma di legge."
          />
        </div>
      </div>
    </Router>
  );
}
