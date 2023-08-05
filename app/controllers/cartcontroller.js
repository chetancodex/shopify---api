const Cart = require("../models/cartmodel");

exports.getCart = (req, res, next) => {
  Cart.find()
    .then((docs) => {
      res.status(200).json(docs);
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};

exports.postCart = (req, res, next) => {
  console.log(req);

  if (typeof req.body == undefined) {
    res.status(404).json({
      message: "data is undefined",
    });
  } else {
    const { userId, productId, quantity } = req.body;
    if (!userId || !productId || !quantity) {
      return res.status(400).json({
        error: "Invalid data provided",
      });
    }
    const cartItem = {
      productId: productId,
      quantity: quantity,
    };

    Cart.findOneAndUpdate(
      { userId },
      { $push: { products: cartItem } },
      { new: true, upsert: true }
    )
      .then((updatedcart) => {
        res.status(200).json({
          message: "Cart has been created or updated",
          cartinfo: {
            id: updatedcart._id,
            userId: updatedcart.userId,
            products: updatedcart.products,
          },
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: err,
        });
      });
  }
};
