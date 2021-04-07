
function handleDeleteButtonPress(e) {


    const customerID = e.getAttribute('id');

    console.log(customerID)
    fetch(`/api/delete/${customerID}`, {

        // fetch(`/api/delete/:id`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(function () {
        window.location.replace("/customer");
    })
        .catch((err) => console.error(err));

};
