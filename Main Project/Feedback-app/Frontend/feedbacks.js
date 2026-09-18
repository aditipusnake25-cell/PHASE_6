let result = document.getElementById("result")
async function getFeedback() {
    try {
        const response = await fetch("http://localhost:3000/api/feedback")
        const allFeedback = await response.json();
        allFeedback.forEach((feedback) => {
            result.innerHTML += `
            <div>
            <h3>${feedback.name}</h3>
            <p>${feedback.rating}</p>
            <p>${feedback.comments}</p>
            `

        });
    } catch (error) {
        console.log(error);

    }
}
getFeedback()