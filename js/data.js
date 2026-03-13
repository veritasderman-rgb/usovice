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
