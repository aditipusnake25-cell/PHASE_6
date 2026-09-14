let body = document.body;
let form = document.getElementById("form");
let nameValue = document.getElementById("name");
let commentsValue = document.getElementById("comments");
let ratingValue = document.getElementById("rating");
let emptyName = document.getElementById("nameError");
let emptyComment = document.getElementById("commentError");
let emptyRating = document.getElementById("ratingError");
let submit = document.getElementById("submitBtn");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let name = nameValue.value;
  let comment = commentsValue.value;
  let rating = ratingValue.value;

  if (!name) {
    emptyName.textContent = "Name is required!";
    return;
  }
  submit.disabled = true;
  try {
    const response = await fetch("/feedbacks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        comment: comment,
        rating: rating,
      }),
    })
    
  } catch (err) {
    console.error(err);

    if (err.message === "Failed to fetch") {
      error.textContent =
        "Cannot connect to the server. Please make sure the backend is running.";
    } else {
      error.textContent =
        err.message || "Something went wrong. Please try again.";
    }
  } finally {
    submit.disabled = false;
  }
});
