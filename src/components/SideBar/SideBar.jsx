import React from "react";
import Link from "next/link";
import { FaHome, FaPlus, FaPen, FaPenSquare, FaPowerOff} from 'react-icons/fa'

const SideBar = ({ showMenu }) => {
    return (
        <div className={`bg-[#1F1D2B] fixed w-24 py-4 top-0 h-full flex flex-col justify-between z-50 transition-all lg:block lg:left-0 lg:flex lg:flex-col lg:justify-between ${showMenu ? "left-0" : "-left-full"}`}>
            <div>
                <ul className="pl-4">
                    <li>
                        <h1 className="text-2xl text-gray-300 text-center mb-10 mt-2 font-bold">
                        Logo
                        </h1>
                    </li>
                    <li className="p-3 bg-[#262837] rounded-tl-lg rounded-bl-lg">
                        <Link className="bg-[#ec7c6a] p-3 text-center block rounded-lg" href='/'>
                            <FaHome className="text-xl text-white m-auto"/>
                        </Link>
                    </li>
                    <li className="p-3 rounded-tl-lg rounded-bl-lg group hover:bg-[#262837] transition-colors">
                        <Link className="p-3 text-center block rounded-lg group-hover:bg-[#ec7c6a] transition-colors" href='/'>
                            <FaPenSquare className="text-xl text-[#ec7c6a] m-auto group-hover:text-white"/>
                        </Link>
                    </li>
                    <li className="p-3 rounded-tl-lg rounded-bl-lg group hover:bg-[#262837] transition-colors">
                        <Link className="p-3 text-center block rounded-lg group-hover:bg-[#ec7c6a] transition-colors" href='/'>
                            <FaPlus className="text-xl text-[#ec7c6a] m-auto group-hover:text-white"/>
                        </Link>
                    </li>
                    <li className="p-3 rounded-tl-lg rounded-bl-lg group hover:bg-[#262837] transition-colors">
                        <Link className="p-3 text-center block rounded-lg group-hover:bg-[#ec7c6a] transition-colors" href='/'>
                            <FaPen className="text-xl text-[#ec7c6a] m-auto group-hover:text-white"/>
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <ul className="pl-4">
                    <li className="p-3 rounded-tl-lg rounded-bl-lg group hover:bg-[#262837] transition-colors">
                        <Link className="p-3 text-center block rounded-lg group-hover:bg-[#ec7c6a] transition-colors" href='/'>
                            <FaPowerOff className="text-xl text-[#ec7c6a] m-auto group-hover:text-white"/>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar
