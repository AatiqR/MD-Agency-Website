import Hero from "../components/ui/Hero"
import Client  from "../components/ui/clientlogo"
import Thumbnailslider from "../components/ui/thumnailslider"
import WebSliderf from "../components/ui/webslider"
import Webpro from "../components/ui/Webpro"
import Workflow from "../components/ui/workflow"
import Reviews from "../components/ui/testimonial-section"
import Service from "../components/ui/service"
import Benefit from "../components/ui/features-section"
import Faqs from "../components/ui/faq-section"
import Booking from "../components/ui/booking"
import Footer from "../components/ui/footer"

export default function Home() {
  return (
    <div>
      <Hero />
      <Client/>
      <WebSliderf/>
      <Thumbnailslider/>
      <Webpro/>
      <Workflow/>
      <Reviews/>
      <Benefit/>
      <Service/>
      <Booking/>
      <Faqs />
      <Footer/>

    </div>
  )
}
