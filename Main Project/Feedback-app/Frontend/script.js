
let body = document.body;
let form = document.getElementById("form");
let nameValue = document.getElementById("name");
let commentsValue = document.getElementById("comments");
let ratingValue = document.getElementById("rating");
let emptyComment = document.getElementById("commentError");
let submit = document.getElementById("submitBtn");
let emptyName = document.getElementById("nameError")
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  
  const feedback = {
    name: nameValue.value,
    feedback: commentsValue.value,
    rating: ratingValue.value
  }
  if (!feedback.name) {
    emptyName.textContent = "Name is required!";
    return;
  }
  submit.disabled = true;
  try {
    const response = await fetch("http://localhost:3000/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(feedback),
    })
    const data = await response.json()
    if(response.ok){
      emptyComment.textContent="Feedback submitted successfully!"
      form.reset()
    }
  } catch (err) {
    console.error(err);

    if (err.message === "Failed to fetch") {
      emptyComment.textContent =
        "Cannot connect to the server. Please make sure the backend is running.";
    } else {
      emptyComment.textContent =
        err.message || "Something went wrong. Please try again.";
    }
  } finally {
    submit.disabled = false;
  }
});
