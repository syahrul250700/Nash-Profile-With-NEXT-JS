import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaGithub } from 'react-icons/fa'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <div id="home" className="w-full h-screen text-center">
    <title>Nash-Profile | Home</title>
    <div className="max-w[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
      <div>
      <p className=" tracking-widest text-gray-600">Let's Build Something Together</p>
      <h1>
        Hi, I'm <span className="text-slate-400">NASH</span>
      </h1>
      <h2 className="py-2">
      A Front-End Web Developer
      </h2>
      <p className="py-4">I’m focused on building responsive front-end web applications
            integrating back-end technologies.</p>
        <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
          <div className=" px-3 py-2 rounded-full shadow-lg shadow-gray-600 pt-3 cursor-pointer hover:scale-105 east-in duration-300">
            <FaLinkedinIn/>
          </div>
          <div className=" px-3 py-2 rounded-full shadow-lg shadow-gray-600 pt-3 cursor-pointer hover:scale-105 east-in duration-300">
            <FaFacebookF/>
          </div>
          <div className=" px-3 py-2 rounded-full shadow-lg shadow-gray-600 pt-3 cursor-pointer hover:scale-105 east-in duration-300">
            <FaInstagram/>
          </div>
          <div className=" px-3 py-2 rounded-full shadow-lg shadow-gray-600 pt-3 cursor-pointer hover:scale-105 east-in duration-300">
            <FaGithub/>
          </div>
        </div>
      </div>
    </div>
  </div>  
  
  )
}
