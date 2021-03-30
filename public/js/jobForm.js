document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded! 🚀');

    // const phoneNumberInput = document.getElementById('phoneNumber');
    // const emailInput = document.getElementById('email');
    // Job form inputs
    const jobStreetAddressInput = document.getElementById('jobStreetAddress');
    const jobStreetAddressL2Input = document.getElementById('jobStreetAddressL2');
    const jobCityInput = document.getElementById('jobCity');
    const jobStateInput = document.getElementById('jobState');
    const jobZipCodeInput = document.getElementById('jobZipCode');
    const startDateInput = document.getElementById('startDate');
    const phaseInput = document.getElementById('phase');
    const statusInput = document.getElementById('status');
    const typeOfWorkInput = document.getElementById('typeOfWork');
    const sourceOfWorkInput = document.getElementById('sourceOfWork');

    //  const endDateInput = document.getElementById('endDate');
    // const jobList = document.querySelector('tbody');

    const insertJob = (jobData) => {
        fetch('/api/jobs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jobData),
        })
            .then(function () {
                console.log("Success")
                // window.location.replace("/customer");
            })
            .catch((err) => console.error(err));
    };


    // Handle when the customer form is submitted
    const handleJobFormSubmit = (e) => {
        e.preventDefault();

        if (!jobStreetAddressInput.value.trim() || !jobCityInput.value.trim()) {
            alert('Please provide an address and city');
            return;
        }

        insertJob({

            jobStreetAddress: jobStreetAddressInput.value.trim(),
            jobStreetAddressL2: jobStreetAddressL2Input.value.trim(),
            jobCity: jobCityInput.value.trim(),
            jobState: jobStateInput.value.trim(),
            jobZipCode: jobZipCodeInput.value.trim(),
            startDate: startDateInput.value.trim(),
            phase: phaseInput.value.trim(),
            typeOfWork: typeOfWorkInput.value.trim(),
            sourceOfWork: sourceOfWorkInput.value.trim(),
            status: statusInput.value.trim(),
        }
        );
    };



    document
        .getElementById('job-form')
        .addEventListener('submit', handleJobFormSubmit);
});


    // // Find customer
    // const findCustomer = (customerData) => {
    //     fetch('/api/customer/:id:firstName:lastName:email:streetAddress:streetAddressL2:phoneNumber', {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         }
    //     })
    //         .then((response) => response.json())
    //         .catch((err) => console.error(err));
    // };



    // // Search function
    // const handleCustomerSearch = (e) => {
    //     e.preventDefault();

    //     if (!searchInput.value.trim()) {
    //         alert('Please provide a search input');
    //         return;
    //     }

    //     findCustomer({

    //         firstName: firstNameInput.value.trim(),
    //         lastName: lastNameInput.value.trim(),
    //         // companyName: companyNameInput.value.trim(),
    //         // positionDepartment: positionDepartmentInput.value.trim(),
    //         // streetAddress: streetAddressInput.value.trim(),
    //         // streetAddressL2: streetAddressL2Input.value.trim(),
    //         phoneNumber: phoneNumberInput.value.trim(),
    //         // city: cityInput.value.trim(),
    //         // state: stateInput.value.trim(),
    //         // zipCode: zipCodeInput.value.trim(),
    //         // email: emailInput.value.trim(),
    //         // startDate: startDateInput.value.trim(),
    //         // endDate: endDateInput.value.trim(),
    //         // residentialCommercial: residentialCommercialInput.value.trim(),
    //         // phase: phaseInput.value.trim(),
    //         // class: classInput.value.trim(),
    //         // complete: completeInput.value.trim(),
    //     });
    // };

    // document
    //     .getElementById('searchCustomer')
    //     .addEventListener('submit', handleCustomerSearch);




    // // Event handler for the delete customer button
    // const handleDeleteButtonPress = (e) => {
    //     const { id } = e.target.parentElement.parentElement;
    //     fetch(`/api/customers/${id}`, {
    //         method: 'DELETE',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     }).then(getCustomers);
    // };

    // // Create list row for customer
    // const createCustomerRow = (CustomerData) => {
    //     const tr = document.createElement('tr');
    //     tr.setAttribute('data-customer', JSON.stringify(customerData));

    //     // Set each customer's ID on the element itself
    //     tr.id = customerData.id;

    //     const td = document.createElement('td');
    //     td.textContent = customerData.name;
    //     tr.appendChild(td);

    //     // Element to show how many posts
    //     const lengthTd = document.createElement('td');
    //     if (customerData.Posts) {
    //         lengthTd.textContent = customerData.Posts.length;
    //     } else {
    //         lengthTd.textContent = '0';
    //     }
    //     tr.appendChild(lengthTd);

    //     // "Go to posts" link REVIEW HREF BLOG customer 
    //     const postsLink = document.createElement('td');
    //     postsLink.innerHTML = `<td><a href='/?customer_id=${customerData.id}'>Go to Posts</a></td>`;
    //     tr.appendChild(postsLink);

    //     // "Create a post" link
    //     const createLink = document.createElement('td');
    //     createLink.innerHTML = `<td><a href='/cms?customer_id=${customerData.id}'>Create a Post</a></td>`;
    //     tr.appendChild(createLink);

    //     // "Delete author" link
    //     const deleteLink = document.createElement('td');
    //     deleteLink.innerHTML = `<td><a style='cursor:pointer;color:red' class='delete-customer'>Delete customer</a></td>`;
    //     deleteLink.addEventListener('click', handleDeleteButtonPress);
    //     tr.appendChild(deleteLink);

    //     // Return the table row
    //     return tr;
    // };

    // // Helper function to render content when there are no authors
    // const renderEmpty = () => {
    //     const alertDiv = document.createElement('div');
    //     alertDiv.classList.add('alert', 'alert-danger');
    //     alertDiv.textContent = 'Must have at least one customer to post';
    //     alertDiv.id = 'removeMe';
    //     alertDiv.style.marginRight = '5px';
    //     return alertDiv;
    // };

    // const renderCustomerList = (rows) => {
    //     customerList.innerHTML = '';

    //     if (rows.length) {
    //         if (document.getElementById('removeMe')) {
    //             document.getElementById('removeMe').remove();
    //         }
    //         rows.forEach((row) => customerList.append(row));
    //     } else {
    //         document.querySelector('.customer-container').appendChild(renderEmpty());
    //     }
    // };





