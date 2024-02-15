import React from 'react'
import { myLogo } from '../constants'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

    const normalLink = 'text-yellow-500 p-2 inline-block rounded-lg hover:bg-yellow-500 hover:text-slate-800 hover:-translate-y-0.5 duration-200'

    const activeLink = 'p-2 inline-block rounded-lg text-gray-800 bg-gray-300'

    return (
        <>
            <nav className='flex z-10 justify-between items-center bg-slate-800 w-full fixed top-0 p-2'>
                <Link to='/' className="ml-3 cursor-pointer flex justify-start gap-3 items-center">
                    <img
                        src={myLogo}
                        alt="logo"
                        width={80}
                        height={80}
                    />
                    <span className="text-center pt-2 text-2xl font-extrabold text-yellow-500 hidden sm:block">شهربازی کایه کایه</span>
                </Link>

                <div className="mr-3 flex items-center gap-3">
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

            </nav>
        </>
    )
}

export default Navbar
