import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { Games, Home } from './pages'
import { Header } from './components'

const App = () => {
    return (
        <>
            <div className="bg-slate-300 h-full">
                <Header />
                <Routes>
                    <Route path='/games' element={<Games />} />
                    <Route path='/home' element={<Navigate replace to='/' />} />
                    <Route path='/' element={<Home />} />
                </Routes>
            </div>
        </>
    )
}

export default App
