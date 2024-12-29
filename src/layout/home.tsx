import HeroSection from "../components/herosection";
import BestSellers from "../components/bestsellers";
import AdProduct from "../components/adproducts";
import ChooseUs from "../components/chooseus";
const Homepage = () => {
  return (
    <div className=" w-full flex flex-col gap-y-0">
      <HeroSection />
      <AdProduct />
      <BestSellers />
      <ChooseUs />
    </div>
  );
};

export default Homepage;
