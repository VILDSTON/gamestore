import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useNavigate } from 'react-router-dom'

const Pricing = () => {

    const goto = useNavigate()

    const onClick = ()=>{
        goto('/buypage')
    }

    useEffect(()=>{
      Aos.init({
        duration: 1000
      })
    }, [])

  return (
    <div>
        <div className='mt-40 mb-40 flex justify-center items-center flex-col gap-10 mb-20'>
          <h1 data-aos = 'fade-up' className='text-4xl font-bold text-center text-blue-400'>Pricing Plans</h1>
          <div data-aos = 'fade-up' className='flex justify-center items-center gap-10'>
            <div className='bg-neutral-900 border-2 border-neutral-800 rounded-3xl p-5 w-[350px] h-[400px] flex flex-col justify-between items-center gap-6 shadow-2xl hover:scale-105 duration-500'>
              <h2 className='text-3xl font-bold mt-5 text-blue-300'>Basic</h2>
              <p className='text-4xl font-bold'>$9.99</p>
              <ul className='text-center flex flex-col gap-1 font-medium'>
                <li>Access to 100+ games</li>
                <li>Standard Support</li>
                <li>Single Device</li>
              </ul>
              <button onClick={onClick} className='bg-gradient-to-l hover:cursor-pointer mb-5 font-semibold from-cyan-500 to-blue-500 text-white py-2 px-4 w-[150px] shadow-2xl hover:scale-110 duration-500 rounded-3xl mt-4'>Buy Plan</button>
            </div>
            <div className='bg-neutral-900 border-2 border-neutral-800 rounded-3xl p-5 w-[350px] h-[400px] flex flex-col justify-between items-center gap-6 shadow-2xl hover:scale-105 duration-500'>
              <h2 className='text-3xl font-bold mt-5 text-blue-400'>Premium</h2>
              <p className='text-4xl font-bold'>$19.99</p>
              <ul className='text-center flex flex-col gap-1 font-medium'>
                <li>Access to 200+ games</li>
                <li>Priority Support</li>
                <li>Multi-Device</li>
              </ul>
              <button onClick={onClick} className='bg-gradient-to-l hover:cursor-pointer mb-5 font-semibold from-cyan-500 to-blue-500 text-white py-2 px-4 w-[150px] shadow-2xl hover:scale-110 duration-500 rounded-3xl mt-4'>Buy Plan</button>
            </div>
            <div className='bg-neutral-900 border-2 border-neutral-800 rounded-3xl p-5 w-[350px] h-[400px] flex flex-col justify-between items-center gap-6 shadow-2xl hover:scale-105 duration-500'>
              <h2 className='text-3xl font-bold mt-5 text-blue-600'>Ultimate</h2>
              <p className='text-4xl font-bold'>$29.99</p>
              <ul className='text-center flex flex-col gap-1 font-medium'>
                <li>Access to 600+ games</li>
                <li>VIP Access</li>
                <li>Access to trade</li>
              </ul>
              <button onClick={onClick} className='bg-gradient-to-l hover:cursor-pointer mb-5 font-semibold from-cyan-500 to-blue-500 text-white py-2 px-4 w-[150px] shadow-2xl hover:scale-110 duration-500 rounded-3xl mt-4'>Buy Plan</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Pricing