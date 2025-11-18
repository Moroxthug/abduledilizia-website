import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import heroImage from '@assets/generated_images/Hero_renovation_construction_image_9d37378e.png';

export default function Hero() {
  return (
    <section className="relative w-full h-[650px] md:h-[750px] flex items-center justify-center overflow-hidden animate-fade-in">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/65 to-black/55" />
      
      <div className="relative z-10 container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 text-white">
        <div className="max-w-3xl animate-slide-up">
          <Badge variant="outline" className="mb-6 border-white/40 bg-white/15 backdrop-blur-md text-white hover:bg-white/25 transition-colors">
            <MapPin className="h-3 w-3 mr-1" />
            Muggiò - Monza e Brianza
          </Badge>
          
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-7xl mb-6 leading-tight tracking-tight">
            Ristrutturazioni Economiche di Altissima Qualità
          </h1>
          
          <p className="text-lg md:text-xl text-white/95 mb-10 leading-relaxed max-w-2xl">
            Prezzi competitivi e materiali premium. Specialisti in ristrutturazioni complete per case e uffici. 
            Qualità garantita, preventivi chiari e rispetto delle scadenze.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="text-base shadow-xl hover:shadow-2xl transition-all duration-300"
              data-testid="button-preventivo-hero"
              asChild
            >
              <Link href="/contatti">Richiedi Preventivo Gratuito</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-base border-white/40 bg-white/15 backdrop-blur-md text-white hover:bg-white/25 transition-all duration-300"
              data-testid="button-portfolio-hero"
              asChild
            >
              <Link href="/portfolio">Vedi i Nostri Lavori</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
