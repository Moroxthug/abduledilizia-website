import { Router } from "wouter";
import Footer from '../Footer';

export default function FooterExample() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <div className="flex-1 p-8">
          <p className="text-muted-foreground">Page content here...</p>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
