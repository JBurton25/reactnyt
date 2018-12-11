var express = require('express');
var router = express.Router();

var Article = require('../models/Article.js');

//get route to display react.js app

router.get("/", function(req, res) {
    res.sendFile(process.cwd() + "/public/index.html");
})

//api - for components to use to query mongoDB for all saved articles.
router.get("/api/save", function(req, res) {
    Article.find({}, function(err, docs) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(docs);
        }
    });
});

//api post - for components to use to save article to db
router.post("/api/saved", function(req, res) {
    var post = new Article (req.body);

    post.save(function(err, doc) {
        if (err) {
            console.log(err);
            res.sendStatus(400);
        }
        else {
            console.log(doc);
            res.sendStatus(200);
        }
    });
});

//api delete - components will use this to delete save article in db
router.post("/api/delete:articleMongoId", function (req, res) {
    console.log(req.params.articleMongoId)
    Article.findByIdAndRemove(req.params.articleMongoId, function(err, todo) {
        if (err) {
            console.log(err);
            res.sendStatus(400);
        }
        else {
            res.sendStatus(200)
        }
    });
});

module.exports = router;