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
        <title className="text-[#82878a]">Beauty of Chiri - Service Section</title>
        <meta name="theme-color" content="#8c2643" />
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
<SlidingText />
</div>
<div className="">
<BrandFace />
</div>
<div className="bg-[#f6f6f6]">
<ChooseUs />
</div>
<div className="bg-[#fefefe]">
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