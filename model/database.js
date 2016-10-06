var mongoose = require('mongoose');
var exports = module.exports = {};
var mongoose = require('mongoose');

//Connect to database
mongoose.connect('mongodb://localhost/chatMandatory');
exports.db = mongoose.connection;
exports.db.on('error', console.error.bind(console, 'connection error:'));
exports.db.once('open', function() {
    console.log("we're connected to database through mongoose!");
});

