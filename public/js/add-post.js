const newPostHandler = async (event) => {
  event.preventDefault();

  // Collect values from the new post form
  const content = document.querySelector('#content').value.trim();

  if (content) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/post', {
      method: 'POST',
      body: JSON.stringify({ content }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the dashboard page
      document.location.replace('/profile');
    } else {
      alert('Failed to create a post');
    }
  }
};


document
  .querySelector('#postBtn')
  .addEventListener('click', newPostHandler);