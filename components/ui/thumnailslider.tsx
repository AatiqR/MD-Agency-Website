"use client"

const portfolioImages = [
  { id: 1, src: "/Assets/Thumbnail/t1.jpg", alt: "Viral Editing Style" },
  { id: 2, src: "/Assets/Thumbnail/t2.jpg", alt: "Go Viral Everytime" },
  { id: 3, src: "/Assets/Thumbnail/t3.jpg", alt: "Angel vs Devil" },
  { id: 4, src: "/Assets/Thumbnail/t4.jpg", alt: "College vs Dropout" },
  { id: 5, src: "/Assets/Thumbnail/t5.jpg", alt: "CapCut Master" },
  { id: 6, src: "/Assets/Thumbnail/t6.jpg", alt: "Neon Sign Effect" },
];

const FloatingParticles = () => {
  const particles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 10,
    duration: Math.random() * 8 + 12,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full animate-float-particle-slow"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            backgroundColor: "rgba(0, 255, 89, 0.4)",
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            boxShadow: `0 0 ${p.size * 4}px rgba(0, 255, 89, 0.3)`,
          }}
        />
      ))}
    </div>
  );
};

const MarqueeRow = ({ direction }: { direction: "left" | "right" }) => {
  const animationClass = direction === "left" 
    ? "animate-marquee-left-slow"
    : "animate-marquee-right-slow";

  return (
    <div className="relative overflow-hidden py-1.5">
      <div className={`flex gap-3 ${animationClass}`} style={{ width: "fit-content" }}>
        {[...portfolioImages, ...portfolioImages].map((image, index) => (
          <div
            key={`${image.id}-${index}`}
            className="relative flex-shrink-0 w-52 sm:w-60 md:w-68 lg:w-76 aspect-video rounded-xl overflow-hidden"
            style={{
              boxShadow: "0 12px 40px -12px rgba(0, 255, 89, 0.15)",
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const FeaturedWork = () => {
  return (
    <section
      className="relative w-full py-16 md:py-20 overflow-hidden"
      style={{ backgroundColor: "#000000" }}
    >
      {/* Ambient glow near content */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0, 255, 89, 0.04) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Floating particles */}
      <FloatingParticles />

      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 md:mb-16">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4 uppercase"
            style={{
              color: "#ffffff",
              textShadow: "0 0 80px rgba(0, 255, 89, 0.5), 0 0 120px rgba(0, 255, 89, 0.3), 0 0 160px rgba(0, 255, 89, 0.2)",
              letterSpacing: "-0.02em",
            }}
          >
            Featured Work
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base md:text-lg max-w-md mx-auto mb-6 font-light tracking-wide">
            Check out some of the projects we have done for our clients.
          </p>
        </div>

        <div className="space-y-3 md:space-y-4 mb-12 md:mb-16">
          <MarqueeRow direction="left" />
          <MarqueeRow direction="right" />
          <MarqueeRow direction="left" />
        </div>

        <div className="flex justify-center px-4">
          <button
            className="font-medium text-sm sm:text-base px-8 sm:px-10 py-3.5 rounded-full transition-all duration-300 ease-out"
            style={{
              backgroundColor: "#00ff59",
              color: "#000000",
              boxShadow: "0 0 50px -5px rgba(0, 255, 89, 0.4), 0 0 80px -10px rgba(0, 255, 89, 0.25)",
            }}
          >
            <span className="flex items-center gap-2 font-semibold">
              Book a Call
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
