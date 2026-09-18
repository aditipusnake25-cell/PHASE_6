import express from "express"
import { addContact, getContact } from "../controller/contactController.js"
const router = express.Router()

router.post("/contact", addContact)
router.get("/contact", getContact)
export default router;