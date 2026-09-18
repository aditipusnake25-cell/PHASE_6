import Contact from "../model/contactModel.js";

const addContact = async (req, res) => {
    try {
        console.log(req.body)
        const newContact = new Contact(req.body)
        await newContact.save();

        res.status(200).json({
            message: "Contact added successfully!",
            contact: newContact
        })
    } catch (error) {
        console.log("Error adding contact: ", error);
        res.status(500).json({
            message: error.message
        })
    }
}

const getContact = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts)

    } catch (error) {
        console.log("Error getting contact: ", error);
        res.status(500).json({
            message: error.message
        })
    }
}

export { addContact, getContact };