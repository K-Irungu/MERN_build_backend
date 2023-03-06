const ProductModel = require("../models/ProductModel")

// View products
module.exports.getProduct = async (req, res) => {
    const product = await ProductModel.find();
    res.send(product)
}

// Create a new product
module.exports.saveProduct = async (req, res) => {
    const { name, price, discount, sponsored, description, rating, imageUrl } = req.body
    ProductModel
        .create({ name, price, discount, sponsored, description, rating, imageUrl })
        .then((data) => {
            console.log("Added successfuly")
            res.send(data)
        })
}

// Update a product
module.exports.updateProduct = async (req, res) => {
    const { _id, name, price, discount, sponsored, description, rating, imageUrl } = req.body
    ProductModel
        .findByIdAndUpdate(_id, { name, price, discount, sponsored, description, rating, imageUrl })
        .then((data) => {
            console.log("Updated successfuly")
            // res.send(data)
        })
        .catch((err) => console.log(err))
}

// Delete a product
module.exports.deleteProduct = async (req, res) => {

    const { _id } = req.body
    ProductModel
        .findByIdAndDelete(_id)
        .then((data) => console.log("Deleted successfully..."))
        .catch((err) => console.log(err))
}

