"use strict";
//mongodb
const mongo = require("mongodb").MongoClient;
const dsn =  process.env.DBWEBB_DSN || "mongodb://localhost:27017/math";

var express = require('express');
var router = express.Router();

/* POST mongodb page. */

router.post("/", async (request, response) => {
    try {
        var name = request.body.name;
        var formula = request.body.formula;
        let res = await addToCollection(dsn, "math", name, formula);

        console.log("name", name);
        console.log("formula", formula);
        response.json(res);
    } catch (err) {
        console.log(err);
        response.json(err);
    }
});

/**
 * Add documents to a collection
 *
 * @async
 *
 * @param {string} dsn        DSN to connect to database.
 * @param {string} colName    Name of collection.
 *
 * @throws Error when database operation fails.
 *
 * @return {Void}
 */
async function addToCollection(dsn, colName, name, formula) {
    const db  = await mongo.connect(dsn);
    const col = await db.collection(colName);
    const res = await col.insert( { "name": name, "formula": formula});

    await db.close();

    return res;
}

module.exports = router;
