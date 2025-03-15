import { IoFileTray } from "react-icons/io5";
import axios from 'axios';
import {  useState, useEffect } from "react";
import { Toaster, toast } from "sonner";
import { Button } from "@material-tailwind/react";
import { useCart } from "../context/usecart";

<Toaster
richColors
className="mt-24 md:mt-12 lg:mt-20 z-50"
position="top-right"
/>
const Upload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [orderId, setOrderId] = useState<number>(); 
  const [message, setMessage] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | ArrayBuffer | null>(null);
const {clearCart} = useCart();
useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) {
      alert("You must Select A file")
    }
    else{
      const selectedFile = files[0];
      setSelectedImage(URL.createObjectURL(selectedFile))
      toast.success('File Selected')
      setFile(selectedFile);
      setMessage('');
    }
  
      
   
  };

 
  const handleOrderIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   const id = e.target.value;

    setOrderId(Number(id));
  };

  // Handle file upload
  const handleUpload = async () => {
    if (!file) {
      setMessage('Please select a file.');
      toast.error('Please select a file.');
      return;
    }
    if (!orderId) {
      setMessage('Please enter your order ID.');
      toast.error('Please enter your order ID.');
      return;
    }

    const formData = new FormData();
    formData.append('proof', file); // 'proof' should match the field name in Multer
    formData.append('orderId', orderId.toString()); // Add orderId to the request
    try {
      const response = await axios.post('https://bochbeautyandskincare-production.up.railway.app/upload-proof', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Required for file uploads
        },
      });
      setMessage(response.data); 
      toast.success(response.data)
      clearCart();
    } catch (error) {
      console.error(error);
      setMessage('Failed to upload file.');
      toast.error('Failed to upload file.');
    }
  };

  return (
    <div className="w-full  flex flex-col items-center ">
      
<div className="relative w-full min-h-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover "
 style={{
  backgroundImage: 'url("https://images.unsplash.com/photo-1621243804936-775306a8f2e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
}}>
<div className="absolute bg-black opacity-60 inset-0 z-0"></div>
	<div className="sm:max-w-lg w-full p-10 bg-white rounded-xl z-10">
		<div className="text-center">
			<h2 className="mt-5 text-3xl font-bold text-gray-700">
				Verify Payment
			</h2>
			<p className="mt-2 text-sm text-gray-700">Make sure to use the same <b className="underline italic tracking-wider underline-offset-4">orderId</b> provided to you on your mail</p>
		</div>
        <form className="mt-8 space-y-3" >
                    <div className="grid grid-cols-1 space-y-2">
                        <label className="text-lg font-bold text-gray-600 tracking-wider">* orderId:</label>
                            <input className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" type="text" value={orderId}
              onChange={handleOrderIdChange} required maxLength={5} placeholder="Enter orderId here" />
                    </div>
                    <div className="grid grid-cols-1 space-y-2">
                        <label className="text-sm font-bold text-gray-500 tracking-wide">* Attach payment Screenshot/pdf </label>
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
                                <div className={`${selectedImage ? "hidden" : "h-full w-full text-center flex flex-col items-center justify-center" }`}>
                                    <IoFileTray className="text-3xl text-gray-400 group-hover:text-gray-600" />
                                    <p className="pointer-none text-gray-500 "><span className="text-sm">Drag and drop</span> files here <br /> <span>Click on the Box</span> to select from your device</p>
                                </div>
                                <input type="file" onChange={handleFileChange} className="hidden"  accept="image/*" />
                            </label>
                            
                        </div>
                    </div>
                            <p className="text-sm text-gray-700">
                                <span>File type: doc,pdf, images</span>
                            </p>
                    <div>
                        <Button type="button"
                        placeholder={undefined}
                        onPointerEnterCapture={""}
                        onPointerLeaveCapture={""} onClick={handleUpload}
                        className="w-full bg-[#8c2643] text-md  px-8 md:text-xl capitalize "
                        >
                        Upload
                    </Button>
                   {message && <p className="mt-4 text-red-500 text-center">{message}</p>}
                    </div>
        </form>
	</div>
</div>


    </div>
  );
};

export default Upload