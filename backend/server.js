var express = require('express');
var path = require('path');
var mongoose = require('mongoose')
var cors = require('cors')
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var dbConfig = require('./database/db')
var session = require('express-session');
const app = express();
var passport = require('passport');
var MemoryStore =session.MemoryStore;
const sessionPaths = ['/auth/profile', '/auth/login','/api/kart','/auth/logout','/auth/updatekart','/auth/billing','/auth/UpdateUser','/auth/UpdatePassword','/auth/Updateproductquantity'];
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(sessionPaths,session({
   secret: 'max', saveUninitialized: false, resave: false, store: new MemoryStore(),name: 'app.sid',
   cookie:{
      // maxAge:36000,
      httpOnly:false,
   }
}));
// Connecting with mongo db
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
   useNewUrlParser: true
}).then(() => {
      console.log('Database sucessfully connected')
   },
   error => {
      console.log('Database could not connected: ' + error)
   }
)

app.use(function(req, res, next) {

   //to allow cross domain requests to send cookie information.
   res.header('Access-Control-Allow-Credentials', true);
   
   // origin can not be '*' when crendentials are enabled. so need to set it to the request origin
   res.header('Access-Control-Allow-Origin',  req.headers.origin);
   
   // list of methods that are supported by the server
   res.header('Access-Control-Allow-Methods','OPTIONS,GET,PUT,POST,DELETE');
   
   res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
   
   next();
   });



// Setting up port with express js


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: false
}));
app.use(cors({ credentials: true, origin: true }))
//Routes 
const api = require('../backend/routes/api.route')
// const userroute = require('../backend/routes/user.route')
const auth = require('./routes/auth.route');
app.use('/api', api)
// app.use('/user',userroute)


// Create port

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})
require('./passport');
app.use(passport.initialize());
app.use(passport.session());
app.use('/auth',auth);

// Find 404 and hand over to error handler
app.use((req, res, next) => {
   next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    console.error(err.message); // Log error message in our server's console
    if (!err.statusCode) err.statusCode = 500; // If err has no specified error code, set error code to 'Internal Server Error (500)'
    res.status(err.statusCode).send(err.message); // All HTTP requests must have a response, so let's send back an error with its status code and message
  });