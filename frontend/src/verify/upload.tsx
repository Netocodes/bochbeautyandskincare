import { IoFileTray } from "react-icons/io5";
import axios from "axios";
import { useState, useEffect } from "react";
import { Toaster, toast } from "sonner";
import { Button, Spinner } from "@material-tailwind/react";
import { useCart } from "../context/usecart";
import { useNavigate } from "react-router-dom";

<Toaster
  richColors
  className="mt-24 md:mt-12 lg:mt-20 z-50"
  position="top-right"
/>;
const Upload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [orderId, setOrderId] = useState<number>();
  // const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<
    string | ArrayBuffer | null
  >(null);
  const { clearCart } = useCart();
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) {
      alert("You must Select A file");
    } else {
      const selectedFile = files[0];
      setSelectedImage(URL.createObjectURL(selectedFile));
      toast.success("File Selected");
      setFile(selectedFile);
      // setMessage('');
    }
  };

  const handleOrderIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = e.target.value;

    setOrderId(Number(id));
  };

  // Handle file upload
  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) {
      // setMessage('Please select a file.');
      toast.error("Please select a file.");
      return;
    }
    if (!orderId) {
      // setMessage('Please enter your order ID.');
      toast.error("Please enter your order ID.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file); // 'proof' should match the field name in Multer
    formData.append("orderId", orderId.toString()); // Add orderId to the request
    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }

    try {
      setLoading(true);
      const response = await axios.post(
        "https://bochbeautyandskincare-production.up.railway.app/upload-proof",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Required for file uploads
          },
        }
      );
      // setMessage(response.data);
      toast.success(response.data);
      clearCart();
      navigate("/verify-success");
      setLoading(false);
    } catch (error) {
      setLoading(false);

      console.error(error);
      // setMessage('Failed to upload file.');
      if (axios.isAxiosError(error)) {
        toast.error(error.message);
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  };

  return (
    <div className="w-full  flex flex-col items-center ">
      <div
        className="relative w-full h-[max-content]  flex items-center justify-center py-4 md:py-12 px-2 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover "
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1621243804936-775306a8f2e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      >
        <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
        <div className="sm:max-w-lg w-full p-5 md:p-10 bg-white rounded-xl z-10">
          <div className="text-center">
            <h2 className="mt-5 text-3xl font-bold text-gray-600">
              Verify Payment
            </h2>
            <p className="mt-4 text-sm text-gray-700">
              Make sure to use the same{" "}
              <b className="underline italic tracking-wider underline-offset-4">
                Order-Id
              </b>{" "}
              provided to you on your mail
            </p>
          </div>
          <form className="mt-8 space-y-3" onSubmit={handleUpload}>
            <div className="grid grid-cols-1 space-y-2">
              <label className="text-lg font-bold text-gray-600 tracking-wider">
                * Order-Id
              </label>
              <input
                className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                type="text"
                value={orderId}
                onChange={handleOrderIdChange}
                required
                maxLength={5}
                placeholder="Enter Order-Id here"
              />
            </div>
            <div className="grid grid-cols-1 space-y-2">
              <label className="text-lg font-bold text-gray-500 tracking-wide">
                * Attach payment Screenshot/pdf{" "}
              </label>
              <div className="flex items-center justify-center w-full">
                <label className="relative flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                  {selectedImage && (
                    <div className="  w-full h-full bg-gray-100 bg-opacity-50 z-10 flex items-center justify-center">
                      <img
                        src={selectedImage.toString()}
                        alt="Selected"
                        className="mt-2 w-full h-[220px] object-cover rounded-lg"
                      />
                    </div>
                  )}
                  <div
                    className={`${
                      selectedImage
                        ? "hidden"
                        : "h-full w-full text-center flex flex-col items-center justify-center"
                    }`}
                  >
                    <IoFileTray className="text-3xl text-gray-400 group-hover:text-gray-600" />
                    <p className="pointer-none text-gray-500 ">
                      <span className="text-sm">Drag and drop</span> files here{" "}
                      <br /> <span>Click on the Box</span> to select from your
                      device
                    </p>
                  </div>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                    accept="image/*"
                  />
                </label>
              </div>
            </div>
            <p className="text-sm text-gray-700">
              <span>File type: doc,pdf, images</span>
            </p>
            <div className="flex items-center justify-end py-5">
              <Button
                type="submit"
                placeholder={undefined}
                onPointerEnterCapture={""}
                onPointerLeaveCapture={""}
                className=" bg-[#8c2643] text-md  px-8 md:text-xl capitalize "
                onResize={undefined}
                onResizeCapture={undefined}
              >
                {loading ? (
                  <Spinner
                    className="h-8 w-8"
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    onResize={undefined}
                    onResizeCapture={undefined}
                  />
                ) : (
                  "Upload Data"
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Upload;
