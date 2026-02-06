"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function LogoSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth / 2);
    }
  }, []);

const companies = [
  { name: "Visionary", logo: "/Assets/client/17.png", height: 70, width: 140 },
  { name: "Buildora", logo: "/Assets/client/24.png", height: 70, width: 140 },
  { name: "Flowbit", logo: "/Assets/client/21.png", height: 70, width: 140 },
  { name: "Softify", logo: "/Assets/client/32.svg", height: 70, width: 140 },
  { name: "ClariTech", logo: "/Assets/client/30.png", height: 70, width: 140 },
  { name: "QuickDesk", logo: "/Assets/client/14.jpg", height: 70, width: 140 },
  { name: "BrightDesk", logo: "/Assets/client/20.png", height: 70, width: 140 },
  { name: "InnoSpark", logo: "/Assets/client/10.png", height: 70, width: 140 },
  { name: "SkyWorks", logo: "/Assets/client/15.png", height: 90, width: 180 },
  { name: "PixelForge", logo: "/Assets/client/1.png", height: 90, width: 180 },
  { name: "VisionHub", logo: "/Assets/client/34.jpg", height: 80, width: 160 },
  { name: "QuickLabs", logo: "/Assets/client/28.png", height: 70, width: 140 },
  { name: "Taskly", logo: "/Assets/client/8.jpg", height: 70, width: 140 },
  { name: "CodeNest", logo: "/Assets/client/35.png", height: 70, width: 140 },
  { name: "NextEra", logo: "/Assets/client/12.png", height: 80, width: 160 },
  { name: "BrightNest", logo: "/Assets/client/4.png", height: 70, width: 140 },
  { name: "DataHive", logo: "/Assets/client/5.png", height: 70, width: 140 },
  { name: "LaunchPad", logo: "/Assets/client/13.png", height: 80, width: 160 },
  { name: "CoreSpace", logo: "/Assets/client/27.png", height: 70, width: 140 },
  { name: "NexaSoft", logo: "/Assets/client/2.png", height: 100, width: 200 },
  { name: "CodeNest", logo: "/Assets/client/18.jpeg", height: 70, width: 140 },
  { name: "ZapCloud", logo: "/Assets/client/23.png", height: 70, width: 140 },
  { name: "CoreLabs", logo: "/Assets/client/11.png", height: 70, width: 140 },
  { name: "DataForge", logo: "/Assets/client/31.png", height: 70, width: 140 },
  { name: "BrightPath", logo: "/Assets/client/26.png", height: 70, width: 140 },
  { name: "SoftCrafters", logo: "/Assets/client/6.jpg", height: 80, width: 160 },
  { name: "Innovexa", logo: "/Assets/client/19.png", height: 100, width: 200 },
  { name: "HexaWorks", logo: "/Assets/client/33.png", height: 70, width: 140 },
  { name: "NextEra", logo: "/Assets/client/29.png", height: 80, width: 160 },
  { name: "Taskly", logo: "/Assets/client/22.png", height: 70, width: 140 },
  { name: "CloudLink", logo: "/Assets/client/3.jpg", height: 80, width: 180 },
  { name: "Flowbit", logo: "/Assets/client/9.png", height: 70, width: 140 },
  { name: "BrightShift", logo: "/Assets/client/16.png", height: 70, width: 140 },
  { name: "InnoCraft", logo: "/Assets/client/25.png", height: 80, width: 160 },
];



  return (
    <div className="w-full h-[200px] bg-black flex flex-col justify-center px-4 md:px-10 overflow-hidden ">
  <div className="mb-6 text-center">
    <h2 className="text-3xl md:text-5xl font-extrabold text-[#26ff00] mb-2 tracking-tight drop-shadow-[0_0_10px_#39FF14]">
      Our Valued Clients
    </h2>
    <p className="text-sm md:text-base text-gray-300 font-semibold">
      Proudly partnering with leading brands and innovators worldwide
    </p>
  </div>

      <div className="overflow-hidden">
        <motion.div
          ref={containerRef}
          className="flex gap-16 items-center"
          animate={{ x: [-width, 0] }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {[...companies, ...companies].map((company, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center h-24 w-40 md:h-28 md:w-48 transition-transform duration-300 hover:scale-105"
            >
              <div className="rounded-xl p-2 flex items-center justify-center w-full h-full  hover:shadow-[0_0_20px_#f97316] transition-all duration-300">
                <Image
                  src={company.logo || "/placeholder.svg"}
                  alt={`${company.name} logo`}
                  width={company.width}
                  height={company.height}
                  className="object-contain max-h-full max-w-full"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
