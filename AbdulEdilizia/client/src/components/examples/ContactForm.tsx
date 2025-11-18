import ContactForm from '../ContactForm';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactFormExample() {
  return (
    <div className="p-8 bg-background">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Richiedi un Preventivo Gratuito</CardTitle>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
