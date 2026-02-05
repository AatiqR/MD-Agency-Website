"use client"

import Image from "next/image"

interface Testimonial {
  name: string
  position: string
  quote: string
  initial: string
  image?: string // Optional image URL
}

export default function TestimonialSection() {
  // CSS animations defined inline
  const animationStyles = `
    @keyframes marquee-vertical {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(calc(-100% - var(--gap)));
      }
    }

    @keyframes marquee-vertical-reverse {
      0% {
        transform: translateY(calc(100% + var(--gap)));
      }
      100% {
        transform: translateY(0);
      }
    }

    .animate-marquee-vertical {
      animation: marquee-vertical var(--duration) linear infinite;
    }

    .animate-marquee-vertical-reverse {
      animation: marquee-vertical-reverse var(--duration) linear infinite;
    }
  `

  const firstColumnTestimonials: Testimonial[] = [
    {
      name: "James Walker",
      position: "Founder, Tech Solutions",
      quote:
        "Maz's expertise in web development transformed our online presence. The website is fast, responsive, and visually stunning!",
      initial: "J",
      image: "/Assets/Reviews/user1.jpeg",
    },
    {
      name: "Sophia Martinez",
      position: "CEO, Digital Wave",
      quote:
        "Maz delivered an outstanding website. The UI/UX is flawless, and our customers love the seamless experience.",
      initial: "S",
      image: "/Assets/Reviews/user2.png",
    },
    {
      name: "Liam Anderson",
      position: "Freelancer",
      quote:
        "My portfolio website turned out exactly how I wanted. Maz’s skills in React and Next.js are top-notch!",
      initial: "L",
      image: "/Assets/Reviews/user3.jpeg",
    },
    {
      name: "Emma Johansson",
      position: "Founder, Creative Minds",
      quote:
        "Working with Maz was a pleasure. He understood our vision and delivered a beautiful, functional website on time!",
      initial: "E",
      image: "/Assets/Reviews/user4.jpeg",
    },
    {
      name: "Noah Williams",
      position: "Marketing Head, Visionary Media",
      quote:
        "Maz built a lightning-fast, SEO-friendly website for us. His expertise in modern web technologies is impressive!",
      initial: "N",
      image: "/Assets/Reviews/user5.jpeg",
    },
    {
      name: "Olivia Brown",
      position: "Owner, Art Boutique",
      quote:
        "Maz delivered beyond our expectations! Our e-commerce store now runs smoothly and looks stunning.",
      initial: "O",
      image: "/Assets/Reviews/user6.jpeg",
    },
    {
      name: "Ethan Carter",
      position: "Founder, CodeNest",
      quote:
        "From UI design to backend logic, Maz nailed every aspect of our website. Highly recommended!",
      initial: "E",
      image: "/Assets/Reviews/user1.jpeg",
    },
    {
      name: "Mia Schmidt",
      position: "Blogger & Influencer",
      quote:
        "My blog's performance and aesthetics improved drastically thanks to Maz’s incredible web development skills!",
      initial: "M",
      image: "/Assets/Reviews/user10.jpeg",
    },
    {
      name: "Benjamin Hughes",
      position: "CEO, InnovateTech",
      quote:
        "Maz is an absolute professional. He transformed our outdated website into a sleek, modern, and fast platform.",
      initial: "B",
      image: "/Assets/Reviews/user9.png",
    },
    {
      name: "Charlotte Dupont",
      position: "Founder, Style & Trends",
      quote:
        "Thanks to Maz, my fashion website is now more engaging and user-friendly. His attention to detail is remarkable!",
      initial: "C",
      image: "/Assets/Reviews/user4.jpeg",
    }
];
const secondColumnTestimonials: Testimonial[] = [
  {
    name: "Jia smith",
    position: "Fitness Coach, StrengthPro",
    quote:
      "The website design is top-notch! My online coaching platform now attracts more clients, and the user experience is seamless.",
    initial: "J",
    image: "/Assets/Reviews2/u1.jpeg",
  },
  {
    name: "Michael Russo",
    position: "Gym Owner, Iron Core Fitness",
    quote:
      "Our gym membership sign-ups doubled after the website redesign. The layout and navigation are super intuitive.",
    initial: "M",
    image: "/Assets/Reviews2/u2.jpeg",
  },
  {
    name: "Robert Allen",
    position: "Dog Trainer, Paws Academy",
    quote:
      "I’m extremely satisfied! The booking system for my dog training sessions works flawlessly, making my work so much easier.",
    initial: "R",
    image: "/Assets/Reviews2/u3.png",
  },
  {
    name: "lissa ben",
    position: "Strength Coach, FitZone",
    quote:
      "The new design is modern, sleek, and professional. My online fitness courses have gained more traction than ever before!",
    initial: "C",
    image: "/Assets/Reviews2/u4.jpeg",
  },
  {
    name: "lilly Murphy",
    position: "Personal Trainer, PowerHouse Training",
    quote:
      "The responsive design ensures my fitness programs are easily accessible on all devices. I highly recommend this service!",
    initial: "D",
    image: "/Assets/Reviews2/u5.jpeg",
  },
  {
    name: "Ryan Parker",
    position: "Gym Owner, Elite Fitness",
    quote:
      "The website is fast, visually appealing, and easy to use. My clients love the new online class scheduling system!",
    initial: "R",
    image: "/Assets/Reviews2/u6.png",
  },
  {
    name: "Tom Williams",
    position: "Dog Behaviorist, SmartPaws",
    quote:
      "Having a well-structured website has boosted my credibility as a professional dog trainer. Clients now find me effortlessly!",
    initial: "T",
    image: "/Assets/Reviews2/u7.jpeg",
  },
  {
    name: "Ethan Collins",
    position: "CrossFit Coach, Beast Mode Training",
    quote:
      "Amazing service! The modern UI and seamless experience have taken my online fitness coaching to the next level.",
    initial: "E",
    image: "/Assets/Reviews2/u8.jpeg",
  },
  {
    name: "Matt Roberts",
    position: "Dog Trainer, Happy Tails Academy",
    quote:
      "Thanks to the professional website, I now have more dog training clients than ever before. Booking sessions is now hassle-free.",
    initial: "M",
    image: "/Assets/Reviews2/u9.jpeg",
  },
  {
    name: "Jason Brown",
    position: "Athletic Trainer, Pro Performance",
    quote:
      "The website's sleek design and smooth functionality have significantly improved client engagement. Highly satisfied!",
    initial: "J",
    image: "/Assets/Reviews2/u10.png",
  },
];
const thirdColumnTestimonials: Testimonial[] = [
  {
    name: "Dr. Emma Carter",
    position: "Dentist, BrightSmile Dental",
    quote:
      "The new website design has streamlined appointment bookings for my dental clinic. Patients find it much easier to schedule visits now!",
    initial: "E",
    image: "/Assets/Reviews3/u1.jpeg",
  },
  {
    name: "Dr. Alex Robinson",
    position: "Physician, HealthFirst Clinic",
    quote:
      "An outstanding platform! My medical practice now has a professional and user-friendly interface, making patient management smoother.",
    initial: "A",
    image: "/Assets/Reviews3/u2.png",
  },
  {
    name: "David Miller",
    position: "CEO, DriveEasy Car Dealership",
    quote:
      "Sales have skyrocketed since launching our sleek, modern website. Customers love the easy navigation and car browsing experience.",
    initial: "D",
    image: "/Assets/Reviews3/u3.jpeg",
  },
  {
    name: "Sophia Reynolds",
    position: "Real Estate Agent, HomeHorizon Realty",
    quote:
      "The property listings on my website now attract more potential buyers. The intuitive design makes house hunting a breeze!",
    initial: "S",
    image: "/Assets/Reviews3/u4.jpeg",
  },
  {
    name: "Luca Fernández",
    position: "Entrepreneur, Global Ventures",
    quote:
      "As an international business owner, I needed a multilingual and visually appealing website. This service delivered beyond expectations!",
    initial: "L",
    image: "/Assets/Reviews3/u5.jpeg",
  },
];


  return (
    <>
      {/* Include the animation styles */}
      <style jsx global>
        {animationStyles}
      </style>

      <div id="Reviews" className="flex flex-col my-24 bg-[#080808] text-white">
        <h1 className="text-2xl md:text-4xl lg:text-5xl mx-auto font-bold text-center mb-10">
          What people are <span className="text-[#00ff59]">saying </span>about us.
        </h1>
        <div className="relative flex h-[500px] max-w-5xl mx-auto flex-row items-center justify-center overflow-hidden rounded-lg">
          {/* First column - Top to Bottom */}
          <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-col [--duration:40s] px-4">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical flex-col group-hover:[animation-play-state:paused]">
              {firstColumnTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`col1-${index}`} testimonial={testimonial} />
              ))}
            </div>
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical flex-col group-hover:[animation-play-state:paused]">
              {firstColumnTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`col1-repeat1-${index}`} testimonial={testimonial} />
              ))}
            </div>
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical flex-col group-hover:[animation-play-state:paused]">
              {firstColumnTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`col1-repeat2-${index}`} testimonial={testimonial} />
              ))}
            </div>
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical flex-col group-hover:[animation-play-state:paused]">
              {firstColumnTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`col1-repeat3-${index}`} testimonial={testimonial} />
              ))}
            </div>
          </div>

          {/* Second column - Bottom to Top */}
          <div className="group overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-col [--duration:40s] px-4 hidden md:flex">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical-reverse flex-col group-hover:[animation-play-state:paused]">
              {secondColumnTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`col2-${index}`} testimonial={testimonial} />
              ))}
            </div>
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical-reverse flex-col group-hover:[animation-play-state:paused]">
              {secondColumnTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`col2-repeat1-${index}`} testimonial={testimonial} />
              ))}
            </div>
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical-reverse flex-col group-hover:[animation-play-state:paused]">
              {secondColumnTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`col2-repeat2-${index}`} testimonial={testimonial} />
              ))}
            </div>
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical-reverse flex-col group-hover:[animation-play-state:paused]">
              {secondColumnTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`col2-repeat3-${index}`} testimonial={testimonial} />
              ))}
            </div>
          </div>

          {/* Third column - Bottom to Top */}
          <div className="group overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-col [--duration:40s] px-4 hidden lg:flex">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical-reverse flex-col group-hover:[animation-play-state:paused]">
              {thirdColumnTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`col3-${index}`} testimonial={testimonial} />
              ))}
            </div>
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical-reverse flex-col group-hover:[animation-play-state:paused]">
              {thirdColumnTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`col3-repeat1-${index}`} testimonial={testimonial} />
              ))}
            </div>
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical-reverse flex-col group-hover:[animation-play-state:paused]">
              {thirdColumnTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`col3-repeat2-${index}`} testimonial={testimonial} />
              ))}
            </div>
            
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical-reverse flex-col group-hover:[animation-play-state:paused]">
              {thirdColumnTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`col3-repeat3-${index}`} testimonial={testimonial} />
              ))}
            </div>
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-vertical-reverse flex-col group-hover:[animation-play-state:paused]">
              {thirdColumnTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`col3-repeat5-${index}`} testimonial={testimonial} />
              ))}
            </div>
          </div>

          {/* Gradient overlays */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-[#0a0a0a]"></div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0a0a0a]"></div>
        </div>
      </div>
    </>
  )
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="relative cursor-pointer overflow-hidden rounded-xl border p-4 mb-4 bg-[#0d0d0d] border-white/10 hover:bg-[#1a1a1a] transition-colors duration-300">
      <div className="flex flex-row items-center gap-2">
        <div className="relative flex shrink-0 overflow-hidden rounded-full h-10 w-10">
          {testimonial.image ? (
            // Method 1: Using fill property (good for unknown dimensions)
            <Image
              src={testimonial.image || "/placeholder.svg"}
              alt={`${testimonial.name}'s profile picture`}
              fill
              sizes="40px"
              className="object-cover"
              priority={false}
              quality={85}
            />
          ) : (
            <span className="flex h-full w-full items-center justify-center rounded-full bg-[#262626] text-white">
              {testimonial.initial}
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">{testimonial.name}</figcaption>
          <p className="text-xs font-medium text-white/60">{testimonial.position}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-white/80">{testimonial.quote}</blockquote>
    </figure>
  )
}

