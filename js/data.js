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
        title: "Březnový výběr jídla — hlasování",
        date: "2026-03-05",
        category: "jidelna",
        icon: "fas fa-utensils",
        color: "#f5576c",
        summary: "Žáci a rodiče hlasovali o speciální březnové jídlo ve školní jídelně. Zvítězil „Steak s pepřovou omáčkou"!",
        content: "V rámci pravidelné ankety si žáci a rodiče mohli vybrat speciální jídlo do březnového jídelníčku. Z nabídky několika pokrmů zvítězil steak s pepřovou omáčkou, který bude zařazen do menu."
    },
    {
        id: 3,
        title: "Recyklohraní — Den Země 2026",
        date: "2026-03-01",
        category: "ekologie",
        icon: "fas fa-recycle",
        color: "#43e97b",
        summary: "Škola se zapojila do programu sběru baterií. Den Země proběhne 17. dubna 2026 v 10:00 — úklid okolí školy a ekologické aktivity.",
        content: "Naše škola je aktivním účastníkem celostátního programu Recyklohraní zaměřeného na sběr baterií a elektroodpadu. K oslavě Dne Země připravujeme na 17. dubna 2026 od 10:00 velký úklid okolí školy spojený s ekologickými aktivitami pro žáky všech ročníků."
    },
    {
        id: 4,
        title: "Výsledky zápisu do 1. tříd 2026/2027",
        date: "2026-02-20",
        category: "zapisy",
        icon: "fas fa-pencil-alt",
        color: "#4facfe",
        summary: "Anonymizovaný seznam přijatých žáků byl zveřejněn. Všichni uchazeči přijati s výjimkou jednoho nezletilého žadatele (RQ056).",
        content: "Výsledky zápisu do prvních tříd pro školní rok 2026/2027 byly zveřejněny na úřední desce školy. Všichni uchazeči byli přijati s výjimkou jednoho žadatele (evidenční číslo RQ056), který nesplnil věkovou podmínku."
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
