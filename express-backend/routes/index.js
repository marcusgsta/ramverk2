var express = require('express');
var router = express.Router();

/* GET home page. */

router.get("/", (req, res, next) => {
    res.render("index", {
        title: "Hem",
        message: "Min sida"
    });
});

module.exports = router;
