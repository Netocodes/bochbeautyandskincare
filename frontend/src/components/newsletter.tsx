import { Button, Spinner } from "@material-tailwind/react";
import { useState } from "react";
import {SubmitHandler, useForm} from "react-hook-form"
import { Toaster, toast } from "sonner";
<Toaster
        richColors
        className="mt-24 md:mt-12 lg:mt-20 z-50"
        position="top-right"
      />
type news ={
  Email:  string
}
const NewsLetter = () => {
const [message, setMessage] = useState()
 const {register, handleSubmit,  formState: { isSubmitSuccessful}, } = useForm<news>()
 const onsubmit: SubmitHandler<news> = async(data) => {

const response = await fetch("https://bochbeautyandskincare-production.up.railway.app/suscribe", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({data})
})
if(!response.ok){
  toast.warning("Could Not Suscribe try again!!!")
 }
 const DATA = await response.json()
setMessage(DATA.message)
 }
  return (
    <div>
    
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-16 mx-auto">
  <div className="grid md:grid-cols-2 gap-8">
    <div className="max-w-md">
      <h2 className="text-2xl font-bold md:text-3xl md:leading-tight dark:text-white">Subscribe</h2>
      <p className="mt-3 text-gray-600 dark:text-neutral-400">
        Subscribe and get Update on new Products/ Routine care
      </p>
    </div>
    {message ? <div className="text-center text-xl py-6">Thanks for Suscribing 👍👍</div> : 
 
    <form onSubmit={handleSubmit(onsubmit)}>
      <div className="w-full sm:max-w-lg md:ms-auto">
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
          <div className="w-full">
            <label htmlFor="hero-input" className="sr-only">Search</label>
            <input  type="email" {...register("Email", {
               required: "Your Email is required",
               validate: (value: string | string[]) => {
                 if(!value.includes("@",)){
                   return "Email Must include and @ symbol"
                 }
                 return true
                }
            })}  className="py-3 px-4 text-lg text-gray-700 leading-normal block w-full border-gray-200 rounded-lg text-md focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Enter your email" />
          </div>
          
          <Button 
          type="submit"
          className="bg-[#8c2643] text-sm  px-8 md:text-md capitalize rounded-lg"
           placeholder={undefined}
                          onPointerEnterCapture={""}
                          onPointerLeaveCapture={""}>
                            {isSubmitSuccessful ?  <Spinner className="h-8 w-8" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} /> : "Suscribe"}
                          </Button>
        </div>
        <p className="mt-3 text-sm text-gray-500 dark:text-neutral-500">
          No spam, unsubscribe at any time
        </p>
      </div>
    </form>
}
  </div>
</div>

    </div>
  )
}


export default NewsLetter
