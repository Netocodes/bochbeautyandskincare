import { Button, Spinner } from "@material-tailwind/react";
import { useCart } from "../context/usecart";
import { formFeilds } from "./personalInfo";
import { Card } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";
import axios from "axios";
import Papara from "../assets/papara-tbank.jpg";
import { motion } from "framer-motion";
// import { Checkbox } from "@material-tailwind/react";

<Toaster
  richColors
  className="mt-24 md:mt-12 lg:mt-20 z-50"
  position="top-right"
/>;

const Payment = () => {
  const [loading, setLoading] = useState(false);
  // const [isChecked, setIsChecked] = useState(false);

  // const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setIsChecked(event.target.checked);
  // };

  const navigate = useNavigate();
  const personalInfo: formFeilds = JSON.parse(
    window.sessionStorage.getItem("personalInfo") || "{}"
  );
  const addressData: formFeilds = JSON.parse(
    window.sessionStorage.getItem("addressData") || "{}"
  );
  const { cartItems, TotalPrice } = useCart();
  const total = TotalPrice();
  if (!personalInfo || !addressData) {
    return <h1>Fill in the form</h1>;
  }

  const requestedData = {
    personalInfo,
    addressData,
    cartItems,
    total,
  };
  console.log(requestedData);
  // console.log(JSON.stringify(requestedData)); backend data request

  const handleClick = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        import.meta.env.VITE_SENDORDER,
        {
          personalInfo,
          addressData,
          cartItems,
          total,
        },
        { headers: { "Content-Type": "application/json" } }
      );
      console.log("This is the response from the backend", response.data);
      toast.success(response.data.message); //successful message

      setTimeout(() => {
        navigate("/order-confirmed");
      }, 5000);
    } catch (error) {
      console.error(error);
      if (axios.isAxiosError(error)) {
        toast.error(error.message);
      } else {
        toast.error("An unexpected error occurred");
      }

      setLoading(false);
    }
  };
  return (
    <div>
      <Card className="w-full max-w-6xl mx-auto bg-white dark:bg-gray-800 shadow-md text-black">
        <div className="mb-4 flex flex-col  items-center justify-between">
          <h5 className="text-2xl pb-3 font-bold leading-none text-gray-900 dark:text-white">
            Payment options: Bank Transfers
          </h5>
          <small className="text-sm text-gray-800">
            want to make transfers in your own currency{" "}
            <Link className="underline underline-offset-4" to="/currency">
              click here
            </Link>
          </small>
        </div>
        <div className="py-4 px-2 bg-[#86114c]">
          <h2 className="text-xl text-white">
            Amount to pay:{" "}
            <span className="text-xl ml-2">
              {TotalPrice() + 200} <small className="text-md ">tl</small>
            </span>
          </h2>
        </div>
        <section className=" grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-x-4 gap-y-4">
          <div className="payment-grad px-5 py-5 flex flex-col gap-y-4 overflow-hidden">
            <motion.div
              className="border rounded-2xl card-grad py-4 px-2 grid grid-cols-1 md:grid-cols-[2fr_1fr] items-center justify-between"
              initial={{ opacity: 0, x: "-70%" }}
              whileInView={{ opacity: 1, x: 0 }} // Move to normal position and become visible
              viewport={{ once: false }}
              transition={{ duration: 1, ease: "easeIn" }}
            >
              <div className=" flex flex-col gap-2 px-3">
                <h5>Account number:</h5>
                <h2 className="ml-2 text-white font-semibold text-md lg:text-3xl">
                  TR790082900009491081619443
                </h2>
              </div>
              <Button
                children="Copy"
                onClick={async () => {
                  await navigator.clipboard.writeText(
                    "TR790082900009491081619443"
                  );
                  toast.success("Text copied to clipboard");
                }}
                className="bg-[#8c2643] w-lg mx-auto text-md  md:text-xl capitalize rounded-xl"
                placeholder={undefined}
                onPointerEnterCapture={""}
                onPointerLeaveCapture={""}
                onResize={undefined}
                onResizeCapture={undefined}
              />
            </motion.div>

            <motion.div
              className="border rounded-2xl card-grad py-4 px-2 flex items-center justify-between"
              initial={{ opacity: 0, x: "-60%" }}
              whileInView={{ opacity: 1, x: 0 }} // Move to normal position and become visible
              viewport={{ once: false }}
              transition={{ duration: 1, ease: "easeIn" }}
            >
              <div className="px-3 flex flex-col gap-y-2">
                <h5 className="text-white">Account Name:</h5>
                <h2 className="ml-2 text-[#fbfbf8] text-md md:text-xl lg:text-2xl">
                  <b>Bright Chinenye Ngwu</b>
                </h2>
              </div>
              <img
                className="w-[5rem] h-[4rem] object-cover rounded-lg"
                src={Papara}
                alt="bank logo"
              />
            </motion.div>

            <motion.div
              className="border rounded-2xl card-grad py-4 px-2 flex justify-between"
              initial={{ opacity: 0, x: "-40%" }}
              whileInView={{ opacity: 1, x: 0 }} // Move to normal position and become visible
              viewport={{ once: false }}
              transition={{ duration: 1, ease: "easeIn" }}
            >
              <div className="px-3 flex flex-col gap-y-2">
                <h5>Bank Name:</h5>
                <h2 className="ml-2 text-white font-bold text-md md:text-xl">
                  <b>Papara T-Bank</b>
                </h2>
              </div>
              <img
                className="w-[5rem] h-[4rem] object-cover rounded-lg"
                src={Papara}
                alt="bank logo"
              />
            </motion.div>
            <a
              className="text-sm underline text-white"
              href="https://www.papara.com/en/faq/money-transfer/how-can-i-send-money-with-papara"
            >
              Learn how to make transfers to Papara Account
            </a>
          </div>
          {/* how to make payment */}
          <div className="py-3 px-5 border shadow">
            {" "}
            <b className="text-red-500 px-2">
              * Please ensure to get your Order-Id from your mail and include in
              the payment description.
            </b>{" "}
            <h3 className="my-3">How to make payments:</h3>
            <ol className="list-decimal  list-inside flex flex-col gap-y-3 text-left leading-relaxed tracking-wide">
              {" "}
              <li>
                Copy our account number and prepare to make the payment.
              </li>{" "}
              <li>
                Verify that the Account Name and Bank Name match the details
                provided before sending the payment.
              </li>{" "}
              <li>
                Before Making the payment, you will receive an email with your
                order confirmation. Confirm your order and Copy your Order-Id
                and proceed to making payment payment.
              </li>{" "}
            </ol>{" "}
            <div className="flex items-center justify-center py-4">
              <Button
                children={
                  loading ? (
                    <Spinner
                      className="h-8 w-8"
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                      onResize={undefined}
                      onResizeCapture={undefined}
                    />
                  ) : (
                    "Submit"
                  )
                }
                onClick={handleClick}
                disabled={loading}
                className="bg-[#8c2643] text-md  md:text-xl capitalize rounded-full"
                placeholder={undefined}
                onPointerEnterCapture={""}
                onPointerLeaveCapture={""}
                onResize={undefined}
                onResizeCapture={undefined}
              />
            </div>
          </div>
          {/* how to make payment */}
        </section>
      </Card>
    </div>
  );
};

export default Payment;
