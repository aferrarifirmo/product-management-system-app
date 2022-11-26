const product = require('../models/products');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await product.find({});
    console.log('All good from controller - getAllProducts');
    res.status(200);
    res.send(products);
  } catch (err) {
    console.log('Error from controller - getAllProducts');
    res.status(400);
  };
};

exports.getProductById = async (req, res) => {
  try {
    const productById = await product.findById(req.params.id);
    console.log('All good from controller - getProductById');
    res.status(200);
    res.send(productById);
  } catch (err) {
    console.log('Error from controller - getProductById');
    res.status(400);
  };
};

exports.postProduct = async (req, res) => {
  try {
    await product.create(req.body);
    console.log('All good from controller - postProduct');
    res.status(201);
    res.send(req.body);
  } catch (err) {
    console.log('Error from controller - postProduct');
    res.status(400);
  };
};

exports.deleteProduct = async (req, res) => {
  try {
    await product.findByIdAndDelete(req.params.id);
    console.log('All good from controller - deleteProduct');
    res.status(200);
    res.send('Successfully deleted');
  } catch (err) {
    console.log('Error from controller - deleteProduct');
    res.status(400);
  };
};

exports.updateProduct = async (req, res) => {
  try {
    await product.findByIdAndUpdate(req.params.id, req.body);
    console.log('All good from controller - updateProduct');
    const productById = await product.findById(req.params.id)
    res.status(200);
    res.send(productById);
  } catch (err) {
    console.log('Error from controller - updateProduct');
    res.status(400);
  };
};
