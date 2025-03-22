import { Button, Spinner } from "@material-tailwind/react";
import { useCart } from "../context/usecart"
import { formFeilds } from "./personalInfo";
import { Card } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";
import axios from "axios";
// import { Checkbox } from "@material-tailwind/react";

<Toaster
richColors
className="mt-24 md:mt-12 lg:mt-20 z-50"
position="top-right"
/>

const Payment = () => {
  const [loading, setLoading] = useState(false)
  // const [isChecked, setIsChecked] = useState(false);

  // const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setIsChecked(event.target.checked);
  // };

  const navigate = useNavigate()
  const personalInfo: formFeilds = JSON.parse(window.sessionStorage.getItem("personalInfo") || '{}')
  const addressData: formFeilds = JSON.parse(window.sessionStorage.getItem("addressData") || '{}')
const { cartItems, TotalPrice } = useCart()
const total = TotalPrice()
  if (!personalInfo || !addressData) {
    return <h1>Fill in the form</h1>
}

const requestedData = {
  personalInfo,
  addressData,
cartItems,
total
}



  const handleClick = async () => {
    setLoading(true)
    try {
      // if(!isChecked){
      //   return;
      // }
      const response = await axios.post("https://bochbeautyandskincare-production.up.railway.app/send-email", {requestedData}
      )
   console.log("This is the response from the backend", response.data)
   toast.success(response.data.message) //successful message
        
        setTimeout(() => {
          navigate("/order-confirmed");
          

        }, 5000);
        
      
    } catch (error) {
      console.error(error)
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.error || "Failed to send data");
        console.log(error.response?.data?.error )
      } else {
        toast.error("An unexpected error occurred");
      }
     
      setLoading(false)
    }
  }
  return (
    <div className="">
       <Card className="w-full max-w-3xl   mx-auto bg-white dark:bg-gray-800 shadow-md text-black">
      <div className="mb-4 flex flex-col  items-center justify-between">
        <h5 className="text-2xl pb-3 font-bold leading-none text-gray-900 dark:text-white">Payment options: Bank Transfers</h5>
        <small className="text-gray-800">want to make transfers in your own currency <Link className="underline underline-offset-4" to="/currency">click here</Link></small>
        
      </div>
      <div className="flex flex-col gap-y-4">
        <div className="border rounded-2xl bg-[#eedada] py-4 px-2 flex justify-between">
          <div className=" flex flex-col">
            <h5>Account number:</h5>
            <h2 className="ml-2 text-2xl"><b>8020705588</b></h2>
          </div>
          <Button
                
                 children="Copy"
                  onClick={async () => {
                    await navigator.clipboard.writeText("8020705588");
                    toast.success("Text copied to clipboard");
                  }}
                 
                  className="bg-[#8c2643] text-md  md:text-xl capitalize rounded-xl"
                  placeholder={undefined}
                  onPointerEnterCapture={""}
                  onPointerLeaveCapture={""}
                />
        </div>


        <div className="border rounded-2xl bg-[#eedada] py-4 px-2 flex justify-between">
        <div className="flex flex-col">
            <h5>Account Name:</h5>
            <h2 className="ml-2 text-xl"><b>Amaugo Grant Izuchukwu</b></h2>
         </div>
         <img className="w-[5rem] h-[4rem] object-cover" src="https://businesspost.ng/wp-content/uploads/2022/08/PalmPay.jpg" alt="bank logo" />
         

        </div>


        <div className="border rounded-2xl bg-[#eedada] py-4 px-2 flex justify-between">
        <div className="flex flex-col">
            <h5>Bank Name:</h5>
            <h2 className="ml-2 text-xl"><b>Palmpay Nigeria</b></h2>
         </div>
         <img className="w-[5rem] h-[4rem] object-cover" src="https://businesspost.ng/wp-content/uploads/2022/08/PalmPay.jpg" alt="bank logo" />
         
        </div>
      </div>
      {/* how to make payment */}
      <div>  <b className="text-red-500 px-2">* Please ensure to include your name in the payment description.</b>   <h3 className="my-3">How to make payments:</h3> 
      <ol className="list-decimal list-inside flex flex-col gap-y-3 text-justify"> <li>Copy our account number and prepare to make the payment.</li> <li>Verify that the Account Name and Bank Name match the details provided before sending the payment.</li> <li>After completing the payment, you will receive an email with your order confirmation. Copy your Order ID and submit proof of payment.</li> </ol> </div>
      {/* how to make payment */}

    </Card>
      <div className="flex items-center justify-center py-6">
      <Button
                  children= {loading ? <Spinner className="h-8 w-8" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />: 'Submit'}
                  onClick={handleClick}
                  disabled={loading}
                  className="bg-[#8c2643] text-md  md:text-xl capitalize rounded-full"
                  placeholder={undefined}
                  onPointerEnterCapture={""}
                  onPointerLeaveCapture={""}
                />
      </div>
    </div>
  )
}

export default Payment


