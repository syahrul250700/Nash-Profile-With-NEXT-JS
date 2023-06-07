import Image from "next/image";

const Skills = () => {
    return ( 
        
        <div id="skills" className="w-full lg:h-screen p-2 py-24 px-8"> 
        <title>Nash-Profile | Skills</title>
            <div className="max-w[1240px] mx-auto flex flex-col justify-center">
                <p className=" font-bold text-xl tracking-widest uppercase text-slate-400">My Skills</p>
                <h2 className=" py-4">What I Can Do</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"> 
                    
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 hover:shadow-gray-600 ease-in duration-500 ">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/../public/assets/skills/html.png" alt="" width="64" height="64" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>HTML</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 hover:shadow-gray-600 ease-in duration-500">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/../public/assets/skills/css.png" alt="" width="64" height="64" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>CSS</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 hover:shadow-gray-600 ease-in duration-500">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/../public/assets/skills/javascript.png" alt="" width="64" height="64" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Java Script</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 hover:shadow-gray-600 ease-in duration-500">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/../public/assets/skills/PHP.png" alt="" width="90" height="64" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>PHP</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 hover:shadow-gray-600 ease-in duration-500">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/../public/assets/skills/react.png" alt="" width="64" height="64" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>React JS</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 hover:shadow-gray-600 ease-in duration-500">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/../public/assets/skills/nextjs.png" alt="" width="64" height="64" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Next JS</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 hover:shadow-gray-600 ease-in duration-500">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/../public/assets/skills/node.png" alt="" width="64" height="64" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Node JS</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 hover:shadow-gray-600 ease-in duration-500">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/../public/assets/skills/tailwind.png" alt="" width="64" height="64" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Tailwind</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 hover:shadow-gray-600 ease-in duration-500">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/../public/assets/skills/firebase.png" alt="" width="64" height="64" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Fierbase</h3>
                            </div>
                        </div>
                    </div>
                    
                    
                    


                </div>
            </div>
        </div>
     );
}
 
export default Skills;