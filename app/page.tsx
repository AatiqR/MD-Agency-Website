import Hero from "../components/ui/Hero"
import Client  from "../components/ui/clientlogo"
import Yotubeclient  from "../components/ui/youtuberclient"
import Thumbnailslider from "../components/ui/thumnailslider"
import WebSliderf from "../components/ui/webslider"
import Webpro from "../components/ui/Webpro"
import Workflow from "../components/ui/workflow"
import Reviews from "../components/ui/testimonial-section"
import Service from "../components/ui/servicemaz"
import Benefit from "../components/ui/features-section"
import Faqs from "../components/ui/faq-section"
import Booking from "../components/ui/booking"
import Footer from "../components/ui/footer"
// import Short  from "../components/ui/ShortP"
import Ytportfolio from "../components/ui/PortfolioYT"

export default function Home() {
  return (
    <div>
      <Hero />
      <Client/>
      <Yotubeclient/>
      <Ytportfolio/>
      <Thumbnailslider/>
      <WebSliderf/>
      <Webpro/>
      <Workflow/>
      <Service/>
      <Reviews/>
      <Benefit/>
      <Booking/>
      <Faqs />
      <Footer/>
    </div>
  )
}
