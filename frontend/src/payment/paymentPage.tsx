import StepperForm from "./stepper";
import {PaymentCrumb} from "../layout/breadcrumbs/crumbs"
import { useCart } from "../context/usecart";
import ErrorPage from "../components/error-page";
const PaymentPage = () => {
  const {cartItems} = useCart();

  return (
    <div className="w-full h-full py-12">
      <PaymentCrumb />
      {cartItems.length == 0 ? <div><ErrorPage /></div> :
        <div className="w-full py-20 flex items-center justify-center bg-gray-300 text-white">
        <StepperForm />
      </div>}
     
    </div>
  );
};

export default PaymentPage;
