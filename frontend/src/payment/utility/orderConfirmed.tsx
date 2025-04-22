import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import {DotLottieReact} from "@lottiefiles/dotlottie-react"
import { useEffect } from "react";

const OrderConfirm = () => {
  useEffect(() => {
      // Scroll to the top of the page when the component mounts
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="w-full bg-gradient-to-tr from-[#be185d] via-[#f472b6] to-[#fbcfe8] h-screen max-w-3xl mx-auto">
      <div className="flex flex-col gap-y-12 items-center justify-around py-20 px-5">
        <div className="border-2 border-[#8c2643] rounded flex items-center justify-center">

      <DotLottieReact
      src="https://lottie.host/06465667-e667-4789-96df-d5e5eec113e4/G2nsZTCyG6.lottie"
      loop
      autoplay
      className=""
    />
        </div>
    <div className="text-center py-6 md:py-12 w-full flex flex-col gap-y-8">
    <h2 className="text-white font-semibold text-2xl md:text-2xl">Your order have been placed Successfully</h2>
    <small className="text-white text-md">Head on to your e-mail for further instructions</small>
 
    </div>
     <div className="w-full flex flex-col gap-y-4 px-6">
      <Link to="/verify-payment">
   <Button
                            
                            children="Verify Payment"
                            
                            
                             className="bg-[#8c2643] w-full text-md  md:text-xl  capitalize rounded-full"
                             placeholder={undefined}
                             onPointerEnterCapture={""}
                             onPointerLeaveCapture={""}
                           /></Link>
     </div>
</div>
    </div>
  )
}

export default OrderConfirm
