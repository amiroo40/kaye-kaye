import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { myLogo } from '../constants'
import { IoMenu } from 'react-icons/io5'

const Sidebar = () => {

    const normalLink = 'text-yellow-500 w-full border-b p-2 block text-right pr-2 hover:bg-yellow-500 hover:text-slate-800 hover:-translate-y-0.5 duration-200 mt-2'

    const activeLink = 'text-gray-800 bg-gray-300 w-full border-b p-2 block text-right pr-2'

    const [activeMenu, setActiveMenu] = useState(false)

    function showNavbar() {
        setActiveMenu(activeMenu ? false : true)
    }

    return (
        <>
            <div className={`z-10 duration-200 overflow-hidden flex flex-col fixed top-0 right-0 h-screen bg-slate-800 ${activeMenu ? 'w-36' : 'w-0'}`}>
                <div className="cursor-pointer flex items-center justify-center mt-5">
                    <Link to='/'>
                        <img
                            src={myLogo}
                            alt="logo"
                            width={80}
                            height={80}
                        />
                    </Link>
                </div>

                <div className="flex flex-col mt-8 items-center">

                    <NavLink
                        to='/games'
                        className={({ isActive }) => isActive ? activeLink : normalLink}
                    >
                        بازی ها
                    </NavLink>

                    <NavLink
                        to='/gallery'
                        className={({ isActive }) => isActive ? activeLink : normalLink}
                    >
                        گالری
                    </NavLink>

                    <NavLink
                        to='/about-us'
                        className={({ isActive }) => isActive ? activeLink : normalLink}
                    >
                        درباره ما
                    </NavLink>
                </div>
            </div>

            <div className="fixed border rounded-md border-yellow-500 z-10 top-2 left-2 cursor-pointer hover:scale-110 duration-200">
                <IoMenu
                    className='text-4xl text-yellow-500'
                    onClick={showNavbar}
                />
            </div>
        </>
    )
}

export default Sidebar
