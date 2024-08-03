import React, { useState } from "react";
import Eagle from "./assets/eagle.jpeg"
import Logo from "./assets/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faArrowRight, faXmark } from '@fortawesome/free-solid-svg-icons'



const NavBar = () => {

    const [open, setOpen] = useState(false);
    const handleMenuOpen = () => {
        setOpen(true);
    }

    const handleMenuClose = () => {
        setOpen(false);
    }


    return (
        <>
            <nav className="p-3 bg-white flex justify-between items-center">
                <a href="#" id="brand" className="flex flex-1">
                    <img src={Logo} alt="logo" className="max-w-[10rem] max-h-[6rem] object-cover" />
                </a>


                <button onClick={handleMenuOpen} className="p-2 lg:hidden">
                    <FontAwesomeIcon icon={faBars} className="text-gray-600" />
                </button>
                <div className={`fixed z-10 md:hidden bg-white inset-0 p-3  ${!open && "hidden"}`}>
                    <div id="nav-bar" className="flex justify-between" >
                        <a href="#" id="brand" className="flex  items-center">
                            <img src={Logo} alt="logo" className="max-w-[10rem] max-h-[6rem] object-cover" />

                        </a>
                        <button onClick={handleMenuClose} className="p-2 md:hidden">
                            <FontAwesomeIcon icon={faXmark} className="text-gray-600" />
                        </button>
                    </div>

                    <div className="mt-6">
                        <a href="#" className="font-medium my-3 py-3 hover:bg-red-50 block rounded-lg">Class Updates</a>
                        <a href="#" className="font-medium my-3 py-3 hover:bg-red-50 block rounded-lg">Our Courses</a>
                        <a href="#" className="font-medium my-3 py-3 hover:bg-red-50 block rounded-lg">Our Office</a>
                        {/* <a href="#" className="font-medium my-3 py-3 hover:bg-red-50 block rounded-lg">Gallery</a> */}

                    </div>
                    <div className="h-[1px] bg-gray-300">

                    </div>
                    {/* <div className="flex gap-2 mt-6">
                        <button className="px-8 py-4 rounded-lg bg-red-600 text-white hover:bg-red-400 transition-all duration-300 ease-in-out shadow-md">
                            Login
                        </button>
                        <button className="px-8 py-4 rounded-lg bg-red-600 text-white hover:bg-red-400 transition-all duration-300 ease-in-out shadow-md">
                            Signup
                        </button>
                    </div> */}
                </div>
            </nav>
        </>
    )
}


export default NavBar