# 🌐 Guida Completa: Collegare www.abduledilizia.it a Replit

**Data:** 17 Novembre 2025  
**Dominio:** www.abduledilizia.it  
**Obiettivo:** Risolvere errore SSL "Failed: Invalid server SSL certificate" su Google Search Console

---

## 📋 PASSO 1: Accedi alle Impostazioni Deployment

1. **Apri il tuo Repl** (questo progetto)
2. **Clicca sulla tab** "Deployments" (icona razzo 🚀)
3. **Clicca su** "Settings" (icona ingranaggio ⚙️)
4. **Scorri fino a** "Custom Domains"
5. **Clicca su** "Link a domain" o "Manually connect from another registrar"

---

## 📋 PASSO 2: Aggiungi il Dominio

1. **Nel campo di testo, inserisci esattamente:**
   ```
   www.abduledilizia.it
   ```

2. **Clicca** "Add Domain" o "Continue"

3. **Replit genererà automaticamente:**
   - ✅ Un **record A** (indirizzo IP)
   - ✅ Un **record TXT** (per verifica)

4. **COPIA QUESTI VALORI** - Li userai nel prossimo passo

   Esempio di quello che vedrai:
   ```
   A Record:
   Host: www (o @)
   Value: 35.123.456.78 (esempio - usa il TUO IP)
   
   TXT Record:
   Host: www (o @)
   Value: replit-verify=abc123def456... (esempio - usa il TUO valore)
   ```

---

## 📋 PASSO 3: Configurare DNS presso il tuo Provider

Ora devi aggiungere questi record DNS nel pannello di controllo del tuo **registrar di dominio** (dove hai acquistato abduledilizia.it).

### **3A. Identifica il tuo Provider DNS**

Il tuo dominio è registrato presso uno di questi provider:
- GoDaddy
- Aruba (molto comune in Italia)
- Namecheap
- Register.it
- Cloudflare
- Altro

**Come scoprirlo:**
- Controlla la tua email di acquisto del dominio
- Vai su https://www.whois.com/whois/abduledilizia.it per vedere il registrar

### **3B. Accedi al Pannello DNS**

**Se usi Aruba (esempio):**
1. Vai su https://www.aruba.it
2. Login → Pannello di Controllo
3. Domini → Gestione DNS
4. Seleziona: abduledilizia.it

**Se usi GoDaddy:**
1. Vai su https://www.godaddy.com
2. Login → My Products
3. Domains → Manage DNS

**Se usi Cloudflare:**
1. Vai su https://dash.cloudflare.com
2. Seleziona: abduledilizia.it
3. DNS → Records

### **3C. Aggiungi i Record DNS**

**AGGIUNGI RECORD A:**
```
Type: A
Name/Host: www (alcuni provider richiedono "www" altri "@" o "www.abduledilizia.it")
Value/Points to: [IL TUO IP DA REPLIT]
TTL: Automatic o 3600
```

**AGGIUNGI RECORD TXT:**
```
Type: TXT
Name/Host: www (o @ a seconda del provider)
Value/Content: [IL TUO VALORE TXT DA REPLIT - inizia con "replit-verify="]
TTL: Automatic o 3600
```

### **⚠️ ATTENZIONE CLOUDFLARE**

Se usi Cloudflare, DEVI disabilitare il proxy:

1. Dopo aver aggiunto il record A
2. Vedrai un'icona "nuvola" accanto al record
3. **Clicca sulla nuvola arancione** → diventerà **grigia**
4. Stato finale: "DNS only" (non "Proxied")

**Motivo:** Cloudflare proxy blocca il processo di verifica SSL di Replit

---

## 📋 PASSO 4: Attendi Propagazione DNS

Dopo aver salvato i record DNS:

- ⏱️ **Tempo minimo:** 5-10 minuti
- ⏱️ **Tempo massimo:** 48 ore (raro)
- ⏱️ **Tempo tipico:** 15-30 minuti

### **Come verificare la propagazione:**

