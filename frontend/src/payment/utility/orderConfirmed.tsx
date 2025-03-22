import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const OrderConfirm = () => {
  return (
    <div>
      <div className="flex flex-col gap-y-7 items-center justify-center py-6 px-5">
    <div className="p-1 rounded shadow-lg bg-gradient-to-r from-purple-500 via-green-500 to-blue-500">
        <div className="flex flex-col items-center p-4 space-y-2 bg-white">
<img  src="https://img.freepik.com/free-photo/paper-note-with-encouragement-quote_23-2150105130.jpg?t=st=1742641802~exp=1742645402~hmac=20ea971e294fa42cb7574af5936accc3aa7fe2493431160592f4810b6472d678&w=996" 
className="w-full h-60 object-cover rounded-lg"
alt="" />
            <h1
                className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-4 px-4">
                Your order has been placed Sucessfully!</h1>
            <p className="max-w-3xl text-center my-8">Thank you for your interest! <br /> Check your email for Your order Id so we can verify your payment</p>
           
        </div>
      
    </div>
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
