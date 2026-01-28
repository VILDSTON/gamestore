import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'
import carticon from '../assets/shopping-cart.png'

const Home = () => {

    const goto = useNavigate()

    const onClick = ()=>{
      goto('/products')
    }

    const onClick2 = ()=>{
      goto('/pricing')
    }


    useEffect(()=>{
      Aos.init({
        duration: 1000
      })
    }, [])

  return (
    <div className=''>
        <div className='flex justify-center items-center gap-30'>
            <div data-aos = 'fade-up' className='font-bold text-4xl flex flex-col gap-6'>
                <h1>Welcome to GameStore, <br /> Buy Games for <span className='text-blue-400'>Fair Price</span></h1>
                <Link to='/products' className='flex justify-center items-center bg-gradient-to-l text-2xl from-cyan-500 to-blue-500 text-white py-2 px-4 w-[180px] shadow-2xl hover:shadow-blue-400 hover:scale-110 duration-500 rounded-3xl'>Get Started</Link>
            </div>
            <div data-aos = 'fade-up'>
              <img src="https://static.vecteezy.com/system/resources/thumbnails/046/032/707/small/tech-and-gadget-3d-icon-png.png" alt="" className='h-94 hover:blur-[1px] duration-500'/>
            </div>
        </div>

        <div className='mt-40 flex justify-center items-center flex-col gap-10'>
          <h1 data-aos = 'fade-right' className='text-4xl font-bold text-center text-blue-400'>About Us</h1>
          <p data-aos = 'fade-right' className='text-lg border-2 border-neutral-800 text-center bg-neutral-900 rounded-3xl p-5 w-[800px] h-[170px] flex justify-center items-center flex-col shadow-2xl font-medium'>At GameStore, we believe in providing gamers with the best selection of games at fair prices. <br /> Our team is passionate about gaming and is dedicated to helping you find the perfect game for your needs. <Link to='/about' className='text-blue-400 inline bg-gradient-to-l from-cyan-500 to-blue-500 text-white mt-3 py-1 px-2 rounded-3xl hover:bg-graident-to-r hover:from-blue-500 hover:to-cyan-500 hover:scale-110 duration-500'>More about us</Link></p>
        </div>

        <div className='mt-40 flex justify-center items-center flex-col gap-10 mb-20'>
          <h1 data-aos = 'fade-left' className='text-4xl font-bold text-center text-blue-400'>Pricing Plans</h1>
          <div data-aos = 'fade-left' className='flex justify-center items-center gap-10'>
            <div className='bg-neutral-900 border-2 border-neutral-800 rounded-3xl p-5 w-[350px] h-[400px] flex flex-col justify-between items-center gap-6 shadow-2xl hover:scale-105 duration-500'>
              <h2 className='text-3xl font-bold mt-5 text-blue-300'>Basic</h2>
              <p className='text-4xl font-bold'>$9.99</p>
              <ul className='text-center flex flex-col gap-1 font-medium'>
                <li>Access to 100+ games</li>
                <li>Standard Support</li>
                <li>Single Device</li>
              </ul>
              <button onClick={onClick2} className='bg-gradient-to-l mb-5 font-semibold from-cyan-500 to-blue-500 text-white py-2 px-4 w-[150px] shadow-2xl hover:scale-110 duration-500 rounded-3xl mt-4'>Choose Plan</button>
            </div>
            <div className='bg-neutral-900 border-2 border-neutral-800 rounded-3xl p-5 w-[350px] h-[400px] flex flex-col justify-between items-center gap-6 shadow-2xl hover:scale-105 duration-500'>
              <h2 className='text-3xl font-bold mt-5 text-blue-400'>Premium</h2>
              <p className='text-4xl font-bold'>$19.99</p>
              <ul className='text-center flex flex-col gap-1 font-medium'>
                <li>Access to 200+ games</li>
                <li>Priority Support</li>
                <li>Multi-Device</li>
              </ul>
              <button onClick={onClick2} className='bg-gradient-to-l mb-5 font-semibold from-cyan-500 to-blue-500 text-white py-2 px-4 w-[150px] shadow-2xl hover:scale-110 duration-500 rounded-3xl mt-4'>Choose Plan</button>
            </div>
            <div className='bg-neutral-900 border-2 border-neutral-800 rounded-3xl p-5 w-[350px] h-[400px] flex flex-col justify-between items-center gap-6 shadow-2xl hover:scale-105 duration-500'>
              <h2 className='text-3xl font-bold mt-5 text-blue-600'>Ultimate</h2>
              <p className='text-4xl font-bold'>$29.99</p>
              <ul className='text-center flex flex-col gap-1 font-medium'>
                <li>Access to 600+ games</li>
                <li>VIP Access</li>
                <li>Access to trade</li>
              </ul>
              <button onClick={onClick2} className='bg-gradient-to-l mb-5 font-semibold from-cyan-500 to-blue-500 text-white py-2 px-4 w-[150px] shadow-2xl hover:scale-110 duration-500 rounded-3xl mt-4'>Choose Plan</button>
            </div>
          </div>
        </div>

        <div className='mb-20 flex justify-center items-center flex-col gap-5'>
          <h2 data-aos = 'fade-up' className='text-3xl font-bold mt-5 text-blue-400'>Frequently Asked Questions</h2>
          <ul data-aos = 'fade-up' className='flex flex-col gap-3 mt-3'>
            <li className='bg-neutral-900 border-2 border-neutral-800 p-3 rounded-3xl shadow-2xl'>
              <h3 className='font-semibold'>What is GameStore?</h3>
              <p>GameStore is an online platform where you can buy and sell video games at fair prices</p>
            </li>
            <li className='bg-neutral-900 border-2 border-neutral-800 p-3 rounded-3xl shadow-2xl'>
              <h3 className='font-semibold'>How do I purchase a game?</h3>
              <p>You can purchase a game by selecting a pricing plan and following the checkout process</p>
            </li>
            <li className='bg-neutral-900 border-2 border-neutral-800 p-3 rounded-3xl shadow-2xl'>
              <h3 className='font-semibold'>Can I return a game?</h3>
              <p>Yes, we offer a 30-day return policy for all digital purchases</p>
            </li>
            <li className='bg-neutral-900 border-2 border-neutral-800 p-3 rounded-3xl shadow-2xl'>
              <h3 className='font-semibold'>Can I link the Steam account?</h3>
              <p>Yes, you can link your Steam account to access your games and friends list</p>
            </li>
            <li className='bg-neutral-900 border-2 border-neutral-800 p-3 rounded-3xl shadow-2xl'>
              <h3 className='font-semibold'>Should I buy a game here?</h3>
              <p>Yes, we offer a wide selection of games at competitive prices</p>
            </li>
            <li className='bg-neutral-900 border-2 border-neutral-800 p-3 rounded-3xl shadow-2xl'>
              <h3 className='font-semibold'>What if hackers try to hack my account?</h3>
              <p>We take account security seriously and implement measures to protect your information</p>
            </li>
            <li className='bg-neutral-900 border-2 border-neutral-800 p-3 rounded-3xl shadow-2xl'>
              <h3 className='font-semibold'>How I can sell my game?</h3>
              <p>You can sell your game by listing it on our <Link to='/create' className='text-blue-400'>Create Page</Link> and setting a price</p>
            </li>
          </ul>
        </div>
  
        <div className='mb-20 flex justify-center items-center flex-col gap-5'>
          <h2 data-aos = 'fade-up' className='text-3xl font-bold mt-5 mb-5 flex justify-center items-center text-blue-400'>Popular Games</h2>
          <div data-aos = 'fade-up' className='flex justify-center items-center gap-10 mb-10 flex-wrap w-[90%]'>
            <div className='bg-neutral-900 border-2 border-neutral-800 rounded-3xl p-5 w-[300px] h-[550px] flex flex-col justify-around items-center gap-6 shadow-2xl hover:scale-105 duration-500'>
              <img src="https://cdn.displate.com/artwork/270x380/2023-06-12/6e217abc7f5bb5d0dc56e68752193a11_5c51574f5f2f216f9ef25a0d08fa6400.jpg" alt="" className='rounded-xl h-[300px] w-[220px]'/>
              <p className='text-3xl font-bold text-green-500'>$10.99</p>
              <p className='text-2xl font-bold line-through text-gray-500'>$29.99</p>
              <button onClick={onClick} className='bg-gradient-to-l mb-5 font-semibold from-cyan-500 to-blue-500 text-white py-2 px-4 w-[150px] shadow-2xl hover:scale-110 duration-500 rounded-3xl mt-4'>Buy Now</button>
            </div>
            <div className='bg-neutral-900 border-2 border-neutral-800 rounded-3xl p-5 w-[300px] h-[550px] flex flex-col justify-around items-center gap-6 shadow-2xl hover:scale-105 duration-500'>
              <img src="https://i.pinimg.com/736x/79/aa/f7/79aaf76e647b1eac1329b41a661ab60d.jpg" alt="" className='rounded-xl h-[300px] w-[220px]'/>
              <p className='text-3xl font-bold text-green-500'>$7.99</p>
              <p className='text-2xl font-bold line-through text-gray-500'>$19.99</p>
              <button onClick={onClick} className='bg-gradient-to-l mb-5 font-semibold from-cyan-500 to-blue-500 text-white py-2 px-4 w-[150px] shadow-2xl hover:scale-110 duration-500 rounded-3xl mt-4'>Buy Now</button>
            </div>
            <div className='bg-neutral-900 border-2 border-neutral-800 rounded-3xl p-5 w-[300px] h-[550px] flex flex-col justify-around items-center gap-6 shadow-2xl hover:scale-105 duration-500'>
              <img src="https://i.pinimg.com/736x/cd/38/d1/cd38d1545ae5e97a7d1a67b5952e7ed1.jpg" alt="" className='rounded-xl h-[300px] w-[220px]'/>
              <p className='text-3xl font-bold text-green-500'>$12.99</p>
              <p className='text-2xl font-bold line-through text-gray-500'>$31.99</p>
              <button onClick={onClick} className='bg-gradient-to-l mb-5 font-semibold from-cyan-500 to-blue-500 text-white py-2 px-4 w-[150px] shadow-2xl hover:scale-110 duration-500 rounded-3xl mt-4'>Buy Now</button>
            </div>
            <div className='bg-neutral-900 border-2 border-neutral-800 rounded-3xl p-5 w-[300px] h-[550px] flex flex-col justify-around items-center gap-6 shadow-2xl hover:scale-105 duration-500'>
              <img src="https://w0.peakpx.com/wallpaper/196/649/HD-wallpaper-gta-san-andreas-big-smoke-carl-johnson-cj-games-rockstar-ryder-sweet.jpg" alt="" className='rounded-xl h-[300px] w-[220px]'/>
              <p className='text-3xl font-bold text-green-500'>$6.99</p>
              <p className='text-2xl font-bold line-through text-gray-500'>$10.99</p>
              <button onClick={onClick} className='bg-gradient-to-l mb-5 font-semibold from-cyan-500 to-blue-500 text-white py-2 px-4 w-[150px] shadow-2xl hover:scale-110 duration-500 rounded-3xl mt-4'>Buy Now</button>
            </div>
            <div className='bg-neutral-900 border-2 border-neutral-800 rounded-3xl p-5 w-[300px] h-[550px] flex flex-col justify-around items-center gap-6 shadow-2xl hover:scale-105 duration-500'>
              <img src="https://wallpapers.com/images/hd/pubg-mobile-4k-s8f76pp5pm3l5ax3.jpg" alt="" className='rounded-xl h-[300px] w-[220px]'/>
              <p className='text-3xl font-bold text-green-500'>$11.99</p>
              <p className='text-2xl font-bold line-through text-gray-500'>$20.99</p>
              <button onClick={onClick} className='bg-gradient-to-l mb-5 font-semibold from-cyan-500 to-blue-500 text-white py-2 px-4 w-[150px] shadow-2xl hover:scale-110 duration-500 rounded-3xl mt-4'>Buy Now</button>
            </div>
            <div className='bg-neutral-900 border-2 border-neutral-800 rounded-3xl p-5 w-[300px] h-[550px] flex flex-col justify-around items-center gap-6 shadow-2xl hover:scale-105 duration-500'>
              <img src="https://i.pinimg.com/736x/4b/17/2a/4b172acbb1a31cf30cfd712e4bb94928.jpg" alt="" className='rounded-xl h-[300px] w-[220px]'/>
              <p className='text-3xl font-bold text-green-500'>$29.99</p>
              <p className='text-2xl font-bold line-through text-gray-500'>$40.99</p>
              <button onClick={onClick} className='bg-gradient-to-l mb-5 font-semibold from-cyan-500 to-blue-500 text-white py-2 px-4 w-[150px] shadow-2xl hover:scale-110 duration-500 rounded-3xl mt-4'>Buy Now</button>
            </div>
          </div>

          <div data-aos="fade-up" className='flex justify-center items-center'>
            <Link to='/products' className='bg-gradient-to-l flex justify-center items-center mb-5 font-semibold from-cyan-500 to-blue-500 text-white py-2 px-4 w-[150px] shadow-2xl hover:scale-110 duration-500 rounded-3xl'>View More</Link>
          </div>

        <div data-aos="flip-left" className='mt-20 mb-20'>
            <h1 className='text-3xl font-bold text-center mb-10 text-blue-400'>Follow Us</h1>
          <div className='flex justify-center items-center gap-10'>
              <a href="https://www.facebook.com" target="_blank">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className='h-10 hover:scale-110 duration-500'/>
              </a>
              <a href="https://www.twitter.com" target="_blank">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" className='h-10 hover:scale-110 duration-500'/>
              </a>
              <a href="https://www.instagram.com" target="_blank">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Instagram" className='h-10 hover:scale-110 duration-500'/>
              </a>
              <a href="https://www.linkedin.com" target="_blank">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733561.png" alt="LinkedIn" className='h-10 hover:scale-110 duration-500'/>
              </a>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Home