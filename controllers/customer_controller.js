const express = require('express');

const customerRouter = express.Router();

exports.view = (req, res) => {
  res.render('customer');
}


// Import the model (customer.js) to use its database functions.
// const customer = require('../models/customer.js');

// // Create all our routes and set up logic within those routes where required.
// customerRouter.get('/', (req, res) => {
//   customer.all((data) => {
//     const hbsObject = {
//       customers: data,
//     };
//     console.log(hbsObject);
//     res.render('customer', hbsObject);
//   });
// });

// customerRouter.post('/api/customers', (req, res) => {
//   customer.create(['residentialCommercial','firstName', 'lastName', 'positionDepartment', 'companyName', 'phoneNumber', 'streetAddress', 'streetAddressL2', 'city', 'state', ' zipCode', 'email', 'startDate', 'endDate'], [req.body.residentialCommercial, req.body.firstName, req.body.lastName, req.body.positionDepartment, req.body.companyName, req.body.phoneNumber, req.body.streetAddress, req.body.streetAddressL2, req.body.city, req.body.state, req.body.zipCode, req.body.email, req.body.startDate, req.body.endDate], (result) => {
//     // Send back the burger name of the new quote
//     res.json({ id: result.insertId });
//   });
// });

// router.put('/api/customers/:id', (req, res) => {
//   const condition = `id = ${req.params.id}`;

//   console.log('condition', condition);

//   customer.update(
//     {
//       devoured: req.body.devoured,
//     },
//     condition,
//     (result) => {
//       if (result.changedRows === 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       }
//       res.status(200).end();
//     }
//   );
// });



// Export routes for server.js to use.
module.exports = customerRouter;
