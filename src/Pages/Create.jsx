import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Create = () => {

    const goto = useNavigate()
    const title = useRef()
    const imageUrl = useRef()
    const price = useRef()
    const description = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        goto('/products')

        fetch('https://694d1bf1ad0f8c8e6e1fc0d4.mockapi.io/games', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            title: title.current.value,
            image: imageUrl.current.value,
            price: price.current.value,
            description: description.current.value,
            dollar: '$'
        })
    })
  }

  useEffect(()=>{
    Aos.init({
      duration: 1000
    })
  })

  return (
    <div className='flex flex-col justify-center items-center w-full text-white'>
      <h1 data-aos = 'fade-up' className='text-5xl font-bold text-center mt-20 text-blue-400'>Sell Your Game</h1>
      <form data-aos = 'flip-up' onSubmit={handleSubmit} className='mt-10 flex flex-col justify-center items-center gap-2 bg-neutral-900 p-10 rounded-3xl w-[500px]'>
        <input ref={title} type="text" placeholder='Game Title' className='w-full h-12 rounded-xl p-3 mb-4 bg-neutral-800 focus:scale-110 duration-500'/>
        <input ref={imageUrl} type="text" placeholder='Game Image URL' className='w-full h-12 rounded-xl p-3 mb-4 bg-neutral-800 focus:scale-110 duration-500'/>
        <input ref={price} min={0} type="number" placeholder='Game Price' className='w-full h-12 rounded-xl p-3 mb-4 bg-neutral-800 focus:scale-110 duration-500'/>
        <input ref={description} type='text' placeholder='Game Description' className='w-full h-32 rounded-xl p-3 pb-20 mb-4 bg-neutral-800 focus:scale-110 duration-500'/>
        <button type='submit' className='w-full font-semibold bg-blue-500 py-2 rounded-xl hover:scale-110 duration-500'>Sell</button>
      </form>
    </div>
  )
}

export default Create