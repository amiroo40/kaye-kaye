import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

import { GrNext, GrPrevious } from "react-icons/gr";

import { slideImages } from '../constants'

import './style/header.css'

const Header = () => {

    const [slide, setSlide] = useState(0)
    const [screenSize, setScreenSize] = useState(window.innerWidth)
    const [timeoutId, setTimeoutId] = useState(null)

    useEffect(() => {

        window.addEventListener('resize', () => {
            setScreenSize(window.innerWidth)
        })

    }, [screenSize])

    useEffect(() => {
        const timeout = setTimeout(() => {
            slide < slideImages.length - 1 ? setSlide(slide + 1) : setSlide(0)
        }, 4000)

        setTimeoutId(timeout)

        console.log('slide');
        return () => clearTimeout(timeout)
    }, [slide])

    const sm = screenSize <= 640 ? true : false;

    function nextSlide() {
        clearTimeout(timeoutId)
        slide < slideImages.length - 1 ? setSlide(slide + 1) : setSlide(0)
    }

    function previousSlide() {
        clearTimeout(timeoutId)
        slide > 0 ? setSlide(slide - 1) : setSlide(slideImages.length - 1)
    }

    return (
        <>
            {sm ? <Sidebar /> : <Navbar />}

            <h1 className="text-center pt-2 text-2xl font-extrabold text-yellow-500 sm:hidden">شهربازی کایه کایه</h1>

            <div className='slider‍ relative sm:mt-10 mx-auto'>
                <div className="slides pt-4 sm:pt-10">
                    {slideImages.map(item => (
                        <div
                            key={item.id}
                            className={`item ${slideImages.indexOf(item) === slide ? 'block' : 'hidden'}`}
                        >
                            <img
                                src={item.image}
                                alt=""
                            />
                            <span className='hidden sm:inline absolute'>{item.caption}</span>
                        </div>
                    ))}
                </div>

                <div className="hidden sm:block">
                    <div className="absolute cursor-pointer bg-slate-700 hover:bg-yellow-500 hover:text-slate-700 duration-100 rounded-md p-2 text-yellow-500 top-72 left-0 text-2xl font-bold">
                        <GrPrevious onClick={previousSlide} />
                    </div>
                    <div className="absolute cursor-pointer bg-slate-700 hover:bg-yellow-500 hover:text-slate-700 duration-100 rounded-md p-2 text-yellow-500 top-72 right-0 text-2xl font-bold">
                        <GrNext onClick={nextSlide} />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Header
