const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const firstName = document.querySelector('#registerFirstName').value.trim();
    const lastName = document.querySelector('#registerLastName').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (firstName && lastName && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };

document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);