import {useEffect, lazy, Suspense} from "react"
import { Helmet } from "react-helmet";
import Loadingscreen from "../components/loadingScreen";

const ServiceHero = lazy(() => import("../components/sevHerosection"));
const IconSection = lazy(() => import("../components/iconSection"));
const BestSellers = lazy(() => import("../components/bestsellers"));
const SlidingText = lazy(() => import("../components/slidertext"));
const BrandFace = lazy(() => import("../components/brandFace"));
const ChooseUs = lazy(() => import("../components/chooseus"));
const NewsLetter = lazy(() => import("../components/newsletter"));
const Footer = lazy(() => import("../components/footer"));
const ServicePage =() => {
useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []); 
  return (
   <div>
    <Helmet>
  <title className="text-[#82878a]">Beauty of Chiri Services | Expert Skincare Solutions & Care</title>
  <meta name="theme-color" content="#89dfc2" />
  <meta
    name="description"
    content="Discover expert skincare services at Beauty of Chiri. Explore our tailored solutions for radiant, healthy skin. Book now for personalized care and exceptional results."
  />
  <meta property="og:title" content="Beauty of Chiri Services | Expert Skincare Solutions & Care" />
  <meta
    property="og:description"
    content="Discover expert skincare services at Beauty of Chiri. Explore our tailored solutions for radiant, healthy skin. Book now for personalized care and exceptional results."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.bochbeautyandskincare.shop/services" />
</Helmet>
      <Suspense fallback={<Loadingscreen />}>
<ServiceHero />
<div className="bg-[#f6f6f6]">
<IconSection />
</div>
<div className="bg-[#f1f1f1]">
<BestSellers />
</div>
<div className="">
<SlidingText Information="We share updates and newer skincare products on whatsapp do contact us so we can enrich your skin, here is our Whatsapp line  ..." />
</div>
<div className="">
<BrandFace />
</div>
<div className="bg-[#f6f6f6]">
<ChooseUs />
</div>
<div className="bg-[#f0e4e4]">
<NewsLetter />
</div>
<div className="bg-[#8c2643]">
<Footer />
</div>

</Suspense>

   </div>

                
  );
} 
export default ServicePage;