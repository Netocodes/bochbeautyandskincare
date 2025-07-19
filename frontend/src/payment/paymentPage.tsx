import StepperForm from "./stepper";
import { PaymentCrumb } from "../layout/breadcrumbs/crumbs";
import { useCart } from "../context/usecart";
import ErrorPage from "../components/error-page";
const PaymentPage = () => {
  const { cartItems } = useCart();

  return (
    <div className="">
      {cartItems.length == 0 ? (
        <div>
          <ErrorPage />
        </div>
      ) : (
        <div>
          <div className="absolute bg-[#ffffff]">
            <PaymentCrumb />
          </div>
          <div
            className="w-full h-screen my-[90px]  flex items-center justify-center bg-gray-500   text-white"
            
             style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1621243804936-775306a8f2e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
          >
            <StepperForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
