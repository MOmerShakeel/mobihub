const express = require('express');
const { createBrand, getBrands } = require('../controller/brand');
const router = express.Router();

router.post("/brand/create",
    createBrand
);

router.get("/brand/getBrands",
    getBrands
);

module.exports = router;
