const  express = require ("express");
const  routes = express.Router();

const  ProductController = require('./controllers/ProductController');

// Primeira rota
routes.get("/products", ProductController.index); // listar
routes.get('/products/:id', ProductController.show);  // buscar por id
routes.post('/products', ProductController.store); // add
routes.put('/products/:id', ProductController.update); // atualizar
routes.delete('/products/:id', ProductController.destroy);


    module.exports = routes;

/*
    (req, res) => {

            Product.create({
            title: 'React Native',
            description: 'Build native apps  with React',
            url: 'http://github.com/emersomcarvalho'
        });
    return res.send(" Hello Node.Js");
});
*/