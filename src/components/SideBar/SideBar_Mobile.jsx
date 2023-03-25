import React from "react";
import { FaHome, FaPenSquare, FaPlus, FaAlignRight, FaTimes } from "react-icons/fa"

const SideBarMobile = ({ toogleMenu, showMenu }) => {
    return (
        <div className=" w-full bottom-0 left-0 fixed rounded-tr-lg rounded-tl-lg bg-[#1F1D2B] lg:hidden">
            <nav className="text-3xl m-auto text-gray-300 flex items-center justify-between block px-16 py-4">
            <button>
                <FaHome />
            </button>
            <button>
                <FaPenSquare />
            </button>
            <button>
                <FaPlus />
            </button>
            <button onClick={toogleMenu}>
                {showMenu ?  <FaTimes /> : <FaAlignRight />}
            </button>
            </nav>
        </div>
    )
}

export default SideBarMobile