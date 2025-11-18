import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import ChiSiamo from "@/pages/ChiSiamo";
import Servizi from "@/pages/Servizi";
import Portfolio from "@/pages/Portfolio";
import Contatti from "@/pages/Contatti";
import RistrutturazioniComplete from "@/pages/servizi/RistrutturazioniComplete";
import Bagni from "@/pages/servizi/Bagni";
import Cucine from "@/pages/servizi/Cucine";
import Tetti from "@/pages/servizi/Tetti";
import Facciate from "@/pages/servizi/Facciate";
import Impianti from "@/pages/servizi/Impianti";
import Ponteggi from "@/pages/servizi/Ponteggi";
import Smaltimento from "@/pages/servizi/Smaltimento";
import Monza from "@/pages/citta/Monza";
import Milano from "@/pages/citta/Milano";
import Bergamo from "@/pages/citta/Bergamo";
import Brescia from "@/pages/citta/Brescia";
import Como from "@/pages/citta/Como";
import Alessandria from "@/pages/citta/Alessandria";
import Valenza from "@/pages/citta/Valenza";
import SestoSanGiovanni from "@/pages/citta/SestoSanGiovanni";
import CiniselloBalsamo from "@/pages/citta/CiniselloBalsamo";
import Desio from "@/pages/citta/Desio";
import Seregno from "@/pages/citta/Seregno";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/chi-siamo" component={ChiSiamo} />
      <Route path="/servizi" component={Servizi} />
      <Route path="/servizi/ristrutturazioni-complete" component={RistrutturazioniComplete} />
      <Route path="/servizi/bagni" component={Bagni} />
      <Route path="/servizi/cucine" component={Cucine} />
      <Route path="/servizi/tetti" component={Tetti} />
      <Route path="/servizi/facciate" component={Facciate} />
      <Route path="/servizi/impianti" component={Impianti} />
      <Route path="/servizi/ponteggi" component={Ponteggi} />
      <Route path="/servizi/smaltimento" component={Smaltimento} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contatti" component={Contatti} />
      <Route path="/citta/monza" component={Monza} />
      <Route path="/citta/milano" component={Milano} />
      <Route path="/citta/bergamo" component={Bergamo} />
      <Route path="/citta/brescia" component={Brescia} />
      <Route path="/citta/como" component={Como} />
      <Route path="/citta/alessandria" component={Alessandria} />
      <Route path="/citta/valenza" component={Valenza} />
      <Route path="/citta/sesto-san-giovanni" component={SestoSanGiovanni} />
      <Route path="/citta/cinisello-balsamo" component={CiniselloBalsamo} />
      <Route path="/citta/desio" component={Desio} />
      <Route path="/citta/seregno" component={Seregno} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
