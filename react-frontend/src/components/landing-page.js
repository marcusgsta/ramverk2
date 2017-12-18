import React from 'react';

const LandingPage = () => (
    <div>
        <h1>Klient/server-app – Landing Page</h1>

        <p>Denna app består av en express-server och en klient gjort i React. Där finns en route <em>users</em> som testar att ladda data från routen users i servern, som är en JSON-fil.</p>
        <p>Dessutom finns en chat, och en koppling till databasen Mongodb, där man kan göra CRUD-operationer. Jag har lagt in några matematiska formler som objekt att visa, radera, lägga till eller uppdatera. För att återställa databasen kan man köra kommandot npm run reset-database, i terminalen.</p>
        <p>Mongodb är beroende av att startas med sin Dockercontainer, den fungerar alltså bara lokalt.</p>

        <p>Appen ligger på Github och kan laddas ner och köras så här:</p>
        <p><code>
        git clone https://github.com/marcusgsta/ramverk2-app.git<br/>
        npm install && npm start
        </code></p>
    </div>
);

export default LandingPage;
