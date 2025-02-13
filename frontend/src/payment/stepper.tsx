import { useState, useEffect } from "react";
import { Wizard, useWizard } from "react-use-wizard";
import { Button } from "@material-tailwind/react";
type contactInfo = {
  name: string;
  phone: number;
  email: string;
  street: string;
  city: string;
  state: string;
  zip: number;
};
const StepperForm = () => {
  const contactDetails: contactInfo = {
    name: "",
    phone: 0,
    email: "",
    street: "",
    city: "",
    state: "",
    zip: 0,
  };
  const [formData, setFormData] = useState<contactInfo>(contactDetails);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <div>
      <Wizard>
        <Step1 data={formData} handleChange={handleChange} />
        <Step2 data={formData} handleChange={handleChange} />
        <Step3 />
      </Wizard>
    </div>
  );
};

const Step1 = ({
  data,
  handleChange,
}: {
  data: contactInfo;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}) => {
  const { nextStep } = useWizard();

  return (
    <div>
      <div className="text-center w-full max-w-xl md:max-w-7xl px-4 flex flex-col md:flex-row gap-y-8 gap-x-20 items-center  ">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-700">
          Who are we shipping to :
        </h2>
        <form className=" mt-4">
          <input
            type="text"
            name="name"
            placeholder="Add your Full Name"
            value={data.name}
            onChange={handleChange}
            className="w-full p-2 py-4 px-5 placeholder:text-gray-700 border rounded mb-4 text-gray-700"
          />
          <input
            type="text"
            placeholder="Phone Number"
            name="phone"
            onChange={handleChange}
            className="w-full p-2 py-4 px-5 placeholder:text-gray-700 border rounded mb-4 text-gray-700"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            className="w-full p-2 py-4 px-5 placeholder:text-gray-700 border rounded text-gray-700"
          />

          <div className="flex items-center justify-around mt-6 ">
            <Button
              children="next"
              onClick={() => {
                nextStep();
              }}
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
const Step2 = ({
  data,
  handleChange,
}: {
  data: contactInfo;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}) => {
  const { previousStep, nextStep } = useWizard();
  return (
    <div>
      <div className="text-center w-full max-w-xl md:max-w-7xl px-4 flex flex-col md:flex-row gap-y-8 gap-x-20 items-center  ">
        <h2 className="  py-4 px-8 leading-tight tracking-tight text-2xl md:text-4xl font-bold text-gray-700 ">
          Where are we shipping it to :
        </h2>
        <form className=" mt-4">
          <input
            type="text"
            name="street"
            placeholder="Add your Street / Home Address"
            value={data.street}
            onChange={handleChange}
            className="w-full p-2 py-4 px-5 placeholder:text-gray-700 border rounded mb-4 text-gray-700"
          />
          <input
            type="text"
            name="city"
            placeholder="Add your City Here"
            value={data.city}
            onChange={handleChange}
            className="w-full p-2 py-4 px-5 placeholder:text-gray-700 border rounded mb-4 text-gray-700"
          />
          <input
            type="text"
            name="state"
            placeholder="Add your State Here"
            value={data.state}
            onChange={handleChange}
            className="w-full p-2 py-4 px-5 placeholder:text-gray-700 border rounded mb-4 text-gray-700"
          />
          <input
            type="text"
            name="zip"
            placeholder="Add your Zip code Here"
            value={data.zip}
            onChange={handleChange}
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
              children="next"
              onClick={() => {
                nextStep();
              }}
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
const Step3 = () => {
  const { previousStep } = useWizard();
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-700">
        Payment Method: Bank Transfer
      </h2>
      <h1 className="text-xl text-center text-gray-700 my-5">
        page not Quite Finished
      </h1>
      <div className="flex items-center justify-around mt-6 ">
        <Button
          children="Go back "
          onClick={() => {
            previousStep();
          }}
          className="bg-[#8c2643] text-md  px-8 md:text-xl capitalize "
          placeholder={undefined}
          onPointerEnterCapture={""}
          onPointerLeaveCapture={""}
        />
      </div>
    </div>
  );
};

export default StepperForm;
