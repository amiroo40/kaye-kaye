import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { slideImages } from '../constants'

const Header = () => {

    const [screenSize, setScreenSize] = useState(window.innerWidth)

    useEffect(() => {

        window.addEventListener('resize', () => {
            setScreenSize(window.innerWidth)
        })

    }, [screenSize])

    const sm = screenSize <= 640 ? true : false;

    return (
        <>
            {sm ? <Sidebar /> : <Navbar />}
            <h1 className="text-center pt-2 text-2xl font-extrabold text-yellow-500 sm:hidden">شهربازی کایه کایه</h1>
            <div className='relative w-96 sm:mt-10 mx-auto'>
                <div className="pt-4 sm:pt-10">
                    {slideImages.map(item => (
                        <div className="">
                            <img
                                src={item.image}
                                alt=""
                                className='w-full'
                            />
                            <span className='text-white hidden sm:inline absolute'>{item.caption}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Header
