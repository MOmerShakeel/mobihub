<<<<<<< HEAD
const express = require("express");
const { contactEntry, getContact } = require("../controller/contact");
=======
const express = require('express');
const { contactEntry, getContact } = require('../controller/contact');
>>>>>>> e6ad32138bd7ed5685fb642c5fe9edb7c907e5e9
const router = express.Router();

router.post("/contact/submit", contactEntry);

router.get("/contact/getContact", getContact);

module.exports = router;
