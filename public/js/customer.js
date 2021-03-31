document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded! 🚀');

  const firstNameInput = document.getElementById('firstName');
  const lastNameInput = document.getElementById('lastName');
  const companyNameInput = document.getElementById('companyName');
  const positionDepartmentInput = document.getElementById('positionDepartment');
  const phoneNumberInput = document.getElementById('phoneNumber');
  const streetAddressInput = document.getElementById('streetAddress');
  const streetAddressL2Input = document.getElementById('streetAddressL2');
  const cityInput = document.getElementById('city');
  const stateInput = document.getElementById('state');
  const zipCodeInput = document.getElementById('zipCode');
  const emailInput = document.getElementById('email');
  const residentialCommercialInput = document.getElementById('residentialCommercial');


  const insertCustomer = (customerData) => {
    fetch('/api/customers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(customerData),
    })
      .then(function () {
        window.location.replace("/customer");
      })
      .catch((err) => console.error(err));
  };


  // Handle when the customer form is submitted
  const handleCustomerFormSubmit = (e) => {
    e.preventDefault();

    if (!firstNameInput.value.trim() || !lastNameInput.value.trim()) {
      alert('Please provide customer first and last name');
      return;
    }

    insertCustomer({
      firstName: firstNameInput.value.trim(),
      lastName: lastNameInput.value.trim(),
      companyName: companyNameInput.value.trim(),
      positionDepartment: positionDepartmentInput.value.trim(),
      streetAddress: streetAddressInput.value.trim(),
      streetAddressL2: streetAddressL2Input.value.trim(),
      phoneNumber: phoneNumberInput.value.trim(),
      city: cityInput.value.trim(),
      state: stateInput.value.trim(),
      zipCode: zipCodeInput.value.trim(),
      email: emailInput.value.trim(),
      residentialCommercial: residentialCommercialInput.value.trim(),
    });
  };
  // Insert customer to database

  document
    .getElementById('customer-form')
    .addEventListener('submit', handleCustomerFormSubmit);

});

function pageLoad() {
  $("#newCustomerForm").hide();
  $("#existingCustomerForm").hide();

}
pageLoad()
$('#newCustomer').click(function () {
  if ($('#newCustomer').is(':checked')) {
    $("#newCustomerForm").show();
    $("#existingCustomerForm").hide();

  }
});
$('#existingCustomer').click(function () {
  if ($('#existingCustomer').is(':checked')) {
    $("#newCustomerForm").hide();
    $("#existingCustomerForm").show();

  }
});


