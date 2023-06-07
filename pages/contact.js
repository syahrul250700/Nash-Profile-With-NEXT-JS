import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import{FaLinkedinIn, FaFacebookF, FaInstagram, FaGithub} from 'react-icons/fa';
import{HiOutlineChevronDoubleUp} from 'react-icons/hi';

const Contact = () => {
    return ( 
    <div id="contact" className="w-full lg:h-screen">
        <title>Nash-Profile | Contact</title>
            <div className="max-w[1240px] m-auto px-8 py-24 w-full">
                <p className="font-bold text-xl tracking-widest uppercase text-slate-400">Contact</p>
                <h2 className="py-4">Get In Touch</h2>
                <div className="grid lg:grid-cols-5 gap-x-20">
{/* Left */}
<div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-800 rounded-xl p-4">
    <div className="lg:p-4 h-full">
        <div>
            <Image className="rounded-xl hover:scale-105 ease-in duration-300" src="/../public/assets/contact.jpg" alt="/" width="400" height="400"/>
        </div>
        <div>
            <h2 className="py-2">Name Here</h2>
            <p>Front End Developer</p>
            <p className="py-4">I am available for freelance or full-time positions. Contact me and let&apos;s talk.</p>
        </div>
        <div>
            <p className="uppercase pt-3">Connect With Me</p>
            <div className="flex items-center justify-between py-4">
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

{/* Right */}
                <div className="col-span-3 w-full h-full shadow-xl shadow-gray-800 rounded-xl lg:p-4">
                    <div className="py-4 px-4">  
                        <form>
                            <div className="grid md:grid-cols-2 gap-4 min-w-full py-2">
                                <div className="flex flex-col">
                                    <label className="uppercase text-sm py-2">Name</label>
                                    <input className="border-2 rounded-lg pt-3 flex border-gray-800" type="text"/>
                                </div>
                                <div className="flex flex-col">
                                    <label className="uppercase text-sm py-2">Phone Number</label>
                                    <input className="border-2 rounded-lg pt-3 flex border-gray-800" type="text"/>
                                </div>
                            </div>
                            <div className="flex flex-col py-2">
                                <label className="uppercase text-sm py-2">Email</label>
                                <input className="border-2 rounded-lg pt-3 flex border-gray-800" type="email"/>
                            </div>
                            <div className="flex flex-col py-2">
                                <label className="uppercase text-sm py-2">Subject</label>
                                <input className="border-2 rounded-lg pt-3 flex border-gray-800" type="text"/>
                            </div>
                            <div className="flex flex-col py-2">
                                <label className="uppercase text-sm py-2">Message</label>
                                <textarea className="border-2 rounded-lg pt-3 flex border-gray-800" rows="5" type="text"/>
                            </div>
                            <button className=" w-full px-4 py-2 mt-4 rounded-full bg-gradient-to-tr from-blue-600 to-purple-800 hover:from-orange-500 hover:to-red-600 transform-duration-1000">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
                {/* <div>
                    <Link href="/" >
                        <div>
                            <HiOutlineChevronDoubleUp />
                        </div>
                    </Link>
                </div> */}
        </div>
    </div> 
    );
}
 
export default Contact;