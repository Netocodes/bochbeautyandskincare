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
    <div className="w-full bg-gradient-to-tr from-[#be185d] via-[#f472b6] to-[#fbcfe8] h-screen max-w-3xl mx-auto">
      <div className="flex flex-col gap-y-12 items-center justify-around py-20 px-5">
        <div className="border-2 border-[#8c2643] rounded flex items-center justify-center">

        <DotLottieReact
      src="https://lottie.host/8a1713f7-d227-4782-8e82-f2d19c2aa2f6/c1oLVRQN1x.lottie"
      loop
      autoplay
        />
        </div>
    <div className="text-center py-6 md:py-12 w-full flex flex-col gap-y-8">
    <h2 className="text-white font-semibold text-2xl md:text-2xl">Your Verification has been Sent</h2>
    <small className="text-white text-lg">Orders will be shipped as soon as transaction is successfull</small>
 
    </div>
     <div className="w-full flex flex-col gap-y-4 px-6">
      <Link to="/">
   <Button
                            
                            children="🏠 Go back home"
                            
                            
                             className="bg-[#8c2643] w-full text-md  md:text-xl  capitalize rounded-full"
                             placeholder={undefined}
                             onPointerEnterCapture={""}
                             onPointerLeaveCapture={""}
                           /></Link>
     </div>
</div>
    </div>
//     <div className="w-full max-w-3xl mx-auto">
//       <div className="flex flex-col gap-y-4 items-center justify-center py-6 px-5">
//       <DotLottieReact
//       src="https://lottie.host/8a1713f7-d227-4782-8e82-f2d19c2aa2f6/c1oLVRQN1x.lottie"
//       loop
//       autoplay
//     />
//   <div className="px-3 w-full text-center">
//   <h2 className="text-2xl">Thank You for Verifying your payment</h2>
//     <small>Your shipping details would be sent on your provided email </small>
//   </div> <Link to="/">
//    <Button
                            
//                             children="🏠 Go back home"
                            
                            
//                              className="bg-[#8c2643] text-md  md:text-xl  capitalize rounded-full"
//                              placeholder={undefined}
//                              onPointerEnterCapture={""}
//                              onPointerLeaveCapture={""}
//                            /></Link>
// </div>
//     </div>
  )
}

export default VerifySuccess
