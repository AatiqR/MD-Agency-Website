import Image from "next/image"; // Correct import statement
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EcommerceLandingPage() {
  return (
  <div className="min-h-screen w-full rounded-4xl bg-gray-50">
{/* 1st */}
<div className="container mx-auto px-6 py-10 md:py-16">
    <h1 className="text-6xl md:text-5xl font-extrabold text-[#1A2238] leading-tight tracking-tight text-center">
      <span className="text-[#000000]">Case Studies</span>
    </h1>
  {/* Title */}

  <div className="text-center mb-12 mt-9">
    <h2 className="text-3xl md:text-5xl font-extrabold text-[#1A2238] leading-tight tracking-tight">
      <span className="text-[#ffa200]">Padra Clinics</span>
      <br />
      Transforming Hair Transplant Consultations Online
    </h2>
  </div>

  {/* Grid layout */}
  <div className="grid gap-10 md:grid-cols-2 md:gap-16 items-start">
    {/* Left side with mockup */}
    <div className="h-[220px] md:h-[380px] rounded-4xl overflow-hidden bg-transparent">
      <Image
        src="/Assets/project/PADRA.gif"
        width={600}
        height={380}
        alt="Padra Clinic Website Preview"
        className="w-full h-full object-cover rounded-5xl transition-transform duration-300 hover:scale-110"
        priority
        unoptimized
      />
    </div>

    {/* Right side with content */}
    <div className="space-y-1">
      {/* Intro */}
      <p className="text md:text-xl text-gray-700 leading-relaxed">
        With branches across <span className="font-semibold">5 countries</span>, Padra is a global
        leader in hair transplant clinics. They approached us to modernize their digital
        presence and build a platform that inspires trust while driving more patients bookings and get more leads .
      </p>

      {/* Case Study Sections */}
      <div className="space-y-1">
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-[#1A2238]">⚡ The Challenge</h3>
          <p className="text-gray-700 leading-relaxed">
            Their old website didn’t match their premium brand, lacked online booking, multilingual
            support, and trust-building elements—leading to missed opportunities.
          </p>
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-bold text-[#1A2238]">💡 The Solution</h3>
          <p className="text-gray-700 leading-relaxed">
            We built a <span className="font-semibold">sleek, multilingual, mobile-first website</span>
            with booking, testimonials, service showcases, and credibility-focused design.
          </p>
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-bold text-[#1A2238]">🚀 The Results</h3>
          <p className="text-[#16a34a] font-semibold leading-relaxed">
            ✅ +35% increase in online consultations <br />
            ✅ Boosted brand presence across 5 countries <br />
            ✅ Improved client trust with testimonials & case studies
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="grid gap-2 pt-1">
        <div className="flex items-center gap-3">
          <Check className="h-6 w-6 text-[#25D366]" />
          <span className="text-gray-800 font-semibold">📱 Fully Responsive Design</span>
        </div>
        <div className="flex items-center gap-3">
          <Check className="h-6 w-6 text-[#25D366]" />
          <span className="text-gray-800 font-semibold">🌍 Multilingual Support</span>
        </div>
        <div className="flex items-center gap-3">
          <Check className="h-6 w-6 text-[#25D366]" />
          <span className="text-gray-800 font-semibold">📝 Online Booking System</span>
        </div>
        <div className="flex items-center gap-3">
          <Check className="h-6 w-6 text-[#25D366]" />
          <span className="text-gray-800 font-semibold">🏥 Service Showcase & Trust Elements</span>
        </div>
      </div>

      {/* Call to Action */}
      <div className="pt-5">
        <Button className="bg-[#1A2238] hover:bg-[#1A2238]/90 text-white rounded-full px-8 py-5 text-lg font-semibold shadow-lg transition-all duration-300 hover:shadow-xl">
          Book a Free Consultation
        </Button>
      </div>
    </div>
  </div>
</div>


{/* 2nd */}
<div className="container mx-auto px-6 py-10 md:py-16">
  {/* Title */}
  <div className="text-center mb-12">
    <h1 className="text-3xl md:text-5xl font-extrabold text-[#1A2238] leading-tight tracking-tight">
      <span className="text-[#ffaa00]">PTD Fitness</span>
      <br />
      Body Transformation Website
    </h1>
  </div>

  {/* Grid layout */}
  <div className="grid gap-10 md:grid-cols-2 md:gap-16 items-start">
    {/* Left side with mockup */}
    <div className="h-[220px] md:h-[380px] rounded-4xl overflow-hidden bg-transparent">
      <Image
        src="/Assets/project/ptd.gif"
        width={600}
        height={380}
        alt="PTD Fitness Case Study"
        className="w-full h-full object-cover rounded-5xl transition-transform duration-300 hover:scale-110"
        priority
        unoptimized
      />
    </div>

    {/* Right side with content */}
    <div className="space-y-1">
      {/* Intro */}
      <p className="text md:text-xl text-gray-700 leading-relaxed">
        We partnered with <span className="font-semibold">PTD Fitness</span>, 
        Dubai’s #1 body transformation program, to create a premium online presence 
        that highlights real client results, credibility logos, and high-converting funnels.
      </p>

      {/* Case Study Sections */}
      <div className="space-y-1">
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-[#1A2238]">⚡ The Challenge</h3>
          <p className="text-gray-700 leading-relaxed">
            PTD needed a website that not only looked elite but also built trust fast—showcasing 
            proven client transformations, video testimonials, and credibility with global brands.
          </p>
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-bold text-[#1A2238]">💡 The Solution</h3>
          <p className="text-gray-700 leading-relaxed">
            We developed a <span className="font-semibold">modern, mobile-first platform</span> 
            with before/after galleries, integrated video testimonials, and clear “Start My Transformation” CTAs.
          </p>
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-bold text-[#1A2238]">🚀 The Results</h3>
          <p className="text-[#16a34a] font-semibold leading-relaxed">
            ✅ 50% more client inquiries through the website <br />
            ✅ 600+ 5★ reviews showcased to boost credibility <br />
            ✅ Trusted by major brands like EMAAR, KPMG & Dubai Police
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="grid gap-2 pt-1">
        <div className="flex items-center gap-3">
          <Check className="h-6 w-6 text-[#25D366]" />
          <span className="text-gray-800 font-semibold">📱 Fully Responsive Design</span>
        </div>
        <div className="flex items-center gap-3">
          <Check className="h-6 w-6 text-[#25D366]" />
          <span className="text-gray-800 font-semibold">🎥 Video Testimonials Section</span>
        </div>
        <div className="flex items-center gap-3">
          <Check className="h-6 w-6 text-[#25D366]" />
          <span className="text-gray-800 font-semibold">📸 Before & After Transformations</span>
        </div>
        <div className="flex items-center gap-3">
          <Check className="h-6 w-6 text-[#25D366]" />
          <span className="text-gray-800 font-semibold">🏆 Credibility Logos & Social Proof</span>
        </div>
      </div>

      {/* Call to Action */}
      <div className="pt-5">
        <Button className="bg-[#1A2238] hover:bg-[#1A2238]/90 text-white rounded-full px-8 py-5 text-lg font-semibold shadow-lg transition-all duration-300 hover:shadow-xl">
          Start My Transformation
        </Button>
      </div>
    </div>
  </div>
</div>
{/* 3rd */}
<div className="container mx-auto px-6 py-10 md:py-16">
  {/* Title */}
  <div className="text-center mb-12">
    <h1 className="text-3xl md:text-5xl font-extrabold text-[#1A2238] leading-tight tracking-tight">
      <span className="text-[#ffa200]"> Raphaelson & Levine </span>
       Law Firm
    </h1>
  </div>

  {/* Grid layout */}
  <div className="grid gap-10 md:grid-cols-2 md:gap-16 items-start">
    {/* Left side with mockup */}
    <div className="h-[220px] md:h-[380px] rounded-4xl overflow-hidden bg-transparent">
      <Image
        src="/Assets/project/RL.gif"
        width={600}
        height={380}
        alt="Law Firm Case Study"
        className="w-full h-full object-cover rounded-5xl transition-transform duration-300 hover:scale-110"
        priority
        unoptimized
      />
    </div>

    {/* Right side with content */}
    <div className="space-y-1">
      {/* Intro */}
      <p className="text md:text-xl text-gray-700 leading-relaxed">
        We partnered with <span className="font-semibold">Raphaelson & Levine</span>, one of NYC’s top personal injury law firms, to build a digital presence that highlights their{" "}
        <span className="font-semibold">$1 Billion+ in client recoveries</span> and award-winning reputation.
      </p>

      {/* Case Study Sections */}
      <div className="space-y-1">
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-[#1A2238]">⚡ The Challenge</h3>
          <p className="text-gray-700 leading-relaxed">
            The firm needed a modern website to reflect their credibility, showcase high-profile case results, and make it easier for injured clients to connect.
          </p>
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-bold text-[#1A2238]">💡 The Solution</h3>
          <p className="text-gray-700 leading-relaxed">
            We crafted a <span className="font-semibold">professional, mobile-friendly site</span> with client testimonials, detailed case results, and a streamlined consultation form.
          </p>
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-bold text-[#1A2238]">🚀 The Results</h3>
          <p className="text-[#16a34a] font-semibold leading-relaxed">
            ✅ Increased consultation requests by 40% <br />
            ✅ Stronger reputation through case study highlights <br />
            ✅ Built trust with client reviews & proven results
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="grid gap-2 pt-1">
        <div className="flex items-center gap-3">
          <Check className="h-6 w-6 text-[#25D366]" />
          <span className="text-gray-800 font-semibold">📱 Fully Responsive Design</span>
        </div>
        <div className="flex items-center gap-3">
          <Check className="h-6 w-6 text-[#25D366]" />
          <span className="text-gray-800 font-semibold">📊 Case Results & Verdicts Section</span>
        </div>
        <div className="flex items-center gap-3">
          <Check className="h-6 w-6 text-[#25D366]" />
          <span className="text-gray-800 font-semibold">⭐ Client Testimonials</span>
        </div>
        <div className="flex items-center gap-3">
          <Check className="h-6 w-6 text-[#25D366]" />
          <span className="text-gray-800 font-semibold">⚖️ Easy Free Consultation CTA</span>
        </div>
      </div>

      {/* Call to Action */}
      <div className="pt-5">
        <Button className="bg-[#1A2238] hover:bg-[#1A2238]/90 text-white rounded-full px-8 py-5 text-lg font-semibold shadow-lg transition-all duration-300 hover:shadow-xl">
          Get Your Free Consultation
        </Button>
      </div>
    </div>
  </div>
</div>






</div>
  );
}