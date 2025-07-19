import { Button, Spinner } from "@material-tailwind/react";
import { useWizard } from "react-use-wizard";
import { formFeilds } from "./personalInfo";
import { SubmitHandler, useForm} from "react-hook-form"

const Address = () => {

   const { previousStep, nextStep } = useWizard();
   const {register, handleSubmit, formState: {isSubmitSuccessful}  } = useForm<formFeilds>()
   
     const onSubmit: SubmitHandler<formFeilds> = (data) => {
    window.sessionStorage.setItem("addressData", JSON.stringify(data))
     
   setTimeout(() => {
     nextStep() 
   }, 3000)}
   return (
          <div>
      <div className="text-center w-full bg-gray-500 bg-clip-padding backdrop-filter  backdrop-blur-2xl bg-opacity-20 backdrop-saturate-50 backdrop-contrast-150 max-w-xl md:max-w-7xl mx-auto px-2 py-5 md:py-12 flex flex-col md:flex-row gap-y-8 gap-x-20 items-center">
        <h2 className=" leading-tight tracking-tight text-2xl md:text-4xl font-bold bg-[#8c2643] py-3 px-4 text-gray-200 ">
          Where are we shipping it to :
        </h2>
        <form className=" mt-4" onSubmit={handleSubmit(onSubmit)}> 
          <input
            type="text"
          
            placeholder="Add your Street / Home Address"
            {...register("homeAdrress", {
              required: "Your Street Address is required"})}
            
              className="w-full p-2 py-4 px-5 placeholder:text-gray-700 border rounded mb-4 text-gray-700"
          />
          <input
            type="text"
          
            placeholder="Add your City Here"
            {...register("city", {
             
              required: "Your City is required to Locate you"})}
              
            className="w-full p-2 py-4 px-5 placeholder:text-gray-700 border rounded mb-4 text-gray-700"
          />
          <input
            type="text"
            
            placeholder="Add your State Here"
            {...register("state", {
              required: "Your State  is required"})}
             
            className="w-full p-2 py-4 px-5 placeholder:text-gray-700 border rounded mb-4 text-gray-700"
          />
          <input
            type="text"
            
            placeholder="Add your Zip code Here"
            {...register("zip", {
              required: "Your Zip Code is required"})}
             
            className="w-full p-2 py-4 px-5 placeholder:text-gray-700 border rounded mb-4 text-gray-700"
          />

          <div className="flex items-center justify-between px-6 mt-6 ">
            <Button
              children="go back"
              onClick={() => {
                previousStep();
              }}
              className="bg-[#8c2643] text-md  px-8 md:text-xl capitalize "
              placeholder={undefined}
              onPointerEnterCapture={""}
              onPointerLeaveCapture={""}
            />
            <Button
              children={isSubmitSuccessful ? <Spinner className="h-8 w-8" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} /> : "Next"}
              type="submit"
              className="bg-[#8c2643] text-md  px-8 md:text-xl capitalize "
              placeholder={undefined}
              onPointerEnterCapture={""}
              onPointerLeaveCapture={""}
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Address;
