# Manutenzione Sitemap.xml

## Aggiornamento Date `lastmod`

La sitemap in `client/public/sitemap.xml` contiene date statiche nel campo `<lastmod>`.

### Quando Aggiornare le Date

Aggiornare il campo `lastmod` quando:
- ✅ Modifichi contenuto sostanziale di una pagina
- ✅ Aggiungi nuove pagine al sito
- ✅ Rimuovi pagine esistenti
- ✅ Modifichi meta tag SEO importanti
- ❌ Non per modifiche minori (correzioni typo, styling)

### Procedura Manuale

1. **Per Homepage/Pagine Principali modificate:**
   ```xml
   <url>
     <loc>https://www.abduledilizia.it/</loc>
     <lastmod>2024-12-01</lastmod>  <!-- Aggiorna questa data -->
     <changefreq>weekly</changefreq>
     <priority>1.0</priority>
   </url>
   ```

2. **Per tutte le pagine dopo deployment significativo:**
   - Usa ricerca e sostituzione in `client/public/sitemap.xml`
   - Sostituisci: `<lastmod>2024-11-17</lastmod>`
   - Con: `<lastmod>AAAA-MM-GG</lastmod>` (data deployment)

3. **Dopo modifiche alla sitemap:**
   - Riinvia la sitemap su Google Search Console
   - Menu: Sitemap > Rimuovi sitemap.xml > Aggiungi sitemap.xml

### Formato Date

Usa sempre formato ISO 8601:
- ✅ Corretto: `2024-12-15`
- ❌ Errato: `15/12/2024` o `Dec 15, 2024`

### Automazione Futura (Opzionale)

Per aggiornamento automatico, considera:
1. Script build-time che genera sitemap.xml con date correnti
2. Servizio backend che serve sitemap dinamicamente
3. Plugin Vite per generazione sitemap automatica

Per ora, l'aggiornamento manuale è sufficiente e garantisce controllo totale.

---

**Ultima Modifica:** 17 Novembre 2025 (Tutte le date aggiornate da 2024 a 2025)  
**Prossimo Review:** Prima del prossimo deployment importante

## Log Aggiornamenti

- **17 Nov 2025**: Tutte le date lastmod aggiornate a 2025-11-17 (correzione anno)
- **17 Nov 2025**: Sitemap iniziale creata con 24 URL validati
