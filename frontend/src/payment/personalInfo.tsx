import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Spinner, Input, Menu, MenuHandler, MenuList, MenuItem } from "@material-tailwind/react";
import { useWizard } from "react-use-wizard";
import { useCountries } from "use-react-countries";

export type formFeilds = {
  fullname: string;
  phoneNumber: string; // Updated to string to include country code
  customerEmail: string;
  homeAdrress: string;
  city: string;
  state: string;
  zip: number;
};

const PersonalInfo = () => {
  const { register, handleSubmit, formState: { isSubmitSuccessful } } = useForm<formFeilds>();
  const { nextStep } = useWizard();
  const { countries }: { countries: { name: string; flags: { svg: string }; countryCallingCode: string }[] } = useCountries();
  const [country, setCountry] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState("");

  const { name, flags, countryCallingCode } = countries[country];

  const onSubmit: SubmitHandler<formFeilds> = (data) => {
    // Combine country code and phone number
    const fullPhoneNumber = `${countryCallingCode}${phoneNumber}`;
    const formData = { ...data, phoneNumber: fullPhoneNumber };

    // Store in sessionStorage
    window.sessionStorage.setItem("personalInfo", JSON.stringify(formData));

    // Proceed to the next step
    setTimeout(() => {
      nextStep();
    }, 3000);
  };

  return (
    <div>
      <div className="text-center w-full bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 backdrop-saturate-50 backdrop-contrast-150 max-w-xl md:max-w-7xl mx-auto px-4 py-5 md:py-12 flex flex-col md:flex-row gap-y-8 gap-x-20 items-center justify-around">
        <h2 className="text-3xl max-w-[65rem] md:text-4xl font-bold bg-[#8c2643] py-3 px-4 text-gray-200">
          Who are we shipping to:
        </h2>
        <form className="mt-4 w-full md:w-[38rem]" onSubmit={handleSubmit(onSubmit)}>
          {/* Full Name */}
          <input
            {...register("fullname", {
              required: "Your full name is required",
            })}
            type="text"
            placeholder="Add your Full Name"
            className="w-full p-2 py-4 px-5 text-md font-normal placeholder:text-gray-600 border rounded mb-4 text-gray-800"
          />

          {/* Phone Number with Country Code */}
          <div className="relative flex w-full  mb-4">
            <Menu placement="bottom-start">
              <MenuHandler>
                <Button
                  ripple={false}
                  
                  className="flex h-12 py-3 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-[#6b0942] pl-3"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                >
                  <img
                    src={flags.svg}
                    alt={name}
                    className="h-4 w-4 rounded-full object-cover"
                  />
                  {countryCallingCode}
                </Button>
              </MenuHandler>
              <MenuList className="max-h-[20rem] max-w-[18rem]"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                {countries.map(({ name, flags, countryCallingCode }, index) => (
                  <MenuItem
                    key={name}
                    value={name}
                    className="flex items-center gap-2"
                    onClick={() => setCountry(index)}  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                  >
                    <img
                      src={flags.svg}
                      alt={name}
                      className="h-5 w-5 rounded-full object-cover"
                    />
                    {name} <span className="ml-auto">{countryCallingCode}</span>
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
            <Input
              type="tel"
              placeholder="Mobile Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className=" bg-white py-6 px-5 text-md font-normal placeholder:text-gray-600 border rounded text-gray-800 "
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              containerProps={{
                className: "min-w-0",
              }} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined}            />
          </div>

          {/* Email */}
          <input
            {...register("customerEmail", {
              required: "Your Email is required",
              validate: (value: string) => {
                if (!value.includes("@")) {
                  return "Email must include an @ symbol";
                }
                return true;
              },
            })}
            type="email"
            placeholder="Input Your Working Email Here"
            className="w-full p-2 py-4 px-5 text-md font-normal placeholder:text-gray-600 border rounded text-gray-800"
          />

          {/* Submit Button */}
          <div className="flex items-center justify-end mt-6">
            <Button
              type="submit"
              children={isSubmitSuccessful ? <Spinner className="h-8 w-8" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} /> : "Next"}
              className="bg-[#8c2643] text-md px-8 md:text-xl capitalize"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalInfo;