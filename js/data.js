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
        title: "Soutěž ve fyzické zdatnosti",
        date: "2026-02-15",
        category: "sport",
        icon: "fas fa-dumbbell",
        color: "#fa709a",
        summary: "Chlapci a dívky soutěžili v sedech-lehech, dřepech a výstupech. Nejlepší: Dominik S. a Matyáš K. (chlapci), Míša H. a Stela M. (dívky).",
        content: "V rámci sportovního dne proběhla soutěž ve fyzické zdatnosti. Žáci zápolili v disciplínách sedy-lehy, dřepy a výstupy. Mezi chlapci zvítězili Dominik S. a Matyáš K., mezi dívkami Míša H. a Stela M."
    },
    {
        id: 6,
        title: "Zimní olympiáda — projekt 5. tříd",
        date: "2026-02-10",
        category: "projekt",
        icon: "fas fa-skiing",
        color: "#a18cd1",
        summary: "Páťáci vytvořili třídní olympijské hry s modifikovaným hokejem, biatlonem a krasobruslařskou soutěží včetně medailových ceremoniálů.",
        content: "Žáci pátých tříd připravili projektový den inspirovaný zimními olympijskými hrami. Ve třídách proběhly modifikované verze hokeje, biatlonu a krasobruslení. Vítězové byli oceněni na slavnostních medailových ceremoniálech."
    },
    {
        id: 7,
        title: "„AJ nás baví" — soutěž v angličtině",
        date: "2026-02-05",
        category: "soutez",
        icon: "fas fa-language",
        color: "#f093fb",
        summary: "Soutěž pro žáky 4. a 5. tříd zahrnovala písemné testy, ústní prezentace a čtení s porozuměním.",
        content: "Tradiční školní soutěž v anglickém jazyce „AJ nás baví" se konala pro žáky 4. a 5. tříd. Soutěžilo se ve třech kategoriích: písemný test, ústní prezentace a čtení s porozuměním. Nejlepší žáci postupují do regionálního kola."
    },
    {
        id: 8,
        title: "Beseda s myslivcem",
        date: "2026-01-28",
        category: "vzdelavani",
        icon: "fas fa-paw",
        color: "#38f9d7",
        summary: "Přednáška o lesní zvěři a jarní době rozmnožování s ukázkami loveckého psa a preparované zvěře.",
        content: "V rámci výuky přírodovědy navštívil naši školu myslivec s loveckým psem. Žáci se dozvěděli o životě lesní zvěře, jarní době rozmnožování a měli možnost vidět preparáty různých živočichů."
    },
    {
        id: 9,
        title: "Sférické kino — 360° projekce",
        date: "2026-01-20",
        category: "projekt",
        icon: "fas fa-globe",
        color: "#667eea",
        summary: "Pět tříd zažilo imerzivní projekci mikroorganismů a systémů lidského těla díky projektu OP JAK Šablony II.",
        content: "Díky projektu OP JAK Šablony II si žáci pěti tříd mohli vyzkoušet imerzivní sférické kino s 360° projekcí. Program byl zaměřen na mikroorganismy a soustavy lidského těla, což přineslo zcela nový rozměr výuky přírodních věd."
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
