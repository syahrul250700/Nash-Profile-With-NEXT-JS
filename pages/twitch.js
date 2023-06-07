import React from "react";
import Image from "next/image";
import Twitch from "../public/assets/projects/twitch.jpg";
import { RiRadioButtonFill } from 'react-icons/ri';




const twitch = () => {
    return ( 
        <div className="w-full">
            <title>Nash-Profile | Twitch</title>
            <div className="w-screen h-[50vh] lg:h-[60vh] relative">
            <div className="absolute top-0 left-0 w-full h-[50vh] lg:h-[60vh] bg-black/80 z-10"/>
                <Image 	fill={true} src={Twitch} style={{objectFit: "cover"}} className="absolute z-1" alt="/"/> 
                <div className="p-6 bottom-24 absolute top-[70%] max-w[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10">
                <h2 className="py-2">Twitch</h2>
                <h3>React JS | Tailwind | Firebase</h3>
                </div>
           </div>

            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
                <div className="col-span-4">
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>This app was built using React JS and is hosted on Firebase. Users
                    are able to search properties based on an Address, City, or ZIP code
                    to retrieve a list of active properties currently for sale. You will
                    be able to view property information as well as the specific
                    location of the property integrated with the Google Maps API. User
                    authentication is available so you can signup and signin to your
                    account with an email address in order to save your favorite
                    properties. This is made possible with Zillow API.
                    </p>
                    <button className="px-8 py-2 mt-4 mr-5">Demo</button>
                    <button className="px-8 py-2 mt-4">Code</button>
                </div>
                <div className="col-span-4 md:col-span-1 shadow-xl shadow-slate-400 rounded-xl py-4">
                    <div className="p-2">
                        <p className=" text-center font-bold pb-2">Technology</p>
                            <div className="grid grid-cols-3 md:grid-cols-1">
                                <p className="py-2 flex items-center"><RiRadioButtonFill className="pr-1" /> React JS</p>
                                <p className="py-2 flex items-center"><RiRadioButtonFill className="pr-1" /> Javascript</p>
                                <p className="py-2 flex items-center"><RiRadioButtonFill className="pr-1" /> Tailwind</p>
                                <p className="py-2 flex items-center"><RiRadioButtonFill className="pr-1" /> Firebase</p>
                                <p className="py-2 flex items-center"><RiRadioButtonFill className="pr-1" /> Google API</p>
                                <p className="py-2 flex items-center"><RiRadioButtonFill className="pr-1" /> Zillow API</p>
                            </div>
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default twitch; 