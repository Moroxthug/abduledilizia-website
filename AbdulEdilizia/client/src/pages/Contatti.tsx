import SEOHead from "@/components/SEOHead";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contatti() {
  return (
    <div className="min-h-screen animate-fade-in">
      <SEOHead
        title="Contatti Abdul Edilizia | Preventivo Gratuito"
        description="Preventivo gratuito ristrutturazioni economiche premium. Prezzi competitivi, qualità garantita. Via Aldo Moro 6, Muggiò. Tel: 339 255 3291."
        keywords="preventivo economico ristrutturazione, contatti prezzi competitivi, abdul edilizia qualità prezzo"
        canonicalUrl="https://www.abduledilizia.it/contatti"
        ogTitle="Contatti Abdul Edilizia | Preventivo Gratuito"
        ogDescription="Richiedi un preventivo gratuito per ristrutturazioni economiche di alta qualità a Muggiò e Monza."
        ogImage="https://www.abduledilizia.it/hero-og.png"
      />
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">
              Contatti
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Siamo a tua disposizione per qualsiasi informazione o per un preventivo gratuito. 
              Contattaci oggi stesso!
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6">
                Richiedi un Preventivo Gratuito
              </h2>
              <p className="text-muted-foreground mb-8">
                Compila il form sottostante e ti contatteremo entro 24 ore per 
                discutere del tuo progetto e fornirti un preventivo personalizzato.
              </p>
              <ContactForm />
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6">
                  Informazioni di Contatto
                </h2>
                <p className="text-muted-foreground mb-6">
                  Puoi anche contattarci direttamente tramite telefono o email, 
                  oppure passare a trovarci nel nostro ufficio.
                </p>
              </div>

              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Indirizzo</h3>
                        <p className="text-sm text-muted-foreground">
                          Via Aldo Moro 6<br />
                          20835 Muggiò (MB)<br />
                          Monza e Brianza
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Telefono</h3>
                        <a 
                          href="tel:3392553291" 
                          className="text-sm text-primary hover:underline"
                          data-testid="link-phone-contact"
                        >
                          339 255 3291
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <a 
                          href="mailto:abdul@abduledilizia.it" 
                          className="text-sm text-primary hover:underline"
                          data-testid="link-email-contact"
                        >
                          abdul@abduledilizia.it
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Orari di Lavoro</h3>
                        <p className="text-sm text-muted-foreground">
                          Lunedì - Venerdì: 8:00 - 18:00<br />
                          Sabato: 9:00 - 13:00<br />
                          Domenica: Chiuso
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8">
                <h3 className="font-heading font-semibold text-lg mb-4">
                  Dove Siamo
                </h3>
                <Card className="overflow-hidden">
                  <div className="w-full h-[300px] bg-muted flex items-center justify-center">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.8234567890123!2d9.2314567890123!3d45.5823456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDM0JzU2LjQiTiA5wrAxMyczOC44IkU!5e0!3m2!1sit!2sit!4v1234567890123"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Mappa Abdul Edilizia - Muggiò"
                    />
                  </div>
                </Card>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-heading font-semibold mb-2">Area di Servizio</h3>
                <p className="text-sm text-muted-foreground">
                  Operiamo principalmente nell'area di <strong>Muggiò, Monza, Milano e tutta la Brianza</strong>. 
                  Per progetti di grande portata valutiamo anche interventi in altre zone della Lombardia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4">
            Dati Aziendali
          </h2>
          <div className="text-muted-foreground space-y-2">
            <p><strong>Abdul Edilizia</strong></p>
            <p>Via Aldo Moro 6 - 20835 Muggiò (MB)</p>
            <p>P.IVA: 09976150962</p>
            <p>Tel: 339 255 3291</p>
            <p>Email: abdul@abduledilizia.it</p>
          </div>
        </div>
      </section>
    </div>
  );
}
