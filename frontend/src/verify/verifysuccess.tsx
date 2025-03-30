import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import {DotLottieReact} from "@lottiefiles/dotlottie-react"
import { useEffect } from "react";

const VerifySuccess = () => {
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex flex-col gap-y-4 items-center justify-center py-6 px-5">
      <DotLottieReact
      src="https://lottie.host/8a1713f7-d227-4782-8e82-f2d19c2aa2f6/c1oLVRQN1x.lottie"
      loop
      autoplay
    />
    <h2 className="text-2xl">Thank You for Verifying your payment</h2>
    <small>your shipping details would be sent on your provided email </small>
   <Link to="/">
   <Button
                            
                            children="Go back home"
                            
                            
                             className="bg-[#8c2643] text-md  md:text-xl  lowercase rounded-full"
                             placeholder={undefined}
                             onPointerEnterCapture={""}
                             onPointerLeaveCapture={""}
                           /></Link>
</div>
    </div>
  )
}

export default VerifySuccess
