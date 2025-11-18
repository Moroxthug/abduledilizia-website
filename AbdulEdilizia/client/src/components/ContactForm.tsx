import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  nome: z.string().min(2, "Il nome deve contenere almeno 2 caratteri"),
  email: z.string().email("Email non valida"),
  telefono: z.string().min(10, "Numero di telefono non valido"),
  servizio: z.string().min(1, "Seleziona un servizio"),
  messaggio: z.string().min(10, "Il messaggio deve contenere almeno 10 caratteri"),
  privacy: z.boolean().refine((val) => val === true, "Devi accettare la privacy policy"),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email: "",
      telefono: "",
      servizio: "",
      messaggio: "",
      privacy: false,
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    console.log("Form submitted:", data);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Richiesta inviata!",
      description: "Ti contatteremo al più presto per fornirti un preventivo personalizzato.",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="nome"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome e Cognome</FormLabel>
              <FormControl>
                <Input placeholder="Mario Rossi" {...field} data-testid="input-nome" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="mario.rossi@email.com" {...field} data-testid="input-email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="telefono"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefono</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="333 123 4567" {...field} data-testid="input-telefono" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="servizio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tipo di Servizio</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger data-testid="select-servizio">
                    <SelectValue placeholder="Seleziona un servizio" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="ristrutturazione-completa">Ristrutturazione Completa</SelectItem>
                  <SelectItem value="bagno">Ristrutturazione Bagno</SelectItem>
                  <SelectItem value="cucina">Ristrutturazione Cucina</SelectItem>
                  <SelectItem value="tetto">Rifacimento Tetto</SelectItem>
                  <SelectItem value="facciata">Restauro Facciata</SelectItem>
                  <SelectItem value="impianti">Impianti</SelectItem>
                  <SelectItem value="altro">Altro</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="messaggio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Messaggio</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Descrivi il progetto che hai in mente..." 
                  className="min-h-32"
                  {...field}
                  data-testid="textarea-messaggio"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="privacy"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  data-testid="checkbox-privacy"
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="text-sm font-normal">
                  Accetto la privacy policy e autorizzo il trattamento dei miei dati personali
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          size="lg" 
          className="w-full md:w-auto"
          disabled={isSubmitting}
          data-testid="button-submit-contact"
        >
          {isSubmitting ? "Invio in corso..." : "Invia Richiesta"}
        </Button>
      </form>
    </Form>
  );
}
