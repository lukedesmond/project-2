const showCommentHandler = async (event) => {
  event.preventDefault();
  document.querySelector('.new-comment-form').removeAttribute("hidden");
};

document
  .querySelector('#commentBtn')
  .addEventListener('click', showCommentHandler);


const commentHandler = async (event) => {
  event.preventDefault();
  // Collect values from the new comment form
  const content = document.querySelector('.comment').value.trim();
  const post_id = document.querySelector('.submitBtn').getAttribute("value");
  const user_id = "d0e3a5bf-55e8-434d-972d-8e8b990c08fb";

  if (content && post_id && user_id) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({ content, post_id , user_id}),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, refresh the page
      document.location.reload();
    } else {
      alert('Failed to create a comment');
    }
  }
};


document
  .querySelector('.submitBtn')
  .addEventListener('click', commentHandler);
