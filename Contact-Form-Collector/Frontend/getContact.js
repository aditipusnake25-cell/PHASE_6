let result = document.getElementById("result")

async function getContact() {
    try {
        const response = await fetch("http://localhost:3000/api/contact")

        if (!response.ok) {
            throw new Error(`Server error: ${response.status}`)
        }

        const allContact = await response.json()
console.log(allContact)
        allContact.forEach((contact) => {
            result.innerHTML += `
    <div>
        <h3>${contact.name}</h3>
        <p>${contact.email}</p>
        <p>${contact.phone}</p>
        <p>${contact.message}</p>
    </div>
`
        })

    } catch (error) {
        console.log(error)
    }
}

getContact()