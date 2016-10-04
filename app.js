var express = require('express');
var session = require('express-session');
var app = express();
var server = app.listen(3030, function () {
    console.log('listening on *:3030');
});
var io = require('socket.io').listen(server);
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var room = require('./routes/room');
var allRooms = require('./routes/allRooms');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(session({
    secret: "sh",
    proxy: true,
    resave: true,
    saveUninitialized: true
}));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/allRooms', allRooms);
app.use('/room', room);
app.get('/logout', function (req, res) {
    req.session.destroy(function (err) {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/');
        }
    });
});

io.on('connection', function (socket) {
    socket.on('room added', function (room) {
        //console.log('room'+room);
        io.emit('room added', room);
    });
});


io.on('connection', function (socket) {
    socket.on('chat message', function (msg) {
        //console.log('message'+JSON.stringify(msg));
        socket.join(msg.path);
        io.to(msg.path).emit('chat message', msg);
    });
});

io.on('connection', function (socket) {
    socket.on('new user', function (user) {
        console.log('message' + JSON.stringify(user));
        socket.join(user.path);
        io.to(user.path).emit('new user', user);
    });
});


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to userSchema
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
