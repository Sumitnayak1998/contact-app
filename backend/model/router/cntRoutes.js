const Router = require("express");
const { createContact, getAllContacts, getSingleContacts, updateContacts, deleteContacts } = require("../../controller/cntController");
const router = Router();

router.post("/contact", createContact)
router.get("/contact", getAllContacts)
router.get("/contact/:id", getSingleContacts)
router.put("/contact/:id", updateContacts)
router.delete("/contact/:id", deleteContacts)
module.exports = router;