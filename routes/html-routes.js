// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

  app.get("/", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.render('customer');
    }
    res.render('signup');
  });

  app.get("/login", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.render('customer');
    }
    res.render('login');
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/customer", isAuthenticated, function (req, res) {
    res.render('customer');
  });
  //
  app.get("/api/customer/:id:firstName:lastName:email:streetAddress:streetAddressL2:phoneNumber", function (req, res) {
    res.render('customer');
  });

  app.get('/signup', (req, res) => res.render('signup'));
  app.get('/login', (req, res) => res.render('login'));
  app.get('/customer', (req, res) => res.render('customer'));
  //app.get('/api/customer/:id:firstName:lastName:email:streetAddress:streetAddressL2:phoneNumber', (req, res) => res.render('profile'));

  app.get('/job/:id', (req, res) => res.render('job'));

  app.get('/profile/:id', (req, res) => res.render('profile'));

};
