import React from  'react'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import SteamLogo from './src/assets/SteamLogo.png'

const About = () => {

    useEffect(()=>{
      Aos.init()
    }, [])

  return (
    <div className='w-full flex flex-col justify-center items-center text-white'>
      <h1 data-aos = 'fade-up' className='text-5xl font-bold text-center mt-20 text-blue-400'>About Us</h1>
      <div data-aos = 'fade-up' className='mt-10 bg-neutral-900 rounded-3xl p-10 w-[1200px] h-[800px] justify-center flex-col items-center flex gap-10'>
        <div className='flex justify-center items-center gap-10'>
          <img src="./src/assets/Icon.png" alt="" className='h-50'/>
          <img src={SteamLogo} alt="" className='h-20'/>
        </div>
        <p className='text-lg font-medium leading-8 pb-10'>
          Welcome to GameStore! We are passionate about gaming and dedicated to providing gamers with the best selection of video games at fair prices. <br /><br />
          Our mission is to create a platform where gamers can easily find and purchase their favorite games without breaking the bank. We believe that gaming should be accessible to everyone, and we strive to make that a reality through our curated selection of games and competitive pricing. <br /><br />
          We work with Steam and other game distributors to bring you a wide variety of titles, from the latest releases to classic favorites. Our team is made up of avid gamers who understand the importance of quality gaming experiences, and we are committed to helping you find the perfect game for your needs. <br /><br />
          At GameStore, we value our community of gamers and are committed to providing exceptional customer service. Whether you're a casual gamer or a hardcore enthusiast, we are here to help you find the perfect game for your needs. Thank you for choosing GameStore as your go-to destination for all things gaming!
        </p>
      </div>

      <div className='w-full flex flex-col justify-center items-center'>
        <h1 data-aos = 'fade-up' className='text-4xl font-bold text-center mt-20 text-blue-400'>Our Team</h1>
        <div data-aos = 'fade-up' className='mt-10 flex justify-center items-center gap-10 mb-20 flex-wrap w-[90%]'>
            <div className='bg-neutral-900 rounded-3xl p-5 w-[250px] h-[370px] flex flex-col justify-around items-center gap-6 shadow-2xl hover:scale-105 duration-500'>
              <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="" className='rounded-full h-[150px] w-[150px]'/>
              <h2 className='text-2xl font-bold'>John Doe</h2>
              <p className='text-center text-[10px]'>"I love gaming because it allows me to escape reality and immerse myself in different worlds."</p>
              <p className='text-center text-blue-500 font-bold'>Lead Developer</p>
            </div>
            <div className='bg-neutral-900 rounded-3xl p-5 w-[250px] h-[370px] flex flex-col justify-around items-center gap-6 shadow-2xl hover:scale-105 duration-500'>
              <img src="https://randomuser.me/api/portraits/women/75.jpg" alt="" className='rounded-full h-[150px] w-[150px]'/>
              <h2 className='text-2xl font-bold'>Jane Doe</h2>
              <p className='text-center text-[10px]'>"I love gaming because it allows me to express myself and connect with others."</p>
              <p className='text-center text-blue-500 font-bold'>Marketing Manager</p>
            </div>
            <div className='bg-neutral-900 rounded-3xl p-5 w-[250px] h-[370px] flex flex-col justify-around items-center gap-6 shadow-2xl hover:scale-105 duration-500'>
              <img src="https://randomuser.me/api/portraits/men/76.jpg" alt="" className='rounded-full h-[150px] w-[150px]'/>
              <h2 className='text-2xl font-bold'>Mike Smith</h2>
              <p className='text-center text-[10px]'>"I love gaming because it allows me to solve problems and think critically."</p>
              <p className='text-center text-blue-500 font-bold'>Customer Support</p>
            </div>
            <div className='bg-neutral-900 rounded-3xl p-5 w-[250px] h-[370px] flex flex-col justify-around items-center gap-6 shadow-2xl hover:scale-105 duration-500'>
              <img src="https://randomuser.me/api/portraits/women/76.jpg" alt="" className='rounded-full h-[150px] w-[150px]'/>
              <h2 className='text-2xl font-bold'>Sara Lee</h2>
              <p className='text-center text-[10px]'>"I love gaming because it allows me to express my creativity and share my passion with others."</p>
              <p className='text-center text-blue-500 font-bold'>Content Creator</p>
            </div>
        </div>
      </div>

      <div>
        <h1 data-aos = 'fade-up' className='text-4xl font-bold text-center mt-20 text-blue-400'>Contact Us</h1>
        <form data-aos = 'fade-up' className='flex flex-col justify-center items-center mt-10 mb-20'>
          <div className='bg-neutral-900 rounded-3xl p-10 w-[700px] h-[400px] flex flex-col justify-around items-center shadow-2xl'>
            <input type="text" placeholder='Name' className='w-full bg-neutral-800 h-12 rounded-xl p-3 focus:scale-110 duration-500'/>
            <input type="email" placeholder='Email' className='w-full bg-neutral-800 h-12 rounded-xl p-3 focus:scale-110 duration-500'/>
            <input type="text" placeholder='Message' className='w-full bg-neutral-800 h-22 rounded-xl p-3 pb-10 focus:scale-110 duration-500'/>
            <button className='w-full font-semibold bg-blue-500 py-2 hover:scale-105 duration-500 rounded-xl'>Submit</button>
          </div>
        </form>
      </div>
      <div data-aos="flip-left" className='mt-20 mb-20'>
            <h1 className='text-2xl font-bold text-center mb-10 text-blue-400'>Follow Us</h1>
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
  )
}

export default About