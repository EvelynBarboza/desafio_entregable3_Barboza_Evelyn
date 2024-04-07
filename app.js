const express = require('express');

const app = express();

app.use(express.json());

let productos = [];

let carritos = [];

// 

app.get('/productos', (req, res) => {

res.json(productos);

});

// 

app.post('/productos', (req, res) => {

const producto = req.body;

productos.push(producto);

res.status(201).json(producto);

});

//

app.get('/carritos/:id', (req, res) => {

const carrito = carritos.find(c => c.id === req.params.id);

if (!carrito) {

return res.status(404).json({ error: 'Carrito no encontrado' });

}

res.json(carrito);

});

// 

app.post('/carritos', (req, res) => {

const carrito = { id: Date.now().toString(), productos: [] };

carritos.push(carrito);

res.status(201).json(carrito);

});

//

app.post('/carritos/:id/productos', (req, res) => {

const carrito = carritos.find(c => c.id === req.params.id);

if (!carrito) {

return res.status(404).json({ error: 'Carrito no encontrado' });

}

const producto = productos.find(p => p.id === req.body.id);

if (!producto) {

return res.status(404).json({ error: 'Producto no encontrado' });

}

carrito.productos.push(producto);

res.json(carrito);

});

// Iniciar el servidor

const port = process.env.PORT || 3000;

app.listen(port, () => console.log("Servidor corriendo en http:/localhost:${port}"));
