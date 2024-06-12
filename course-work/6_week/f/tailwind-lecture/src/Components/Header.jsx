import React from "react"
import { FaSearch, FaShoppingCart } from "react-icons/fa"
import { MdAccountCircle } from "react-icons/md"
import { GiFullMotorcycleHelmet } from "react-icons/gi"

const Header = () => {
    return (
        <nav className="flex justify-between h-[8vh] items-center px-5 bg-black text-orange-500">
            <div className="w-1/4 flex justify-between">
                <button>
                    <GiFullMotorcycleHelmet />
                </button>
                <button>HyperSport</button>
                <button>Naked Sport</button>
                <button>Cruisers</button>
            </div>
            <div className="flex w-20 justify-between">
                <FaSearch />
                <FaShoppingCart />
                <MdAccountCircle />
            </div>
        </nav>
    )
}

export default Header
