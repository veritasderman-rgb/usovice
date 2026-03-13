// ===== DEFAULT CONTENT DATA =====
// This file contains default articles and editable content blocks.
// The admin panel saves changes to localStorage, which overrides these defaults.

const DEFAULT_ARTICLES = [
    {
        id: 1,
        title: "Profesní orientace s virtuální realitou",
        date: "2026-03-10",
        category: "akce",
        icon: "fas fa-vr-cardboard",
        color: "#667eea",
        summary: "Žáci 8. ročníků se zúčastnili workshopu VR PROFILAB — osobnostní testy a 360° interaktivní videa představující 20 nejperspektivnějších profesí Karlovarského kraje.",
        content: "Žáci 8. ročníků mají ještě celý školní rok čas na volbu své studijní cesty po ukončení ZŠ. K tomu, aby se pomalu začali nad svým zaměřením zamýšlet, jim jistě pomohla akce VR PROFILAB, která se uskutečnila začátkem března.\n\nTento projekt je realizován Krajským inovačním centrem Karlovarského kraje.\n\nV první části dvouhodinového workshopu si žáci vyplnili krátký profilový test, který jim ukázal jejich osobnostní zaměření. V další části zhlédli interaktivní 360° videa reprezentující 20 nejperspektivnějších profesí v našem kraji. Podle vlastní preference se mohli prostřednictvím virtuální reality vypravit na exkurzi do nemocnice mezi zdravotnický personál, seznámit se s profesemi jako např. programátor CNC, svářeč, průmyslový inženýr, masér, výrobce keramiky, policista a mnoho dalších.\n\nMgr. Jana Sahánková",
        author: "Mgr. Jana Sahánková",
        hasGallery: true
    },
    {
        id: 2,
        title: "BŘEZEN — Jídlo na přání",
        date: "2026-03-05",
        category: "jidelna",
        icon: "fas fa-utensils",
        color: "#f5576c",
        summary: "Žáci a rodiče hlasovali v Bakalářích o březnové jídlo na přání. Výsledek: Steak s pepřovou omáčkou!",
        content: "Vyberte TENTO TÝDEN jídlo, které Vám jídelna v posledním týdnu měsíce připraví k obědu. HLASUJEME V BAKALÁŘÍCH /ŽÁCI I RODIČE/.\n\nBřeznový VÝSLEDEK HLASOVÁNÍ:\nŽáci a rodiče si v hlasování minulý týden zvolili: Steak s pepřovou omáčkou"
    },
    {
        id: 3,
        title: "Naše škola pomáhá životnímu prostředí",
        date: "2026-03-01",
        category: "ekologie",
        icon: "fas fa-recycle",
        color: "#43e97b",
        summary: "V rámci programu Recyklohraní jsme v roce 2025 odevzdali 300 kg baterií — přispíváme k úspoře surovin a snížení emisí CO₂.",
        content: "V roce 2025 jsme se v rámci programu Recyklohraní zapojili do sběru vysloužilých baterií. Díky našemu společnému úsilí jsme odevzdali:\n\n• 300 kg baterií\n\nTím jsme přispěli k:\n• úspoře druhotných surovin,\n• snížení emisí CO₂,\n• úspoře elektrické energie,\n• omezení těžby ropy.\n\nCelkové výsledky sběru škol zapojených do Recyklohraní a jejich přínos pro životní prostředí:\n• 103,3 tun odevzdaných baterií – jejich recyklací bylo získáno 77 468 kg druhotných surovin, které byly využity při výrobě nových produktů.\n\nDěkujeme všem žákům, rodičům i zaměstnancům školy, kteří se do sběru zapojili. Společně ukazujeme, že i malé kroky mají velký význam.",
        author: "Koordinátorka Recyklohraní Ing. Marie Novotná"
    },
    {
        id: 4,
        title: "Výsledky zápisu do ZŠ pro školní rok 2026/2027",
        date: "2026-02-20",
        category: "zapisy",
        icon: "fas fa-pencil-alt",
        color: "#4facfe",
        summary: "Anonymizovaný seznam přijatých žáků zveřejněn. Všichni přijati (pouze RQ056 neměl věk). Dodatečně přijat: WC5YB.",
        content: "V rámci ochrany osobních údajů zveřejňujeme výsledek zápisu formou anonymizovaných výsledků zápisu (ZŠ).\n\nSystém zobrazí anonymizovaný seznam uchazečů z modulu Zápis do 1. ročníků ZŠ v daném školním roce. Seznam obsahuje pouze registrační číslo uchazeče a výsledek zápisu. Je určen pro účely vyvěšení výsledkové listiny zápisů do 1. ročníku ZŠ.\n\nPokud jste ztratili registrační číslo — všichni jsou přijatí (pouze RQ056 neměl věk pro zápis).\n\nDodatečně přijati: WC5YB",
        hasAttachment: true,
        attachmentName: "Anonymizované výsledky zápisu (ZŠ)",
        attachmentFormat: "PDF",
        attachmentSize: "95.42 KB"
    },
    {
        id: 5,
        title: "Silový trojboj",
        date: "2026-03-03",
        category: "sport",
        icon: "fas fa-dumbbell",
        color: "#fa709a",
        summary: "Chlapci i dívky ze všech oddělení Lvíčat zápolili v sedech-lehech, dřepech a výstupech. Nejlepší: Dominik S., Matyáš K., Míša H. a Stela M.",
        content: "V úterý 3.3. se konal v oddělení Lvíčat silový trojboj. Zúčastnilo se 15 chlapců ze všech oddělení. Nejúspěšnější byl z 1. třídy Dominik S. a Matyáš K. ze druhé třídy. Všichni se moc snažili a sedy-lehy, dřepy a výstupy na židličky zvládli na jedničku.\n\nV pátek 6.3. silový trojboj zkusila i děvčata. Byla stejně šikovná jako kluci. Největší problém dělaly výstupy na židličku, ale dřepy i sedy-lehy zvládly parádně. Nejlepší prvňačka byla Míša H. a druhačka Stela M. Zúčastnilo se 12 dívek a všechny dostaly malou odměnu.",
        author: "I. Průchová, Lvíčata",
        hasGallery: true
    },
    {
        id: 6,
        title: "Člověče nezlob se ve školní družině",
        date: "2026-02-10",
        category: "druzina",
        icon: "fas fa-dice",
        color: "#a18cd1",
        summary: "Děti ve školní družině si to rozdaly v legendárním Člověče nezlob se — posílily sebeovládání, kamarádství i spolupráci.",
        content: "Pro zpestření pobytu ve školní družině si to děti mezi sebou rozdaly v legendárním Člověče nezlob se! Nejen, že si to užily, ale také zároveň posílily své sebeovládání, kamarádství, spolupráci a jiné kladné vlastnosti.\n\n„Atmosféra houstla každou vyhozenou figurkou, ale správně hozená šestka vše zachránila" 😀",
        author: "Kločurková M.",
        hasGallery: true
    },
    {
        id: 7,
        title: "Olympijské hry nejen v Itálii",
        date: "2026-02-05",
        category: "projekt",
        icon: "fas fa-medal",
        color: "#f093fb",
        summary: "Páťáci si uspořádali vlastní Zimní olympiádu 2026 — hokej, biatlon i krasobruslení v mouce, s medailemi a fair play.",
        content: "S páťáky jsme letos nechtěli být jen diváky, kteří fandí našim olympionikům. Proto jsme se rozhodli, že si uspořádáme vlastní olympijské hry. A tak jsme slavnostně zahájili Zimní olympiádu 2026.\n\nV rámci vyučování jsme postupně uspořádali několik sportovních klání. Samozřejmě jsme museli jednotlivé disciplíny přizpůsobit prostředí třídy, ale o zábavu rozhodně nebyla nouze. Vyzkoušeli jsme si například hokej, biatlon nebo krasobruslení. I když jen v mouce. O to víc mohli sportovci ukázat nejen svoji šikovnost, ale i smysl pro humor. Nechyběla týmová spolupráce, fair play ani pořádná dávka nadšení. Každý závodník podal skvělý výkon a všichni si zaslouží obdiv za sportovní nasazení.\n\nPřed jarními prázdninami proběhlo vyhlášení výsledků a sportovci si za své výkony odnesli zasloužené medaile. Pak jsme naši třídní olympiádu slavnostně zakončili. Naše olympijské hry nám ukázaly, že i ve třídě se dají zažít velké olympijské chvíle.",
        author: "Zdeňka Matějková, Jitka Sidorjáková",
        hasGallery: true
    },
    {
        id: 8,
        title: "AJ nás baví — školní soutěž v angličtině",
        date: "2026-01-28",
        category: "soutez",
        icon: "fas fa-language",
        color: "#38f9d7",
        summary: "Žáci 4. a 5. tříd soutěžili v angličtině — písemný test, ústní prezentace i čtení. Vítězové Sebastián Gemov a Marek Mihok postupují do okresního kola.",
        content: "Ve čtvrtek na naší škole proběhla soutěž v anglickém jazyce s názvem „AJ nás baví", které se zúčastnili žáci čtvrtých a pátých tříd.\n\nSoutěžící nejprve absolvovali písemný test, ve kterém prokázali své znalosti slovní zásoby, gramatiky i porozumění textu. Poté následovala ústní část. Každý žák se představil v anglickém jazyce, následně si vylosoval téma, o kterém samostatně hovořil. Další částí bylo čtení anglického textu s otázkami, které ověřily porozumění.\n\nVšichni soutěžící podali velmi pěkné výkony a bylo vidět, že se na soutěž pečlivě připravovali. Proto si za svou snahu odnesli diplom a malou odměnu. Ti nejlepší žáci, Sebastián Gemov ze 4.B a Marek Mihok z 5.A, kteří se umístili na 1. místě, postupují do okresního kola v Chebu.\n\nDěkujeme všem soutěžícím. Postupujícím budeme držet palce v okresním kole a přejeme jim hodně úspěchů.",
        author: "Zdeňka Matějková, Nikola Salvová"
    },
    {
        id: 9,
        title: "Beseda s myslivcem",
        date: "2026-02-19",
        category: "vzdelavani",
        icon: "fas fa-paw",
        color: "#38f9d7",
        summary: "Pan Faměra přijel s loveckým pejskem Aslanem a vycpanými zvířaty — děti se dozvěděly o myslivosti, lesní zvěři i jarních mláďatech.",
        content: "Na podzim jsme ve školní družině sbírali kaštany a žaludy, které jsme pak dali panu Faměrovi pro zvířata. Pan Faměra byl moc rád a jako odměnu si pro nás připravil besedu.\n\nVe čtvrtek 19. února přijel i s loveckým pejskem — Aslanem a přivezl spoustu vycpaných zvířat: muflona, siku, různé parohy a rohy... Nejprve řekl dětem, co je to myslivost, dále, že na jaře se rodí mláďata. Kdo u nás v lese žije: jelen, divoké prase, zajíc, srnka, ježek, veverka, daněk, muflon... Co zvířata jí. Kde bydlí jezevec atd.",
        hasGallery: true
    },
    {
        id: 10,
        title: "Exkurze do Techmanie Plzeň",
        date: "2026-01-15",
        category: "akce",
        icon: "fas fa-rocket",
        color: "#fee140",
        summary: "Páťáci navštívili plzeňské science centrum a planetárium s programem „Země, Mars a 6 statečných" o cestování sluneční soustavou.",
        content: "Žáci pátých tříd se vydali na exkurzi do science centra Techmania v Plzni. Součástí návštěvy byl program v planetáriu nazvaný „Země, Mars a 6 statečných", který interaktivně představil cestování naší sluneční soustavou."
    }
];

