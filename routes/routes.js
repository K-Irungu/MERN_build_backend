const {Router} = require("express");
const {getProduct, saveProduct, updateProduct, deleteProduct} = require("../controllers/ProductController");
const router = Router();

router.get('/', getProduct)
router.post('/save', saveProduct)
router.post('/update', updateProduct) 
router.post('/delete', deleteProduct)

module.exports = router;