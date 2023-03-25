import React from "react";
import Products from "./Products";
import Carrito from "./Carrito";

const Main = ({ productos }) => {
    return (
        <main className="grid grid-cols-1 lg:w-full lg:grid-cols-8 lg:pl-28">
            <Products products={productos} />
            <Carrito />
        </main>
    )
}

export default Main
