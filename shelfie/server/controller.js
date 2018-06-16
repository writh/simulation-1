module.exports = {
    getInventory: (req, res, next) =>{
       const database =  req.app.get('db');
       
        database.get_inventory()
        .then(products => res.status(200).json(products))
        .catch( err => {
            console.log(err)
            res.status(500).json();
        });
    },
    create: (req, res, next) =>{
        const {name, price, url} = req.body;
        const database = req.app.get('db');
        console.log(name, price, url)
        database.create_product([name, price, url])
        .then( () => res.status(200).json())
        .catch( err => {
            console.log(err)
            res.status(500).json();
        });
    },
    delete: (req, res, next) => {
        const database =  req.app.get('db');
        const { params } = req;
    
        database.delete_product(params.id)
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({ error: "Oops! Something went wrong." });
                console.log(err)
              });
    
        }
}