**Opzione 1 - Online (consigliato):**
1. Vai su: https://dnschecker.org
2. Inserisci: `www.abduledilizia.it`
3. Seleziona: "A" record
4. Clicca "Search"
5. Vedrai una mappa mondiale con checkmark verdi quando propagato

**Opzione 2 - Terminale:**
```bash
nslookup www.abduledilizia.it
```

Dovresti vedere l'IP fornito da Replit nella risposta.

---

## 📋 PASSO 5: Verifica in Replit

1. **Torna su Replit** → Deployments → Settings → Custom Domains
2. **Controlla lo stato** del dominio:
   - ⏳ "Pending" = In attesa di propagazione DNS
   - ✅ "Verified" = Tutto OK! SSL certificate generato automaticamente
   - ❌ "Failed" = Problema con i record DNS (ricontrolla i valori)

3. **Quando vedi "Verified":**
   - Replit ha emesso automaticamente il certificato SSL Let's Encrypt
   - Il sito è accessibile su https://www.abduledilizia.it

---

## 📋 PASSO 6: Test Finale

**Test Browser:**
1. Apri browser
2. Vai su: `https://www.abduledilizia.it`
3. Dovresti vedere il sito Abdul Edilizia
4. Clicca sul lucchetto nella barra URL → deve dire "Connessione sicura"

**Test Google Search Console:**
1. Vai su: https://search.google.com/search-console
2. URL Inspection Tool
3. Inserisci: `https://www.abduledilizia.it`
4. Clicca: "Test Live URL"
5. **Risultato atteso:**
   - ✅ Page fetch: Success
   - ✅ Crawl allowed: Yes
   - ✅ Indexing allowed: Yes
   - ✅ No SSL errors

6. **Clicca:** "Request Indexing"

---

## 🔧 Problemi Comuni e Soluzioni

### ❌ Problema: "Pending" per più di 1 ora

**Cause possibili:**
- Record DNS non configurati correttamente
- Cloudflare proxy attivo (nuvola arancione)
- Record multipli o conflittuali

**Soluzione:**
1. Ricontrolla i valori A e TXT nel DNS
2. Se usi Cloudflare: disabilita proxy (nuvola grigia)
3. Rimuovi eventuali record A duplicati per www
4. Attendi altri 30 minuti

### ❌ Problema: "Failed" in Replit

**Soluzione:**
1. Clicca "Unlink" in Replit
2. Attendi 2 minuti
3. Ricollega il dominio (ripeti Passo 2)
4. Replit genererà nuovi valori A e TXT
5. Aggiorna i record DNS con i NUOVI valori

### ❌ Problema: SSL error persiste dopo "Verified"

**Soluzione:**
1. Attendi 5-10 minuti dopo il "Verified"
2. Svuota cache browser (Ctrl+Shift+Del)
3. Testa in modalità incognito
4. Verifica su https://www.ssllabs.com/ssltest/

---

## ✅ Checklist Finale

Prima di contattare il supporto, verifica:

- [ ] Deployment Replit completato con successo
- [ ] Dominio aggiunto in Replit Settings
- [ ] Record A configurato correttamente nel DNS
- [ ] Record TXT configurato correttamente nel DNS
- [ ] Cloudflare proxy disabilitato (se applicabile)
- [ ] Attesi almeno 30 minuti per propagazione DNS
- [ ] Stato "Verified" visibile in Replit
- [ ] Sito accessibile su https://www.abduledilizia.it
- [ ] Google Search Console test passa senza errori SSL

---

## 📞 Supporto

**Se il problema persiste dopo 48 ore:**

1. **Replit Support:** support@replit.com
   - Includi: nome dominio, screenshot errore, conferma DNS configurato

2. **Status Replit SSL:** https://status.replit.com
   - Verifica se ci sono problemi SSL in corso

3. **Community Forum:** https://replit.discourse.group/c/deployments
   - Cerca problemi simili o chiedi aiuto

---

**Aggiornamento documento:** 17 Novembre 2025  
**Prossimo controllo:** Dopo collegamento dominio riuscito
