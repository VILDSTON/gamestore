import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center h-20 bg-neutral-900 text-white mb-20'>
            <div className='pl-5'>
                <img src="./src/assets/Icon.png" alt="" className='h-40'/>
            </div>
            <ul className='flex justify-center items-center gap-10 ml-10 text-lg font-bold pr-10'> 
                <li className='hover:text-blue-500 hover:scale-150 duration-500'>
                    <Link to="/">Home</Link>
                </li>
                <li className='hover:text-blue-500 hover:scale-150 duration-500'>
                    <Link to="/about">About</Link>
                </li>
                <li className='hover:text-blue-500 hover:scale-150 duration-500'>
                    <Link to="/products">Products</Link>
                </li>
                <li className='hover:text-blue-500 hover:scale-150 duration-500'>
                    <Link to="/create">Create</Link>
                </li>
            </ul>
    </nav>
  )
}

export default Navbar