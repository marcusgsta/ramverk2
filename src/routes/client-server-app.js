var express = require('express');
var router = express.Router();

/* GET about page. */

router.get("/", (req, res) => {
    res.render("app", {
        title: "Klient/server-app",
        message: "Info om klient/server-appen för kursen Ramverk2"
    });
});

module.exports = router;
