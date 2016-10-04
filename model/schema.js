var mongoose = require('mongoose');
var Schema = mongoose;
var exports = module.exports = {};

var userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

var messageSchema = new mongoose.Schema({
    text: String,
    user: {
        username: String,
        email: String,
        password: String
    },
    created_at: {type: Date, default: Date.now}
});

var roomSchema = new mongoose.Schema({
    name: String,
    topic: String,
    messages: [messageSchema],
    users: [userSchema],
    created_at: {type: Date, default: Date.now}
});


var User = mongoose.model("user", userSchema);
var Message = mongoose.model("message", messageSchema);
var Room = mongoose.model("room", roomSchema);
exports.Users = User;
exports.Messages = Message;
exports.Rooms = Room;


//-----------ENTER DUMMY DATA FOR TESTING PURPOSES-----------
//Clear the collections from existing data
for (var i in mongoose.connection.collections) {
    mongoose.connection.collections[i].remove(function () {
    });
}

//usersArr
var usersArr = [];
var userTemp = new User({
    username: "Spiderman",
    email: "spiderman@chat.com",
    password: "password"
});
userTemp.save(function (err, user) {
    if (err)return console.log(err)
    //console.log(user);
});
usersArr.push(userTemp);

userTemp = new User({
    username: "Ironman",
    email: "ironman@chat.com",
    password: "password"
});
userTemp.save(function (err, user) {
    if (err)return console.log(err)
    //console.log(user);
});
usersArr.push(userTemp);

userTemp = new User({
    username: "Captain America",
    email: "america@chat.com",
    password: "password"
});
userTemp.save(function (err, user) {
    if (err)return console.log(err)
    //console.log(user);
});
usersArr.push(userTemp);

userTemp = new User({
    username: "Deadpool",
    email: "deadpool@chat.com",
    password: "password"
});
userTemp.save(function (err, user) {
    if (err)return console.log(err)
    //console.log(user);
});
usersArr.push(userTemp);

userTemp = new User({
    username: "Daredevil",
    email: "daredevil@chat.com",
    password: "password"
});
userTemp.save(function (err, user) {
    if (err)return console.log(err)
    // console.log(user);
});
usersArr.push(userTemp);

userTemp = new User({
    username: "Captain Marvel",
    email: "marvel@chat.com",
    password: "password"
});
userTemp.save(function (err, user) {
    if (err)return console.log(err)
    //console.log(user);
});
usersArr.push(userTemp);

userTemp = new User({
    username: "Doctor Strange",
    email: "strange@chat.com",
    password: "password"
});
userTemp.save(function (err, user) {
    if (err)return console.log(err)
    //console.log(user);
});
usersArr.push(userTemp);

userTemp = new User({
    username: "Hulk",
    email: "hulk@chat.com",
    password: "password"
});
userTemp.save(function (err, user) {
    if (err)return console.log(err)
    // console.log(user);
});
usersArr.push(userTemp);

userTemp = new User({
    username: "Thor",
    email: "thor@chat.com",
    password: "password"
});
userTemp.save(function (err, user) {
    if (err)return console.log(err)
    //console.log(user);
});
usersArr.push(userTemp);

userTemp = new User({
    username: "Batman",
    email: "batman@chat.com",
    password: "password"
});
userTemp.save(function (err, user) {
    if (err)return console.log(err)
    //console.log(user);
});
usersArr.push(userTemp);

userTemp = new User({
    username: "Superman",
    email: "superman@chat.com",
    password: "password"
});
userTemp.save(function (err, user) {
    if (err)return console.log(err)
    // console.log(user);
});
usersArr.push(userTemp);

userTemp = new User({
    username: "Cat woman",
    email: "cat@chat.com",
    password: "password"
});
userTemp.save(function (err, user) {
    if (err)return console.log(err)
    //console.log(user);
});
usersArr.push(userTemp);

userTemp = new User({
    username: "Electra",
    email: "electra@chat.com",
    password: "password"
});
userTemp.save(function (err, user) {
    if (err)return console.log(err)
    // console.log(user);
});
usersArr.push(userTemp);

userTemp = new User({
    username: "Wonder woman",
    email: "wonder@chat.com",
    password: "password"
});
userTemp.save(function (err, user) {
    if (err)return console.log(err)
    //console.log(user);
});
usersArr.push(userTemp);

