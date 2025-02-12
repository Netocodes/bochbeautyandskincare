import React from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";
import { FaRegAddressCard } from "react-icons/fa6";
import { FaPerson } from "react-icons/fa6";
import { CiBank } from "react-icons/ci";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PaymentPage = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);
  const [formData, setFormData] = React.useState({
    personalInfo: { name: "", email: "" },
    addressInfo: { street: "", city: "", zip: "" },
    bankInfo: { accountNumber: "", ifscCode: "" },
  });

  const handleNext = () => {
    if (!validateStep(activeStep)) {
      toast.error("Please fill out all required fields.");
      return;
    }

    if (activeStep < 2) {
      setActiveStep((cur) => cur + 1);
    } else {
      toast.success("Your payment has been processed successfully!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  const validateStep = (step: unknown) => {
    switch (step) {
      case 0: // Personal Information
        return (
          formData.personalInfo.name.trim() !== "" &&
          formData.personalInfo.email.trim() !== ""
        );
      case 1: // Address Information
        return (
          formData.addressInfo.street.trim() !== "" &&
          formData.addressInfo.city.trim() !== "" &&
          formData.addressInfo.zip.trim() !== ""
        );
      case 2: // Bank Information
        return (
          formData.bankInfo.accountNumber.trim() !== "" &&
          formData.bankInfo.ifscCode.trim() !== ""
        );
      default:
        return false;
    }
  };

  React.useEffect(() => {
    setIsLastStep(activeStep === 2);
    setIsFirstStep(activeStep === 0);
  }, [activeStep]);

  return (
    <div className="w-full py-4 px-8">
      <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Step
          onClick={() => setActiveStep(0)}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <FaPerson className="h-5 w-5" />
        </Step>
        <Step
          onClick={() => setActiveStep(1)}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <FaRegAddressCard className="h-5 w-5" />
        </Step>
        <Step
          onClick={() => setActiveStep(2)}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <CiBank className="h-5 w-5" />
        </Step>
      </Stepper>

      {/* Conditional content based on activeStep */}
      <div className="mt-16 w-full h-[60vh] flex items-center justify-center border rounded-lg">
        {activeStep === 0 && (
          <div className="text-center w-full max-w-md">
            <h2 className="text-2xl font-bold">Step 1: Personal Information</h2>
            <form className="mt-4">
              <input
                type="text"
                placeholder="Name"
                value={formData.personalInfo.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    personalInfo: {
                      ...formData.personalInfo,
                      name: e.target.value,
                    },
                  })
                }
                className="w-full p-2 border rounded mb-4"
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.personalInfo.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    personalInfo: {
                      ...formData.personalInfo,
                      email: e.target.value,
                    },
                  })
                }
                className="w-full p-2 border rounded"
              />
            </form>
          </div>
        )}
        {activeStep === 1 && (
          <div className="text-center w-full max-w-md">
            <h2 className="text-2xl font-bold">Step 2: Address Information</h2>
            <form className="mt-4">
              <input
                type="text"
                placeholder="Street"
                value={formData.addressInfo.street}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    addressInfo: {
                      ...formData.addressInfo,
                      street: e.target.value,
                    },
                  })
                }
                className="w-full p-2 border rounded mb-4"
              />
              <input
                type="text"
                placeholder="City"
                value={formData.addressInfo.city}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    addressInfo: {
                      ...formData.addressInfo,
                      city: e.target.value,
                    },
                  })
                }
                className="w-full p-2 border rounded mb-4"
              />
              <input
                type="text"
                placeholder="Zip Code"
                value={formData.addressInfo.zip}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    addressInfo: {
                      ...formData.addressInfo,
                      zip: e.target.value,
                    },
                  })
                }
                className="w-full p-2 border rounded"
              />
            </form>
          </div>
        )}
        {activeStep === 2 && (
          <div className="text-center w-full max-w-md">
            <h2 className="text-2xl font-bold">Step 3: Bank Information</h2>
            <form className="mt-4">
              <input
                type="text"
                placeholder="Account Number"
                value={formData.bankInfo.accountNumber}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    bankInfo: {
                      ...formData.bankInfo,
                      accountNumber: e.target.value,
                    },
                  })
                }
                className="w-full p-2 border rounded mb-4"
              />
              <input
                type="text"
                placeholder="IFSC Code"
                value={formData.bankInfo.ifscCode}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    bankInfo: {
                      ...formData.bankInfo,
                      ifscCode: e.target.value,
                    },
                  })
                }
                className="w-full p-2 border rounded"
              />
            </form>
          </div>
        )}
      </div>

      <div className="mt-16 flex justify-between">
        <Button
          onClick={handlePrev}
          disabled={isFirstStep}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Prev
        </Button>
        <Button
          onClick={handleNext}
          disabled={!validateStep(activeStep)} // Disable if validation fails
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {isLastStep ? "Finish" : "Next"}
        </Button>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default PaymentPage;
