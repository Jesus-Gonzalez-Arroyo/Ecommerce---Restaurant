import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    Nombre_product:{
        type: String
    },
    Image: {
        type: String
    },
    Precio: {
        type: String
    },
    Descripcion: {
        type: String
    },
    Tipo: {
        type: String
    }
})

export default mongoose.models.Producto || mongoose.model('Producto', ProductSchema)
