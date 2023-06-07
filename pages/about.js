import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";

const About = () => {
    return (
        <div id="about" className="w-full md:h-screen p-2 flex py-24">
            <title>Nash-Profile | About</title>
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <p className="font-bold text-xl tracking-widest uppercase text-slate-400">About</p>
                    <h2 className="py-4">Syahrul Aenaeni Hanas</h2>
                    <p className="py-2 text-justify">
                    I specialize in building mobile responsive front-end UI applications
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript, and
            React, I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
                    </p>
                    <p className="py-2 text-justify">
                    I started web developement in 2013 managing multiple e-commerce
            websites on CMS platforms such as WordPress, BigCommerce, and
            Shopify. I have experience working directly with clients and taking
            mock wireframes all the way to deployed applications. In my spare
            time I run Code Commerce, a Youtube channel where I teach web
            developement and various front-end technologies.
                    </p>
                </div>
                <div className="w-full h-auto m-auto shadow-slate-500 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-500">
                    <Image className="rounded-xl" src="/../public/assets/me.jpg" width="500" height="500"/>
                </div>
            </div>
        </div>
    );
}
 
export default About;

{/* <Link href="/"><button className="px-4 py-2 rounded-full bg-gradient-to-tr from-blue-600 to-purple-800 hover:from-orange-500 hover:to-red-600 transform-duration-1000">Back home</button></Link> */}