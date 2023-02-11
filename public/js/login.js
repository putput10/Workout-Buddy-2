const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const username = document.querySelector('#loginUsername').value.trim();
  const password = document.querySelector('#loginPwd').value.trim();

  if (username && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/profile/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/posts');
    } else {
      console.log(username + password)
      // alert(response.statusText);
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);


