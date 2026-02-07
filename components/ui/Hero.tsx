"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Sparkles, Star, Menu, X } from "lucide-react"
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link"

const FallingStars = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    const stars: {
      x: number
      y: number
      size: number
      speed: number
      opacity: number
      tail: { x: number; y: number }[]
    }[] = []

    const createStars = () => {
      const maxStars = Math.floor(window.innerWidth / 35)

      if (stars.length < maxStars && Math.random() < 0.03) {
        const size = Math.random() * 2 + 1
        stars.push({
          x: Math.random() * canvas.width,
          y: 0,
          size,
          speed: Math.random() * 1 + 0.5,
          opacity: Math.random() * 0.8 + 0.2,
          tail: [],
        })
      }
    }

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      stars.forEach((star, index) => {
        star.y += star.speed

        star.tail.push({ x: star.x, y: star.y })
        if (star.tail.length > 5) {
          star.tail.shift()
        }

        if (star.tail.length > 1) {
          ctx.beginPath()
          ctx.moveTo(star.tail[0].x, star.tail[0].y)

          for (let i = 1; i < star.tail.length; i++) {
            ctx.lineTo(star.tail[i].x, star.tail[i].y)
          }

          ctx.strokeStyle = `rgba(0, 255, 89, ${star.opacity * 0.5})`
          ctx.lineWidth = star.size / 2
          ctx.stroke()
        }

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 255, 89, ${star.opacity})`
        ctx.fill()

        if (star.y > canvas.height) {
          stars.splice(index, 1)
        }
      })
    }

    const animate = () => {
      createStars()
      drawStars()
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-10" />
}

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hasHover, setHasHover] = useState(false)

  useEffect(() => {
    setHasHover(window.matchMedia("(hover: hover)").matches)

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    if (hasHover) {
      window.addEventListener("mousemove", updatePosition)
      return () => window.removeEventListener("mousemove", updatePosition)
    }
  }, [hasHover])

  if (!hasHover) return null

  return (
    <>
      <div
        className="fixed w-8 h-8 rounded-full border-2 border-[#00ff59] pointer-events-none transition-all duration-100 ease-out z-50"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      ></div>
      <div
        className="fixed w-2 h-2 bg-[#00ff59] rounded-full pointer-events-none transition-all duration-75 ease-out z-50"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      ></div>
    </>
  )
}

const avatars = [
"/Assets/client/11.png",
"/Assets/client/14.jpg",
"/Assets/client/22.png",
"/Assets/client/2.png",
"/Assets/client/34.jpg",
"/Assets/client/3.jpg",
"/Assets/client/20.png",
"/Assets/client/10.png",
"/Assets/client/28.png",
];
export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const words = [
    "Lead Generating",
    "Sales Boosting",
    "Conversion Focused",
    "High Converting",
    "Revenue Generating",
    "Lead Driving",
    "SEO Optimized",
    "Profit Boosting",
    "Business Growing",
    "Customer Attracting",
    "Results Driven",
    "Brand Enhancing",
    "Market Dominating",
    "Performance Optimized"
  ]

  const [, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [words.length])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <FallingStars />
      <MouseFollower />

      <nav className="fixed top-4 sm:top-6 left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-md bg-white/10 px-5 sm:px-6 py-3.5 sm:py-4 rounded-3xl w-[92%] sm:w-[85%] md:w-[75%] lg:w-[65%] max-w-5xl border-2 border-white/20 shadow-lg">
        <div className="flex items-center justify-between">
          <button
            className="md:hidden text-white p-1.5 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-5 w-5" />
          </button>

          <div className="hidden md:flex flex-1">
            <div className="flex items-center gap-6 lg:gap-10">
              <Link
                href="#Contact"
                className="text-white hover:text-[#00ff59] text-sm lg:text-base font-bold transition-colors whitespace-nowrap"
              >
                Contact Us
              </Link>
              <Link
                href="#Service"
                className="text-white hover:text-[#00ff59] text-sm lg:text-base font-bold transition-colors whitespace-nowrap"
              >
                Services
              </Link>
            </div>
          </div>

          <Link
            href="#"
            className="flex items-center gap-2 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-[#00ff59]" />
            <span className="text-white font-extrabold text-lg sm:text-xl lg:text-2xl">Maz</span>
          </Link>

          <div className="hidden md:flex flex-1 justify-end">
            <div className="flex items-center gap-6 lg:gap-8">
              <Link
                href="#Project"
                className="text-white hover:text-[#00ff59] text-sm lg:text-base font-bold transition-colors whitespace-nowrap"
              >
                Projects
              </Link>
              <Link
                href="#Reviews"
                className="text-white hover:text-[#00ff59] text-sm lg:text-base font-bold transition-colors whitespace-nowrap"
              >
                Reviews
              </Link>
              <Button
                size="sm"
                className="bg-[#00ff59] text-black hover:bg-[#00dd4f] font-bold shadow-lg hover:shadow-[0_0_20px_rgba(0,255,89,0.5)] transition-all duration-300 text-sm"
              >
                Book a Call
              </Button>
            </div>
          </div>
          <div className="w-8 md:hidden"></div>
        </div>

        {mobileMenuOpen && (
<div className="md:hidden fixed inset-0 top-0 left-0 right-0 z-[200] animate-in fade-in slide-in-from-top-5 duration-300">
  {/* Frosted glass background like top navbar */}
  <div className="absolute inset-0 bg-white/10 backdrop-blur-3xl border border-white/20 shadow-lg" />

  <div className="relative flex flex-col h-full px-8 py-10 z-10">
    {/* Close Button */}
    <button
      className="absolute top-3 right-6 text-white hover:text-[#39FF14] p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
      onClick={() => setMobileMenuOpen(false)}
      aria-label="Close menu"
    >
      <X className="h-6 w-6" />
    </button>

    {/* Navigation Links */}
    <div className="flex flex-col items-center justify-center gap-6 mt-16 text-center">
      {[
        { href: "#Project", label: "Projects" },
        { href: "#Service", label: "Services" },
        { href: "#Reviews", label: "Reviews" },
        { href: "#Contact", label: "Contact Us" },
      ].map((link, i) => (
        <Link
          key={i}
          href={link.href}
          className="relative text-white font-semibold text-[1.25rem] tracking-wide hover:text-[#39FF14] transition-all duration-300 pb-2 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-[#39FF14] hover:after:w-3/4 after:transition-all after:duration-300"
          onClick={() => setMobileMenuOpen(false)}
        >
          {link.label}
        </Link>
      ))}
    </div>

    {/* CTA Button */}
<div className="mt-auto pb-10 flex justify-center">
  <Button
    size="lg"
    className="relative bg-[#39FF14] text-black font-extrabold rounded-2xl px-12 py-6 text-lg shadow-[0_0_30px_rgba(57,255,20,0.5)] hover:shadow-[0_0_45px_rgba(57,255,20,0.8)] hover:scale-[1.03] transition-all duration-300"
    onClick={() => {
      setMobileMenuOpen(false);
      const bookingSection = document.getElementById("booking");
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: "smooth" });
      }
    }}
  >
    Book a Call
  </Button>
</div>


    {/* Bottom Glow Line */}
    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#39FF14]/60 to-transparent blur-[4px]" />
  </div>
</div>


      
        )}
      </nav>

      <main className="pt-24 sm:pt-28 md:pt-32 lg:pt-36 px-5 sm:px-6 md:px-8">
        <div className="mx-auto max-w-7xl relative">
          <div className="absolute -left-5 sm:-left-10 top-8 sm:top-16 md:top-20">
            <div className="w-48 h-48 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full bg-[#00ff59] opacity-15 blur-3xl"></div>
          </div>
          <div className="absolute -right-5 sm:-right-10 top-16 sm:top-32 md:top-40">
            <div className="w-32 h-32 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full bg-[#00ff59] opacity-10 blur-3xl"></div>
          </div>

          <div className="text-center space-y-6 sm:space-y-7 md:space-y-10 relative">
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-16 sm:w-24 md:w-32 h-px bg-gradient-to-r from-transparent via-[#00ff59] to-transparent transform rotate-45"></div>
              <div className="absolute bottom-1/4 right-1/4 w-16 sm:w-24 md:w-32 h-px bg-gradient-to-r from-transparent via-[#00ff59] to-transparent transform -rotate-45"></div>

              <Star className="absolute top-1/3 left-1/6 h-3 w-3 sm:h-5 sm:w-5 md:h-6 md:w-6 text-[#00ff59] animate-pulse" />
              <Star
                className="absolute bottom-1/3 right-1/6 h-2.5 w-2.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-[#00ff59] animate-pulse"
                fill="#00ff59"
              />

              <div className="w-2.5 h-2.5 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-[#00ff59] rounded-full absolute animate-pulse top-1/4 left-1/3 opacity-50"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-[#00ff59] rounded-full absolute animate-pulse left-1/4 top-3/4 opacity-50"></div>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-[#00ff59] rounded-full absolute animate-pulse right-1/4 bottom-1/4 opacity-50"></div>
            </div>

            <h1 className="text-[2.5rem] leading-[1.08] sm:text-5xl sm:leading-[1.1] md:text-6xl lg:text-7xl xl:text-8xl font-black max-w-[90%] sm:max-w-lg md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto relative z-10 text-white tracking-tight">
              {/* I Build{" "}
              <span
                key={words[index]}
                className="text-[#00ff59] inline-block transition-all duration-500 break-words"
              >
                {words[index]}
              </span>{" "} */}
               Turn Your Vision Into Scroll-Stopping Content
            </h1>

            <p className="text-gray-200 text-base sm:text-lg md:text-xl lg:text-1xl max-w-[85%] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto relative z-10 font-medium leading-relaxed">
 We help creators, brands, and agencies bring their ideas to life through powerful video editing,
modern web development, and captivating design
            </p>

         <div className="flex flex-col items-center justify-center pt-2 sm:pt-0 md:pt-0 relative z-10">
  <Button
    size="lg"
    className="relative w-[90%] sm:w-auto text-lg sm:text-lg md:text-xl py-7 sm:py-7 md:py-8 px-10 sm:px-10 md:px-12 text-black bg-[#00ff59] border-none rounded-xl sm:rounded-lg shadow-lg hover:shadow-[0_0_30px_rgba(0,255,89,0.6)] transition-all duration-300 ease-in-out hover:bg-[#00dd4f] active:translate-y-1 font-bold"
    onClick={() => {
      const bookingSection = document.getElementById("booking");
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: "smooth" });
      }
    }}
  >
    Get a Free Consultation
  </Button>
</div>

          </div>
        </div>
      </main>

<motion.div
  initial={{ y: 50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="flex flex-col items-center mb-12 mt-7 text-center px-4 sm:px-6"
>
  {/* Avatars */}
  <div className="flex -space-x-2 sm:-space-x-2 md:-space-x-3 mb-4">
    {avatars.map((avatar, index) => (
      <motion.div
        key={index}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
        className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full overflow-hidden 
                   border border-[#39FF14]/80 shadow-[0_0_10px_rgba(57,255,20,0.4)] 
                   hover:shadow-[0_0_20px_rgba(57,255,20,0.6)] transition-all duration-300 
                   bg-black/20 backdrop-blur-sm"
      >
        <Image
          src={avatar}
          alt={`Trusted user ${index + 1}`}
          className="w-full h-full object-contain"
        />
      </motion.div>
    ))}
  </div>

  {/* Stars & Text */}
  <div className="flex flex-wrap justify-center items-center gap-2 text-center">
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.3, delay: 0.8 + i * 0.05 }}
      >
        <Star
          size={18}
          fill="#FFD700"
          stroke="#FFD700"
          className="drop-shadow-[0_0_6px_rgba(255,215,0,0.7)]"
        />
      </motion.div>
    ))}

    <span className="text-gray-300 text-sm sm:text-base font-semibold tracking-wide">
      <span className="text-[#39FF14] font-extrabold">Trusted</span> by 1000+  Creators, businesses, & brands worldwide
    </span>
  </div>


  {/* Tagline */}
  <p className="mt-3 text-xs sm:text-sm md:text-base text-white font-medium max-w-xs sm:max-w-md">
    We help creators, {" "}
    <span className="text-[#39FF14] font-semibold">brands</span>,{" "}
    <span className="text-[#39FF14] font-semibold">agencies</span>,{" "}
    <span className="text-[#39FF14] font-semibold">businesses</span>,{" "} scale with high-quality 
    <span className="text-[#39FF14] font-semibold"> video editing</span>,{" "}
    <span className="text-[#39FF14] font-semibold">web development</span> {" "}
    <span className="text-white font-semibold">and
design solutions, delivered fast, clean, and stress free.
</span> 
  </p>
</motion.div>


  <div className="relative w-full mt-20 sm:mt-20 md:mt-24 z-30 ">

  {/* Strip 1 – Left ➜ Right */}
  <div className="absolute left-1/2 top-1/2 w-[120vw] -translate-x-1/2 -translate-y-1/2 rotate-[-12deg]">
    <div className="h-14 sm:h-14 md:h-16 lg:h-20 bg-[#39FF14] shadow-[0_0_30px_rgba(0,255,89,0.6)]">
      <div className="flex items-center h-full animate-[marquee-left_15s_linear_infinite]">
        <div className="flex items-center gap-10 whitespace-nowrap px-8">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="flex items-center gap-10">
              <span className="text-black font-black text-lg uppercase tracking-wider">Scroll stopping</span>
              <div className="w-3 h-3 bg-black rotate-45" />
              <span className="text-black font-black text-lg uppercase tracking-wider">High Quality Leads</span>
              <div className="w-3 h-3 bg-black rotate-45" />
              <span className="text-black font-black text-lg uppercase tracking-wider">Sales Growth</span>
              <div className="w-3 h-3 bg-black rotate-45" />
              <span className="text-black font-black text-lg uppercase tracking-wider">Website That sell</span>
              <div className="w-3 h-3 bg-black rotate-45" />

            </div>
          ))}
        </div>
      </div>
    </div>
  </div>

  {/* Strip 2 – Right ➜ Left */}
  <div className="absolute left-1/2 top-1/2 w-[120vw] -translate-x-1/2 -translate-y-1/2 rotate-[12deg]">
    <div className="h-14 sm:h-14 md:h-16 lg:h-20 bg-[#39FF14] shadow-[0_0_30px_rgba(0,255,89,0.6)]">
      <div className="flex items-center h-full animate-[marquee-right_15s_linear_infinite]">
        <div className="flex items-center gap-10 whitespace-nowrap px-8">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="flex items-center gap-10">
              <span className="text-black font-black text-lg uppercase tracking-wider">Higher Watch Time</span>
              <div className="w-3 h-3 bg-black rotate-45" />
              <span className="text-black font-black text-lg uppercase tracking-wider">More Views Fast</span>
              <div className="w-3 h-3 bg-black rotate-45" />
              <span className="text-black font-black text-lg uppercase tracking-wider">Click Magnet Thumbnail</span>
              <div className="w-3 h-3 bg-black rotate-45" />
               <div className="w-3 h-3 bg-black rotate-45" />
              <span className="text-black font-black text-lg uppercase tracking-wider">High Retention Cuts</span>
              <div className="w-3 h-3 bg-black rotate-45" />
              <span className="text-black font-black text-lg uppercase tracking-wider">Scroll stopping</span>
              <div className="w-3 h-3 bg-black rotate-45" />

            </div>
          ))}
        </div>
      </div>
    </div>
  </div>

</div>



<div className="relative w-full h-72 sm:h-80 md:h-96 lg:h-[15rem] overflow-hidden mt-6 sm:mt-8 md:mt-12 mb-16 sm:mb-20 md:mb-24">
  <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none">
    <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1400 400" preserveAspectRatio="xMidYMax slice">
      <defs>
        <linearGradient id="earthGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#39FF14', stopOpacity: 0 }} />
          <stop offset="20%" style={{ stopColor: '#39FF14', stopOpacity: 0.5 }} />
          <stop offset="50%" style={{ stopColor: '#39FF14', stopOpacity: 1 }} />
          <stop offset="80%" style={{ stopColor: '#39FF14', stopOpacity: 0.5 }} />
          <stop offset="100%" style={{ stopColor: '#39FF14', stopOpacity: 0 }} />
        </linearGradient>
        <filter id="earthGlow">
          <feGaussianBlur stdDeviation="20" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <path
        d="M -200 400 Q 700 0 1600 400"
        fill="none"
        stroke="url(#earthGradient)"
        strokeWidth="12"
        filter=""
      />
    </svg>
    {/* <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[100%] sm:w-[85%] md:w-[80%] h-44 sm:h-52 md:h-64 bg-gradient-to-t from-[#39FF14]/25 via-[#39FF14]/15 to-transparent blur-3xl"></div>
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[85%] sm:w-[70%] md:w-[60%] h-32 sm:h-40 md:h-48 bg-gradient-to-t from-[#39FF14]/35 via-[#39FF14]/20 to-transparent blur-2xl"></div> */}
  </div>
</div>


    </div>
  )
}
