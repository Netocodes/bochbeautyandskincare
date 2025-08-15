import { Button, Spinner } from "@material-tailwind/react";
import { useWizard } from "react-use-wizard";
import { formFeilds } from "./personalInfo";
import { SubmitHandler, useForm } from "react-hook-form";
import BlurText from "../blocks/TextAnimations/BlurText/BlurText";

const Address = () => {
  const { previousStep, nextStep } = useWizard();
  const {
    register,
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = useForm<formFeilds>();

  const onSubmit: SubmitHandler<formFeilds> = (data) => {
    window.sessionStorage.setItem("addressData", JSON.stringify(data));

    setTimeout(() => {
      nextStep();
    }, 3000);
  };
  return (
    <div>
      <div className="text-center w-full grid grid-cols-1 md:grid-cols-[2fr_4fr] items-center justify-center gap-x-12 bg-gray-500 bg-clip-padding backdrop-filter  backdrop-blur-2xl bg-opacity-20 backdrop-saturate-50 backdrop-contrast-150 max-w-xl md:max-w-7xl mx-auto px-2 py-8 md:py-12 ">
        <h2 className="text-3xl text-center mx-auto w-full max-w-[65rem] md:text-4xl flex items-center font-bold bg-[#8c2643] py-3 px-4 text-gray-200">
          <BlurText
            text="Where Should We Send Your Order?"
            delay={200}
            animateBy="letters"
            direction="top"
            className="text-2xl ml-3 py-3"
          />
        </h2>
        <form className=" mt-4" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Add your Street / Home Address"
            {...register("homeAdrress", {
              required: "Your Street Address is required",
            })}
            className="w-full p-2 py-4 px-5 placeholder:text-gray-700 border rounded mb-4 text-gray-700"
          />
          <input
            type="text"
            placeholder="Add your City Here"
            {...register("city", {
              required: "Your City is required to Locate you",
            })}
            className="w-full p-2 py-4 px-5 placeholder:text-gray-700 border rounded mb-4 text-gray-700"
          />
          <input
            type="text"
            placeholder="Add your State Here"
            {...register("state", {
              required: "Your State  is required",
            })}
            className="w-full p-2 py-4 px-5 placeholder:text-gray-700 border rounded mb-4 text-gray-700"
          />
          <input
            type="text"
            placeholder="Add your Zip code Here"
            {...register("zip", {
              required: "Your Zip Code is required",
            })}
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
              onResize={undefined}
              onResizeCapture={undefined}
            />
            <Button
              children={
                isSubmitSuccessful ? (
                  <Spinner
                    className="h-8 w-8"
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    onResize={undefined}
                    onResizeCapture={undefined}
                  />
                ) : (
                  "Next"
                )
              }
              type="submit"
              className="bg-[#8c2643] text-md  px-8 md:text-xl capitalize "
              placeholder={undefined}
              onPointerEnterCapture={""}
              onPointerLeaveCapture={""}
              onResize={undefined}
              onResizeCapture={undefined}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Address;
