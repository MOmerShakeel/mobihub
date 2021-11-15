const express = require('express');
const { contactEntry} = require('../controller/contact');
const router = express.Router();

router.post("/contact/submit",
    contactEntry
);

module.exports = router;