userTemp = new User({
    username: "Supergirl",
    email: "supergirl@chat.com",
    password: "password"
});
userTemp.save(function (err, user) {
    if (err)return console.log(err)
    //console.log(user);
});
usersArr.push(userTemp);

userTemp = new User({
    username: "Invisible woman",
    email: "invisible@chat.com",
    password: "password"
});
userTemp.save(function (err, user) {
    if (err)return console.log(err)
    //console.log(user);
});
usersArr.push(userTemp);

userTemp = new User({
    username: "Storm",
    email: "storm@chat.com",
    password: "password"
});
userTemp.save(function (err, user) {
    if (err)return console.log(err)
    // console.log(user);
});
usersArr.push(userTemp);

userTemp = new User({
    username: "Cyclops",
    email: "cyclops@chat.com",
    password: "password"
});
userTemp.save(function (err, user) {
    if (err)return console.log(err)
    //console.log(user);
});
usersArr.push(userTemp);

userTemp = new User({
    username: "Wolverine",
    email: "wolverine@chat.com",
    password: "password"
});
userTemp.save(function (err, user) {
    if (err)return console.log(err)
    // console.log(user);
});
usersArr.push(userTemp);

userTemp = new User({
    username: "Professor X",
    email: "x@chat.com",
    password: "password"
});
userTemp.save(function (err, user) {
    if (err)return console.log(err)
    // console.log(user);
});
usersArr.push(userTemp);


//messagesArr
var messagesArr = [];
var author;


var msgTemp = new Message({
    text: "I think Magneto is getting too old",
    user: usersArr[19]
});
msgTemp.save(function (err, msg) {
    if (err)return console.log(err)
    //console.log(msg);
});
messagesArr.push(msgTemp);

msgTemp = new Message({
    text: "The Joker has painted his hair purple. We have to follow the fashion trends more closely",
    user: usersArr[7]
});
msgTemp.save(function (err, msg) {
    if (err)return console.log(err)
    //console.log(msg);
});
messagesArr.push(msgTemp);

msgTemp = new Message({
    text: "I have noticed a troll today in the public bathroom downtown",
    user: usersArr[9]
});
msgTemp.save(function (err, msg) {
    if (err)return console.log(err)
    //console.log(msg);
});
messagesArr.push(msgTemp);

msgTemp = new Message({
    text: "Voldemort might have returned. We have to call Harry to check whether his scar if huring.",
    user: usersArr[8]
});
msgTemp.save(function (err, msg) {
    if (err)return console.log(err)
    //console.log(msg);
});
messagesArr.push(msgTemp);

msgTemp = new Message({
    text: "Captain cold is working in the mall, maintaining the ice skating playground.",
    user: usersArr[9]
});
msgTemp.save(function (err, msg) {
    if (err)return console.log(err)
    //console.log(msg);
});
messagesArr.push(msgTemp);

msgTemp = new Message({
    text: "Professor Zoom had a coffee today with the Flash",
    user: usersArr[11]
});
msgTemp.save(function (err, msg) {
    if (err)return console.log(err)
    //console.log(msg);
});
messagesArr.push(msgTemp);

msgTemp = new Message({
    text: "I developed a new technique of fighting with chopsticks",
    user: usersArr[1]
});
msgTemp.save(function (err, msg) {
    if (err)return console.log(err)
    //console.log(msg);
});
messagesArr.push(msgTemp);

msgTemp = new Message({
    text: "I am free tomorrow to practice",
    user: usersArr[1]
});
msgTemp.save(function (err, msg) {
    if (err)return console.log(err)
    //console.log(msg);
});
messagesArr.push(msgTemp);

msgTemp = new Message({
    text: "Hey guys, don't leave me hanging!",
    user: usersArr[1]
});
msgTemp.save(function (err, msg) {
    if (err)return console.log(err)
    //console.log(msg);
});
messagesArr.push(msgTemp);

msgTemp = new Message({
    text: "Let me know when you figure out how to fight with a fork. hihi",
    user: usersArr[3]
});
msgTemp.save(function (err, msg) {
    if (err)return console.log(err)
    //console.log(msg);
});
messagesArr.push(msgTemp);

