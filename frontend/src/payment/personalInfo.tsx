import {SubmitHandler, useForm} from "react-hook-form"
import { Button, Spinner } from "@material-tailwind/react";
import { useWizard } from "react-use-wizard";

export type formFeilds ={
  fullname: string;
  phoneNumber: number ;
  customerEmail: string;
  homeAdrress: string;
  city: string;
  state: string;
  zip: number;

}

const PersonalInfo = () => {
  
 const {register, handleSubmit,  formState: { isSubmitSuccessful}, } = useForm<formFeilds>()

   
  

   
 
  const { nextStep } = useWizard();

         const onSubmit: SubmitHandler<formFeilds> = (data) => {
         
          window.sessionStorage.setItem("personalInfo", JSON.stringify(data))
         
          
setTimeout(() => {
  nextStep()
}, 3000)
         }  
           
 
  return (
    <div>
      <div className="text-center w-full bg-gray-500 bg-clip-padding backdrop-filter  backdrop-blur-2xl bg-opacity-20 backdrop-saturate-50 backdrop-contrast-150 max-w-xl md:max-w-7xl mx-auto px-4 py-5 md:py-12 flex flex-col md:flex-row gap-y-8 gap-x-20 items-center  ">
        <h2 className="text-3xl md:text-4xl font-bold text">
          Who are we shipping to :
        </h2>
        <form className=" mt-4" onSubmit={handleSubmit(onSubmit)}>
         
          <input
            {...register("fullname", {
              required: "Your full name is required"
             })}
            type="text"
        
            placeholder="Add your Full Name"
            className="w-full p-2 py-4 px-5 text-md font-normal placeholder:text-gray-600 border rounded mb-4 text-gray-800"
          />

          
          
          <input
            {...register("phoneNumber", {
              required: "Phone Number is required",
              validate: (value) => {
              if(isNaN(value)){
                return "This Must be a Number"
              }
              return true;
              }
            })
            }
            type="text"
            placeholder="Phone Number"
            
            className="w-full p-2 py-4 px-5 text-md font-normal  placeholder:text-gray-600 border rounded mb-4 text-[#690a3a]"
          />
         
         
         <input
            {...register("customerEmail",  {
              required: "Your Email is required",
              validate: (value: string | string[]) => {
                if(!value.includes("@",)){
                  return "Email Must include and @ symbol"
                }
                return true
            }})}
            type="email"
            placeholder="Input Your Working Email Here"
          
            className="w-full p-2 py-4 px-5 text-md font-normal placeholder:text-gray-600 border rounded text-gray-800"
          />
       

          
          <div className="flex items-center justify-around mt-6 ">
            <Button
            type="submit"
              children={isSubmitSuccessful ? <Spinner className="h-8 w-8" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} /> : "next"}
           
              className="bg-[#8c2643] text-md  px-8 md:text-xl lowercase "
              placeholder={undefined}
              onPointerEnterCapture={""}
              onPointerLeaveCapture={""}
            />
          </div>
         
        </form>
      </div>
    </div>
  );
};


export default PersonalInfo;
