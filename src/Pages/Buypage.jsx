import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Buypage = () => {

    const [display, setDisplay] = useState('flex')
    const [pay, setPay] = useState('none')

    const onSubmit = (e)=>{
      e.preventDefault()
      setDisplay('none')
      setPay('flex')
    }

    useEffect(()=>{
      Aos.init({
        duration: 1000
      })
    }, [])

  return (
    <div>
        <div className='flex-col justify-center items-center w-full' style={{display: display}}>
          <h1 data-aos='fade-up' className='text-4xl font-bold text-center mt-10 text-blue-400'>Buy Page</h1>
          <div>
              <form onSubmit={onSubmit} data-aos='fade-up' className='mt-10 flex flex-col justify-center items-center gap-2 bg-neutral-900 p-10 rounded-3xl w-[500px] mx-auto'>
                  <input type="text" inputMode="numeric" pattern="[0-9]*" maxlength="19" autocomplete="cc-number" placeholder='Your Card Number'  className='w-full p-3 mb-4 rounded-xl bg-neutral-800 text-white focus:scale-110 duration-500'/>
                  <input type="text" inputMode='numeric' name="card-expiry" placeholder="MM/YY"  pattern="[0-9]{2}[0-9]{2}" maxlength="4" required className='w-full p-3 mb-4 rounded-xl bg-neutral-800 text-white focus:scale-110 duration-500'/>
                  <input type="text" inputMode='numeric' name="card-cvc" placeholder="CVC" pattern="[0-9]{3,4}" maxlength="4" required className='w-full p-3 mb-4 rounded-xl bg-neutral-800 text-white focus:scale-110 duration-500'/>
                  <button type='submit' className='w-full p-3 mb-4 rounded-xl bg-blue-500 text-white hover:bg-blue-600 hover:scale-110 focus:scale-110 duration-500'>Buy</button>
              </form>            
          </div>
        </div>
        <div data-aos='fade-up' className='flex-col justify-center items-center w-full h-screen' style={{display: pay}}>
          <h1 className='text-6xl font-bold text-center mt-10 text-blue-400'>Payment Successful, Congrats!</h1>
          <p className='text-2xl font-bold text-center mt-3'>Thank you for your purchase</p>
          <Link to='/home' className='flex font-semibold mt-5 justify-center items-center bg-gradient-to-l text-2xl from-cyan-500 to-blue-500 text-white py-2 px-4 w-[200px] shadow-2xl hover:shadow-blue-400 hover:scale-110 duration-500 rounded-3xl'>Go Back Home</Link>
        </div>
    </div>
  )
}

export default Buypage