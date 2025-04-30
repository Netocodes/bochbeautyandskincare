import { Button, Spinner } from "@material-tailwind/react";
import { useCart } from "../context/usecart"
import { formFeilds } from "./personalInfo";
import { Card } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";
import axios from "axios";
import { motion } from "framer-motion";
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
        toast.error(error.message);
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
      <div className="py-4 px-2 bg-[#86114c]">
        <h2 className="text-xl text-white">Amount to pay:  <span className="text-xl ml-2">{TotalPrice() + 200} <small className="text-md ">tl</small></span></h2>
      </div>
      <div className="payment-grad px-5 py-5 flex flex-col gap-y-4">
        <motion.div className="border rounded-2xl card-grad py-4 px-2 flex justify-between"
         initial={{ opacity: 0, x: "-70%" }}
         whileInView={{ opacity: 1, x: 0 }} // Move to normal position and become visible
         viewport={{ once: false }}
         transition={{ duration: 1, ease: "easeIn" }}>
          <div className=" flex flex-col px-3">
            <h5>Account number:</h5>
            <h2 className="ml-2 text-white font-bold text-2xl lg:text-3xl"><b>1015570715</b></h2>
          </div>
          <Button
                
                 children="Copy"
                  onClick={async () => {
                    await navigator.clipboard.writeText("1015570715");
                    toast.success("Text copied to clipboard");
                  }}
                 
                  className="bg-[#8c2643] text-md  md:text-xl capitalize rounded-xl"
                  placeholder={undefined}
                  onPointerEnterCapture={""}
                  onPointerLeaveCapture={""}
                />
        </motion.div>


        <motion.div className="border rounded-2xl card-grad py-4 px-2 flex justify-between"
         initial={{ opacity: 0, x: "-60%" }}
         whileInView={{ opacity: 1, x: 0 }} // Move to normal position and become visible
         viewport={{ once: false }}
         transition={{ duration: 1, ease: "easeIn" }}>
        <div className="px-3 flex flex-col gap-y-2">
            <h5 className="text-white">Account Name:</h5>
            <h2 className="ml-2 text-[#fbfbf8] text-xl md:text-xl lg:text-2xl"><b>Chiri Global INVT LTD</b></h2>
         </div>
         <img className="w-[5rem] h-[4rem] object-cover rounded-lg" src="https://media.premiumtimesng.com/wp-content/files/2023/12/22-1-e1703765279403.jpg" alt="bank logo" />
         

        </motion.div>


        <motion.div className="border rounded-2xl card-grad py-4 px-2 flex justify-between"
         initial={{ opacity: 0, x: "-40%" }}
         whileInView={{ opacity: 1, x: 0 }} // Move to normal position and become visible
         viewport={{ once: false }}
         transition={{ duration: 1, ease: "easeIn" }}>
        <div className="px-3 flex flex-col gap-y-2">
            <h5>Bank Name:</h5>
            <h2 className="ml-2 text-white font-bold text-xl"><b>Zenith Bank</b></h2>
         </div>
         <img className="w-[5rem] h-[4rem] object-cover rounded-lg" src="https://media.premiumtimesng.com/wp-content/files/2023/12/22-1-e1703765279403.jpg" alt="bank logo" />
         
        </motion.div>
      </div>
      {/* how to make payment */}
      <div className="py-3 px-5 border shadow" >  <b className="text-red-500 px-2">* Please ensure to include your name in the payment description.</b>   <h3 className="my-3">How to make payments:</h3> 
      <ol className="list-decimal list-inside flex flex-col gap-y-3 text-justify"> <li>Copy our account number and prepare to make the payment.</li> <li>Verify that the Account Name and Bank Name match the details provided before sending the payment.</li> <li>After completing the payment, you will receive an email with your order confirmation. Copy your Order ID and submit proof of payment.</li> </ol> </div>
      {/* how to make payment */}

      <div className="flex items-center justify-center py-4">
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
    </Card>
    </div>
  )
}

export default Payment


