document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded! 🚀');
  
    const blogContainer = document.querySelector('.blog-container');
  
    // Variable to hold our jobs
    let jobs;
  
    const getJobs = (customer) => {
      customerId = author || '';
      if (customerId) {
        customerId = `/?customer_id=${customerId}`;
      }
  
      fetch(`/api/jobs${customerId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          jobs = data;
          console.log('Success in getting jobs:', data);
          if (!data || !data.length) {
            displayEmpty(customer);
          } else {
            initializeRows();
          }
        })
        .catch((error) => console.error('Error:', error));
    };
  
    // Get a job from a specific customer
    const url = window.location.search;
    let customerId;
    if (url.indexOf('?customer_id=') !== -1) {
      customerId = url.split('=')[1];
      getJobs(customerId);
    } else {
      getJobs();
    }
  
    // Front end call to DELETE a job
    const deleteJob = (id) => {
      fetch(`/api/jobs/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(getJobs());
    };
  
    // Create HTML rows for the blog container
    const initializeRows = () => {
      blogContainer.innerHTML = '';
      const jobsToAdd = [];
  
      jobs.forEach((job) => jobsToAdd.push(createNewRow(job)));
      jobsToAdd.forEach((job) => blogContainer.append(job));
    };
  
    const createNewRow = (job) => {
      console.log('createNewRow -> job', job);
  
      const formattedDate = new Date(job.createdAt).toLocaleDateString();
  
      const newJobCard = document.createElement('div');
      newJobCard.classList.add('card');
  
      const newJobCardHeading = document.createElement('div');
      newJobCardHeading.classList.add('card-header');
  
      // Delete button
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'x';
      deleteBtn.classList.add('delete', 'btn', 'btn-danger');
      deleteBtn.addEventListener('click', handlePostDelete);
  
      // Edit button
      const editButton = document.createElement('button');
      editButton.textContent = 'EDIT';
      editButton.classList.add('edit', 'btn', 'btn-info');
      editButton.addEventListener('click', handlePostEdit);
  
      const newJobTitle = document.createElement('h2');
      const newJobDate = document.createElement('small');
      const newJobCustomer = document.createElement('h5');
  
      newJobCustomer.textContent = `Job for   : ${job.Customer.name}`;
      newJobCustomer.style.float = 'right';
      newJobCustomer.style.color = 'blue';
      newJobCustomer.style.marginTop = '-10px';
  
      const newJobCardBody = document.createElement('div');
      newJobCardBody.classList.add('card-body');
  
      const newJobBody = document.createElement('p');
      newJobTitle.textContent = `${job.title} `;
      newJobBody.textContent = job.body;
      newJobDate.textContent = ` (${formattedDate})`;
      newJobTitle.append(newJobDate);
      newJobCardHeading.append(deleteBtn);
      newJobCardHeading.append(editButton);
      newJobCardHeading.append(newJobTitle);
      newJobCardHeading.append(newJobAuthor);
      newJobCardBody.append(newJobBody);
      newJobCard.append(newJobCardHeading);
      newJobCard.append(newJobCardBody);
      newJobCard.setAttribute('data-job', JSON.stringify(job));
  
      console.log('createNewRow -> newJobCard', newJobCard);
      return newJobCard;
    };
  
    // Helper function to display something when there are no posts
    const displayEmpty = (id) => {
      const query = window.location.search;
      let partial = '';
      if (id) {
        partial = ` for Customer #${id}`;
      }
  
      blogContainer.innerHTML = '';
      const messageH2 = document.createElement('h2');
      messageH2.style.textAlign = 'center';
      messageH2.style.marginTop = '50px';
      messageH2.innerHTML = `No jobs yet${partial}, navigate <a href='/cms${query}'>here</a> in order to get started.`;
      blogContainer.append(messageH2);
    };
  
    // Handle when we click the delete jobs button
    const handleJobDelete = (e) => {
      const currentJob = JSON.parse(
        e.target.parentElement.parentElement.dataset.job
      );
  
      deletejob(currentJob.id);
    };
  
    // Handle when we click the edit job button
    const handleJobEdit = (e) => {
      const currentJob = JSON.parse(
        e.target.parentElement.parentElement.dataset.job
      );
  
      window.location.href = `/cms?job_id=${currentJob.id}`;
    };
  });