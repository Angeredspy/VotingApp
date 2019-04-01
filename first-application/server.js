var express = require('express')
var logger = require('morgan') // Stores information and displays it 
var bodyParser = require('body-parser') // v 4

var admin = require('firebase-admin')

var serviceAccount = require('./voting-app-abda9-firebase-adminsdk-7ujle-7cb5fc2b0b.json') 

var firebaseAdmin = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://voting-app-abda9.firebaseio.com'
})

var database = firebaseAdmin.database()

// Create instance of the express app named app
var app = express()

app.set('view engine', 'ejs') // Have our app use embedded JavaScript

app.use(express.static('views'))
app.set('views', __dirname + '/views')

// Give the server access to the user input 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false }))


app.use(logger('dev')) 

// Create authentication middleware 
function isAuthenticated(request, response, next){
    // check if user is logged in 
    // if they are, attach the user to the request object, and call next
    // if they are not, send them to the login page with a message saying "login"
    next()
}


app.get('/', function(request, response){ // Send back some info to whoever tries to get our application
   var restaurantsRef = database.ref("/restaurants")
   
   restaurantsRef.once('value',function(snapshot){ // Once there is a change of value we stop listening
   var data = snapshot.val()
   if (!data) {
       data = {}
   }
        response.render('home.ejs', { restaurants:data })
   })
   
  
}) 

app.get('/homecoming-queen', isAuthenticated, function(request, response){
    response.render('homecomingQueen.ejs')
})

app.post('/', function(request, response){ // WE need npm install body-parser
    var breakfast = request.body.breakfast
    //Send back a page with the yelled breakfast
    response.render('results.ejs', { data: breakfast })
})



var port = process.env.PORT

app.listen(port, function(){
    console.log('App running on port ' + port)
}) 