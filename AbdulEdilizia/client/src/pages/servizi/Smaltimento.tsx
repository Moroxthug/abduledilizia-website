import { Trash2, Recycle, Truck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import SEOHead from "@/components/SEOHead";

export default function Smaltimento() {
  const features = [
    "Smaltimento macerie e calcinacci",
    "Ritiro rifiuti edili speciali",
    "Demolizioni controllate",
    "Pulizia completa cantiere",
    "Documentazione smaltimento",
    "Servizio rapido e puntuale",
  ];

  return (
    <div className="min-h-screen animate-fade-in">
      <SEOHead
        title="Smaltimento Macerie Economico | Abdul Edilizia - Alta Qualità Prezzi Competitivi"
        description="Smaltimento macerie e rifiuti edili economico di altissima qualità: servizio certificato, ritiro rapido, prezzi competitivi. Miglior rapporto qualità-prezzo. Preventivo gratuito!"
        keywords="smaltimento macerie economico, rifiuti edili prezzi competitivi, demolizioni convenienti, smaltimento certificato qualità prezzo"
        canonicalUrl="/servizi/smaltimento"
      />

      <section className="py-20 md:py-28 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Recycle className="h-4 w-4" />
                Servizio Certificato
              </div>
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
                Smaltimento Macerie e Rifiuti Edili
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Gestiamo lo smaltimento di macerie e rifiuti edili a Muggiò, Monza e Brianza con servizio 
                certificato e prezzi competitivi. Qualità premium nel rispetto dell'ambiente: ritiro rapido, 
                documentazione completa, e smaltimento a norma. Il miglior rapporto qualità-prezzo per la 
                pulizia del tuo cantiere.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild data-testid="button-preventivo-smaltimento">
                  <Link href="/contatti">Richiedi Preventivo Gratuito</Link>
                </Button>
                <Button size="lg" variant="outline" asChild data-testid="button-servizi-smaltimento">
                  <Link href="/servizi">Tutti i Servizi</Link>
                </Button>
              </div>
            </div>

            <Card className="animate-slide-up animation-delay-200">
              <CardContent className="p-8">
                <h2 className="font-heading font-bold text-2xl mb-6 flex items-center gap-2">
                  <Trash2 className="h-6 w-6 text-primary" />
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
              Smaltimento Certificato a Prezzi Economici
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ci occupiamo di tutto: dal ritiro delle macerie alla loro corretta classificazione e smaltimento 
              presso centri autorizzati. Forniamo tutta la documentazione necessaria e garantiamo il rispetto 
              delle normative ambientali. Prezzi competitivi senza compromessi sulla qualità del servizio.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <Card>
                <CardContent className="p-6 text-center">
                  <Recycle className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Eco-Friendly</h3>
                  <p className="text-sm text-muted-foreground">
                    Smaltimento responsabile nel rispetto dell'ambiente
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Truck className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Rapido</h3>
                  <p className="text-sm text-muted-foreground">
                    Ritiro veloce per mantenere il cantiere pulito
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <CheckCircle2 className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Certificato</h3>
                  <p className="text-sm text-muted-foreground">
                    Documentazione completa per ogni smaltimento
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
              Contattaci per un preventivo gratuito. Ti forniremo un servizio di smaltimento 
              certificato a prezzi competitivi.
            </p>
            <Button size="lg" asChild data-testid="button-contatti-smaltimento">
              <Link href="/contatti">Richiedi Preventivo Gratuito</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
