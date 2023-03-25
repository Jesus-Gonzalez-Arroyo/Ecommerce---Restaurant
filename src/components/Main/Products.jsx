/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaSearch, FaPlus, FaMinus } from 'react-icons/fa';
import Link from "next/link";


export default function Products({ products }) {
    console.log(products)
    const date = new Date()
    const day = date.getUTCDay() + 19
    const month = date.getUTCMonth() + 1
    const year = date.getUTCFullYear()

    const handleClick = (e) => {
        const id = e.target.id
        id.toString()

        if(id === 'Almuerzos') {
            console.log('Almuerzos')
        }
        if(id === 'Desayunos') {
            console.log('Desayunos')
        }
        if(id === 'Gourmet') {
            console.log('Gourmet')
        }
        if(id === 'Promociones') {
            console.log('Promociones')
        }
    }

    return (
        <div className="grid lg:col-span-6 p-7">
            <header>
                <div className="flex flex-col gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-200">Restaurant</h1>
                    <p className="text-sm fotn-bold text-gray-100">
                            {`${day >= 10 ? `${day}`: `0${day}`}/${month >= 10 ? `${month}`: `0${month}`}/${year}`}
                        </p>
                    </div>
                    <form>
                        <div className="w-full relative">
                            <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2" />
                            <input 
                            type='text' 
                            className="w-full m-auto block py-2 pr-2 pl-10 rounded outline-none text-gray-400 bg-[#1F1D2B]"
                            placeholder="Buscar productos"
                            />
                        </div>
                    </form>
                    <nav className="text-gray-300 flex items-center justify-between">
                        <Link 
                        id="Desayunos" 
                        href='/' 
                        className="border-b-2" 
                        onClick={handleClick}
                        >
                            Desayunos
                        </Link>
                        <Link 
                        id="Almuerzos" 
                        href='/' 
                        className="border-b-2"
                        onClick={handleClick}
                        >
                            Almuerzos
                        </Link>
                        <Link 
                        id="Gourmet" 
                        href='/' 
                        className="border-b-2"
                        onClick={handleClick}
                        >
                            Gourmet
                        </Link>
                        <Link 
                        id="Promociones" 
                        href='/' 
                        className="border-b-2"
                        onClick={handleClick}
                        >
                            Promociones
                        </Link>
                    </nav>
                    <div className="grid grid-cols-1 gap-8 mt-5 pb-20 md:grid-cols-2 lg:grid-cols-4">
                        {
                            products.map(({_id, Nombre_product, Image, Precio, Descripcion, Tipo})=>(
                                <div className="p-6 rounded-lg flex flex-col gap-2 items-center bg-[#1F1D2B] text-gray-200" key={_id}>
                                    <img className="rounded-full w-52 h-52 mb-5" src={`${Image}`} alt={"Producto"}/>
                                    <p className="text-3xl text-center font-bold">{Nombre_product}</p>
                                    <p className="text-xl text-gray-400 font-bold">$ {Precio}</p>
                                    <p className="text-xl text-center text-gray-600 font-bold">{Descripcion}</p>
                                    <div className="mt-4 flex gap-7">
                                        <button className="p-4 bg-red-300 rounded-full"><FaPlus /></button>
                                        <button className="p-4 bg-red-300 rounded-full"><FaMinus /></button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </header>
        </div>
    )
}

