import React from 'react'
import { Link } from 'react-scroll'

const NavBar = () => {
    return (
        <nav className='fixed w-full py-4 px-16 top-0 bg-gray-100 border-b-2 border-b-gray-200'>
            <div className='container mx-auto flex select-none items-center justify-between text-slate-700'>
                <div className=' lg:text-4xl text-3xl shadow-slate-400 shadow-inner p-2 font-bold tracking-widest rounded'>E-Bikes</div>
                <div className=' text-lg text-slate-900 lg:space-x-24 space-x-2'>
                    <Link to="home" className=" bg-gray-300 active:bg-gray-400 hover:bg-gray-400 px-3 py-2 ring-gray-400 ring-1 rounded-full">Home</Link>
                    <Link to="about" className="bg-gray-300 active:bg-gray-400 hover:bg-gray-400 px-3 py-2 ring-gray-400 ring-1 rounded-full">About</Link>
                    <Link to="project" className="bg-gray-300 active:bg-gray-400 hover:bg-gray-400 px-3 py-2 ring-gray-400 ring-1 rounded-full">Product</Link>
                    <Link to="contact" className="bg-gray-300 active:bg-gray-400 hover:bg-gray-400 px-3 py-2 ring-gray-400 ring-1 rounded-full">Contact</Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar