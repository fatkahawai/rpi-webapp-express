/**
 * myapi.js
 * 
 * @version 1.0
 * 
 * DESCRIPTION:
 * a "HELLO WORLD" server-side application to demonstrate running a node 
 * API Appserver 
 * Uses the Express node packages. 
 * 
 * 
 * @throws none
 * @see nodejs.org
 * @see express.org
 * 
 * @author Robert Drummond
 * (C) 2013 PINK PELICAN NZ LTD
 */

var http      = require('http');
var express   = require('express');

var app       = express();

var customers = [ { first: 'Tom', last: 'Bosley'},
                  { first: 'James', last: 'Kirk'}
                ];

// ------------------------------------------------------------------------
// configure Express to serve index.html and any other static pages stored 
// in the home directory
//
  app.configure(function() {
    app.use(express.favicon());
    app.use(express['static'](__dirname )); 
  });

// ------------------------------------------------------------------------
// set up Express routes - middleware to handle incoming requests
//

// Express route for incoming requests for a customer name
app.get('/customers/:id', function(req, res){
  // send an object as a JSON string
 console.log('id = '+req.params.id);
 res.send(customers[req.params.id]);
}); // apt.get()

// Express route for incoming requests for a list of all customers
app.get('/customers', function(req, res){
  // send an object as a JSON string
  console.log('all customers');
  res.send(customers);
}); // apt.get()

// Express route for any other unrecognised incoming requests
app.get('*', function(req, res){
  res.send('Unrecognised API call', 404);
});

// Express route to handle errors
app.use(function(err, req, res, next){
  if (req.xhr) {
    res.send(500, 'Oops, Something went wrong!');
  } else {
    next(err);
  }
}); // apt.use()

// ------------------------------------------------------------------------
// Start Express App Server
//
app.listen(3000);
console.log('App Server is listening on port 3000');

