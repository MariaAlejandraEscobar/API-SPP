// index.ts

import express from 'express';
import cors from 'cors';
import usuarioRouter from './routes/usuario.routes'; 
import compraRouter from './routes/compra.routes'; 
import favoritoRouter from './routes/favoritos.routes'; 
import imagenRouter from './routes/imagen.routes'; 
import productoRouter from './routes/producto.routes'; 
import proveedorRouter from './routes/proveedor.routes'; 
import proveedorProductoRouter from './routes/proveedorProducto.routes';
import listarCompraRouter from './routes/listarCompra.routes';

const app = express();


app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(cors()); 

const PORT = 3000;

// Route Definitions
app.use('/api/usuario', usuarioRouter); 
app.use('/api/compra', compraRouter); 
app.use('/api/favoritos', favoritoRouter); 
app.use('/api/imagen', imagenRouter); 
app.use('/api/listarCompra', listarCompraRouter); 

app.use('/api/producto', productoRouter);
app.use('/api/proveedor', proveedorRouter); 
app.use('/api/proveedorProducto', proveedorProductoRouter);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
