document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded! 🚀');

  const nameInput = document.getElementById('customer-name');
  const customerList = document.querySelector('tbody');

  // Create an author
  const insertCustomer = (customerData) => {
    fetch('/api/customers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(customerData),
    })
      .then(getCustomers)
      .catch((err) => console.error(err));
  };

  // Handle when the author form is submitted
  const handleCustomerFormSubmit = (e) => {
    e.preventDefault();

    if (!nameInput.value.trim()) {
      alert('Please provide an customer name');
      return;
    }

    insertCustomer({
      name: nameInput.value.trim(),
    });
  };

  document
    .getElementById('customer-form')
    .addEventListener('submit', handleCustomerFormSubmit);

  // Event handler for the delete author button
  const handleDeleteButtonPress = (e) => {
    const { id } = e.target.parentElement.parentElement;
    fetch(`/api/customers/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(getCustomers);
  };

  // Create list row for authors
  const createCustomerRow = (CustomerData) => {
    const tr = document.createElement('tr');
    tr.setAttribute('data-customer', JSON.stringify(customerData));

    // Set each author's ID on the element itself
    tr.id = customerData.id;

    const td = document.createElement('td');
    td.textContent = customerData.name;
    tr.appendChild(td);

    // Element to show how many posts
    const lengthTd = document.createElement('td');
    if (customerData.Posts) {
      lengthTd.textContent = customerData.Posts.length;
    } else {
      lengthTd.textContent = '0';
    }
    tr.appendChild(lengthTd);

    // "Go to posts" link REVIEW HREF BLOG AUTHOR 
    const postsLink = document.createElement('td');
    postsLink.innerHTML = `<td><a href='/?customer_id=${customerData.id}'>Go to Posts</a></td>`;
    tr.appendChild(postsLink);

    // "Create a post" link
    const createLink = document.createElement('td');
    createLink.innerHTML = `<td><a href='/cms?customer_id=${customerData.id}'>Create a Post</a></td>`;
    tr.appendChild(createLink);

    // "Delete author" link
    const deleteLink = document.createElement('td');
    deleteLink.innerHTML = `<td><a style='cursor:pointer;color:red' class='delete-customer'>Delete customer</a></td>`;
    deleteLink.addEventListener('click', handleDeleteButtonPress);
    tr.appendChild(deleteLink);

    // Return the table row
    return tr;
  };

  // Helper function to render content when there are no authors
  const renderEmpty = () => {
    const alertDiv = document.createElement('div');
    alertDiv.classList.add('alert', 'alert-danger');
    alertDiv.textContent = 'Must have at least one customer to post';
    alertDiv.id = 'removeMe';
    alertDiv.style.marginRight = '5px';
    return alertDiv;
  };

  const renderCustomerList = (rows) => {
    customerList.innerHTML = '';

    if (rows.length) {
      if (document.getElementById('removeMe')) {
        document.getElementById('removeMe').remove();
      }
      rows.forEach((row) => customerList.append(row));
    } else {
      document.querySelector('.customer-container').appendChild(renderEmpty());
    }
  };

  // Grab all the authors
  const getCustomers = () => {
    console.log('Get customers is getting called');
    fetch('/api/customers', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log('Success in getting authors:', authors);
        const rowsToAdd = [];
        for (let i = 0; i < data.length; i++) {
          rowsToAdd.push(createCustomerRow(data[i]));
        }
        renderCustomerList(rowsToAdd);
        nameInput.value = '';
      })
      .catch((error) => console.error('Error:', error));
  };

  // Get the list of authors
  getCustomers();
})

function pageLoad() {
  $("#newCustomerForm").hide();
  $("#existingCustomerForm").hide();
  $("#searchResults").hide();
}

pageLoad()

$('#newCustomer').click(function () {
  if ($('#newCustomer').is(':checked')) {
    $("#newCustomerForm").show();
    $("#existingCustomerForm").hide();
    $("#searchResults").hide();
  }
});


$('#existingCustomer').click(function () {
  if ($('#existingCustomer').is(':checked')) {
    $("#newCustomerForm").hide();
    $("#existingCustomerForm").show();
    $("#searchResults").show();
  }
});


$(document).ready(function () {
  $('#datepicker').datepicker();
});