[![Build Status](https://travis-ci.org/marcusgsta/ramverk2.svg?branch=master)](https://travis-ci.org/marcusgsta/ramverk2)
[![BCH compliance](https://bettercodehub.com/edge/badge/marcusgsta/ramverk2?branch=master)](https://bettercodehub.com/)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/marcusgsta/ramverk2/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/marcusgsta/ramverk2/?branch=master)
[![Build Status](https://scrutinizer-ci.com/g/marcusgsta/ramverk2/badges/build.png?b=master)](https://scrutinizer-ci.com/g/marcusgsta/ramverk2/build-status/master)
[![Code Coverage](https://scrutinizer-ci.com/g/marcusgsta/ramverk2/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/marcusgsta/ramverk2/?branch=master)

# Ramverk2 – with react-frontend and express-backend

Clone this repo with

```
git clone https://github.com/marcusgsta/ramverk2.git
cd ramverk2
npm install
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

Test repos with
```
npm test
```

Test repos in different node environments like this:
```
npm run test1 # for node_latest
npm run test2 # for node_alpine
npm run test3 # for node_8_alpine
```
This will take some time. When the unit tests are done you will need to press 'Q' to leave the Jest CLI and proceed with code coverage as a last step.

Optional: Set port (default: 1337)
```
DBWEBB_PORT=PORT_NUMBER
```
