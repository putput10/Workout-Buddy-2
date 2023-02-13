const signupFormHandler = async (event) => {
    event.preventDefault();
    const firstName = document.querySelector('#registerFirstName').value.trim();
    const lastName = document.querySelector('#registerLastName').value.trim();
    const email = document.querySelector('#registerEmail').value.trim();
    const username = document.querySelector('#registerUsername').value.trim()
    const password = document.querySelector('#registerPwd').value.trim();
  
    if (firstName && lastName && email && username && password) {
      const response = await fetch('/api/profile', {
        method: 'POST',
        body: JSON.stringify({ firstName, lastName, email, username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/posts');
      } else {
        alert(response.statusText);
      }
    }
  };

document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);


   