import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
  location: string;
  description: string;
  loading?: "lazy" | "eager";
}

export default function ProjectCard({ image, title, category, location, description, loading = "lazy" }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate transition-all h-full group">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          loading={loading}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <Badge className="bg-primary text-primary-foreground">{category}</Badge>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="font-heading font-semibold text-lg mb-2" data-testid={`text-project-${title.toLowerCase().replace(/\s/g, '-')}`}>
          {title}
        </h3>
        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
          <MapPin className="h-3 w-3" />
          <span>{location}</span>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
