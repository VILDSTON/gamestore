import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../assets/Icon.png'
import ProfilePicture from '../assets/UnknownUser.jpeg'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const goto = useNavigate()

    const onClick = () => {
      goto('/signin')
    }

    const onClick2 = () => {
        goto('/home')
      }

  return (
    <div className='sticky top-0 z-50'>
        <nav className='flex justify-between items-center h-20 border-b-2 border-neutral-800 bg-neutral-900 text-white mb-20'>
                <div onClick={onClick2} className='flex justify-center items-center ml-5 hover:cursor-pointer'>
                    <img src={Icon} alt="" className='h-40'/>
                </div>
                <ul className='flex justify-center items-center gap-10 text-lg font-bold'> 
                    <li className='hover:text-blue-500 hover:scale-150 duration-500'>
                        <Link to="/home">Home</Link>
                    </li>
                    <li className='hover:text-blue-500 hover:scale-150 duration-500'>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className='hover:text-blue-500 hover:scale-150 duration-500'>
                        <Link to="/pricing">Pricing</Link>
                    </li>
                    <li className='hover:text-blue-500 hover:scale-150 duration-500'>
                        <Link to="/products">Products</Link>
                    </li>
                    <li className='hover:text-blue-500 hover:scale-150 duration-500'>
                        <Link to="/create">Create</Link>
                    </li>
                </ul>
                <div className='flex justify-center items-center mr-5'>
                    <img onClick={onClick} src={ProfilePicture} alt="" className='h-10 w-10 cursor-pointer rounded-full'/>
                </div>
        </nav>
    </div>
  )
}

export default Navbar