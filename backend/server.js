let express = require('express'),
   path = require('path'),
   mongoose = require('mongoose'),
   cors = require('cors'),
   bodyParser = require('body-parser'),
   dbConfig = require('./database/db');

   var passport = require('passport');
   var session = require('express-session');
   const app = express();


   
   app.use(session(
   {
      name: 'name.sid',
      resave: false,
      saveUninitialized: false,
      secret: 'secret',
      cookie: {
         maxAge: 3600000,
         httpOnly: false,
         secure: false

      }
   }
));

require('./passport');

app.use(passport.initialize());
app.use(passport.session());




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

//Routes 

const api = require('../backend/routes/api.route')
const userroute = require('../backend/routes/user.route')

// Setting up port with express js


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: false
}));
app.use(cors()); 
app.use('/api', api)
app.use('/user',userroute)

// Create port

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

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