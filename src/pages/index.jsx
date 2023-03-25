import React, { useState } from "react"
import SideBar from "@/components/SideBar/SideBar"
import SideBarMobile from "@/components/SideBar/SideBar_Mobile"
import Main from "@/components/Main/Main"
import ConectarDb from "@/lib/dbConnect"
import Movie from "@/models/Producto"

export default function Home({ Productos }) {
  const [showMenu, setshowMenu] = useState(false)
  const [showOrder, setshowOrder] = useState(false)

  const toogleMenu = () => {
    setshowMenu(!showMenu);
  }

  return (
    <div className='bg-[#262837] w-full min-h-screen'>
      <SideBar showMenu={showMenu} />
      <SideBarMobile toogleMenu={toogleMenu} showMenu={showMenu} />
      <Main productos={Productos} />
    </div>
  )
}

export async function getServerSideProps() {
  try {
      await ConectarDb()
      const res = await Movie.find({})
      const Productos = res.map((info)=>{
        const Producto = info.toObject()
        Producto._id = `${Producto._id}`
        return Producto
      })
      return {props:{Productos}}    
  } catch (error) {
      console.log(error)
  }
}
