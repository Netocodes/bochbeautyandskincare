import { Button } from "@material-tailwind/react";
import { useWizard } from "react-use-wizard";

const Payment = () => {
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
}

export default Payment
