document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded! 🚀');

    // Job form inputs
    const jobStreetAddressInput = document.getElementById('jobStreetAddress');
    const jobStreetAddressL2Input = document.getElementById('jobStreetAddressL2');
    const jobCityInput = document.getElementById('jobCity');
    const jobStateInput = document.getElementById('jobState');
    const jobZipCodeInput = document.getElementById('jobZipCode');
    const startDateInput = document.getElementById('startDate');
    const phaseInput = document.getElementById('phase');
    // const statusInput = document.getElementById('status');
    const typeOfWorkInput = document.getElementById('typeOfWork');
    const sourceOfWorkInput = document.getElementById('sourceOfWork');

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
                window.location.replace("/customer");
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
            // status: statusInput.value.trim(),
        }
        );
    };

    document
        .getElementById('job-form')
        .addEventListener('submit', handleJobFormSubmit);
});