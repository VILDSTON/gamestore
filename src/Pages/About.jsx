import React from  'react'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Icon from '../assets/Icon.png'
import Steamlogo from '../assets/SteamLogo.png'
import { Link } from 'react-router-dom'

const About = () => {

    useEffect(()=>{
      Aos.init({
        duration: 1000
      })
    }, [])

  return (
    <div className='w-full flex flex-col justify-center items-center text-white'>
      <h1 data-aos = 'fade-up' className='text-5xl font-bold text-center mt-20 text-blue-400'>About Us</h1>
      <div data-aos = 'fade-up' className='mt-10 bg-neutral-900 rounded-3xl p-10 w-[1200px] h-[800px] justify-center flex-col items-center flex gap-10'>
        <div className='flex justify-center items-center gap-10'>
          <img src={Icon} alt="" className='h-50'/>
          <img src={Steamlogo} alt="" className='h-20'/>
        </div>
        <p className='text-lg font-medium leading-8 pb-10'>
          Welcome to GameStore! We are passionate about gaming and dedicated to providing gamers with the best selection of video games at fair prices. <br /><br />
          Our mission is to create a platform where gamers can easily find and purchase their favorite games without breaking the bank. We believe that gaming should be accessible to everyone, and we strive to make that a reality through our curated selection of games and competitive pricing. <br /><br />
          We work with Steam and other game distributors to bring you a wide variety of titles, from the latest releases to classic favorites. Our team is made up of avid gamers who understand the importance of quality gaming experiences, and we are committed to helping you find the perfect game for your needs. <br /><br />
          At GameStore, we value our community of gamers and are committed to providing exceptional customer service. Whether you're a casual gamer or a hardcore enthusiast, we are here to help you find the perfect game for your needs. Thank you for choosing GameStore as your go-to destination for all things gaming!
        </p>
      </div>

      <div className='mt-20 flex justify-center items-center flex-col gap-5'>
          <h2 data-aos = 'fade-up' className='text-3xl font-bold mt-5 text-blue-400'>About Delivery and Payment</h2>
          <ul data-aos = 'fade-up' className='flex flex-col gap-3 mt-3'>
            <li className='bg-neutral-900 p-3 rounded-3xl shadow-2xl'>
              <h3 className='font-semibold'>Delivery</h3>
              <p>GameStore offers free delivery for all orders over $50</p>
            </li>
            <li className='bg-neutral-900 p-3 rounded-3xl shadow-2xl'>
              <h3 className='font-semibold'>Payment</h3>
              <p>GameStore accepts a wide range of payment methods, including credit cards, debit cards, and PayPal</p>
            </li>
            <li className='bg-neutral-900 p-3 rounded-3xl shadow-2xl'>
              <h3 className='font-semibold'>Returns</h3>
              <p>GameStore offers a 30-day return policy for all digital purchases</p>
            </li>
            <li className='bg-neutral-900 p-3 rounded-3xl shadow-2xl'>
              <h3 className='font-semibold'>Prices</h3>
              <p>GameStore offers competitive prices for all digital purchases</p>
            </li>
            <li className='bg-neutral-900 p-3 rounded-3xl shadow-2xl'>
              <h3 className='font-semibold'>Safety</h3>
              <p>GameStore takes security seriously and uses industry-standard encryption to protect your personal information</p>
            </li>
            <li className='bg-neutral-900 p-3 rounded-3xl shadow-2xl'>
              <h3 className='font-semibold'>Subscription</h3>
              <p>GameStore offers a subscription service for regular updates and access to exclusive content</p>
            </li>
          </ul>
      </div>

      <div className='mt-5 mb-20 flex justify-center items-center flex-col gap-5'>
          <h2 data-aos = 'fade-up' className='text-3xl font-bold mt-5 text-blue-400'>Frequently Asked Questions</h2>
          <ul data-aos = 'fade-up' className='flex flex-col gap-3 mt-3'>
            <li className='bg-neutral-900 p-3 rounded-3xl shadow-2xl'>
              <h3 className='font-semibold'>What is GameStore?</h3>
              <p>GameStore is an online platform where you can buy and sell video games at fair prices</p>
            </li>
            <li className='bg-neutral-900 p-3 rounded-3xl shadow-2xl'>
              <h3 className='font-semibold'>Why I should believe about security?</h3>
              <p>GameStore takes security seriously and uses industry-standard encryption to protect your personal information</p>
            </li>
            <li className='bg-neutral-900 p-3 rounded-3xl shadow-2xl'>
              <h3 className='font-semibold'>How do I purchase a game?</h3>
              <p>You can purchase a game by selecting a pricing plan and following the checkout process</p>
            </li>
            <li className='bg-neutral-900 p-3 rounded-3xl shadow-2xl'>
              <h3 className='font-semibold'>Can I return a game?</h3>
              <p>Yes, we offer a 30-day return policy for all digital purchases</p>
            </li>
            <li className='bg-neutral-900 p-3 rounded-3xl shadow-2xl'>
              <h3 className='font-semibold'>Can I link the Steam account?</h3>
              <p>Yes, you can link your Steam account to access your games and friends list</p>
            </li>
            <li className='bg-neutral-900 p-3 rounded-3xl shadow-2xl'>
              <h3 className='font-semibold'>Should I buy a game here?</h3>
              <p>Yes, we offer a wide selection of games at competitive prices</p>
            </li>
            <li className='bg-neutral-900 p-3 rounded-3xl shadow-2xl'>
              <h3 className='font-semibold'>What if hackers try to hack my account?</h3>
              <p>We take account security seriously and implement measures to protect your information</p>
            </li>
            <li className='bg-neutral-900 p-3 rounded-3xl shadow-2xl'>
              <h3 className='font-semibold'>How I can sell my game?</h3>
              <p>You can sell your game by listing it on our <Link to='/create' className='text-blue-400'>Create Page</Link> and setting a price</p>
            </li>
          </ul>
        </div>

      <div className='w-full flex flex-col justify-center items-center'>
        <h1 data-aos = 'fade-up' className='text-4xl font-bold text-center mt-20 text-blue-400'>Our Team</h1>
        <div data-aos = 'fade-up' className='mt-10 flex justify-center items-center gap-10 mb-20 flex-wrap w-[90%]'>
            <div className='bg-neutral-900 rounded-3xl p-5 w-[250px] h-[370px] flex flex-col justify-around items-center gap-6 shadow-2xl hover:scale-105 duration-500'>
              <img src="https://cdn.vectorstock.com/i/500p/54/69/male-user-icon-vector-8865469.jpg" alt="" className='rounded-full h-[150px] w-[150px]'/>
              <h2 className='text-2xl font-bold'>Sulaymon</h2>
              <p className='text-center text-[10px]'>"I love gaming because it allows me to escape reality and immerse myself in different worlds."</p>
              <p className='text-center text-blue-500 font-bold'>Lead Developer</p>
            </div>
            <div className='bg-neutral-900 rounded-3xl p-5 w-[250px] h-[370px] flex flex-col justify-around items-center gap-6 shadow-2xl hover:scale-105 duration-500'>
              <img src="https://cdn.vectorstock.com/i/500p/54/69/male-user-icon-vector-8865469.jpg" alt="" className='rounded-full h-[150px] w-[150px]'/>
              <h2 className='text-2xl font-bold'>Azamat</h2>
              <p className='text-center text-[10px]'>"I love gaming because it allows me to express myself and connect with others."</p>
              <p className='text-center text-blue-500 font-bold'>Developer</p>
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