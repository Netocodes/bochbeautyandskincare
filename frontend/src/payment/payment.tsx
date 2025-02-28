import { Button } from "@material-tailwind/react";
import { useWizard } from "react-use-wizard";

const Payment = () => {
                const { previousStep } = useWizard();
                return (
                   <div className="text-center bg-black w-full  px-4 flex flex-col md:flex-row gap-y-8 gap-x-20 items-center  ">
                          <h2 className="text-2xl md:text-4xl font-bold text-gray-700">Payment method
                            </h2>
                            <div className=" max-w-6xl border-2 py-3 px-4 mt-4 rounded-lg">
                      <div className=" py-4">
                        <div className="flex items-center">
                          
                          <div className="ml-4">
                            <p className="text-sm text-[#6b1045] font-thin">Account Number</p>
                            <h2 className="text-3xl font-bold tracking-tighter text-[#6b1045]">
                              1234567890
                            </h2>
                          </div>
                        </div>
                        <div>
                          <Button
                            children="copy"
                            onClick={() => {
                             alert("Copied to clipboard");
                            }}
                            className="text-sm bg-[#ddbaba62] py-4 rounded-full text-[#6d122e] lowercase"
                            placeholder={undefined}
                            onPointerEnterCapture={""}
                            onPointerLeaveCapture={""}
                          />
                        </div>
                      </div>
                      
                    </div>
                    <div className="flex items-center justify-around mt-6 gap-x-4 gap-y-3">
                                <Button
                                type="submit"
                                  children="go back"
                                  onClick={previousStep}
                                  className="bg-[#8c2643] text-md  px-8 md:text-xl lowercase "
                                  placeholder={undefined}
                                  onPointerEnterCapture={""}
                                  onPointerLeaveCapture={""}
                                />
                                <Button
                                type="submit"
                                  children="Complete"
                               
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
