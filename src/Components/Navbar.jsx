import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../assets/Icon.png'
import ProfilePicture from './src/assets/UnknownUser.jpeg'

const Navbar = () => {
  return (
    <nav id='nav' className='flex justify-between items-center h-20 bg-neutral-900 text-white mb-20'>
            <div className='flex justify-center items-center ml-5'>
                <img src={Icon} alt="" className='h-40'/>
            </div>
            <ul className='flex justify-center items-center gap-10 text-lg font-bold'> 
                <li className='hover:text-blue-500 hover:scale-150 duration-500'>
                    <Link to="/home">Home</Link>
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
            <div className='flex justify-center items-center mr-5'>
                <img id='usersprofileimages' src={ProfilePicture} alt="" className='h-10 w-10 rounded-full'/>
            </div>
    </nav>
  )
}

export default Navbar