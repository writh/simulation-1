module.exports = {
    getInventory: (req, res, next) =>{
       const database =  req.app.get('db');
       
        database.get_inventory()
        .then(products => res.status(200).json(products))
        .catch( () => res.status(500).send())
    },
    createProduct: (req, res, next) =>{
        const {name, price, url} = req.body;
        const database = req.app.get('db');
        console.log(name, price, url)
        database.create_product([name, price, url])
        .then( () => res.status(200).json())
        .catch( () => res.status(500).json());
    }
}