msgTemp = new Message({
    text: "I have tickets for the Swan lake",
    user: usersArr[4]
});
msgTemp.save(function (err, msg) {
    if (err)return console.log(err)
    //console.log(msg);
});
messagesArr.push(msgTemp);

msgTemp = new Message({
    text: "I prefer to go to Romeo and Juliet",
    user: usersArr[5]
});
msgTemp.save(function (err, msg) {
    if (err)return console.log(err)
    //console.log(msg);
});
messagesArr.push(msgTemp);

msgTemp = new Message({
    text: "Mistique has retired to Bali. SHe sent us discount offers for her hotel",
    user: usersArr[10]
});
msgTemp.save(function (err, msg) {
    if (err)return console.log(err)
    //console.log(msg);
});
messagesArr.push(msgTemp);

msgTemp = new Message({
    text: "Guys, do you know any knitting classes on a reasonable price?",
    user: usersArr[16]
});
msgTemp.save(function (err, msg) {
    if (err)return console.log(err)
    // console.log(msg);
});
messagesArr.push(msgTemp);

msgTemp = new Message({
    text: "I will check in the center today after my drawing class",
    user: usersArr[17]
});

msgTemp.save(function (err, msg) {
    if (err)return console.log(err)
    //console.log(msg);
});
messagesArr.push(msgTemp);

msgTemp = new Message({
    text: "I've heard that beans are very good for speeding in the air",
    user: usersArr[14]
});
msgTemp.save(function (err, msg) {
    if (err)return console.log(err)
    //console.log(msg);
});
messagesArr.push(msgTemp);

msgTemp = new Message({
    text: "I will host a dinner tomorrow. Just bring some wine when you come",
    user: usersArr[7]
});
msgTemp.save(function (err, msg) {
    if (err)return console.log(err)
    //console.log(msg);
});
messagesArr.push(msgTemp);

msgTemp = new Message({
    text: "I will bring strawberry ice cream as well",
    user: usersArr[19]
});
msgTemp.save(function (err, msg) {
    if (err)return console.log(err)
    //console.log(msg);
});
messagesArr.push(msgTemp);

//roomsArr
var roomsArr = [];
var roomTemp = new Room({
    name: "Villains",
    topic: "Discussing newly spotted villains on our streets",
    messages: messagesArr.slice(0,6),
    users: usersArr
});
roomTemp.save(function (err, room) {
    if (err)return console.log(err)
    // console.log(room);
});
roomsArr.push(roomTemp);

roomTemp = new Room({
    name: "Fighting",
    topic: "What are the latest trends in fighting moves. Here we can arrange fights to practise",
    users: usersArr.slice(0, 4),
    messages: messagesArr.slice(6, 10)
});
roomTemp.save(function (err, room) {
    if (err)return console.log(err)
    // console.log(room);
});
roomsArr.push(roomTemp);

roomTemp = new Room({
    name: "Ballet",
    topic: "We only made this one for Hulk!",
    users: usersArr.slice(4, 10),
    messages: messagesArr.slice(10, 12)
});
roomTemp.save(function (err, room) {
    if (err)return console.log(err)
    //console.log(room);
});
roomsArr.push(roomTemp);

roomTemp = new Room({
    name: "Holiday",
    topic: "Share places with low crime rate",
    users: usersArr.slice(10, 14),
    messages: messagesArr.slice(12, 13)
});
roomTemp.save(function (err, room) {
    if (err)return console.log(err)
    //console.log(room);
});
roomsArr.push(roomTemp);

roomTemp = new Room({
    name: "Hobbies",
    topic: "Aliens finishing, clouds swimming, etc.",
    users: usersArr.slice(14, 19),
    messages: messagesArr.slice(13, 15)
});
roomTemp.save(function (err, room) {
    if (err)return console.log(err)
    //console.log(room);
});
roomsArr.push(roomTemp);

roomTemp = new Room({
    name: "Cooking",
    topic: "The best recipes for boosting super powers",
    users: usersArr,
    messages: messagesArr.slice(15, 18)
});
roomTemp.save(function (err, room) {
    if (err)return console.log(err)
    //console.log(room);
});
roomsArr.push(roomTemp);





