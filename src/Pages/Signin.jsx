import React, { useState } from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import json from '../assets/registered.json'

const Signin = () => {

  const username = useRef()
  const password = useRef()
  const goto = useNavigate()
  const [error, setError] = useState("none")
  
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(username.current.value, password.current.value)
    if(username.current.value === "admin" && password.current.value === "0000"){
      alert('Sign In Successful')
      goto('/home')
    } else {
      setError("block")
    } 
  }

  const onChange = ()=>{
    setError("none")
  }

  return (
    <div className='flex flex-col justify-center items-center'>
    <h1 className='text-4xl font-bold text-center mt-10 text-blue-400'>Sign In</h1>
      <form onChange={onChange} onSubmit={handleSubmit} className='flex flex-col justify-center items-center'>
        <div className='h-[360px] w-[400px] mt-10 bg-neutral-900 p-10 flex flex-col justify-around items-center rounded-3xl shadow-2xl'>
          <div className='w-full'>
            <label className='text-lg font-semibold mb-2'>Username</label>
            <input ref={username} type="text" className='w-full p-3 mb-4 rounded-xl bg-neutral-800 text-white focus:scale-110 duration-500'/>
          </div>
          <div className='w-full'>
            <label className='text-lg font-semibold mb-2'>Password</label>
            <input ref={password} type="password" className='w-full p-3 mb-4 rounded-xl bg-neutral-800 text-white focus:scale-110 duration-500'/>
          </div>
          <button type="submit" className='w-full bg-blue-500 mb-5 text-white p-3 rounded-xl font-bold hover:scale-110 duration-500 duration-500'>Sign In</button>
          <p className='text-center text-red-800 font-semibold' style={{display: error}}>Error, Invalid Credentials</p>
        </div>
      </form>
    </div>
  )
}

export default Signin