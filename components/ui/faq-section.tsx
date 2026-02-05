"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSection() {
  return (
    <div className="bg-black min-h-screen w-full py-16 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-white text-xl mb-2">Questions?</h2>
        <h1 className="text-[#4AE54A] text-5xl md:text-6xl font-bold mb-16">We got answers.</h1>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="border-0">
            <AccordionTrigger className="bg-[#111] rounded-lg px-6 py-4 text-white text-left hover:no-underline hover:bg-[#181818] transition-colors">
              <span className="text-lg">Why Choose Mazl</span>
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 text-white">We deliver high-quality, custom websites that are fast, secure, and conversion-focused. With expert development, SEO optimization, ongoing support, and a 100% Money-Back Guarantee, we ensure your business stands out online. Let’s build something amazing! </AccordionContent>
          </AccordionItem>



          <AccordionItem value="item-2" className="border-0">
            <AccordionTrigger className="bg-[#111] rounded-lg px-6 py-4 text-white text-left hover:no-underline hover:bg-[#181818] transition-colors">
              <span className="text-lg">Who Behind Maz</span>
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 text-white">  A team of expert developers and designers led by Maz Rana, building fast, secure, and high-converting websites for your business success. 🚀</AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-0">
            <AccordionTrigger className="bg-[#111] rounded-lg px-6 py-4 text-white text-left hover:no-underline hover:bg-[#181818] transition-colors">
              <span className="text-lg">Can you redesign my existing website?</span>
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 text-white">Yes! We’ll revamp your site for a modern look, faster speed, and better conversions to grow your business. 🚀</AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-0">
            <AccordionTrigger className="bg-[#111] rounded-lg px-6 py-4 text-white text-left hover:no-underline hover:bg-[#181818] transition-colors">
              <span className="text-lg">Will my website be SEO-friendly and mobile-responsive?</span>
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 text-white">Absolutely! We build SEO-optimized, mobile-friendly websites for better rankings and user experience.</AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border-0">
            <AccordionTrigger className="bg-[#111] rounded-lg px-6 py-4 text-white text-left hover:no-underline hover:bg-[#181818] transition-colors">
              <span className="text-lg">How much will my website cost?</span>
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 text-white">The cost depends on your project’s complexity. We offer custom pricing based on your needs. Contact us </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border-0">
            <AccordionTrigger className="bg-[#111] rounded-lg px-6 py-4 text-white text-left hover:no-underline hover:bg-[#181818] transition-colors">
              <span className="text-lg">What if I am not satisfied?</span>
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4  text-white">We offer a 100% Money-Back Guarantee if you are not happy with the final product.</AccordionContent>
          </AccordionItem>

          
      
        </Accordion>


      </div>
    </div>
  )
}

