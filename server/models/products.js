const { Schema, model } = require('./index');

const farmSchema = new Schema ({
  name: {type: String, required: true},
  shortDescription: {type: String, required: true},
  farmers: {type: String, required: true},
  region: {type: String, required: true},
  country: {type: String, required: true},
  size: Number,
  location: {
    longitude: String,
    latitude: String
  },
  produce: {type: String, required: true},
  website: String,
  email: String,
  instagram: String,
  facebook: String,
  description: {type: String, required: true},
  image: {type: String, required: false}
});

const Product = model('products', farmSchema);

module.exports = Product;