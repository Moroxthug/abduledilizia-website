import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon, ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
}

export default function ServiceCard({ icon: Icon, title, description, href = "/servizi" }: ServiceCardProps) {
  return (
    <Card className="hover-elevate transition-all h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="mb-4 p-3 bg-primary/10 rounded-md w-fit">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="font-heading font-semibold text-lg mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4 flex-grow">{description}</p>
        <Button 
          variant="ghost" 
          className="w-fit px-0 text-primary hover:bg-transparent"
          data-testid={`button-service-${title.toLowerCase().replace(/\s/g, '-')}`}
          asChild
        >
          <Link href={href} className="flex items-center gap-1">
            Scopri di più
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
