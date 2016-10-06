var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var schema = require('../model/schema');
var database = require('../model/database');

var session ;

/* GET home page. */
router.get('/', function (req, res, next) {
    session = req.session;
    if (session.email) {
        res.redirect('/allRooms');
    }
    else {
        res.render('index');
    }
});

router.post("/", function (req, res, next) {
    console.log("In the post method " + JSON.stringify(req.body));
    session = req.session;
    session.email = req.body.email;

    schema.Users.find({username:req.body.username},function(err, doc){
        if (err)
            return console.error(err);
        console.log(doc);
        if(doc.length==0){
            var instance = new schema.Users(req.body);
            instance.save(function (err, user) {
                if (err)
                    return console.error(err);
                console.log("Save success: ", user);
            });

            res.redirect("/allRooms");
        }else{
            res.render("index",{"warning":"This username is already taken"});
        }
    });
});

module.exports = router;
