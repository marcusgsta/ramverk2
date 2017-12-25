import React from 'react';

const LandingPage = () => (
    <div>
        <h1>Landing Page</h1>
        <h2>Klient/server-app</h2>

        <p>Denna app består av en express-server och en klient gjort i React. Där finns en route <em>users</em> som testar att ladda data från routen users i servern, som är en JSON-fil.</p>
        <p>Dessutom finns en chat, och en koppling till databasen Mongodb, där man kan göra CRUD-operationer. Jag har lagt in några matematiska formler som objekt att visa, radera, lägga till eller uppdatera. För att återställa databasen kan man köra kommandot npm run reset-database, i terminalen.</p>
        <p>Mongodb är beroende av att startas med sin Dockercontainer, den fungerar alltså bara lokalt.</p>

        <p>Appen ligger på Github och kan laddas ner och köras så här:</p>
        <p><code>
        git clone https://github.com/marcusgsta/ramverk2-app.git<br/>
        npm install && npm run start-docker && npm start
        </code></p>

        <h2>Modulen Mongodb-api</h2>
        <p>En modul på npm vilken innehåller ett api med enkla CRUD-operationer att köras mot en Mongodb-databas.</p>
        <p>Du finner den här: <a href='https://www.npmjs.com/package/@marcusgsta/mongodb-api'>https://www.npmjs.com/package/@marcusgsta/mongodb-api</a></p>
    </div>
);

export default LandingPage;
