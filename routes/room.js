var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var schema = require('../model/schema');
var database = require('../model/database');

/* GET messageSchema listing. */
router.get('/:name', function (req, res, next) {
    session = req.session;
    if (session.email) {
        console.log("params" + JSON.stringify(req.params.name));
        var requestedName = req.params.name;

        schema.Users.find({email: req.session.email}, function (err, user) {
            if (err)return console.log(err);

            schema.Rooms.findOneAndUpdate({name: requestedName}, {$push: {'users': user[0]}}, function (err, room) {
                if (err) {
                    console.log(err);
                    res.send(err);
                }

                var t = user[0].username;
                res.render("room", {roomReturned: room, loggedUser: t});
            });
        });
    } else {
        res.redirect('/');
    }

});

/* create a new messageSchema. */
router.post('/:name', function (req, res, next) {
    console.log("In the post method " + JSON.stringify(req.body));

    schema.Users.find({email: req.session.email}, function (err, user) {
        if (err)return console.log(err);
        var msgToSave = {
            text: req.body.text,
            user: user[0]
        };

        var instance = new schema.Messages(msgToSave);

        instance.save(function (err, msg) {
            if (err)
                return console.error(err);
            console.log("Save success: ", msg);
        });

        var requestedName = req.params.name;
        schema.Rooms.update({name: requestedName}, {$push: {'messages': msgToSave}}, function (err, room) {
            if (err) return console.error(err);
            console.log("Update: ", room);
        });
    });
});

module.exports = router;
