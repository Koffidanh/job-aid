$(document).ready(function () {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/customer/:id:firstName:lastName:email:streetAddress:streetAddressL2:phoneNumber").then(function (data) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Customer.findOne({
      where: {
        $or: [
          {
            id: req.params.id
          },
          { firstName: req.body.firstName },
          { lastName: req.body.lastName },
          { email: req.body.email },
          { streetAddress: req.body.streetAddress },
          { streetAddressL2: req.body.streetAddressL2 },
          { phoneNumber: req.body.phoneNumber },

        ]
      }
    }

    ).then((dbCustomer) => res.json(dbCustomer));
  })
});
