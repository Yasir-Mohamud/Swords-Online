const router = require("express").Router();
const { request } = require("express");
let Product = require("../models/products.model");

// creates product
router.route("/add").post((request, response) => {
  const newProduct = new Product({
    name: request.body.name,
    price: Number(request.body.price),
    description: request.body.description,
    imageURL: request.body.imageURL,
  });

  newProduct
    .save()
    .then(() => console.log(" Product added"))
    .catch((err) => response.status(400).json("Error: " + err));
});

// gets all products
router.route("/").get((request, response) => {
  Product.find()
    .then((product) => response.json(product))
    .catch((err) => response.status(400).json("Error: " + err));
});

// gets one product
router.route("/:id").get((request, response) => {
  Product.findById(request.params.id)
    .then((product) => response.json(product))
    .catch((err) => response.status(400).json("Error: " + err));
});

// updates product
router.route("/update/:id").post((request, response) => {
  Product.findById(request.params.id)
    .then((product) => {
      product.name = request.body.name;
      product.price = Number(request.body.price);
      product.description = request.body.description;
      product.imageURL = request.body.imageURL;

      product
        .save()
        .then(() => response.json("Product updated!"))
        .catch((err) => console.log("Error " + err));
    })
    .catch((err) => response.status(400).json("Error: " + err));
});

// deletes product
router.route("/delete/:id").delete((request, response) => {
  Product.findByIdAndDelete(request.params.id)
    .then(() => response.json("Product deleted!"))
    .catch((err) => response.status(400).json("Error: " + err));
});

module.exports = router;
