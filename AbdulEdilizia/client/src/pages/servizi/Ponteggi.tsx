import { Building2, Shield, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import SEOHead from "@/components/SEOHead";

export default function Ponteggi() {
  const features = [
    "Ponteggi certificati e sicuri",
    "Installazione rapida professionale",
    "Noleggio breve e lungo termine",
    "Manutenzione e assistenza",
    "Conformità normative vigenti",
    "Smontaggio e ritiro",
  ];

  return (
    <div className="min-h-screen animate-fade-in">
      <SEOHead
        title="Allestimento Ponteggi Economico | Abdul Edilizia - Alta Qualità Prezzi Competitivi"
        description="Allestimento ponteggi economico di altissima qualità: ponteggi certificati, installazione professionale, prezzi competitivi. Miglior rapporto qualità-prezzo. Preventivo gratuito!"
        keywords="ponteggi economici, allestimento ponteggi prezzi competitivi, noleggio ponteggi conveniente, ponteggi certificati qualità prezzo"
        canonicalUrl="/servizi/ponteggi"
      />

      <section className="py-20 md:py-28 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Building2 className="h-4 w-4" />
                Ponteggi Certificati
              </div>
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
                Allestimento Ponteggi
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Forniamo e installiamo ponteggi certificati per ogni tipo di cantiere a Muggiò, Monza e Brianza. 
                Prezzi competitivi con qualità premium: sicurezza garantita, installazione professionale rapida, 
                e piena conformità alle normative. Il miglior rapporto qualità-prezzo per i tuoi lavori in altezza.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild data-testid="button-preventivo-ponteggi">
                  <Link href="/contatti">Richiedi Preventivo Gratuito</Link>
                </Button>
                <Button size="lg" variant="outline" asChild data-testid="button-servizi-ponteggi">
                  <Link href="/servizi">Tutti i Servizi</Link>
                </Button>
              </div>
            </div>

            <Card className="animate-slide-up animation-delay-200">
              <CardContent className="p-8">
                <h2 className="font-heading font-bold text-2xl mb-6 flex items-center gap-2">
                  <Shield className="h-6 w-6 text-primary" />
                  Cosa Include il Servizio
                </h2>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
              Ponteggi Sicuri a Prezzi Competitivi
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              I nostri ponteggi sono certificati secondo le normative vigenti e installati da personale qualificato. 
              Offriamo noleggio flessibile per lavori di breve o lunga durata, con prezzi economici ma senza compromessi 
              sulla sicurezza. Interveniamo rapidamente per allestimenti urgenti.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <Card>
                <CardContent className="p-6 text-center">
                  <Building2 className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Certificati</h3>
                  <p className="text-sm text-muted-foreground">
                    Ponteggi conformi a tutte le normative di sicurezza
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Rapidi</h3>
                  <p className="text-sm text-muted-foreground">
                    Installazione veloce per non rallentare i lavori
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Sicuri</h3>
                  <p className="text-sm text-muted-foreground">
                    Massima sicurezza per operatori e cantiere
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
              Pronto per Iniziare?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contattaci per un preventivo gratuito. Ti forniremo una soluzione su misura 
              con ponteggi certificati a prezzi competitivi.
            </p>
            <Button size="lg" asChild data-testid="button-contatti-ponteggi">
              <Link href="/contatti">Richiedi Preventivo Gratuito</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
