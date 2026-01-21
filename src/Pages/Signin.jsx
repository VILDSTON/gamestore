import React, { useState } from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Signin = () => {

  const username = useRef()
  const password = useRef()
  const getusersinfo = JSON.parse(localStorage.getItem('usersinfo'))
  const adminaccount = {
    username: "admin",
    password: "0000",
    email: "admin@gmail.com"
  }
  const goto = useNavigate()
  const [error, setError] = useState("block")
  const [linktext, setLinktext] = useState("Sign Up")
  const [errorcolor, setErrorcolor] = useState("white")
  const [textsignup, setTextsignup] = useState("No Account?")
  
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(username.current.value, password.current.value)
    if(username.current.value === getusersinfo.username && password.current.value === getusersinfo.password){
      alert('Sign In Successful')
      goto('/home')
    } else {
      setError("block")
      setTextsignup("Error, Invalid Credentials")
      setLinktext("")
      setErrorcolor("red")
    } 

    if(username.current.value === adminaccount.username && password.current.value === adminaccount.password){
      alert('Hello Admin!')
      goto('/home')
    }
  }

  const onChange = ()=>{
    setError("none")
  }

  useEffect(()=>{
    Aos.init({
      duration: 1000
    })
  }, [])

return (
  <div>
  <h1 data-aos='fade-up' className='text-4xl font-bold text-center mt-10 text-blue-400'>Sign In</h1>
    <form data-aos='fade-up' onChange={onChange} onSubmit={handleSubmit} className='flex flex-col justify-center items-center'>
      <div className='h-[380px] w-[400px] mt-10 bg-neutral-900 p-10 flex flex-col justify-around items-center rounded-3xl shadow-2xl'>
        <div className='w-full'>
          <label className='text-lg font-semibold mb-2'>Username</label>
          <input ref={username} type="text" className='w-full p-3 mb-4 rounded-xl bg-neutral-800 text-white focus:scale-110 duration-500' required/>
        </div>
        <div className='w-full'>
          <label className='text-lg font-semibold mb-2'>Password</label>
          <input ref={password} type="password" className='w-full p-3 mb-4 rounded-xl bg-neutral-800 text-white focus:scale-110 duration-500' required/>
        </div>
        <button type="submit" className='w-full bg-blue-500 mb-5 text-white p-3 rounded-xl font-bold hover:scale-110 duration-500 duration-500'>Sign In</button>
        <p className='text-center font-semibold' style={{display: error, color: errorcolor}}>{textsignup} <Link to='/' className='text-blue-400'>{linktext}</Link></p>
      </div>
    </form>
  </div>
)
}

export default Signin