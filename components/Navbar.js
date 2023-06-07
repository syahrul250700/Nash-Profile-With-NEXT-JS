import Image from "next/image";
import Link from "next/link";
import React, {useState, useEffect} from "react";
import{AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import{FaLinkedinIn, FaFacebookF, FaInstagram, FaGithub} from 'react-icons/fa';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
    useEffect(() => {
    const handlerShadow = () => {
        if(window.scrollY >= 90){
            setShadow(true)
        }else{
            setShadow(false)
        }
    }
    window.addEventListener('scroll', handlerShadow)
    }, [])
    return ( 
<div className={shadow ? "fixed w-full h-20 shadow-xl z-[100]" : "fixed w-full h-20 z-[100]"}>
    <nav className="flex text-current justify-between items-center w-full h-20 bg-zinc-950 px-8 2xl:px-16 text-white font-semibold ">
        <div className="logo text-xl">
            <Link href="/">
                <Image src="/../public/assets/navLogo.png" alt="/" width='50' height='20'/>
            </Link>
        </div>
        <div className=" hidden md:flex ml-auto sm:ml-auto">
            <Link className="gap-6 hover:border-b text-xl px-6" href="/">Home</Link>
            <Link className="gap-6 hover:border-b text-xl px-6" href="/about">About</Link>
            <Link className="gap-6 hover:border-b text-xl px-6" href="/skills">Skills</Link>
            <Link className="gap-6 hover:border-b text-xl px-6" href="/portfolio">Portfolio</Link>
            <Link className="gap-6 hover:border-b text-xl px-6" href="/contact">Contact</Link>
        </div>
        <div onClick={handleNav} className="md:hidden cursor-pointer ml-auto">
        <AiOutlineMenu size={25}/>
        </div>

        <div className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-slate-950/75" : ""}>
            <div className={nav 
                ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-zinc-900 p-10 ease-in duration-500" 
                : "fixed left-[-100%] top-0 p-10 ease-in duration-300"}>
                <div className="flex w-full items-center justify-between">
                    <Image src="/../public/assets/navLogo.png" alt="" width='50' height='20'/>
                    <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer">
                        <AiOutlineClose/>
                    </div>
                </div>
                <div className="border-b border-gray-600 my-4 " >
                    <p className="w-[85%] md:w-[90%] py-4">Let's Bulid something together</p>
                </div>
                    <div className="py-2 flex-col">
                        <ul className="uppercase">
                        <Link className="text-sm " href="/">
                            <li onClick={()=> setNav(false)} className="py-4">Home</li>
                        </Link>
                        <Link className="text-sm" href="/about">
                            <li onClick={()=> setNav(false)} className="py-4">About</li>
                        </Link>
                        <Link className="text-sm" href="/skills">
                            <li onClick={()=> setNav(false)} className="py-4">Skill</li>
                        </Link>
                        <Link className="text-sm" href="/portfolio">
                            <li onClick={()=> setNav(false)} className="py-4">Portfolio</li>
                        </Link>
                        <Link className="text-sm" href="/contact">
                            <li onClick={()=> setNav(false)} className="py-4">Contact</li>
                        </Link>
                        </ul>
                        <div className="pt-10">
                            <p className="uppercase tracking-widest text-gray-600">Let's Connect</p>
                            <div className=" flex items-center justify-between my-4 w-full sm:w-[90%]">
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
        </div>
    </nav>
</div> ); 
}
 
export default Navbar;