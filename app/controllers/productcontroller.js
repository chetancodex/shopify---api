const Product = require("../models/productsmodel");
// Get all Products
exports.getAllProducts = (req, res, next) => {
  Product.find()
    .select("name _id image")
    .exec()
    .then((docs) => {
      const response = {
        count: docs.length,
        products: docs.map((doc) => {
          return {
            name: doc.name,
            price: doc.price,
            image: doc.image,
            rating: doc.rating,
            _id: doc._id,
            id: doc._id,
            request: {
              type: "GET",
              url: "http://localhost:3000/products/" + doc._id,
            },
          };
        }),
      };
      console.log(docs);
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(505).json({ error: err });
    });
};
// Post a Product
exports.postProduct = (req, res, next) => {
  const products = new Product({
    name: req.body.name,
    description: req.body.description,
    rating: req.body.rating,
    price: req.body.price,
    image: req.body.image,
  });
  products
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "PRODUCT CREATED SUCCESSFULLY",
        createProduct: {
          product: {
            name: result.name,
            description: result.description,
            rating: result.rating,
            price: result.price,
            image: result.image,
            brand: result.brand,
            modelName: result.modelName,
            color: result.color,
          },
          _id: result._id,
          request: {
            type: "GET",
            url: "http://localhost:3000/products/" + result._id,
          },
        },
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
// Get ProductId
exports.getProductId = (req, res, next) => {
  const id = req.params.productId;
  Product.findById(id)
    .select(" name price image brand modelName color description rating _id")
    .then((doc) => {
      if (doc) {
        console.log(doc);
        res.status(200).json({
          product: doc
        });
      } else {
        res.status(404).json({ message: "Id not Found" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(505).json({ error: err });
    });
};
// Patch or Update ProductId
exports.updateProduct = (req, res, next) => {
  const id = req.params.productsId;
  const updateOps = req.body;
  console.log(updateOps);
  Product.updateOne({ _id: id }, { $set: updateOps })
    .then((result) => {
      console.log(result);
      res.status(200).json({
        message: "Your Product been Updated",
        request: {
          type: "GET",
          url: "https://localhost:3000/products/" + id,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

// Delete Product
exports.deleteProducts = (req, res, next) => {
  const id = req.params.productId;
  Product.remove({ _id: id })
    .then((result) => {
      res.status(200).json({
        message: "Selected Prorduct is Deleted",
        ForMoreProducts: {
          url: "http://localhost:3000/products",
        },
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};
