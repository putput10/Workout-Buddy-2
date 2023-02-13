const loginPostHandler = async (event) => {
    event.preventDefault();
    // const title = document.querySelector('#titlepost').value.trim()
    const post = document.querySelector('#post').value.trim()

    if (post) {
        const response = await fetch('/api/post', {
          method: 'POST',
          body: JSON.stringify({ post }),
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
    .querySelector('#postSelector')
    .addEventListener('submit', loginPostHandler);
