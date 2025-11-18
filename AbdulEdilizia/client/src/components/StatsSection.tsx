import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Briefcase, Star } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";

export default function StatsSection() {
  const stats = [
    { icon: Award, value: "15+", label: "Anni di Esperienza" },
    { icon: Briefcase, value: "500+", label: "Progetti Completati" },
    { icon: Users, value: "300+", label: "Clienti Soddisfatti" },
    { icon: Star, value: "4.9/5", label: "Valutazione Media" },
  ];

  return (
    <section className="py-16 md:py-20 bg-card">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <ScrollAnimation key={index} animation="fade-up" delay={index * 100}>
              <Card className="text-center hover-elevate transition-all">
                <CardContent className="p-6">
                  <div className="mb-3 inline-flex p-3 bg-primary/10 rounded-lg">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="font-heading font-bold text-3xl md:text-4xl mb-2" data-testid={`text-stat-${stat.label.toLowerCase().replace(/\s/g, '-')}`}>
                    {stat.value}
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
