import { product } from '../../config/product';
import type { PagesDict, RelatedId } from './en';

export const slPages: PagesDict = {
  common: {
    faqTitle: 'Vprašanja',
    faqEyebrow: 'Pogosta vprašanja',
    relatedTitle: 'Beri naprej',
    checkedOn: (date: string) => `Preverjeno: ${date}`,
    sourcesTitle: 'Viri',
    tryFree: 'Preizkusi Echo brezplačno',
  },

  help: {
    title: 'Center za pomoč Echo — odgovori o snemanju, prepisih in Pro',
    heading: 'Center za pomoč',
    description:
      'Odgovori o Echu: podprti telefoni, snemanje in uvoz, prepisi, povzetki in opravila, nakupi Pro ter kje so shranjeni tvoji podatki.',
    intro: 'Kratki odgovori o tem, kako deluje Echo. Če svojega ne najdeš, nam piši in ga bomo dodali.',
    groups: [
      {
        id: 'getting-started',
        title: 'Prvi koraki',
        items: [
          {
            q: 'Na katerih telefonih deluje Echo?',
            a: `Android ${product.minAndroid} ali novejši na 64-bitnem procesorju ARM. Povzetki in opravila potrebujejo približno ${product.notesAiRamGb} GB RAM-a, telefoni z ${product.largeModelRamGb} GB ali več pa dobijo Whisper Large V3 Turbo. Podrobnosti so na strani Podprti telefoni.`,
          },
          {
            q: 'Kaj Echo prenese in koliko prostora potrebuje?',
            a: 'Govorni model se prenese enkrat: Whisper Large V3 Turbo ima 574 MB, Whisper Small 190 MB. Prepoznavanje govorcev doda približno 42 MB, UI za zapiske za povzetke in opravila pa približno 1 GB. Posnetki zasedejo približno 14 MB na uro.',
          },
          {
            q: 'Ali potrebujem internetno povezavo?',
            a: 'Samo za prenos modelov, nakup Pro in preverjanje, ali imaš Pro. Snemanje, prepisovanje, povzetki in opravila potekajo na telefonu, zato je potem letalski način povsem v redu.',
          },
          {
            q: 'Ali potrebujem račun?',
            a: 'Ne. Registracije ni. Pro kupiš in upravljaš prek svojega računa Google Play.',
          },
        ],
      },
      {
        id: 'recording',
        title: 'Snemanje in uvoz',
        items: [
          {
            q: 'Ali se snemanje nadaljuje, če zapustim aplikacijo ali izklopim zaslon?',
            a: 'Da. Echo snema v ozadju z obvestilom, iz katerega snemanje začasno ustaviš ali ustaviš. Telefonski klic snemanje začasno ustavi, po koncu klica pa se nadaljuje, razen če si ga ustavil sam.',
          },
          {
            q: 'Katere datoteke lahko uvozim?',
            a: `Zvočne datoteke, kot so MP3, M4A, AAC, WAV, FLAC, OGG in Opus, ter zvok videov MP4 in WebM. Datoteko deli z Echom ali uporabi gumb za uvoz v Zapiskih. Sam izbereš naslov in ali zapisek spada pod dan, ko je bil posnet, ali pod danes.`,
          },
          {
            q: 'Kako nastavim jezik?',
            a: 'Echo jezik zazna samodejno. Če ga želiš določiti sam, ga izberi v Nastavitvah. Pri uvoženi datoteki ali posameznem zapisku lahko izbereš drug jezik, ne da bi spreminjal Nastavitve, zapisek pa lahko prepišeš tudi znova v drugem jeziku.',
          },
        ],
      },
      {
        id: 'transcripts',
        title: 'Prepisi',
        items: [
          {
            q: 'Kako natančen je?',
            a: 'Odvisno od zvoka: najbolje deluje en jasen glas blizu telefona, govorjenje čez drugega in hrup v ozadju pa ga otežita. Natančnost je največja pri splošno razširjenih jezikih. V Nastavitvah, v Slovarju, dodaj imena in posebne izraze, pa jih bo Whisper zapisal tako, kot si jih napisal ti.',
          },
          {
            q: 'Koliko časa traja prepis?',
            a: 'Če ima tvoj telefon lasten prepoznavalnik brez povezave za ta jezik, je besedilo na voljo takoj, ko ustaviš snemanje. Whisper teče po snemanju: Large V3 Turbo lahko traja toliko kot posnetek ali dlje, tudi na novem vrhunskem telefonu, Whisper Small pa je približno trikrat hitrejši.',
          },
          {
            q: 'Zakaj med snemanjem vidim besedilo, a ne vedno?',
            a: 'Besedilo v živo prihaja iz telefonu lastnega prepoznavalnika brez povezave. Potrebuje Android 13 ali novejši in jezik, nameščen na telefonu, ki ga lahko prenesejo Nastavitve. Brez tega se besedilo pojavi, ko ustaviš snemanje.',
          },
          {
            q: 'Ali lahko popravim, kdo je kaj rekel?',
            a: 'Da. Tapni govorca, da ga poimenuješ ali prestaviš njegove vrstice k drugemu govorcu, ali pa izberi nekaj vrstic in dodeli samo te. Predlagana so imena, ki si jih že uporabil.',
          },
          {
            q: 'Ali lahko iščem po zapiskih?',
            a: 'Iskanje preišče vse prepise, naslove in povzetke. Ne razlikuje velikih in malih črk ter naglasov, zato „cesnik“ najde „česnik“.',
          },
        ],
      },
      {
        id: 'summaries-tasks',
        title: 'Povzetki in opravila',
        items: [
          {
            q: 'Zakaj na mojem telefonu ni povzetkov ali opravil?',
            a: `Potrebujejo približno ${product.notesAiRamGb} GB RAM-a in prenos UI za zapiske, velik približno 1 GB. Na telefonih z manj pomnilnika Echo še vedno prepisuje, tudi z govorci.`,
          },
          {
            q: 'V katerem jeziku so napisani povzetki in opravila?',
            a: 'Običajni UI za zapiske jih za zapiske v drugih jezikih napiše v angleščini, citirane besede pa ohrani v tvojem jeziku. Neobvezni večjezični model Gemma 4 E2B (2,6 GB) jih napiše v jeziku zapiska.',
          },
          {
            q: 'Opomnik je prišel prepozno. Zakaj?',
            a: 'Android opomnike pravočasno dostavi samo, če sme Echo nastavljati natančne alarme. Nastavitve, Opomniki za opravila, odprejo sistemske nastavitve za to in za obvestila. Brez dovoljenja lahko Android opomnike zakasni.',
          },
          {
            q: 'Echo je spregledal opravilo ali si ga je izmislil. Kaj lahko storim?',
            a: 'Povzetki in opravila nastanejo z majhnim modelom AI na tvojem telefonu, ki se lahko zmoti. Opravila dodaj, uredi ali izbriši sam. Vsako opravilo vodi do vrstice, iz katere izhaja, zato ga preveriš z enim dotikom.',
          },
        ],
      },
      {
        id: 'pro',
        title: 'Pro in nakupi',
        items: [
          {
            q: 'Kaj se zgodi po brezplačnih 2 minutah?',
            a: 'Celoten posnetek je shranjen, prepis pa se ustavi pri 2:00. Nadgradi na Pro in Echo prepiše preostanek istega zapiska.',
          },
          {
            q: 'Kaj doda Pro?',
            a: 'Brez časovne omejitve posnetkov in uvozov, povzetke in opravila iz celotnega posnetka ter izvoz v Markdown, podnapise SRT in izvirni zvok. Izvoz v navadno besedilo je brezplačen.',
          },
          {
            q: 'Zamenjal sem telefon. Kako dobim nazaj Pro?',
            a: 'V Google Play se prijavi z istim računom, odpri Echo in v Nastavitvah izberi Obnovi nakupe.',
          },
          {
            q: 'Kako odpovem naročnino ali zahtevam povračilo?',
            a: 'Naročnine upravljaš v Google Play, pod Plačila in naročnine. Povračila urejajo pravila Google Play o povračilih.',
          },
        ],
      },
      {
        id: 'privacy',
        title: 'Zasebnost in tvoji podatki',
        items: [
          {
            q: 'Kje so shranjeni moji posnetki?',
            a: 'Samo na tvojem telefonu. Za tvoje zapiske ne upravljamo strežnikov, zato nikoli ne prejmemo tvojega zvoka, prepisov, povzetkov ali opravil.',
          },
          {
            q: 'Kako prenesem zapiske na nov telefon?',
            a: 'V Nastavitvah izberi Varnostno kopiraj zapiske. Echo vse shrani v eno datoteko, ki jo obdržiš. Na novem telefonu izberi Obnovi iz varnostne kopije.',
          },
          {
            q: 'Kako izbrišem vse?',
            a: 'Nastavitve imajo Izbriši vse podatke. Z odstranitvijo Echa s telefona izginejo tudi njegovi zapiski, zato najprej naredi varnostno kopijo, če jih želiš obdržati.',
          },
        ],
      },
    ],
    contactTitle: 'Še vedno ne gre?',
    contactText: (email: string) =>
      `Piši na ${email}. Sporoči model telefona in kaj si poskusil; odgovarjamo v angleščini ali slovenščini.`,
  },

  useCases: {
    meetings: {
      title: 'Prepisovanje sestankov brez povezave za Android — Echo',
      description:
        'Posnemi sestanek na telefonu Android in dobi prepis, govorce, povzetek ter opravila z opomniki. Vse poteka na telefonu, brez bota in brez nalaganja.',
      eyebrow: 'Sestanki',
      heading: 'Zapisnik, ki se napiše sam, na tvojem telefonu',
      lead: 'Položi telefon na mizo in govori. Echo ohrani prepis, kdo je kaj rekel, kratek povzetek in opravila, o katerih ste se dogovorili.',
      problemTitle: 'Tipkanje zapisnika pomeni, da sestanek zamudiš',
      problem:
        'Ali poslušaš ali pišeš. Oblačni zapisovalci to rešijo tako, da se pridružijo tvojemu klicu in vse naložijo na svoje strežnike, s čimer mnoge ekipe in stranke niso zadovoljne. Echo opravi delo na telefonu v tvojem žepu, zato pogovor nikoli ne zapusti sobe.',
      phone: {
        label: 'Echo prikazuje zapisek sestanka s povzetkom, dvema opraviloma in prepisom',
        title: 'Začetek projekta',
        meta: 'Danes, 9.42 · 18 min',
        tag: 'Služba',
        summaryLabel: 'Povzetek',
        summaryText: 'Ekipa se je dogovorila o obsegu lansiranja in razdelila delo na proračunu. Alex osnutek pregleda do petka.',
        tasksLabel: 'Opravila · 2',
        task1: 'Pošlji osnutek proračuna Alexu',
        task1Reminder: 'Jutri, 10.00',
        task2: 'Rezerviraj sobo za četrtek',
        lines: [
          {
            name: 'Maja',
            time: '2:14 – 2:31',
            before: 'V redu, torej ',
            mark: 'jutri ob desetih pošljem osnutek proračuna Alexu',
            after: ', on pa ga lahko pregleda do petka.',
          },
          {
            name: 'Alex',
            time: '2:32 – 2:40',
            before: 'Zame je v redu. Nekdo mora ',
            mark: 'rezervirati sobo za četrtek',
            after: '.',
          },
        ],
      },
      featuresTitle: 'Kaj dobiš po sestanku',
      features: [
        {
          title: 'Kdo je kaj rekel',
          text: 'Govorci so označeni samodejno. Osebo poimenuješ enkrat in ime se prenese v zapisek ter izvoze.',
        },
        {
          title: 'Opravila z odgovornimi osebami in urami',
          text: 'Echo našteje, o čem ste se dogovorili, poveže vsako opravilo z vrstico, iz katere izhaja, in te opomni, če je bila omenjena ura.',
        },
        {
          title: 'Zapisnik za deljenje',
          text: 'Prepis deli kot besedilo brezplačno ali s Pro kot Markdown s povzetkom in opravili.',
        },
      ],
      faq: [
        {
          q: 'Ali se lahko Echo pridruži klicem v Zoomu, Teamsu ali Meetu?',
          a: 'Ne. Echo snema prek mikrofona telefona. Pri videoklicu položi telefon k zvočniku ali pa pozneje uvozi posnetek klica.',
        },
        {
          q: 'Kako dolg je lahko sestanek?',
          a: 'Snemanje nima časovne omejitve. Brezplačna različica prepiše prvi dve minuti vsakega zapiska, Pro pa celoten sestanek.',
        },
        {
          q: 'Ali moram povedati, da snemam?',
          a: 'Da. Pred snemanjem vprašaj vse prisotne. Pravila se po državah razlikujejo, snemanje ljudi brez njihove privolitve pa je v mnogih nezakonito.',
        },
      ],
      related: ['lectures', 'interviews'] as RelatedId[],
    },
    lectures: {
      title: 'Prepisovanje predavanj brez povezave na Androidu — Echo',
      description:
        'Posnemi predavanje in pozneje išči po vsaki besedi. Echo prepisuje na tvojem telefonu Android, z povzetki in opravili za literaturo in roke, internet pa ni potreben.',
      eyebrow: 'Predavanja',
      heading: 'Poslušaj na predavanju. Pozneje išči po vsem predavanju.',
      lead: 'Posnemi predavanje in nato poišči natančno minuto, ko je profesor to razložil. Echo prepisuje na tvojem telefonu, tudi če v dvorani ni Wi-Fi-ja.',
      problemTitle: 'Zapiski ujamejo polovico povedanega',
      problem:
        'Medtem ko zapisuješ eno misel, je naslednja že mimo. Tudi sam posnetek ne pomaga veliko: nihče ne išče ene definicije po 90 minutah zvoka. Prepis, po katerem lahko iščeš, reši oboje.',
      phone: {
        label: 'Echo prikazuje zapisek predavanja s povzetkom, opravilom za branje in prepisom',
        title: 'Mikroekonomija, 6. teden',
        meta: 'Tor, 10.15 · 84 min',
        tag: 'Fakulteta',
        summaryLabel: 'Povzetek',
        summaryText: 'Cenovna elastičnost povpraševanja in kako jo izračunati, s primerom taksi vožnje. Izpitna vprašanja sledijo nalogam za vaje.',
        tasksLabel: 'Opravila · 2',
        task1: 'Preberi 5. poglavje pred seminarjem',
        task1Reminder: 'Ponedeljek, 9.00',
        task2: 'Oddaj 3. sklop nalog',
        lines: [
          {
            name: 'Predavatelj',
            time: '41:02 – 41:20',
            before: 'Elastičnost je torej odstotna sprememba količine glede na odstotno spremembo cene. ',
            mark: 'Preberite peto poglavje do ponedeljka',
            after: ', z njim bomo začeli seminar.',
          },
          {
            name: 'Študent',
            time: '41:21 – 41:27',
            before: 'Je to tudi ',
            mark: 'v nalogah za vaje',
            after: '?',
          },
        ],
      },
      featuresTitle: 'Narejeno za dolge posnetke',
      features: [
        {
          title: 'Iskanje po vsaki besedi',
          text: 'Iskanje preišče vse tvoje prepise naenkrat in ne razlikuje velikih in malih črk ter naglasov. Tapni vrstico in jo poslušaj.',
        },
        {
          title: 'Literatura in roki kot opravila',
          text: 'Ko predavatelj reče „preberite peto poglavje do ponedeljka“, Echo iz tega naredi opravilo z opomnikom.',
        },
        {
          title: 'Izrazi so pravilno zapisani',
          text: 'Dodaj imena predmetov in izraze v Slovar v Nastavitvah, pa jih bo Whisper zapisal tako kot ti.',
        },
      ],
      faq: [
        {
          q: 'Ali lahko posnamem 90-minutno predavanje?',
          a: 'Da. Snemanje nima časovne omejitve in teče naprej tudi z izklopljenim zaslonom. 90-minutno predavanje zasede približno 21 MB prostora. Brezplačna različica prepiše prvi dve minuti vsakega zapiska, Pro pa celotno predavanje.',
        },
        {
          q: 'Ali bo delovalo v veliki predavalnici?',
          a: 'Najbolje deluje blizu govorca. Z zadnje vrste velike dvorane in s tihim mikrofonom pričakuj več napak; sedi bližje ali položi telefon na sprednjo mizo.',
        },
        {
          q: 'V katerih jezikih so lahko predavanja?',
          a: `Whisper prepisuje približno 100 jezikov in jezik zazna sam. Seznam je na strani Jeziki.`,
        },
      ],
      related: ['meetings', 'interviews'] as RelatedId[],
    },
    interviews: {
      title: 'Aplikacija za zasebno prepisovanje intervjujev na Androidu — Echo',
      description:
        'Prepiši intervjuje na telefonu Android z označenimi govorci, pripravljene za citiranje. Nič se ne naloži, zato občutljivi pogovori ostanejo pri tebi.',
      eyebrow: 'Intervjuji',
      heading: 'Prepisi intervjujev z govorci, brez nalaganja',
      lead: 'Posnemi ali uvozi intervju in dobi prepis, razdeljen po govorcih, pripravljen za citiranje. Zvok in besedilo ostaneta na tvojem telefonu.',
      problemTitle: 'Občutljivi pogovori ne sodijo na tuj strežnik',
      problem:
        'Viri, bolniki, udeleženci raziskav in kandidati za službo govorijo tebi, ne podjetju za prepisovanje. Večina storitev za prepisovanje zvok naloži, da ga obdela. Echo ga nikamor ne pošlje, zato to lahko obljubiš in tudi misliš resno.',
      phone: {
        label: 'Echo prikazuje zapisek intervjuja z dvema govorcema, povzetkom in nadaljnjim opravilom',
        title: 'Intervju z glavno medicinsko sestro',
        meta: 'Pon, 14.30 · 47 min',
        tag: 'Raziskava',
        summaryLabel: 'Povzetek',
        summaryText: 'Nočne izmene so bile marca skrajšane s treh medicinskih sester na dve. Razpored bo delila, če njenega imena ne uporabimo.',
        tasksLabel: 'Opravila · 2',
        task1: 'Pošlji Ani citate v pregled',
        task1Reminder: 'Petek, 9.00',
        task2: 'Zaprosi za marčevski razpored',
        lines: [
          {
            name: 'Ana',
            time: '12:40 – 12:58',
            before: 'Od marca smo v nočni izmeni dve namesto treh. ',
            mark: 'Pošlji mi citate do petka',
            after: ' in jih bom pregledala.',
          },
          {
            name: 'Ti',
            time: '12:59 – 13:04',
            before: 'Seveda. In ',
            mark: 'ali lahko vidim marčevski razpored',
            after: '?',
          },
        ],
      },
      featuresTitle: 'Zakaj je primerno za citiranje',
      features: [
        {
          title: 'Poimenovani govorci',
          text: 'Echo loči glasove. Vsakega govorca poimenuješ enkrat in popraviš vsako vrstico, ki je šla napačni osebi.',
        },
        {
          title: 'Vsaka vrstica s časom',
          text: 'Vsaka vrstica ohrani svoj čas v posnetku. Tapni jo in poslušaj natančne besede, preden jih citiraš.',
        },
        {
          title: 'Ostane pri tebi',
          text: 'Brez računa in brez nalaganja. Naredi varnostno kopijo v datoteko, ki jo obdržiš, in zapisek izbriši, ko se projekt konča.',
        },
      ],
      faq: [
        {
          q: 'Ali lahko uvozim intervju, posnet drugje?',
          a: `Da. Echo uvozi MP3, M4A, AAC, WAV, FLAC, OGG in Opus, ter zvok videov MP4 in WebM. Datoteko deli z Echom ali uporabi gumb za uvoz v Zapiskih.`,
        },
        {
          q: 'Kako natančne so oznake govorcev?',
          a: 'Dobre pri jasnem intervjuju dveh oseb, manj zanesljive, kadar govorijo čez drugega ali je glasov veliko. Vrstice ob menjavi govorca so najbolj nagnjene k napaki; prestaviš jih z dotikom.',
        },
        {
          q: 'Ali lahko prepis izvozim?',
          a: 'Izvoz v navadno besedilo je brezplačen. S Pro izvoziš kot Markdown, kot podnapise SRT s časi ali kot izvirni zvok.',
        },
      ],
      related: ['meetings', 'lectures'] as RelatedId[],
    },
  },


  languages: {
    title: 'Jeziki, ki jih Echo zna prepisati — govor v besedilo brez povezave v 100 jezikih',
    heading: 'Podprti jeziki',
    description:
      'Echo z Whisperjem brez povezave prepisuje 100 jezikov, od angleščine in nemščine do slovenščine in svahilija. Poglej, kateri jeziki imajo besedilo v živo, povzetke in opravila.',
    intro:
      'Echo prepisuje z Whisperjem, ki pozna 100 jezikov in zazna, katerega govoriš. Kakovost se razlikuje: splošno razširjeni jeziki delujejo najbolje, jeziki z malo učnih podatkov pa imajo več napak.',
    sections: {
      transcription: {
        title: 'Prepisovanje',
        text: 'Vsak spodnji jezik je mogoče prepisati brez povezave, iz posnetkov in uvoženih datotek. Kantonščina potrebuje Whisper Large V3 Turbo, ki ga Echo uporablja na telefonih z 8 GB RAM-a ali več.',
      },
      live: {
        title: 'Besedilo v živo in takojšnji prepisi',
        text: 'Besedilo med snemanjem in prepis v trenutku, ko ustaviš snemanje, prihajata iz telefonu lastnega prepoznavalnika brez povezave. Katere jezike ima, je odvisno od telefona; Nastavitve pokažejo, ali je tvoj nameščen, in ga lahko prenesejo. Druge jezike po ustavitvi prepiše Whisper.',
      },
      notes: {
        title: 'Povzetki in opravila',
        text: 'Narejeni za vse jezike s seznama. Običajni UI za zapiske jih za zapiske v drugih jezikih napiše v angleščini, citate pa ohrani v izvirniku. Neobvezni večjezični model jih napiše v jeziku zapiska.',
      },
      app: {
        title: 'Sama aplikacija',
        text: (list: string) => `Meniji in nastavitve Echa so na voljo v teh jezikih: ${list}.`,
      },
    },
    listTitle: (count: number) => {
      const forms: Record<string, string> = { one: 'jezik', two: 'jezika', few: 'jeziki' };
      return `Skupaj ${count} ${forms[new Intl.PluralRules('sl').select(count)] ?? 'jezikov'}`;
    },
  },

  phones: {
    title: 'Zahteve za Echo — podprti telefoni Android in modeli',
    heading: 'Podprti telefoni',
    description: `Echo deluje na Androidu ${product.minAndroid} ali novejšem. Poglej, kateri govorni model dobi tvoj telefon, koliko RAM-a potrebujeta povzetka in opravila ter koliko prostora zasedejo modeli.`,
    intro: `Echo potrebuje Android ${product.minAndroid} ali novejši in 64-bitni procesor ARM, ki ga ima skoraj vsak telefon Android, prodan v zadnjih letih. Pomnilnik tvojega telefona določa, katere funkcije in modele dobiš.`,
    tiersTitle: 'Kaj dobi tvoj telefon',
    tiersHead: { ram: 'RAM telefona', speech: 'Govorni model', notes: 'Povzetki in opravila' },
    tiers: [
      { ram: 'Manj kot 4 GB', speech: 'Whisper Small ali Base', notes: 'Ni na voljo' },
      { ram: '4 do 6 GB', speech: 'Whisper Small ali Base', notes: 'Da' },
      { ram: '8 GB ali več', speech: 'Whisper Large V3 Turbo ali Medium, Small ali Base', notes: 'Da' },
    ],
    tiersNote:
      'Echo izbere prvi navedeni model; spremeniš ga lahko v Nastavitvah, Govorni model. Telefoni sporočajo malo manj pomnilnika, kot piše na škatli, zato telefon z 8 GB šteje kot 8 GB.',
    recognizerTitle: 'Telefonu lasten prepoznavalnik',
    recognizer:
      'Na Androidu 13 in novejšem ima veliko telefonov vgrajen prepoznavalnik govora brez povezave. Ko ima tvoj jezik, ga Echo uporablja za besedilo v živo in takojšen prepis, Whisper pa za uvoze ali kadar to zahtevaš. Telefoni brez njega uporabljajo Whisper za vse.',
    storageTitle: 'Prostor',
    storageHead: { item: 'Prenos', size: 'Velikost' },
    storage: [
      { item: 'Whisper Large V3 Turbo', size: '574 MB' },
      { item: 'Whisper Medium', size: '539 MB' },
      { item: 'Whisper Small', size: '190 MB' },
      { item: 'Whisper Base', size: '60 MB' },
      { item: 'Prepoznavanje govorcev', size: '42 MB' },
      { item: 'UI za zapiske (Qwen3 1.7B)', size: '977 MB' },
      { item: 'Večjezični UI za zapiske (Gemma 4 E2B), neobvezno', size: '2,6 GB' },
      { item: 'Posnetki', size: 'Približno 14 MB na uro' },
    ],
    storageNote: 'Na telefonu ostane samo model Whisper, ki ga uporabljaš. Pri zamenjavi se prenese novi, stari pa se odstrani.',
    speedTitle: 'Hitrost',
    speed:
      'Na Samsung Galaxy S24 Whisper Large V3 Turbo potrebuje od 33 do 50 sekund za vsakih 30 sekund zvoka, zato prepis traja približno toliko kot posnetek ali dlje. Whisper Small potrebuje približno 11 sekund. Telefoni se upočasnijo, ko se segrejejo, na primer na brezžičnem polnilniku.',
    testedTitle: 'Preizkušeni telefoni',
    tested: (email: string) =>
      `Echo preizkušamo na Samsung Galaxy S24. Če na tvojem telefonu ne deluje dobro, piši na ${email} z imenom modela in bomo preverili.`,
  },
};
