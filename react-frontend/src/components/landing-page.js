import React from 'react';

const LandingPage = () => (
    <div>
        <h1>Klient/server-app – Landing Page</h1>

        <p>Denna app har inte så mycket innehåll ännu. Den består av en express-server och en klient gjort i React. Där finns en route <em>users</em> som testar att ladda data från routen users i servern, som är en JSON-fil.</p>

        <p>Appen ligger på Github och kan laddas ner och köras så här:</p>
        <p><code>
        git clone https://github.com/marcusgsta/ramverk2-app.git<br/>
        npm install && npm start
        </code></p>
    </div>
);

export default LandingPage;
