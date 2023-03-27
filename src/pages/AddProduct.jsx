import React, { useEffect, useState } from 'react'
import SideBar from '@/components/SideBar/SideBar'
import SideBarMobile from '@/components/SideBar/SideBar_Mobile'
import { FaCartPlus } from 'react-icons/fa'

const AddProduct = () => {
    
    const [form, setform] = useState({
        Nombre_product:'',
        Image:'',
        Precio: '',
        Descripcion: '',
        Tipo: ''
    })
    const [ActiveSideBar, setActiveSideBar] = useState(true)
    const [Nombre_product, setNombre] = useState('' || 'Nombre del producto')
    const [Image, setImage] = useState('' || 'https://camarasal.com/wp-content/uploads/2020/08/default-image-5-1.jpg')
    const [Precio, setPrecio] = useState('' || 'Precio')
    const [Descripcion, setDescripcion] = useState('' || 'Descripcion del producto')

    const handleChange = (e) => {
        const {value, name} = e.target
        setform({
            ...form,
            [name]:value
        })
        
        switch (name) {
            case 'Nombre_product':
                setNombre(e.target.value)
                break
            case 'Precio':
                setPrecio(e.target.value)
                break
            case 'Image':
                setImage(e.target.value)
                break
            case 'Descripcion':
                setDescripcion(e.target.value)
                break
        }
    }

    const handlesubmit = (e) => {
        e.preventDefault()
        postData(form)
    }

    const postData = () => {
        try {
            console.log(form)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='grid grid-cols-1 lg:p-10 h-screen items-center justify-center w-4/5 gap-10 m-auto bg-[#333] lg:pl-32 lg:pr-10 lg:w-full lg:grid-cols-7'>
            <SideBar AddProductSideBar={ActiveSideBar} />
            <SideBarMobile />
            {/* crear otro div que controle el grid de estos dos divs de abajo */}
            <div className='grid lg:col-span-3'>
                <div className="p-6 rounded-lg flex flex-col gap-2 items-center justify-between bg-[#1F1D2B] text-gray-200">
                    <img className="rounded-full w-52 h-52 mb-5" src={Image} alt={"Producto"}/>
                    <p className="text-3xl text-center font-bold">{Nombre_product}</p>
                    <p className="text-xl text-gray-400 font-bold">$ {Precio}</p>
                    <p className="text-xl text-center text-gray-600 font-bold">{Descripcion}</p>
                    <div className="mt-4 w-1/2 mx-auto">
                        <button className="p-2 w-full mx-auto rounded-lg bg-red-300" disabled>
                            <FaCartPlus className="text-2xl mx-auto" />
                        </button>
                    </div>
                </div>
            </div>
            <div className='bg-[#444] w-full rounded-lg lg:col-span-4'>
                <form className='flex flex-col gap-6 w-full py-10 px-6' onSubmit={handlesubmit}>
                    <input 
                        type='text'
                        autoComplete='off'
                        className='p-2 rounded'
                        name='Nombre_product'
                        value={form.Nombre_product}
                        placeholder='Nombre del producto'
                        onChange={handleChange}
                    />
                    <input 
                        type='text'
                        autoComplete='off'
                        className='p-2 rounded'
                        name='Precio'
                        value={form.Precio}
                        placeholder='Precio del producto'
                        onChange={handleChange}
                    />
                    <input 
                        type='text'
                        autoComplete='off'
                        className='p-2 rounded'
                        name='Descripcion'
                        value={form.Descripcion}
                        placeholder='Descripcion del producto'
                        onChange={handleChange}
                    />
                    <input 
                        type='text'
                        autoComplete='off'
                        className='p-2 rounded'
                        name='Image'
                        value={form.Image}
                        placeholder='Imagen del producto'
                        onChange={handleChange}
                    />
                    <input 
                        type='text'
                        autoComplete='off'
                        className='p-2 rounded'
                        name='Tipo'
                        value={form.Tipo}
                        placeholder='Tipo de producto'
                        onChange={handleChange}
                    />
                    <button 
                        type="submit"
                        className='bg-[#555] py-2 w-4/5 m-auto rounded'
                    >
                        Añadir producto
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddProduct
