const ProductController = require('../controllers/product.controller');  //Import the code from Code Block 1
module.exports = (app) => {
    app.get('/api', ProductController.index);
    app.post('/api/product', ProductController.createProduct);
    app.get('/api/product', ProductController.getAllProducts);
    app.get('/api/product/:id', ProductController.getProduct);
}