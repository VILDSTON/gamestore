import React, { useEffect } from 'react'
import { useState } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import carticon from '../assets/shopping-cart.png'

const Products = () => {

    const [products, setProducts] = useState([])

    useEffect(()=>{
      Aos.init()
      fetch('https://694d1bf1ad0f8c8e6e1fc0d4.mockapi.io/games')
      .then(r => r.json())
      .then(data => setProducts(data))
    }, [])

  return (
    <div>
      <h1 data-aos = 'fade-up' data-aos-duration = '1000' className='text-4xl font-bold text-center mt-10 text-blue-400'>Games</h1>
      <main data-aos = 'fade-up' data-aos-duration = '1000' className='max-w-7xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {products.map((p)=>{
            return(
              <div key={p.id} className="bg-neutral-900 rounded-3xl shadow-2xl p-4 w-[260px] h-[450px] flex flex-col justify-around items-center hover:scale-110 duration-500">
                <img src={p.image} className="w-[200px] h-[250px] rounded-xl" />
                <h2 className="text-lg font-bold mt-2 text-center">{p.title}</h2>
                <p className="text-green-500 font-semibold">${p.price}</p>
                <div className='w-full flex justify-center items-center bg-blue-500 py-2 rounded-2xl gap-3'>
                  <button className="font-semibold ">Buy Game</button>
                  <img src={carticon} alt="Cart Icon" className='w-4 h-4'/>
                </div>
              </div>
            )
        })}
      </main>
      <div>
      </div>
    </div>
  )
}

export default Products