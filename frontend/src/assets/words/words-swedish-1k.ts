// 1100 something common words in Swedish.
const words: Array<string> = [
  "andra",
  "arton",
  "bakre",
  "brunch",
  "decimeter",
  "elva",
  "ett",
  "fem",
  "femte",
  "femtio",
  "femton",
  "fjorton",
  "fjärde",
  "främre",
  "fyra",
  "första",
  "hekto",
  "hela",
  "hundra",
  "hörsel",
  "känsel",
  "milligram",
  "millimeter",
  "morbror",
  "nio",
  "sex",
  "sexa",
  "sexton",
  "sju",
  "syd",
  "sydväst",
  "sydöst",
  "syssling",
  "tia",
  "tio",
  "tjugo",
  "tolv",
  "tre",
  "två",
  "veckodag",
  "åtta",
  "änkeman",
  "änkling",
  "ögonlock",
  "och",
  "ha",
  "dess",
  "det",
  "en",
  "som",
  "på",
  "av",
  "för",
  "att",
  "kunna",
  "skola",
  "jag",
  "inte",
  "med",
  "till",
  "liten",
  "den",
  "ett",
  "analog",
  "unna",
  "om",
  "vi",
  "men",
  "man",
  "de",
  "få",
  "så",
  "som",
  "sig",
  "han",
  "de",
  "bli",
  "komma",
  "det",
  "sin",
  "eller",
  "från",
  "mycket",
  "vilja",
  "all",
  "göra",
  "om",
  "annan",
  "du",
  "någon",
  "finna",
  "ta",
  "när",
  "se",
  "måste",
  "detta",
  "stor",
  "nu",
  "gå",
  "säga",
  "den",
  "vad",
  "år",
  "äga",
  "under",
  "betyda",
  "också",
  "där",
  "då",
  "min",
  "böra",
  "hur",
  "mig",
  "mot",
  "bara",
  "vilken",
  "ut",
  "ny",
  "vid",
  "än",
  "bra",
  "ingen",
  "dem",
  "efter",
  "upp",
  "hon",
  "lite",
  "denna",
  "in",
  "mycket",
  "över",
  "ge",
  "vår",
  "del",
  "här",
  "även",
  "skriva",
  "tid",
  "ju",
  "riva",
  "börja",
  "hel",
  "dag",
  "själv",
  "människa",
  "land",
  "svensk",
  "fråga",
  "oss",
  "tro",
  "el",
  "tycka",
  "kommentar",
  "veta",
  "idag",
  "försöka",
  "behöva",
  "samma",
  "mellan",
  "känna",
  "läsa",
  "ro",
  "kanske",
  "lik",
  "låta",
  "olik",
  "sådan",
  "sätt",
  "hans",
  "din",
  "gång",
  "stå",
  "inom",
  "visa",
  "använda",
  "vända",
  "hålla",
  "genom",
  "helt",
  "fler",
  "utan",
  "väl",
  "barn",
  "enligt",
  "tänka",
  "ni",
  "viktig",
  "ring",
  "eftersom",
  "liv",
  "deras",
  "värld",
  "viss",
  "dock",
  "egen",
  "folk",
  "regering",
  "fram",
  "honom",
  "söka",
  "dig",
  "utan",
  "sak",
  "hög",
  "länge",
  "person",
  "ligga",
  "son",
  "både",
  "just",
  "lägga",
  "antal",
  "redan",
  "kvinna",
  "problem",
  "fall",
  "man",
  "aldrig",
  "ofta",
  "varje",
  "artikel",
  "anse",
  "öva",
  "lag",
  "slag",
  "tal",
  "åt",
  "nog",
  "bok",
  "varför",
  "handla",
  "gammal",
  "bild",
  "sida",
  "så",
  "öka",
  "därför",
  "sen",
  "god",
  "hos",
  "alltid",
  "skapa",
  "arbete",
  "kapa",
  "samt",
  "blogg",
  "innan",
  "som",
  "ur",
  "gälla",
  "verka",
  "tala",
  "bära",
  "för",
  "väg",
  "samhälle",
  "alltså",
  "stat",
  "stad",
  "höra",
  "innebära",
  "företag",
  "möjlighet",
  "ord",
  "politisk",
  "välja",
  "er",
  "förstå",
  "inlägg",
  "ägg",
  "te",
  "spela",
  "lika",
  "hitta",
  "tag",
  "dra",
  "leda",
  "gärna",
  "ändå",
  "förslag",
  "lyckas",
  "dessutom",
  "område",
  "lag",
  "svår",
  "lära",
  "sätta",
  "plats",
  "lång",
  "lämna",
  "bygga",
  "politik",
  "tidigare",
  "kalla",
  "peng",
  "väldigt",
  "leva",
  "ställa",
  "följa",
  "vecka",
  "ja",
  "ske",
  "parti",
  "kräva",
  "utveckling",
  "faktiskt",
  "ena",
  "svara",
  "ner",
  "fortsätta",
  "skola",
  "bruka",
  "mål",
  "par",
  "sent",
  "ekonomisk",
  "dålig",
  "namn",
  "igen",
  "verkligen",
  "mena",
  "fortfarande",
  "grupp",
  "beslut",
  "enda",
  "bort",
  "slå",
  "möjlig",
  "många",
  "hända",
  "ämna",
  "endast",
  "miljon",
  "vidare",
  "ganska",
  "svar",
  "varenda",
  "istället",
  "först",
  "arbeta",
  "heller",
  "riktigt",
  "hand",
  "uppgift",
  "fungera",
  "beta",
  "köpa",
  "nästan",
  "bra",
  "bland",
  "december",
  "sitta",
  "precis",
  "hennes",
  "krig",
  "tillsammans",
  "henne",
  "intressant",
  "val",
  "kyrka",
  "egentligen",
  "inför",
  "historia",
  "jobb",
  "berätta",
  "vanlig",
  "rätta",
  "januari",
  "information",
  "flest",
  "ung",
  "en",
  "tillbaka",
  "film",
  "ibland",
  "medan",
  "slut",
  "massa",
  "tanke",
  "akt",
  "procent",
  "månad",
  "sista",
  "ätt",
  "sluta",
  "verksamhet",
  "rätt",
  "samtidigt",
  "emot",
  "stöd",
  "familj",
  "vem",
  "åka",
  "betala",
  "kommun",
  "resultat",
  "utveckla",
  "föra",
  "hjälpa",
  "nästa",
  "nära",
  "nej",
  "text",
  "exempel",
  "särskilt",
  "debatt",
  "situation",
  "europeisk",
  "form",
  "orm",
  "råd",
  "november",
  "makt",
  "social",
  "vinna",
  "kvar",
  "system",
  "vänta",
  "tidig",
  "åtgärd",
  "krav",
  "skillnad",
  "riksdag",
  "internationell",
  "nationell",
  "jobba",
  "klara",
  "typ",
  "kring",
  "båda",
  "cirka",
  "tur",
  "polis",
  "medium",
  "låg",
  "varandra",
  "mun",
  "ansvar",
  "roll",
  "regel",
  "oktober",
  "prata",
  "organisation",
  "medlem",
  "fråga",
  "anmäla",
  "nå",
  "bo",
  "krona",
  "stämma",
  "rättighet",
  "sedan",
  "bakom",
  "därmed",
  "med",
  "hus",
  "vän",
  "dela",
  "februari",
  "kort",
  "grund",
  "runt",
  "framtid",
  "köra",
  "etikett",
  "fri",
  "behov",
  "timme",
  "hoppas",
  "ensam",
  "snart",
  "rätt",
  "förklara",
  "ledning",
  "intresse",
  "tvinga",
  "påverka",
  "anledning",
  "titta",
  "minska",
  "däremot",
  "direkt",
  "ekonomi",
  "bestämma",
  "skicka",
  "trots",
  "åsikt",
  "diskussion",
  "rad",
  "faktum",
  "tidning",
  "mening",
  "utanför",
  "rätt",
  "gemensam",
  "klar",
  "juni",
  "is",
  "bil",
  "myndighet",
  "nummer",
  "allmän",
  "musik",
  "ändra",
  "träffa",
  "ihop",
  "diskutera",
  "driva",
  "sälja",
  "sakna",
  "program",
  "ifrån",
  "länka",
  "kunskap",
  "snabbt",
  "amerikansk",
  "tyda",
  "särskild",
  "början",
  "skäl",
  "fin",
  "genomföra",
  "liksom",
  "via",
  "före",
  "dom",
  "risk",
  "enkel",
  "alls",
  "pris",
  "räkna",
  "beskriva",
  "hem",
  "möta",
  "såsom",
  "gram",
  "förra",
  "tjänst",
  "heta",
  "kultur",
  "äta",
  "syfte",
  "princip",
  "flytta",
  "ute",
  "utgöra",
  "politiker",
  "lätt",
  "förälder",
  "marknad",
  "nämligen",
  "tydlig",
  "utbildning",
  "röra",
  "nivå",
  "april",
  "mängd",
  "betydelse",
  "kristen",
  "dö",
  "mars",
  "allt",
  "kväll",
  "bildning",
  "länk",
  "växa",
  "per",
  "offentlig",
  "såväl",
  "våga",
  "vatten",
  "håll",
  "mänsklig",
  "demokrati",
  "fatta",
  "jord",
  "känsla",
  "förändring",
  "nämna",
  "tyvärr",
  "enskild",
  "rätt",
  "punkt",
  "ändring",
  "mission",
  "igår",
  "kommission",
  "ort",
  "anta",
  "spel",
  "språk",
  "föreslå",
  "igenom",
  "undra",
  "eget",
  "möte",
  "mat",
  "gräns",
  "lyssna",
  "delta",
  "samarbete",
  "annars",
  "falla",
  "nära",
  "rum",
  "ungefär",
  "starta",
  "inse",
  "internet",
  "hov",
  "öppen",
  "bidra",
  "död",
  "luta",
  "öga",
  "säkert",
  "ämne",
  "få",
  "augusti",
  "projekt",
  "övrig",
  "dels",
  "positiv",
  "rolig",
  "port",
  "bero",
  "kropp",
  "minnas",
  "handling",
  "rösta",
  "riktig",
  "rapport",
  "lösning",
  "personlig",
  "kommentera",
  "gilla",
  "bryta",
  "hjälp",
  "juli",
  "innehålla",
  "liknande",
  "tillfälle",
  "känd",
  "forskning",
  "kraft",
  "brott",
  "exempelvis",
  "röst",
  "bjuda",
  "hävda",
  "hamna",
  "effekt",
  "enhet",
  "kontakt",
  "takt",
  "värde",
  "förutsättning",
  "sats",
  "hinna",
  "sanning",
  "religion",
  "källa",
  "må",
  "kostnad",
  "medborgare",
  "förhållande",
  "far",
  "miljard",
  "ungdom",
  "släppa",
  "enbart",
  "drag",
  "verklighet",
  "författare",
  "tillgång",
  "nödvändig",
  "full",
  "frihet",
  "passa",
  "lokal",
  "ytterligare",
  "öppna",
  "införa",
  "ledare",
  "mamma",
  "sammanhang",
  "svensk",
  "hemma",
  "produkt",
  "därefter",
  "efter",
  "match",
  "tro",
  "alldeles",
  "sann",
  "uppfattning",
  "demokrat",
  "bolag",
  "erfarenhet",
  "kritik",
  "grad",
  "jude",
  "vacker",
  "erbjuda",
  "kamp",
  "period",
  "modern",
  "spelare",
  "elev",
  "utredning",
  "ingå",
  "kung",
  "bestå",
  "katt",
  "konstatera",
  "dit",
  "klart",
  "nuvarande",
  "styra",
  "förlora",
  "vit",
  "klocka",
  "påstå",
  "skatt",
  "besluta",
  "befolkning",
  "avse",
  "ro",
  "privat",
  "steg",
  "art",
  "stödja",
  "ond",
  "plan",
  "resa",
  "utom",
  "hund",
  "syn",
  "glömma",
  "avtal",
  "lek",
  "kul",
  "natt",
  "förändra",
  "ange",
  "någonting",
  "förstås",
  "individ",
  "älska",
  "motion",
  "glad",
  "ned",
  "dator",
  "miljö",
  "ek",
  "åtminstone",
  "presentera",
  "stanna",
  "byta",
  "alternativ",
  "minut",
  "ingenting",
  "uppleva",
  "samla",
  "svart",
  "bakgrund",
  "skott",
  "kärlek",
  "metod",
  "äldre",
  "säker",
  "borgare",
  "gud",
  "insats",
  "tysk",
  "kontroll",
  "lösa",
  "kolla",
  "fylla",
  "bestämmelse",
  "ris",
  "drabba",
  "nät",
  "teknik",
  "resurs",
  "försök",
  "fara",
  "tjäna",
  "argument",
  "behandla",
  "ren",
  "fru",
  "sjuk",
  "våld",
  "utföra",
  "ställning",
  "främst",
  "räcka",
  "bättre",
  "fundera",
  "visst",
  "sommar",
  "rörelse",
  "kund",
  "villkor",
  "högt",
  "president",
  "emellertid",
  "händelse",
  "uppstå",
  "acceptera",
  "huvud",
  "sök",
  "snabb",
  "framför",
  "ande",
  "bilda",
  "orsak",
  "försvinna",
  "fel",
  "innehåll",
  "natur",
  "begrepp",
  "konflikt",
  "tack",
  "djur",
  "chans",
  "fel",
  "läge",
  "sprida",
  "växt",
  "förutom",
  "styck",
  "utskott",
  "muslim",
  "ordning",
  "uppdrag",
  "mark",
  "säkerhet",
  "linje",
  "bank",
  "önska",
  "givetvis",
  "studie",
  "fredag",
  "lärare",
  "statlig",
  "söndag",
  "fel",
  "speciellt",
  "röd",
  "hot",
  "verk",
  "publicera",
  "stund",
  "tillhöra",
  "omfatta",
  "material",
  "pelare",
  "hjärta",
  "knappast",
  "befinna",
  "part",
  "trevlig",
  "höst",
  "skilja",
  "ens",
  "förmåga",
  "döda",
  "stånd",
  "peka",
  "bedömning",
  "ringa",
  "betrakta",
  "by",
  "utifrån",
  "brist",
  "hänga",
  "tillräckligt",
  "måndag",
  "aktuell",
  "någonsin",
  "tillåta",
  "universitet",
  "konsekvens",
  "ställe",
  "hård",
  "majoritet",
  "domstol",
  "ordförande",
  "lördag",
  "låt",
  "herr",
  "sekvens",
  "förekomma",
  "stoppa",
  "nyhet",
  "journalist",
  "kris",
  "rycka",
  "trycka",
  "betydligt",
  "kosta",
  "band",
  "numera",
  "tillstånd",
  "värd",
  "igen",
  "imorgon",
  "klass",
  "uttrycka",
  "slutsats",
  "global",
  "mitt",
  "stol",
  "effektiv",
  "resa",
  "förbättra",
  "rädda",
  "list",
  "relation",
  "agera",
  "central",
  "flera",
  "undersökning",
  "uppnå",
  "krona",
  "perspektiv",
  "plötsligt",
  "naturlig",
  "ålder",
  "process",
  "uttryck",
  "lista",
  "allra",
  "sökning",
  "ökning",
  "rysk",
  "jämföra",
  "tills",
  "intresserad",
  "totalt",
  "hantera",
  "förvänta",
  "medel",
  "vika",
  "döma",
  "besöka",
  "hem",
  "var",
  "täcka",
  "borgerlig",
  "inleda",
  "helg",
  "undvika",
  "ryck",
  "tryck",
  "tydligen",
  "aktiv",
  "höja",
  "pappa",
  "religiös",
  "råka",
  "verklig",
  "rent",
  "fantastisk",
  "upptäcka",
  "erkänna",
  "helig",
  "lön",
  "historisk",
  "rest",
  "halv",
  "andel",
  "besök",
  "teknisk",
  "kasta",
  "hemsida",
  "bedöma",
  "torsdag",
  "tillväxt",
  "läsare",
  "forskare",
  "bidrag",
  "onsdag",
  "vilja",
  "sol",
  "analys",
  "ovan",
  "militär",
  "toppa",
  "sort",
  "fördel",
  "skydda",
  "nyttja",
  "utnyttja",
  "teori",
  "fransk",
  "pågå",
  "samling",
  "flertal",
  "snarare",
  "försvara",
  "modell",
  "skön",
  "vapen",
  "således",
  "förening",
  "lyfta",
  "eftermiddag",
  "soldat",
  "märka",
  "gemenskap",
  "ösa",
  "fast",
  "styrka",
  "ersätta",
  "kille",
  "vård",
  "fullt",
  "ägna",
  "oavsett",
  "poäng",
  "satsa",
  "moderat",
  "rida",
  "jo",
  "tisdag",
  "död",
  "allmänt",
  "avsluta",
  "sova",
  "inne",
  "flicka",
  "sedan",
  "total",
  "allvarlig",
  "fram",
  "ljus",
  "sjukdom",
  "unge",
  "vikt",
  "rik",
  "region",
  "samtal",
  "negativ",
  "mycket",
  "igång",
  "vändning",
  "antingen",
  "föda",
  "åter",
  "arbetare",
  "skjuta",
  "tradition",
  "hämta",
  "församling",
  "hav",
  "energi",
  "bred",
  "fast",
  "påpeka",
  "bättra",
  "skaffa",
  "utgå",
  "samtlig",
  "stärka",
  "läkare",
  "fattig",
  "grepp",
  "hej",
  "utsätta",
  "spännande",
  "fort",
  "sikt",
  "revolution",
  "brev",
  "personal",
  "skada",
  "illa",
  "kämpa",
  "alltför",
  "tecken",
  "siffra",
  "tydligt",
  "ännu",
  "hårt",
  "absolut",
  "eka",
  "engelsk",
  "praktik",
  "förmodligen",
  "hoppa",
  "morgon",
  "tjej",
  "konstig",
  "union",
  "kommande",
  "avgöra",
  "chef",
  "vis",
  "strid",
  "sända",
  "missa",
  "bedriva",
  "anföra",
  "varm",
  "hit",
  "berättelse",
  "produktion",
  "kapitel",
  "hindra",
  "konst",
  "speciell",
  "allvar",
  "grön",
  "vår",
  "meddela",
  "omöjlig",
];

export default words;