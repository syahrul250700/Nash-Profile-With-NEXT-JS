import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";
import Twitch from "../public/assets/projects/twitch.jpg";
import Netflix from "../public/assets/projects/netflix.jpg"
import Link from "next/link";
import PortfolioItems from "@/components/Portfolio-Items";

const Portfolio = () => {
    return ( 
        <div id="portfolio" className="w-full">
            <title>Nash-Profile | Portfolio</title>
            <div className="max-w-[1240px] mx-auto px-0 py-24">
                <p className=" font-bold text-xl tracking-widest uppercase text-slate-400">My Portfolio</p>
                <h2 className="py-4">What I Have Build</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <PortfolioItems
                        title="Twitch browse"
                        backgroundImg={Twitch}
                        projectType="React JS"
                        projectUrl="/twitch"
                    />
                    <PortfolioItems
                        title="Netflix Web"
                        backgroundImg={Netflix}
                        projectType="Next JS"
                        projectUrl="/netflix"
                    />
                </div>
            </div>
        </div>
     );
}
 
export default Portfolio;