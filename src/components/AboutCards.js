import "./about.css";

const groups = [
  {
    index: 1,
    title: "Game Artist",
    name: "Jimmy Hultén",
    mail: "jimmy.hulten@gmail.com",
    description:
      "I detta projekt har mitt ansvar varit att producera grafiken till den interaktiva berättelsen - mer specifikt: de bilder som är utvecklade utefter Alexandras manus och den feedback och idéer vi som grupp framställt. Tillsammans beslutade vi att temat skulle vara av en seriösare och aning mörkare natur men att berättelsen hade en ljusglimt emot slutet med tanke på temat kärlek. Skisser har fått stå som grund för vidare diskussion om utformning och därefter grafik i form av prototyper i syfte att underlätta arbetet i det tidiga skedet; vidare har färdiga illustrationer utvecklats. I syfte att visuellt förstärka vårat tema har jag primärt valt omättade färger.",
  },
  {
    index: 2,
    title: "Game Programmer",
    name: "Johan Ahlsten",
    mail: "carl.johan.ahlsten@gmail.com",
    description:
      "Som programmerare så har det varit min uppgift att skapa ett system som gör det möjligt för användaren att uppleva vår berättelse. Utifrån gruppens önskemål och idéer så byggde jag ett ramverk som kan ta in och visa upp text och bilder, men som samtidigt skulle kunna växa eller förändras om projektet skulle utökas. Det var viktigt för mig att det skulle vara enkelt för gruppen att ändra eller byta ut enskilda delar utan att det skulle störa funktionaliteten. Jag använde mig av enkla animationer för att texten och bilderna skulle bete sig på ett sätt som stärkte temat och känslan som gruppen ville uppnå.",
  },
  {
    index: 3,
    title: "Manusförfattare",
    name: "Alexandra Panagiota Drakopoulos",
    mail: "alexandra.p.drakopoulos@gmail.com",
    description:
      "I dette prosjektet har jeg bidratt med å utvikle den helhetlige storyen, ut ifra vår initiale idéutvikling som vi alle i gruppen har vært med på. Ut ifra denne tidlige ideutviklingen, gjorde jeg litt research på Räddningsmissionen sine nettsider om hva deres arbeid gikk ut på og hvilke utsatte samfunnsgrupper de hjalp. Basert på gruppens idéutvikling og Game Artist Jimmy Hultén sin tidlige sketch på illustrasjoner til prosjektet, sammen med informasjon fra Räddningsmissionens nettside, og annen research om prostitusjon, skapte jeg storyen om «Karmen», en helt fiktiv karakter. Videre ble storyen redigert, i samarbeid med Game Artist Jimmy Hultén, og UX Designer Malin Bjelle.",
  },
  {
    index: 4,
    title: "UX design",
    name: "Malin Bjelle",
    mail: "malin.bjelle@gmail.com",
    description:
      "I detta projekt har min huvudsakliga uppgift varit att leda designprocessen i nära samarbete med övriga discipliner för att säkerställa helhet och användarupplevelse. Efter en kortare research på kunden och temat styrde jag gruppen genom idégenereringen där jag använde mig av vanligt förekommande idégenereringsmetoder i en designsprint, så som affinity diagram, klustring, Crazy 8 och solution sketch. Rollen har också inneburit att skapa prototyper som tjänat underlag för webbutvecklare och spelprogrammerare. Under arbetets gång genomförde jag även användartest på prototypen för att se till att vår story är lätt att använda och uppleva.",
  },
  {
    index: 5,
    title: "Webbutvecklare",
    name: "Carolina Hagman",
    mail: "hagmancarolina@gmail.com",
    description:
      "Jag har som webbutvecklare varit ansvarig för att lansera projektet på internet samt se till att projektet auto-deployar vid varje commit till main-branchen i utvecklingsprojektet. I själva webbprojektet har jag kopplat samman den interaktiva berättelsen i webGL med React för att få den att fungera på webben och varit ansvarig för implementation av landningssidan utifrån från protyper inklusive animationer samt navigering till den berättelsen från denna sida. Utöver detta så har jag bidragit med hjälp om någon har behövt och varit delaktig på våra dagliga möten.  ",
  },
  {
    index: 6,
    title: "Webbutvecklare",
    name: "Gilda Ahmadniaye",
    mail: "gilda.ahmadniaye@gmail.com",
    description:
      "Som webbutvecklare i gruppen har vi arbetat med att få sidan att fungera på webben, jag har bland annat arbetat en del med kodningen för about-sidan och hjälpt till med andra moment för att se till att allt ser bra ut och fungerar som det ska. Vi alla deltog med idéutvecklingen från start till slut där vårt ändamål var att skapa en lättnavigerad sida med fokus på den digitala berättelsen; hur en kvinna får hjälp med att ta sig ur mörkret in i en ljusare framtid. Förutom detta har jag deltagit i diskussioner och bidragit med hjälp eller synpunkter under våra dagliga möten.",
  },
];

const AboutCards = () => {
  return groups.map((group) => (
    <div className="about-card" key={group.index}>
      <h2 className="title">{group.title}</h2>
      <h1 className="name">{group.name}</h1>
      <h2 className="mail">{group.mail}</h2>
      <div className="about-text">
        <p className="about--text">{group.description}</p>
      </div>
    </div>
  ));
};

export default AboutCards;
