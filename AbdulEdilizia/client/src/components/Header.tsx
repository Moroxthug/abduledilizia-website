import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from '@assets/abdul edilizia logo_1763380487183.png';

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/chi-siamo", label: "Chi Siamo" },
    { href: "/servizi", label: "Servizi", hasDropdown: true, dropdownType: "services" },
    { href: "/citta", label: "Comuni Serviti", hasDropdown: true, dropdownType: "cities" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contatti", label: "Contatti" },
  ];

  const serviceLinks = [
    { href: "/servizi/ristrutturazioni-complete", label: "Ristrutturazioni Complete" },
    { href: "/servizi/bagni", label: "Ristrutturazione Bagni" },
    { href: "/servizi/cucine", label: "Ristrutturazione Cucine" },
    { href: "/servizi/tetti", label: "Rifacimento Tetti" },
    { href: "/servizi/facciate", label: "Restauro Facciate" },
    { href: "/servizi/impianti", label: "Impianti" },
    { href: "/servizi/ponteggi", label: "Allestimento Ponteggi" },
    { href: "/servizi/smaltimento", label: "Smaltimento Macerie" },
  ];

  const cityLinks = [
    { href: "/citta/monza", label: "Monza" },
    { href: "/citta/milano", label: "Milano" },
    { href: "/citta/desio", label: "Desio" },
    { href: "/citta/seregno", label: "Seregno" },
    { href: "/citta/sesto-san-giovanni", label: "Sesto San Giovanni" },
    { href: "/citta/cinisello-balsamo", label: "Cinisello Balsamo" },
    { href: "/citta/bergamo", label: "Bergamo" },
    { href: "/citta/brescia", label: "Brescia" },
    { href: "/citta/como", label: "Como" },
    { href: "/citta/alessandria", label: "Alessandria" },
    { href: "/citta/valenza", label: "Valenza" },
  ];

  const isActive = (href: string) => location === href;

  return (
    <header className="sticky top-0 z-50 w-full bg-background/98 backdrop-blur-md border-b transition-smooth">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center">
            <img src={logo} alt="Abdul Edilizia" className="h-12 md:h-14" />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => 
              link.hasDropdown ? (
                <DropdownMenu key={link.href}>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56 max-h-[400px] overflow-y-auto">
                    {link.dropdownType === 'services' && serviceLinks.map((service) => (
                      <DropdownMenuItem key={service.href} asChild>
                        <Link href={service.href} className="cursor-pointer">
                          {service.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                    {link.dropdownType === 'cities' && cityLinks.map((city) => (
                      <DropdownMenuItem key={city.href} asChild>
                        <Link href={city.href} className="cursor-pointer">
                          {city.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive(link.href) ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                  data-testid={`link-nav-${link.label.toLowerCase().replace(/\s/g, '-')}`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:3392553291" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-2 transition-colors">
              <Phone className="h-4 w-4" />
              <span className="font-medium">339 255 3291</span>
            </a>
            <Button data-testid="button-preventivo-header" size="lg" asChild>
              <Link href="/contatti">Richiedi Preventivo</Link>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => 
                link.hasDropdown ? (
                  <div key={link.href} className="flex flex-col gap-2">
                    <div className="text-sm font-semibold text-foreground py-1">{link.label}</div>
                    {link.dropdownType === 'services' && serviceLinks.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-sm pl-4 py-1 text-muted-foreground"
                      >
                        {service.label}
                      </Link>
                    ))}
                    {link.dropdownType === 'cities' && cityLinks.map((city) => (
                      <Link
                        key={city.href}
                        href={city.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-sm pl-4 py-1 text-muted-foreground"
                      >
                        {city.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-sm font-medium py-2 transition-colors ${
                      isActive(link.href) ? "text-primary" : "text-muted-foreground"
                    }`}
                    data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s/g, '-')}`}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Button className="w-full mt-2" data-testid="button-preventivo-mobile" asChild>
                <Link href="/contatti" onClick={() => setMobileMenuOpen(false)}>
                  Richiedi Preventivo
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
