import React from "react";
import Link from "next/link";
import Image from "next/image";
const PortfolioItems = ({title, backgroundImg, projectType, projectUrl}) => {
    return ( 
        <div className="relative flex items-center justify-center h-auto w-full shadow-slate-300 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5d86f744] to-[#6792f0]">
                        <Image className="rounded-xl group-hover:opacity-5" src={backgroundImg} alt="/"/>
                        <div className="hidden group-hover:block absolute  left-[50%] translate-x-[-50%] text-center">
                            <h3 className="text-2xl text-white tracking-wider text-center">{title}</h3>
                            <p className=" pb-4 pt-2 text-white text-center">{projectType} Project</p>
                            <Link href={projectUrl}> 
                                <p className="text-center py-3 rounded-lg bg-slate-100 text-gray-600 font-bold text-lg cursor-pointer">More Info</p>
                            </Link>
                        </div>
                    </div>
                    
    )
                }

export default PortfolioItems;