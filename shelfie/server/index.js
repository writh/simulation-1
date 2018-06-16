const bodyParser = require('body-parser');
const express = require('express');
const ctrl = require('./controller');
const massive = require('massive');
const cors = require('cors');
require('dotenv').config({ path: __dirname + '/../.env', });
const app = express();
const port = 3005;

app.use(bodyParser.json())
app.use(cors());

massive(process.env.DB_CONNECTION_STRING)
    .then(dbInstance => {
       app.set('db', dbInstance)
    }) 
    .catch(err => {
        console.warn(err);
    })

app.get('/api/inventory',ctrl.getInventory)
app.post('/api/product', ctrl.create)
app.delete('/api/product/:id', ctrl.delete) 

app.listen(port, ()=>console.log(`listening at ${port}`));