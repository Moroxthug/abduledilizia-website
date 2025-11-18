import SEOHead from '../SEOHead';

export default function SEOHeadExample() {
  return (
    <>
      <SEOHead
        title="Abdul Edilizia | Ristrutturazioni a Muggiò"
        description="Impresa edile specializzata in ristrutturazioni a Muggiò, Monza e Brianza"
        keywords="ristrutturazioni muggiò, edilizia monza"
      />
      <div className="p-8">
        <p className="text-muted-foreground">SEO component loaded (check page title and meta tags)</p>
      </div>
    </>
  );
}
