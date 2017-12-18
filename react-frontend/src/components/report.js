import React from 'react';

// import {
//     HashRouter as Router,
//     Route,
//     Link
// } from 'react-router-dom';


const Report = () => (
    <div>
        <h2>Redovisningar</h2>
        <h3>Kmom01</h3>

        <p>I mitt kmom01 har jag separerat ett express-backend och ett react-frontend, vilka ligger bredvid varandra i en rootmapp, från vilken de kan köras och testas.</p>

        <p>Jag prövade Express och Pug. Helt okej, tycker jag. Det är skillnad gentemot JSX som kan användas tillsammans med React främst för att html-taggarna är bortskalade i Pug, och att man behöver använda exakta mellanslag. Jag tycker ändå det går snabbt att byta mellan dessa olika sätt att skriva sina vyer. JSX känns praktiskt eftersom det ligger så nära html, och det är ju heller inte beroende av att man sätter exakta mellanslag. Men det är en smaksak vad man väljer, tycker jag.</p>

        <p>Jag kikade på lite Express-videor, och hade inga större problem med att köra igång detta heller. Det känns som om det är enkelt uppbyggt, lätt att använda, och det gick fort att få en någorlunda bra översikt över vad ramverket kan hjälpa till med. Man kan skapa en server, fixa routrar, och även koppla med vyer i Pug eller Markdown. När jag byggt på min sida tog jag chansen att pröva på att koppla det till React. Det som var kul att upptäcka var att jag helt kunde separera express-backend från react-frontend, genom att köra express på en port, och sedan låta react hämta ifrån express-servern. På så sätt ska det också gå att välja andra ramverk för frontend om man behöver koppla ihop med express.</p>

        <p>Varför valde jag React? Jag kollade lite runt, funderade på Angular och Vue. Valet föll på React eftersom det är väldigt i ropet just nu. Jag är egentligen emot att välja det som trendar, och tänkte på att också skriva vanlig javascript, eftersom jag gillar att hålla det så basic som möjligt och inte krångla till det. Jag valde React för jag ville se vad det handlade om och lära mig det bättre. Jag valde det också för att det talas om att projektet möjligen kommer att innebära ett Black Jack-spel eller liknande. Efter att ha gått igenom en react-tutorial där man bygger ett tic-tac-toe spel, så kändes det som om React var ett bra val även för Black Jack. Det återstår att se. Om inte annat så syns ju React på en del jobbannonser. I slutändan handlar det om att testa ut ett ramverk för att ha ännu ett verktyg i sin låda. Först när man prövat på flera kan man välja rätt verktyg för rätt uppgift, resonerar jag.</p>

        <p>Det var inga större svårigheter att komma igång med React. Jag tror det hjälper att ha erfarenhet med Mithril.js från i våras.</p>

        <p>Det kändes bra att separera back-end och front-end i två repon. Jag har också lyft ut routerna i sina egna filer och sin egen mapp.</p>

        <p>Jag har testat ut Express scaffolding i form av express-create-app, och plockat ut delar därifrån till min egen kod, som routerna.</p>

        <p>Jag har testat Markdown och det ligger fortfarande kvar i min Express-backend. Det fungerade fint som i exemplet att koppla till Markdown. Men när jag lade till React så har jag istället flyttat texten dit.</p>

        <p>Det som erbjöd mer motstånd var att få den byggda React-appen att fungera med Express, och att få ordning på npm install och start. Fick en del hjälp av Anders, även i Hangout, och nu förstår jag helheten bättre. Med React följer en utvecklingsserver, denna kan startas med npm run test-dev. Denna behövs inte i produktion, eller för den som rättar. Då gäller istället npm install && npm start. Install bygger React-appens filer, i form av en index.html, samt en .js- och en .css-fil. Sedan körs express-servern, vilken serverar den byggda React-appen.</p>

        <p>Som appen är nu sänder inte servern några data, den utnyttjas inte, utan all text och bilder finns i frontend. Det får vänta till kommande kursmoment.</p>

        <p>Jag fixade så att repot på Github kopplas till Travis, Better Code Hub och Scrutinizer, något som också krävde lite extra arbete. Men nu ska det fungera.</p>

        <p>Jag använder också SASS för CSS-koden, även om jag inte utnyttjar det i så stor grad ännu, bara några variabler för färger. Det var enkelt att installera. En katalog för scss-filen, och en för css, och så använder jag ett watch-process som kompilerar när jag sparar min scss-fil. Snabbt och lätt.</p>

        <h3>Kmom02</h3>
        <p><em>Har du jobbat med Docker eller andra virtualiseringstekniker innan?</em></p>

        <p>Jag har inte jobbat med Docker, men i en tidigare kurs använde vi VirtualBox för att sätta upp ett virtuellt operativsystem. VB var ju spännande på så sätt att jag kunde köra Windows eller Linux på min Mac, för att testa applikationer. Samtidigt var det en resurskrävande teknik, både på hårddisken och för processorn, och ju mer man fyller datorn med detta ju svårare blir det att använda. Jag vill minnas att installationen också var omfattande. </p>

        <p><em>Hur ser du på möjligheterna att använda dig av Docker för att jobba med tester av ditt repo?</em></p>

        <p>Det ser lovande ut. En stor skillnad från VB är att det känns så lättviktigt. Som jag förstår det är det beroendena som knyts upp till utvecklingsmiljön, till skillnad från VM som verkar kräva mycket mer resurser för att fungera och starta upp. Jag ser fram emot att börja använda Docker för att testa program i olika miljöer, och jobba lite mer strukturerat. I synnerhet när man vill sätta upp en professionell testmiljö, för att kunna testa på ett flertal olika miljöer.</p>

        <p>Den stora skillnaden är, som jag förstår det, att Virtual Box simulerar ett helt operativsystem, exempelvis kan jag köra windows i någon version, på en mac. Med Docker kan jag köra program i olika versioner, antingen med mitt macOS som bas, eller tillsammans med Virtual Box och ett virtuellt operativssystem som Windows eller Linux. De båda teknikerna kan användas tillsammans och utfyller varandra.</p>

        <p><em>Gick allt smidigt eller stötte du på problem?</em></p>
        <p>Det gick någorlunda smidigt. Kanske det var enklare på Mac, läste att det hade varit strul för andra operativsystem. Jag gjorde en <code>docker pull node</code> för att ladda ner node-imagen ifrån docker. Jag skapade tre olika versioner av node, för mitt repo, med hjälp av en docker-compose.yml-fil. För att det ska startas behövde jag lägga in command: <em>npm start</em>. Det som krånglade mest var portarna och hur man skulle skriva detta. Jag googlade runt och hittade en lösning som fungerade. Jag använder DBWEBB_PORT som variabel i <em>environment</em>, sedan 1337:1337 i <em>ports</em>. Jag prövade andra varianter, som att skriva 1337:80, vilket borde betyda att man lyssnar på port 1337 och kör på port 80 i dockercontainern, något som inte fungerar. Det verkar vara något specifikt med node, och kanske med kombinationen med express.js, som kräver att det ska vara samma portnummer både för ens OS och för dockercontainern. Jag får bara acceptera och gå vidare.</p>

        <p>Edit: Jag har fått förklarat för mig att porten till höger ska vara porten som Node snurrar på inne i containern. Jag satte därför denna till samma som jag sätter variabeln DBWEBB_PORT i docker-compose-scriptet. Jag måste starta node/express på samma port som den jag uppger till höger i <em>ports</em></p>

        <p><em>Skapade du din egen image, berätta om den?</em></p>
        <p>Jag väntar med det till nästa kmom.</p>

        <h3>Kmom03</h3>

        <p><em>Berätta vilka tekniker/verktyg du valde för enhetstester och kodtäckning och varför?</em></p>

        <p>Jag använder create-react-app, som scaffoldar fram en hel utvecklingsmiljö, väldigt praktiskt. I denna miljö ingår Jest. Jag lade in några testfiler i formen App.test.js för App.js, vilket innebär att Jest kommer att hitta dem och köra testerna. Testerna är enkla och testar bara att några av mina react-komponenter laddas som de ska utan att krascha. Hur man testar med Jest förklaras utförligt på <a href='https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#npm-test'>Create-React-App README</a> Jest har också en integrerad kodtäckningsrapporterare, vilket funkar fint. Anledningen till att jag valde just Jest var att det redan var integrerat, och det kändes onödigt att införa något annat. I klient/server-appen som jag skapat har jag i tillägg integrerat några tester för mitt express-backend, också med Jest, bara för att sätta upp en testmiljö att gå vidare med. Jag använder Supertest också, för test av routrar.</p>

        <p><em>Berätta om din CI-kedja och reflektera över de valen du gjorde?</em></p>

        <p>Jag kör Travis för build, och Better Code Hub och Scrutinizer för kodtester och –täckning. Jag har testat flera tjänster, men dessa verkar stabila. Dessutom kompletterar Better Code Hub och Scrutinizer varandra, så att jag kan dra lärdomar av varningarna de rapporterar om min kod. Gillar att ha en CI-kedja som testar koden varje gång jag pushar till Github. Det känns som ett steg mot att jobba professionellt med utveckling. Jag utelämnade dock Better Code Hub för klient/server-appen</p>

        <p><em>Reflektera över hur det gick att integrera enhetstesterna i olika Docker-kontainerns och om du ser någon nytta med detta.</em></p>

        <p>Jag försökte att skapa Dockerfiler, men fick inte kläm på det. Kollade lite på andras lösningar, och diskuterade det, men det verkade inte som om man helt behövde det, utan klarade sig med docker-compose.yml-filen. I vilket fall som helst är det den jag använder. Jag lade in nya script i min package.json. Man startar testerna för de tre olika docker-containrarna med npm run test1, npm run test2 och npm run test3. Då testas applikationen i Node 7, 8 och 9. Obs att det kan ta lite tid. Man behöver också trycka q för att lämna Jests test-cli, och för att sista kommandot som kollar code coverage ska utföras. Jag resonerar som så att det viktiga är att testerna körs, och att de körs i olika utvecklingsmiljöer. Om det krävs Dockerfile får jag lägga till det i efterhand.</p>

        <p><em>Hur väl lyckades du utvärdera TDD-konceptet och vilka är dina reflektioner?</em></p>

        <p>För min me-app var ju koden redan skriven och därför var det inte möjligt att börja om med testerna först. Men jag prövade med att först göra en test att en route laddades, köra testen och sedan skapa routen. Huvudsaken är, tänker jag, att man har med sig testandet från början. Att inte skriva en massa kod utan att ha en tanke på hur man ska testa den, utan att jobba lite simultant kanske. Koda på ett sånt sätt att det kommer vara testbart. Jag har heller inte så mycket logik i min app, men lade in en testfunktion som adderar två siffror och gjorde en test på den.</p>

        <p><em>Berätta om tankarna kring din klient/server applikation och nämn de tekniker du använder.</em></p>

        <p>För min klient/server-app valde jag att klona min me-sida och jobba med den i ett nytt repo. Onödigt att uppfinna hjulet på nytt, tänker jag, och tanken hela tiden har varit att jag skulle använda express och react som server och klient, för att se vad den kombinationen kunde erbjuda. Som jag skrev tidigare föreställer jag mig ett black jack-spel eller annan typ av spel, där react skulle vara ett passande val. Inbillar jag mig i varje fall.</p>

        <p>Övrigt: Jag prövar på Patternlab, som är ett komponentbibliotek, kan man säga. <a href='http://demo.patternlab.io/'>Patternlab Demo</a>. Komponenterna delas in i mindre eller större byggstenar, de kallar det atomisk design. Det bygger på SASS, och det är nog meningen att man ska skapa sina egna komponenter, och hela siddesigner, vilka man sedan kan plocka ut och använda i sitt system. Jag lånade till en början en fil med globala variabler, och har börjat använda de förinställda färgerna. Lite för att testa på hur praktiskt det kan vara. Detta kan vara ett alternativ till Bootstrap, tror jag. Man är inte heller beroende av någon extern fil, verkar det som, vilket är ett plus, då man har bättre kontroll över sina beroenden.</p>

        <p>Klient/server-appen har jag lagt upp på Heroku. lite granna pill, men i stort enkelt system för att sjösätta appar. <a href='https://pacific-fortress-69141.herokuapp.com/#/'>Min app</a> Det tar cirka 10 sekunder att ladda när sidan varit inaktiv, på grund av att det är en gratistjänst. När man laddat sidan en gång, så är den i aktivt läge och går fortare att ladda.</p>

        <h3>Kmom04</h3>

        <p><em>Är du ny på realtidsprogrammering eller har du gjort liknande tidigare?</em></p>

        <p>Jag har aldrig gjort detta tidigare, så det var kul att sätta igång med och till slut få ett hum om.</p>

        <p><em>Hur gick det att jobba med konceptet realtidsprogrammering i webben, några reflektioner?</em></p>

        <p>Det flöt på bra till en början. Jag läste igenom artikeln, och sen på egen hand lite olika videos om websockets, och så specifikt kombinerat med Express.js. Jag tycker jag har fått ett grepp om konceptet. Det fick bli socket.io som kändes enkelt att jobba med. Man installerar på både server och klient, och sedan har man några enkla kommandon för att kommunicera emellan, och sända svar ut till alla klienter. Man får tänka till lite på processen, att det först är en klient som sänder, en server som tar emot och sänder vidare till alla andra uppkopplade klienter.</p>

        <p>Detta området känns också spännande i sig, realtidskommunikation är nog en teknik som blir viktigare och viktigare för alla möjliga applikationer.</p>

        <p><em>Berätta om din chatt som du integrerade i redovisa-sidan.</em></p>

        <p>Jag gjorde den som sagt med sockets.io. Man skriver in ett nick i ett fält och så ett meddelande där under. Jag lade till en trevlig funktion där de andra klienterna får ett meddelande när man håller på att skriva något – eventen är kopplad till onKeyPress och avfyras då en gång. </p>

        <p><em>Berätta om den realtidsfunktionalitet du väljer att integrera i din klient/server applikation.</em></p>

        <p>Jag valde att fortsätta jobba med chatten, och kopierade den och fixade lite på stylingen.</p>

        <p>Båda chattarna använder sockets.io.</p>
        <p>Angående tester så har jag några som testar att komponenter blir laddade i React. För backend har jag använt Supertest för att testa några routes. Har inte lagt till några fler tester. Det känns krångligt att testa chat, jag vet att andra har kämpat med det. I övrigt finns inte så mycket logik att testa. Jag har prövat att testa en metod updateScroll i min komponent/klass Chat, till slut nöjde jag mig med att checka att det går att kalla på metoden. Jag lät det vara så länge och får återkomma.</p>

        <p>Jag hade lite krångel när jag ville införliva använda metoden componentDidMount() inne i en React-komponent. Det var det gamla problemet med this och bind. Jag löste det genom att ändra en anonym funktion inne i componentDidMount till ES6-funktion. På det sättet knyts this till det omgivande lagret, om jag har förstått det rätt. Det har också uppstått svårigheter med portar. Främst för att få det att fungera både på Heroku och på den lokala react development server, som är smidig att använda, då man inte behöver bygga appen för varje ändring. Det verkar som om det hela berodde på att porten var upptagen, och jag behövde i tillägg ändra i attributet proxy, i min package.json, för att dev-servern skulle fungera. Nåja, nu ska det funka. </p>

        <h3>Kmom05</h3>
        <p>Det var krångligt att komma igång med Mongodb, lite grann på grund av otur. Jag testade exempelkoden vi fått vilken fungerade med Mongodb-klienten version 2.2.33, men inte med den senaste versionen som jag installerade i mitt eget repo. Efter lite feedback så verkar det som om docker-imagen av Mongodb inte hade uppdaterats när de några dagar tidigare gjorde en större uppdatering av npm-modulen för Mongodb, vilket gjorde att den senaste npm-modulen 3.0.0rc inte fungerade med docker-imagen. Jag nedgraderade därför min Mongodb-modul, och allt funkade igen.</p>
        <p>Jag lade ner lite tid på att omstrukturera. Jag skapade en modell i form av en klass för mina mongodb-metoder, vilka anropas ifrån routerna. Den här gången har jag använt ES6 i större utsträckning, och känner mig mer hemma med arrow-funktioner. Jag använder också async await, som i exemplet, och fetch-api, där jag dessutom fångar upp fel. Det känns bra att ha lite pejling på detta och ha fått det att fungera. När man vänjer sig vid syntaxen tycker jag att det känns lätt att läsa koden.</p>
        <p>Det var fint att få repetera REST-api, för att bli lite klarare över ordningen i det hela. Jag skapade först Express-routes, i api/read, api/add, api/delete och api/update, med hjälp av POST, GET, PUT OCH DELETE-anrop till databasen. Så över på klientsidan och React använde jag Fetch för att sända och ta emot frågor/requests och svar/responses.</p>

        <p><em>Konceptet NoSQL, (här: Mongodb) jämfört med relationella databaser som MySQL</em></p>
        <p>Fördelen är väl att man kan jobba med JSON-objekt, vilket är ett etablerat javascript-format. Det är lätt att använda och manipulera med hjälp av javascript. Jag har inte prövat på att göra eller utforska mer avancerade databasanrop, och jag antar att det inte går att programmera databasen som man kan göra i MySQL. Min lilla erfarenhet av detta kursmoment, var att när jag väl kommit igång med mina REST-anrop, så var det egentligen mest att fylla i GET, POST, PUT och UPDATE, samtidigt som man sänder ett objekt med de värden som ska läggas till eller uppdateras. Väldigt smidigt, åtminstone för en sån här liten testkörning. Det är möjligt att jag kommer att använda NoSQL i mitt projekt, för att skapa en databas med användare, och för att hantera användarnas inloggning på min app. Det borde också gå smärtfritt. Man behöver heller inte fördefiniera strukturen på sina tabeller som i MySQL, med fält och värden, utan det är bara att köra på. Alla datatyper i Javascript kan lagras. </p>

        <p><em>Mina tankar om asynkron programmering i Javascript</em></p>
        <p>Det verkar vara en god idé att ha koll på. Naturligtvis är det smart att inte stoppa upp programmet från att köra påföljande operationer, så som är fallet i en synkron modell. Node.js är väl uppbyggt kring asynkron programmering. När man läser artiklar om det är det lätt att få uppfattningen att det handlar om ett paradigmskifte, även om det har funnits ett tag, och det rekommenderas att man ska skriva asynkron kod så mycket som möjligt. Jag tänker på async-await-konstruktionen som är en del av nyare versioner av Node.js. </p>
        <p>Det asynkrona är särskilt aktuellt när det gäller databasanrop. Enligt modellen i exemplet har jag använt async, vilken returnerar ett Promise. Await tar sedan emot Promiset och hanterar det</p>

        <p><em>Docker</em></p>
        <p>Fint att använda Docker lite mer och få bättre känsla för hur det hänger ihop.</p>
        <p>Jag har installerat två docker-containrar, med hjälp av en Dockerfile. Jag gjorde som det stod i artikeln och det verkar fungera. I <em>command</em> lät jag den ena containern starta express-servern. Man startar containrarna med <code>docker-compose up -d mongodb</code> och <code>docker-compose up -d express</code>. Sedan kan man testa api från localhost:1337/api/read, till exempel, vilken listar databasens innehåll.</p>
        <p>Det är flera delar som ska passa samman, så det gäller at hålla tungan rätt i mun. När jag skulle föra över mongodb till klient/server-appen glömde jag att inkludera body-parser i app.js. body-parser är en middleware-modul som Express använder för att hantera HTTP-POST-anrop på korrekt sätt. Middleware-moduler anropas alltså före varje route anropas. </p>
        <p>Jag lade till kod så att det går att återställa databasen genom att skriva <code>npm run reset-database</code>.</p>

        <p>Jag har också trixat en del med animationer, och success/error-meddelanden när man lägger till, uppdaterar eller raderar i databasen. Den här gången gjorde jag dem utan Bootstrap. Istället lät jag React lägga till en animate-klass, vilken sedan animerades med @keyframes i CSS-koden. Lite extra jobb, och pilligt för att få det bra och buggfritt, men funkar okej. Jag använde en funktion resetAnimation(), vilken sätter en timeout och återställer mitt <em>state</em> för animate-klassen. På så sätt fungerar det att återanvända formulären och fortfarande få upp meddelandena.</p>
        <p>När man googlar får man upp förslag på olika moduler som låter React fixa animationer, och det kan kanske vara en bra idé. Men i det stadiet jag är i nu, så vill jag gärna först behärska kodandet på en lite mer grundläggande nivå. Jag känner att det är lätt att tappa översikten om man skulle ge efter och plocka in nya moduler för varje funktionalitet.</p>
        <p>Gjorde menyn responsiv genom att inkludera sass-kod och mixins. Det här tycker jag är lite kul – att med hjälp av sass/less så kan man hämta in funktionaliteter, lite som externa moduler. Det var inte heller så svårt att redigera dessa moduler, som när det gällde att fixa en meny som både var responsiv och hade en dropdown för Mongodb-routerna.</p>

        <p><em>Enhetstester</em></p>
        <p>När det gäller klient-server-appen jobbade jag en del med att lägga in enhetstester för Express-backend. Mina databasanrop har numera testfiler, vilket känns bra. Här har jag använt Supertest och Jest. Det som testas är om anropen utförs. Dessvärre körs riktiga anrop, vilket gör att det läggs till ett tomt objekt när ADD körs. Så ytterligare saker att göra på testdelen hade varit att mocka anropen, för att kunna testa dem utan att påverka databasen. En annan sak är att Scrutinizer bara ger mig kodtäckning för React-delen. Har pillat en del med konfigurationen, men lyckades inte rätta till detta. Möjligen återvänder jag till det längre fram. </p>
        <p>I övrigt är klient-server-appen i stort sätt detsamma som min redovisa-app. Jag väntar med att göra en mer särskild app till projektet.</p>
        <h3>Kmom06</h3>
        <h3>Kmom07-10</h3>
    </div>
);

export default Report;
