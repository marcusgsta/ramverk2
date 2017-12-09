"use strict";
//mongodb
const mongo = require("mongodb").MongoClient;
var ObjectId = require('mongodb').ObjectId;
const dsn =  process.env.DBWEBB_DSN || "mongodb://localhost:27017/math";

var express = require('express');
var router = express.Router();

/* POST mongodb page. */

router.delete("/", async (request, response) => {
    try {
        var id = request.body.id;
        let res = await removeFromCollection(dsn, "math", id);

        console.log("id", id);
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
async function removeFromCollection(dsn, colName, id) {
    const db  = await mongo.connect(dsn);
    const col = await db.collection(colName);
    // const res = await col.deleteOne({ _id: "5a283fd2f80a8906415c8256" });
    const res = await col.remove({ _id: new ObjectId(id)});

    await db.close();

    return res;
}

module.exports = router;
