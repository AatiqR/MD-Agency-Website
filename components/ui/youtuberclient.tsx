"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const creators = [
  {
    name: "Lewis Howes",
    followers: "5M subscribers",
    image: "/Assets/Youtuberclient/1.jpg",
    link: "https://www.youtube.com/@lewishowes/videos", 
  },
  {
    name: "The Finest",
    followers: "7.50M subscribers",
    image: "/Assets/Youtuberclient/4.jpg",
    link: "https://youtube.com/@TheFinestX/videos",
  },
  {
    name: "Dr. Adam Walker",
    followers: "80K subscribers",
    image: "/Assets/Youtuberclient/3.jpg",
    link: "https://youtube.com/@closereadingpoetry/videos",
  },
  {
    name: "Codie Sanchez",
    followers: "1.86M subscribers",
    image: "/Assets/Youtuberclient/2.jpg",
    link: "https://youtube.com/@CodieSanchezCT/videos",
  },
  {
    name: "Deya",
    followers: "188K subscribers",
    image: "/Assets/Youtuberclient/5.jpg",
    link: "https://youtube.com/@MyNameIsDeya/videos",
  },
      {
    name: "Andrew James",
    followers: "300k subscribers",
    image: "/Assets/Youtuberclient/16.jpg",
    link: "https://www.youtube.com/@andrewjmes/videos",
  },
  {
    name: "Jared Henderson",
    followers: "612K subscribers",
    image: "/Assets/Youtuberclient/6.jpg",
    link: "https://youtube.com/@_jared/videos",
  },
  {
    name: "Daniel Pink",
    followers: "32K subscribers",
    image: "/Assets/Youtuberclient/7.jpg",
    link: "https://youtube.com/@danielpinktv/videos",
  },
   {
    name: "HP Walking Tours",
    followers: "210K subscribers",
    image: "/Assets/Youtuberclient/15.jpg",
    link: "https://www.youtube.com/@HPWalkingTours/videos",
  },
  {
    name: "The Ultimate Discovery",
    followers: "1.1M subscribers",
    image: "/Assets/Youtuberclient/8.jpg",
    link: "https://youtube.com/@ultimatediscovery/videos",
  },

  {
    name: "Mark Tilbury",
    followers: "6.6M subscribers",
    image: "/Assets/Youtuberclient/10.jpg",
    link: "https://youtube.com/@marktilbury/videos",
  },
  {
    name: "Nour Art",
    followers: "230k subscribers",
    image: "/Assets/Youtuberclient/17.jpg",
    link: "https://www.youtube.com/@NourArt2/videos",
  },
   {
    name: "Steve | Call to Leap",
    followers: "470K subscribers",
    image: "/Assets/Youtuberclient/11.jpg",
    link: "https://youtube.com/@CalltoLeap/videos",
  },
    {
    name: "Evan Edinger",
    followers: "1.2M subscribers",
    image: "/Assets/Youtuberclient/14.jpg",
    link: "https://www.youtube.com/@evan/videos",
  },
   
    {
    name: "Nischa",
    followers: "2M subscribers",
    image: "/Assets/Youtuberclient/12.jpg",
    link: "https://youtube.com/@nischa/videos",
  },
    {
    name: "COME ALONG",
    followers: "2M subscribers",
    image: "/Assets/Youtuberclient/9.jpg",
    link: "https://youtube.com/@COMEALONG/videos",
  },

     {
    name: "Sunny Lenarduzzi",
    followers: "700K subscribers",
    image: "/Assets/Youtuberclient/13.jpg",
    link: "https://youtube.com/@SunnyLenarduzzi/videos",
  },



   
];

export default function CreatorSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth / 2);
    }
  }, []);

  return (
    <div className="w-full h-[220px] bg-black flex flex-col justify-center px-4 md:px-12 overflow-hidden rounded-3xl">
      <div className="mb-6 text-center">
        <p className="text-base md:text-lg text-white font-bold">
          Proud to showcase the creators who trusted me to elevate their content.
        </p>
      </div>

      <div className="overflow-hidden">
        <motion.div
          ref={containerRef}
          className="flex gap-10 items-center"
          animate={{
            x: [-width, 0],
          }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 50,
              ease: "linear",
            },
          }}
        >
          {[...creators, ...creators].map((creator, index) => (
            <a
              key={index}
              href={creator.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center gap-4 bg-neutral-900 p-3 rounded-2xl hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              <Image
                src={creator.image}
                alt={creator.name}
                width={80}
                height={80}
                className="rounded-full object-cover border-2 border-green-500"
              />
              <div>
                <p className="text-white font-semibold text-2xl">{creator.name}</p>
                <p className="text-green-400 font-bold text-1xl drop-shadow-[0_0_10px_#39FF14] animate-pulse">
                  {creator.followers}
                </p>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
