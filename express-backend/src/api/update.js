"use strict";
//mongodb
const mongo = require("mongodb").MongoClient;
var ObjectId = require('mongodb').ObjectId;
const dsn =  process.env.DBWEBB_DSN || "mongodb://localhost:27017/math";

var express = require('express');
var router = express.Router();

/* POST mongodb page. */

router.put("/", async (request, response) => {
    try {
        var id = request.body.id;
        var name = request.body.name;
        var formula = request.body.formula;
        let res = await updateItemFromCollection(dsn, "math", id, name, formula);

        console.log("id", id);
        console.log("name", name);
        console.log("formula", formula);
        response.json(res);
    } catch (err) {
        console.log(err);
        response.json(err);
    }
});

/**
 * Delete documents to a collection
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
async function updateItemFromCollection(dsn, colName, id, name, formula) {
    const db  = await mongo.connect(dsn);
    const col = await db.collection(colName);

    //var myquery = { name: name };
    var myquery = { _id: new ObjectId(id) };
    var newvalues = { name: name, formula: formula };
    const res = await col.update(myquery, { $set: newvalues } );

    await db.close();

    return res;
}

module.exports = router;
