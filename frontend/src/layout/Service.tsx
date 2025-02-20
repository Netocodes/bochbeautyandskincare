import {useEffect, lazy} from "react"
const ServiceHero = lazy(() => import("../components/sevHerosection"));
const ServicePage =() => {
useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []); 
  return (
                <ServiceHero />
  );
} 
export default ServicePage;