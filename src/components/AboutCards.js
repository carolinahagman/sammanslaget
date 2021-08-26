import "./about.css";

const groups = [
    {
        index: 1,
        title: "Game Artist",
        name: "Jimmy Hultén",
        mail: "jimmy.hulten@gmail.com",
        description: "I detta projekt har mitt ansvar varit att producera grafiken till den interaktiva berättelsen - mer specifikt: de bilder som är utvecklade utefter Alexandras manus och den feedback och idéer vi som grupp framställt. Tillsammans beslutade vi att temat skulle vara av en seriösare och aning mörkare natur men att berättelsen hade en ljusglimt emot slutet med tanke på temat kärlek. Skisser har fått stå som grund för vidare diskussion om utformning och därefter grafik i form av prototyper i syfte att underlätta arbetet i det tidiga skedet; vidare har färdiga illustrationer utvecklats. I syfte att visuellt förstärka vårat tema har jag primärt valt omättade färger."
    },
    {
        index: 2,
        title: "Game Programmer",
        name: "Johan",
        mail: "mail",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        index: 3,
        title: "Manusförfattare",
        name: "Alexandra Panagiota Drakopoulos",
        mail: "alexandra.p.drakopoulos@gmail.com",
        description: "I dette prosjektet har jeg bidratt med å utvikle den helhetlige storyen, ut ifra vår initiale idéutvikling som vi alle i gruppen har vært med på. Ut ifra denne tidlige ideutviklingen, gjorde jeg litt research på Räddningsmissionen sine nettsider om hva deres arbeid gikk ut på og hvilke utsatte samfunnsgrupper de hjalp. Basert på gruppens idéutvikling og Game Artist Jimmy Hultén sin tidlige sketch på illustrasjoner til prosjektet, sammen med informasjon fra Räddningsmissionens nettside, og annen research om prostitusjon, skapte jeg storyen om «Karmen», en helt fiktiv karakter. Videre ble storyen redigert, i samarbeid med Game Artist Jimmy Hultén, og UX Designer Malin Bjelle."
    },
    {
        index: 4,
        title: "UX design",
        name: "Malin Bjelle",
        mail: "malin.bjelle@gmail.com",
        description: "I detta projekt har min huvudsakliga uppgift varit att leda designprocessen i nära samarbete med övriga discipliner för att säkerställa helhet och användarupplevelse. Efter en kortare research på kunden och temat styrde jag gruppen genom idégenereringen där jag använde mig av vanligt förekommande idégenereringsmetoder i en designsprint, så som Affinity diagram, klustring, Crazy 8 och solution sketch. Rollen har också inneburit att skapa prototyper som tjänat underlag för webbutvecklare och spelprogrammerare att jobba mot. Under arbetets gång genomförde jag även användartest för att se till att webbplats och story är lätt att använda och uppleva."
    },
    {
        index: 5,
        title: "Webbutvecklare",
        name: "Carolina",
        mail: "mail",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        index: 6,
        title: "Webbutvecklare",
        name: "Gilda",
        mail: "mail",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
];



const AboutCards = () => {
    return groups.map((group) => (
        <div className="about-card" key={group.index}>
            <h2 className="title">{group.title}</h2>
            <h1 className="name">{group.name}</h1>
            <h2 className="mail">{group.mail}</h2>
            <div className="about-text">
                <p>{group.description}</p>
            </div>
        </div>
    )
    );
};

export default AboutCards