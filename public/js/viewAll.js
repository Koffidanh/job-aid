document.addEventListener('DOMContentLoaded', () => {
    console.log('Success');


    const handleDeleteButtonPress = async () => {

        // const tbody = document.getElementById("tbody")
        const tableRow = document.querySelector('tbody');

        console.log(tableRow.getAttribute('id'))
        const customerID = tableRow.getAttribute('id');
        fetch(`/api/delete/${customerID}`, {

            // fetch(`/api/delete/:id`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(function () {
            window.location.replace("/viewAll");
        })
            .catch((err) => console.error(err));
    };

    document.getElementById('deleteCustomer')
        .addEventListener('click', handleDeleteButtonPress);

});