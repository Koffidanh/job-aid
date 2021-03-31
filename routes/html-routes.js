// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
const db = require('../models');
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");
const { Op } = require('sequelize')

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
  // app.get("/api/customer/:id:firstName:lastName:email:streetAddress:streetAddressL2:phoneNumber", function (req, res) {
  //   res.render('customer');
  // });

  app.get('/signup', (req, res) => res.render('signup'));
  app.get('/login', (req, res) => res.render('login'));
  app.get('/customer', (req, res) => res.render('customer'));
  //app.get('/api/customer/:id:firstName:lastName:email:streetAddress:streetAddressL2:phoneNumber', (req, res) => res.render('profile'));

  // app.get('/job', (req, res) => res.render('job'));


  app.get('/job-form', (req, res) => res.render('jobForm'));



  app.get('/profile/:id?', isAuthenticated, async (req, res) => {
    console.log(req.params)
    const id = Number.parseInt(req.params.id, 10)
    console.log(id)
    const customer = await db.Customer.findByPk(id)
    console.log(customer)
    res.render('profile', { customer: customer.get({ plain: true }) });
  })


  app.get('/viewAll', async (req, res) => {
    const allCustomers = await db.Customer.findAll()
    console.log(allCustomers)
    res.render('viewAll', { customer: allCustomers });

  })

  // app.get('/jobs/:id?', async (req, res) => {
  //   console.log(req.params)
  //   const id = Number.parseInt(req.params.id, 10)
  //   console.log(id)
  //   const customer = await db.Customer.findByPk(id)
  //   console.log(customer)
  //   res.render('profile', { customer: customer.get({ plain: true }) });


  // })
  app.post('/search', (req, res) => {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    console.log(req.body)
    db.Customer.findAll({
      where: {
        [Op.or]: [
          { firstName: req.body.existingCustomer },
          { lastName: req.body.existingCustomer },
          { email: req.body.existingCustomer },
          { streetAddress: req.body.existingCustomer },
          { streetAddressL2: req.body.existingCustomer },
          { phoneNumber: req.body.existingCustomer },
        ]
      },
    }).then((dbCustomer) => res.render('viewAll', { customer: dbCustomer }))
  });
  app.get('/jobs/:id?', async (req, res) => {
    console.log(req.params)
    const id = Number.parseInt(req.params.id, 10)
    console.log(id)
    const jobDetails = await db.JobType.findOne({
      where: {
      CustomerId: id
      }
    });
    if (jobDetails==false) {
      alert('No jobs exist for customer');
    } else {
    res.render('job', { JobType: jobDetails.get({ plain: true })
    }) 
    }

  });

  //   app.get('/search:firstName'), (req, res) =>
  //     db.Customers.findAll({
  //       where: {
  //         firstName: req.params.search
  //       }
  //     }).then(data => res.render('viewAll', { customer: data }))

};



// app.get('/viewAll', async (req, res) => {
//   console.log(req.params)
//   const str = Number.parseInt(req.params.id, 10)
//   console.log(str)
//   const customer = await db.Customer.findAll()
//   console.log(customer)
//   res.render('viewAll', { customer: customer.get({ plain: true }) });
