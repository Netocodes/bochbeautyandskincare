import { Button, Spinner } from "@material-tailwind/react";
import { useCart } from "../context/usecart"
import { formFeilds } from "./personalInfo";
import { Card } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";
import axios from "axios";

<Toaster
richColors
className="mt-24 md:mt-12 lg:mt-20 z-50"
position="top-right"
/>

const Payment = () => {
  const [loading, setLoading] = useState(false)
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
      
      const response = await axios.post("https://bochbeautyandskincare-production.up.railway.app/send-email", {requestedData}
      )
   console.log("This is the response from the backend", response.data)
   toast.success(response.data.message) //successful message
        
        setTimeout(() => {
          navigate("/verify-payment");
          

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
    <div>
       <Card className="max-w-3xl p-6 mx-auto bg-white dark:bg-gray-800 shadow-md">
      <div className="mb-4 flex flex-col  items-center justify-between">
        <h5 className="text-2xl pb-3 font-bold leading-none text-gray-900 dark:text-white">Payment options: Bank Transfers</h5>
        <small className="text-gray-800">want to make transfers in your own currency <Link className="underline underline-offset-4" to="/currency">click here</Link></small>
        
      </div>
      <div className="flow-root">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
         
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">
                
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-700 dark:text-white">Bank Account Number</p>
                <p className="truncate text-3xl text-gray-800  font-semibold ">8020705588</p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                <Button
                                                          children= "Copy"
                                                         
                                                          className="bg-[#8c2643] text-md  px-8 md:text-xl lowercase rounded-full"
                                                          placeholder={undefined}
                                                          onPointerEnterCapture={""}
                                                          onPointerLeaveCapture={""}
                                                        />
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">
                
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-700 dark:text-white">Bank Account Name</p>
                <p className="truncate text-2xl text-gray-800 dark:text-gray-400">Netochukwu Ronaldo Amaugo</p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$367</div>
            </div>
          </li>
          <li className="pb-0 pt-3 sm:pt-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">
                
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-700 dark:text-white">Bank Name</p>
                <p className="truncate text-2xl text-gray-800 ">Palmplay Nigeria</p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              <Button
                  children= "Copy"
                 
                  className="bg-[#8c2643] text-md  px-5 md:text-xl lowercase rounded-full"
                  placeholder={undefined}
                  onPointerEnterCapture={""}
                  onPointerLeaveCapture={""}
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
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


