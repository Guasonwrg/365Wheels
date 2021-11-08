const productsController = {
   
    carrito: (req, res) =>{
        res.render('products/productCart')
    },
    detalles: (req, res) =>{
        res.render('products/productDetail')
    },
    store: (req, res) =>{
        res.render('products/productStore')
    },
    crear: (req, res) =>{
        res.render('products/productCreate')
    },
    modificar: (req, res)=>{
        res.render('products/productModify')
    },
    eliminar: (req, res)=>{
        res.render('products/productDelete')
    },
}

module.exports = productsController;