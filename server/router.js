const Router = require('express');
const controller = require('./controllers/products');

const router = new Router;

router.get('/products', (controller.getAllProducts));
router.get('/products/:id', (controller.getProductById));
router.post('/products', (controller.postProduct));
router.delete('/products/:id', (controller.deleteProduct));
router.put('/products/:id', (controller.updateProduct));

module.exports = router;