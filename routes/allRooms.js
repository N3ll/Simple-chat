var express = require('express');
var app = express();
var router = express.Router();
var mongoose = require('mongoose');
var schema = require('../model/schema');
var database = require('../model/database');

var session;

/* GET all roomsArr. */
router.get('/', function (req, res, next) {
    session = req.session;

    if (session.email) {
        schema.Rooms.find({}).sort({created_at:-1}).exec(function (err, rooms) {
            if (err) {
                console.log(err);
                res.send(err);
            }
            // console.log(rooms)
            res.render("allRooms", {roomsReturned: rooms});
        });
    }
    else {
        res.redirect('/');
    }
});

/* create a new roomSchema. */
router.post('/', function (req, res, next) {
    console.log("In the post method " + JSON.stringify(req.body));
    var instance = new schema.Rooms(req.body);
    instance.save(function (err, room) {
        if (err)
            return console.error(err);
        // console.log("Save success: ", room);
       // var redirect = "/room/" + req.body.name;
        //res.send({redirect: redirect});
    });

    var roomName=req.body.name;
    schema.Users.find({email:req.session.email},function(err,user){
        if(err)return console.log(err);

        schema.Rooms.update({name: roomName}, {$push: {'users': user[0]}}, function (err, room) {
            if (err) return console.error(err);
            console.log("Update: ", room);
        });
    });
});

//export the router
module.exports = router;
