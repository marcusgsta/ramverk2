[![Build Status](https://travis-ci.org/marcusgsta/ramverk2.svg?branch=master)](https://travis-ci.org/marcusgsta/ramverk2)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/marcusgsta/ramverk2/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/marcusgsta/ramverk2/?branch=master)
[![Build Status](https://scrutinizer-ci.com/g/marcusgsta/ramverk2/badges/build.png?b=master)](https://scrutinizer-ci.com/g/marcusgsta/ramverk2/build-status/master)
[![Code Coverage](https://scrutinizer-ci.com/g/marcusgsta/ramverk2/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/marcusgsta/ramverk2/?branch=master)

# Ramverk2 – me-page made with Express.js (server)

This repo was made for the course Ramverk2 at Blekinge Tekniska Högskola. It constitutes a me-page, with a chat using socket.io and database CRUD using Mongodb, as well as use of Docker. It was made by Marcus Gustafsson, and can be run locally by following the instructions below.

Clone this repo with

```
git clone https://github.com/marcusgsta/ramverk2.git

cd ramverk2
```

You will also need to clone the client into a new directory 'react-frontend'
```
git clone https://github.com/marcusgsta/redovisa-client.git react-frontend
```

Install both repos
```
npm install

cd react-frontend && npm run install && npm build
```

Start Docker Container to run Mongodb database, and run in detached mode:

```
npm run start-docker
```

If there is a problem, make sure no other Docker container is running, and if that is the case, stop it:
```
docker ps
docker stop name-of-your-container
```

Reset database and fill with default data:
```
npm run reset-database
```

Start with
```
npm start
```

Test backend with
```
npm test
```
Test client with
```
cd react-frontend && npm test
```

Test code coverage for client:
```
npm run test-cov
```

Test repos in different node environments like this:
```
npm run test1 # for node 7
npm run test2 # for node 8
npm run test3 # for node 9
```
This will take some time. When the unit tests are done you will need to press 'Q' to leave the Jest CLI.

Optional: Set port (default: 1337)
```
DBWEBB_PORT=PORT_NUMBER
```
