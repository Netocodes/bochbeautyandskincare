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
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex flex-col gap-y-4 items-center justify-center py-6 px-5">
      <DotLottieReact
      src="https://lottie.host/06465667-e667-4789-96df-d5e5eec113e4/G2nsZTCyG6.lottie"
      loop
      autoplay
    />
    <h2 className="text-2xl">Your order have been placed Successfully</h2>
    <small>Head on to your e-mail for further instructions</small>
   <Link to="/verify-payment">
   <Button
                            
                            children="Verify Payment"
                            
                            
                             className="bg-[#8c2643] text-md  md:text-xl  capitalize rounded-full"
                             placeholder={undefined}
                             onPointerEnterCapture={""}
                             onPointerLeaveCapture={""}
                           /></Link>
</div>
    </div>
  )
}

export default OrderConfirm
