import TestimonialCard from '../TestimonialCard';

export default function TestimonialCardExample() {
  return (
    <div className="p-8 bg-background">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        <TestimonialCard
          quote="Abdul Edilizia ha trasformato completamente il nostro bagno. Lavoro impeccabile, puntualità e grande professionalità. Consigliatissimi!"
          author="Marco Rossi"
          location="Monza"
          initials="MR"
        />
        <TestimonialCard
          quote="Ho ristrutturato la mia cucina con loro e non potrei essere più soddisfatto. Ottimo rapporto qualità-prezzo e attenzione ai dettagli."
          author="Giulia Bianchi"
          location="Muggiò"
          initials="GB"
        />
        <TestimonialCard
          quote="Professionisti seri e competenti. Hanno rispettato i tempi e il budget concordato. La nostra casa è rinata!"
          author="Andrea Colombo"
          location="Milano"
          initials="AC"
        />
      </div>
    </div>
  );
}
