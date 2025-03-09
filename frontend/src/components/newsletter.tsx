import { Button } from "@material-tailwind/react";

import {SubmitHandler, useForm} from "react-hook-form"

type news ={
  Email:  string
}
const NewsLetter = () => {

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
  throw new Error("An error occured")
 }
 const DATA = await response.json()
 console.log(DATA)
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

    <form onSubmit={handleSubmit(onsubmit)}>
      <div className="w-full sm:max-w-lg md:ms-auto">
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
          <div className="w-full">
            <label htmlFor="hero-input" className="sr-only">Search</label>
            <input type="email" {...register("Email", {
               required: "Your Email is required",
               validate: (value: string | string[]) => {
                 if(!value.includes("@",)){
                   return "Email Must include and @ symbol"
                 }
                 return true
                }
            })}  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Enter your email" />
          </div>
          
          <Button 
          type="submit"
          
           placeholder={undefined}
                          onPointerEnterCapture={""}
                          onPointerLeaveCapture={""}>
                            {isSubmitSuccessful ? "Sucsribing" : "Suscribe"}
                          </Button>
        </div>
        <p className="mt-3 text-sm text-gray-500 dark:text-neutral-500">
          No spam, unsubscribe at any time
        </p>
      </div>
    </form>
  </div>
</div>

    </div>
  )
}


export default NewsLetter
