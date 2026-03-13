# Plán přepracování webu ZŠ Úšovice

## ČÁST A: Změna barevného schématu na oranžovo-bílé

Původní škola používá oranžovou a bílou. Přepracuji celou paletu:

**Nové barvy:**
- Primary: `#e67e22` (oranžová) místo `#2563eb` (modrá)
- Primary dark: `#d35400` (tmavší oranžová) místo `#1d4ed8`
- Hero gradient: `#1a1a2e` → `#3d2200` → `#e67e22` (tmavá → oranžová)
- Accent light: `#f39c12` (světlejší oranžová) místo `#60a5fa`
- Backgrounds: bílá `#fff`, `#fff8f0` (teplý krémový) místo `#eff6ff`
- Hover/active: `#cf6d17` místo `#1d4ed8`
- Sidebar admin: `#2d1800` (tmavě hnědá/oranžová)

**Soubory k úpravě:**
1. `css/style.css` — veškeré `#2563eb`, `#0f172a`, `#1e3a5f`, `#60a5fa`, `#eff6ff`, `#1d4ed8` apod.
2. `css/admin.css` — sidebar, tlačítka, accent barvy
3. `index.html` — inline styly pokud existují
4. `admin.html` — inline styly pokud existují

---

## ČÁST B: Rozšíření CMS — všechny sekce editovatelné

Aktuálně editovatelné: 4 stránky (about, druzina, jidelna, enrollment), články, galerie, kontakty.

**Chybí editace pro tyto sekce (všechny v index.html):**

### B1. Hero sekce
- Hlavní nadpis, podnadpis
- 4 statistiky (číslo + popisek)
- Tlačítka (text + odkaz)

### B2. Quick Links (4 kartičky)
- Název, ikona, odkaz, popis pro každou z 4 karet

### B3. Vedení školy (#leadership)
- 4 karty: jméno, titul, pozice, kontakt

### B4. Enrollment Banner (#enrollment)
- Nadpis, text, odkaz tlačítka — **už částečně editovatelné, doplnit**

### B5. Družina tabs (#druzina-extra)
- 5 tabů obsahu: Aktuálně, Řád ŠD, Fotky, Uvolnění, Přihláška
- Každý tab = editovatelný HTML blok

### B6. Jídelna tabs (#jidelna-extra)
- 7 tabů: Lístek, Info, Odhlášky, Alergeny, Strava, Řád, Přihláška

### B7. Dokumenty / Úřední deska (#documents)
- Seznam dokumentů: název, typ, velikost, odkaz ke stažení

### B8. Projekty (#projects)
- 7 projektů: název, popis, logo/ikona, odkaz

### B9. Personální obsazení (#staff)
- 4 tabulky: I. stupeň, II. stupeň, asistenti, družina
- Jméno, předmět/funkce pro každého

### B10. Bakaláři sekce (#bakalari)
- 3 informační karty s návody

### B11. Plány a rozvrhy (#plans)
- 4 karty: roční plán, měsíční plán, rozvrhy, výroční zpráva

### B12. Školní poradenství (#poradenstvi)
- 2 karty: jak do poradny, služby

### B13. Orgány a sdružení (#organy)
- KRPDŠ info, žákovský parlament

### B14. Školní řád (#skolni-rad)
- Editovatelný text pravidel

### B15. Kontakty rozšířené (#kontakt-extra)
- 7 kontaktních bloků

### B16. Ukrajina (#ukraine)
- 3 karty + kontakt v ukrajinštině

### B17. Footer
- 4 sloupce: logo+popis, odkazy, kontakty, provozní doba

---

## ČÁST C: Doplnění reálného obsahu z webu zsusovice.cz

Pro každou sekci doplním skutečný obsah ze stávajícího webu jako výchozí (default) hodnoty v data.js:

1. **Kontakty** — tel. 354 624 654, jídelna 354 623 557, družina 354 625 634, email sekretariat@zsusovice.cz, DS wkkmpmx
2. **Vedení** — Mgr. Zdeněk Třešňák (ředitel), Mgr. Jan Matějovský, Mgr. Vlasta Matysová (zástupci), Jana Záhorová (ICT)
3. **Družina** — provozní doba 6:00-8:00 / 11:40-16:45, poplatky 300 Kč/měs, kroužky, vychovatelky
4. **Jídelna** — ceny (30/34/39 Kč), výdej 12:00-14:00, kontakt, vedoucí Petra Roth Königová
5. **Projekty** — OP JAK Šablony, EU peníze školám, ICT, Komenský, NPO
6. **Poradenství** — PPP Karlovarského kraje, postup
7. **KRPDŠ** — předsedkyně Vlasta Nováková, poplatek 250 Kč, účet
8. **Školní info** — IČ 70997543, zřizovatel Město ML, ŠVP Tvořivá škola

---

## Pořadí práce (kroky):

1. **Barvy** — css/style.css + css/admin.css (globální find-replace)
2. **Data model** — rozšířit data.js o DEFAULT_CONTENT pro všechny sekce
3. **Admin panel** — přidat nové sekce do admin.html + admin.js
4. **Frontend rendering** — app.js: načítání editovatelného obsahu do index.html
5. **Reálný obsah** — doplnit skutečná data ze zsusovice.cz jako defaults
6. **Test** — ověřit, že vše funguje

---

## Odhad rozsahu změn:
- `css/style.css` — ~80 řádků color changes
- `css/admin.css` — ~20 řádků color changes
- `js/data.js` — +300 řádků (DEFAULT_CONTENT objekt)
- `js/admin.js` — +400 řádků (nové editory)
- `admin.html` — +100 řádků (nové sekce v sidebar + formuláře)
- `js/app.js` — +150 řádků (dynamické načítání obsahu)
- `index.html` — refaktoring sekcí na dynamické ID pro JS