// ===== DEFAULT SECTION CONTENT =====
const DEFAULT_CONTENT = {
    hero: {
        title: 'Tvořivá škola —<br><span>Šance pro každého</span>',
        subtitle: 'Základní škola Úšovice, Mariánské Lázně<br>Školní náměstí 472/3, 353 01 Mariánské Lázně',
        stats: [
            { count: 565, label: 'žáků' },
            { count: 65, label: 'let tradice' },
            { count: 9, label: 'ročníků' },
            { count: 50, label: 'pedagogů' }
        ],
        btnPrimary: { text: 'Poznejte naši školu', link: '#about' },
        btnSecondary: { text: 'Aktuality', link: '#news' }
    },
    leadership: [
        { name: 'Mgr. Zdeněk Třešňák', role: 'Ředitel školy', icon: 'fas fa-user-tie', contact: 'reditel@zsusovice.cz' },
        { name: 'Mgr. Jan Matějovský', role: 'Zástupce ředitele', icon: 'fas fa-user', contact: '' },
        { name: 'Mgr. Vlasta Matysová', role: 'Zástupkyně ředitele', icon: 'fas fa-user', contact: '' },
        { name: 'Jana Záhorová', role: 'ICT koordinátorka', icon: 'fas fa-laptop', contact: '' }
    ],
    enrollment: {
        title: '<i class="fas fa-pencil-alt"></i> Zápis do 1. tříd 2026/2027',
        text: 'Výsledky zápisu byly zveřejněny. Všichni uchazeči byli přijati s výjimkou jednoho nezletilého žadatele (RQ056). Anonymizovaný seznam přijatých žáků je k dispozici na úřední desce.',
        btnText: 'Více informací',
        btnLink: '#documents'
    },
    projects: [
        { title: 'OP JAK — Šablony', desc: 'Operační program Jan Amos Komenský. Profesní rozvoj pedagogů, doučování, volnočasové aktivity a spolupráce s rodiči.', badge: 'EU', icon: 'fas fa-european-union' },
        { title: 'EU peníze školám', desc: 'Zlepšování podmínek vzdělávání na základních školách prostřednictvím ICT a inovativních metod.', badge: 'EU' },
        { title: 'Využíváme ICT ve výuce', desc: 'Integrace informačních a komunikačních technologií do všech předmětů.', badge: 'ICT' },
        { title: 'Komenský a my', desc: 'Projekt zaměřený na poznávání místních tradic a dějin regionu.', badge: 'Region' },
        { title: 'Národní plán obnovy', desc: 'Prevence digitální propasti a podpora digitální transformace školy.', badge: 'NPO' },
        { title: 'Comenius', desc: 'Mezinárodní partnerství škol podporující mobilitu a spolupráci v EU.', badge: 'EU' }
    ],
    staff: {
        primary: [
            { name: 'Mgr. Zdeňka Matějková', subject: 'třídní učitelka 5.A' },
            { name: 'Mgr. Jitka Sidorjáková', subject: 'třídní učitelka 5.B' },
            { name: 'Mgr. Nikola Salvová', subject: 'učitelka AJ' },
            { name: 'Mgr. Jana Sahánková', subject: 'výchovná poradkyně' }
        ],
        secondary: [
            { name: 'Mgr. Jan Matějovský', subject: 'zástupce ředitele, II. stupeň' },
            { name: 'Mgr. Vlasta Matysová', subject: 'zástupkyně ředitele' }
        ],
        assistants: [
            { name: 'Asistent pedagoga 1', subject: 'I. stupeň' },
            { name: 'Asistent pedagoga 2', subject: 'II. stupeň' }
        ],
        afterschool: [
            { name: 'Marcela Mašlonková', subject: 'vedoucí vychovatelka' },
            { name: 'Miloslava Kločurková', subject: 'vychovatelka' },
            { name: 'Ivana Průchová', subject: 'vychovatelka' }
        ]
    },
    plans: [
        { title: 'Roční plán', desc: 'Plán aktivit a událostí na celý školní rok 2025/2026', icon: 'fas fa-calendar-alt', tag: '2025/2026', link: '#' },
        { title: 'Měsíční plán', desc: 'Aktuální měsíční plán akcí a důležitých termínů', icon: 'fas fa-calendar-week', tag: 'Aktuální', link: '#' },
        { title: 'Rozvrhy hodin', desc: 'Rozvrhy tříd dostupné přes systém Bakaláři', icon: 'fas fa-table', tag: 'Bakaláři', link: 'https://zsusovice.bakalari.cz/timetable/public' },
        { title: 'Výroční zpráva', desc: 'Výroční zpráva o činnosti školy za uplynulý školní rok', icon: 'fas fa-chart-bar', tag: 'PDF', link: '#' }
    ],
    poradenstvi: {
        jak: '<h3><i class="fas fa-door-open"></i> Jak do poradny</h3><p>Školní poradenské pracoviště (ŠPP) poskytuje bezplatné poradenské služby žákům, rodičům i pedagogům.</p><ul><li>Kontaktujte třídního učitele nebo přímo školního poradce</li><li>Domluvte si schůzku telefonicky nebo e-mailem</li><li>Konzultace probíhají v konzultačních hodinách nebo dle dohody</li></ul>',
        sluzby: '<h3><i class="fas fa-hands-helping"></i> Poradenské služby</h3><div class="sluzby-list"><div class="sluzba-item"><i class="fas fa-compass"></i><div><strong>Kariérové poradenství</strong><p>Pomoc při volbě dalšího vzdělávání a profesní orientace</p></div></div><div class="sluzba-item"><i class="fas fa-shield-alt"></i><div><strong>Prevence</strong><p>Prevence rizikového chování, šikany a závislostí</p></div></div><div class="sluzba-item"><i class="fas fa-brain"></i><div><strong>Psychologická podpora</strong><p>Podpora žáků s obtížemi v učení i osobním životě</p></div></div><div class="sluzba-item"><i class="fas fa-universal-access"></i><div><strong>Asistenti pedagoga</strong><p>Podpora žáků se speciálními vzdělávacími potřebami</p></div></div></div>'
    },
    organy: {
        krpds: '<h3>KRPDŠ</h3><p>Klub rodičů a přátel dětí školy podporuje mimoškolní aktivity a akce školy.</p><ul><li>Předsedkyně: Vlasta Nováková</li><li>Příspěvek: 250 Kč / rok</li><li>Účet KRPDŠ: 115-4310390217/0100 (KB)</li></ul>',
        parlament: '<h3>Žákovský parlament</h3><p>Žákovský parlament umožňuje žákům aktivně se podílet na chodu školy.</p><ul><li>Zástupci z každé třídy II. stupně</li><li>Setkání 1× měsíčně</li><li>Návrhy a připomínky žáků</li></ul>'
    },
    skolniRad: '<p>Školní řád stanoví práva a povinnosti žáků, pravidla vzájemných vztahů s pedagogy a pravidla provozu a vnitřního režimu školy.</p>',
    kontaktExtra: [
        { title: 'Škola', icon: 'fas fa-school', content: '<li><i class="fas fa-map-marker-alt"></i> Školní náměstí 472/3, 353 01 Mariánské Lázně</li><li><i class="fas fa-phone"></i> +420 354 624 654</li><li><i class="fas fa-envelope"></i> <a href="mailto:sekretariat@zsusovice.cz">sekretariat@zsusovice.cz</a></li><li><i class="fas fa-database"></i> DS: wkkmpmx</li><li><i class="fas fa-building"></i> IČ: 70997543</li>' },
        { title: 'Vedení školy', icon: 'fas fa-user-tie', content: '<li><i class="fas fa-user"></i> Ředitel: Mgr. Zdeněk Třešňák</li><li><i class="fas fa-envelope"></i> <a href="mailto:reditel@zsusovice.cz">reditel@zsusovice.cz</a></li><li><i class="fas fa-user"></i> ZŘ: Mgr. Jan Matějovský</li><li><i class="fas fa-user"></i> ZŘ: Mgr. Vlasta Matysová</li>' },
        { title: 'Konzultační hodiny', icon: 'fas fa-clock', content: '<li><i class="fas fa-calendar"></i> Po dohodě s vyučujícím</li><li><i class="fas fa-phone"></i> +420 354 624 654</li><li><i class="fas fa-info-circle"></i> Konzultace lze sjednat přes Bakaláře</li>' },
        { title: 'GDPR', icon: 'fas fa-shield-alt', content: '<li><i class="fas fa-user-shield"></i> Pověřenec pro ochranu osobních údajů</li><li><i class="fas fa-envelope"></i> Kontakt na pověřence je dostupný v kanceláři školy</li>' },
        { title: 'ICT / Bakaláři', icon: 'fas fa-laptop', content: '<li><i class="fas fa-user"></i> Jana Záhorová — ICT koordinátorka</li><li><i class="fas fa-key"></i> Problémy s heslem do Bakalářů</li><li><i class="fas fa-envelope"></i> <a href="mailto:zahorova@zsusovice.cz">zahorova@zsusovice.cz</a></li>' },
        { title: 'Školní e-mail', icon: 'fas fa-envelope-open-text', content: '<li><i class="fas fa-at"></i> Přihlášení na outlook.office365.com</li><li><i class="fas fa-info-circle"></i> Žákovský e-mail pro komunikaci se školou</li>' },
        { title: 'Whistleblowing', icon: 'fas fa-bullhorn', content: '<li><i class="fas fa-link"></i> <a href="https://app.whispero.eu/f/zk8hwcksj18khssq" target="_blank">Oznámení přes Whispero</a></li><li><i class="fas fa-info-circle"></i> Anonymní oznamovací systém dle zákona</li>' }
    ],
    ukraine: {
        header: 'Україна / Pair ukrajinských žáků',
        cards: [
            { title: 'Зарахування учнів / Zápis žáků', icon: 'fas fa-user-plus', content: '<p>Zákonný zástupce dítěte se dostaví do školy s dítětem a s dokladem totožnosti.</p><ol><li>Přijďte do kanceláře školy v pracovních dnech 8:00–14:00</li><li>Přineste doklad totožnosti dítěte i zákonného zástupce</li><li>Vyplníme společně přihlášku k základnímu vzdělávání</li></ol>' },
            { title: 'Doklady / Документи', icon: 'fas fa-file-alt', content: '<p>Potřebné doklady pro zápis:</p><ul><li>Doklad totožnosti dítěte (pas, ID)</li><li>Doklad totožnosti zákonného zástupce</li><li>Vízum nebo povolení k pobytu</li><li>Dokumenty o předchozím vzdělávání (pokud máte)</li></ul>' },
            { title: 'Контакт / Kontakt', icon: 'fas fa-phone-alt', content: '<ul class="ua-contact-list"><li><i class="fas fa-phone"></i> +420 354 624 654</li><li><i class="fas fa-envelope"></i> sekretariat@zsusovice.cz</li><li><i class="fas fa-map-marker-alt"></i> Školní náměstí 472/3, Mariánské Lázně</li><li><i class="fas fa-clock"></i> Po–Pá: 8:00 – 14:00</li></ul>' }
        ]
    },
    footer: {
        desc: 'Základní škola Úšovice, Mariánské Lázně — Tvořivá škola, šance pro každého.',
        links: [
            { text: 'O škole', href: '#about' },
            { text: 'Aktuality', href: '#news' },
            { text: 'Družina', href: '#druzina' },
            { text: 'Jídelna', href: '#jidelna' },
            { text: 'Kontakt', href: '#kontakt-extra' },
            { text: 'Bakaláři', href: 'https://bakalari.zsusovice.cz' }
        ],
        hours: 'Po–Pá: 7:30 – 16:00'
    }
};

// Initialize content in localStorage if not present
function initializeContent() {
    if (!localStorage.getItem('zs_articles')) {
        localStorage.setItem('zs_articles', JSON.stringify(DEFAULT_ARTICLES));
    }
}

function getArticles() {
    initializeContent();
    return JSON.parse(localStorage.getItem('zs_articles'));
}

function saveArticles(articles) {
    localStorage.setItem('zs_articles', JSON.stringify(articles));
}

function getEditableContent(key) {
    const content = localStorage.getItem('zs_editable_' + key);
    return content ? JSON.parse(content) : null;
}

function saveEditableContent(key, value) {
    localStorage.setItem('zs_editable_' + key, JSON.stringify(value));
}

function getSectionContent(section) {
    const stored = localStorage.getItem('zs_section_' + section);
    if (stored) return JSON.parse(stored);
    return DEFAULT_CONTENT[section] || null;
}

function saveSectionContent(section, data) {
    localStorage.setItem('zs_section_' + section, JSON.stringify(data));
}

function getAllSectionKeys() {
    return Object.keys(DEFAULT_CONTENT);
}
