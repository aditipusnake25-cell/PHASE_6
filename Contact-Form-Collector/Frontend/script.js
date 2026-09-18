let namevalue = document.getElementById("name")
let emailvalue = document.getElementById("email")
let phonevalue = document.getElementById("phone")
let error = document.getElementById("error")
let messagevalue = document.getElementById("message")
let button = document.getElementById("submit")
let form = document.getElementById("contactForm")

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const contact = {
        name: namevalue.value,
        email: emailvalue.value,
        phone: phonevalue.value,
        message: messagevalue.value

    }
    console.log(contact)

    if (!contact.name) {
        error.textContent = "Name is required!";
        return;
    }
    button.disabled = true;
    
    try {
        const response = await fetch("http://localhost:3000/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(contact),
        })
        const data = await response.json()

        if (response.ok) {
            error.textContent = "Feedback submitted successfully!"
            form.reset()
        } else {
            error.textContent = data.message || "Something went wrong!";
        }

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
        button.disabled = false;
    }
});
