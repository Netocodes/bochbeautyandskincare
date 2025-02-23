
import { Button } from "@material-tailwind/react";
import { useWizard } from "react-use-wizard";
const Address = () => {
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
                                        value=''
                                        onChange={() => {}}
                                        className="w-full p-2 py-4 px-5 placeholder:text-gray-700 border rounded mb-4 text-gray-700"
                                      />
                                      <input
                                        type="text"
                                        name="city"
                                        placeholder="Add your City Here"
                                        value=''
                                        onChange={() => {}}
                                        className="w-full p-2 py-4 px-5 placeholder:text-gray-700 border rounded mb-4 text-gray-700"
                                      />
                                      <input
                                        type="text"
                                        name="state"
                                        placeholder="Add your State Here"
                                        value=''
                                        onChange={() => {}}
                                        className="w-full p-2 py-4 px-5 placeholder:text-gray-700 border rounded mb-4 text-gray-700"
                                      />
                                      <input
                                        type="text"
                                        name="zip"
                                        placeholder="Add your Zip code Here"
                                        value=''
                                        onChange={() => {}}
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
}

export default Address
