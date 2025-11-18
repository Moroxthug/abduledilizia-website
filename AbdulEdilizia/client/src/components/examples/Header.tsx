import { Router, Route } from "wouter";
import Header from '../Header';

export default function HeaderExample() {
  return (
    <Router>
      <Header />
      <Route path="/" component={() => <div className="p-4">Home Content</div>} />
      <Route path="/chi-siamo" component={() => <div className="p-4">Chi Siamo Content</div>} />
      <Route path="/servizi" component={() => <div className="p-4">Servizi Content</div>} />
      <Route path="/portfolio" component={() => <div className="p-4">Portfolio Content</div>} />
      <Route path="/contatti" component={() => <div className="p-4">Contatti Content</div>} />
    </Router>
  );
}
