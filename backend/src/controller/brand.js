const Brand = require('../models/brand');
const slugify = require('slugify');

exports.createBrand = (req, res) => {
    const { name, brandImage } = req.body;

    const brand = new Brand({
        name: name,
        slug: slugify(name),
        brandImage: brandImage
    });

    brand.save((error, brand) => {
        if (error) return res.status(400).json({ error });
        if (brand) {
            res.status(201).json({ brand })
        }
    });
};

exports.getBrands = async (req, res) => {
    Brand.find({}).exec((error, brands) => {
        if (brands) {
            res.status(200).json({ brands })
        }
    });
};

