import {SubmitHandler, useForm} from "react-hook-form"
import { Button } from "@material-tailwind/react";
import { useWizard } from "react-use-wizard";
export type formFeilds ={
  fullname: string;
  phoneNumber: number ;
  email: string;
  homeAdrress: string;
  city: string;
  state: string;
  zip: number;

}

const PersonalInfo = () => {
 const {register, handleSubmit,  formState: {errors}} = useForm<formFeilds>()
  const { nextStep } = useWizard();
 console.log(errors)
         const onSubmit: SubmitHandler<formFeilds> = (data) => {
           window.sessionStorage.setItem("personalInfo", JSON.stringify(data))
           console.log("Added Personal Data", data)
setTimeout(() => {
  nextStep()
}, 3000)
         }  
           
 
  return (
    <div>
      <div className="text-center w-full max-w-xl md:max-w-7xl px-4 flex flex-col md:flex-row gap-y-8 gap-x-20 items-center  ">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-700">
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
            {...register("email",  {
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
              children="next"
           
              className="bg-[#8c2643] text-md  px-8 md:text-xl capitalize "
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
