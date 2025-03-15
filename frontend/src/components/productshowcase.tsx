import { Toaster, toast } from "sonner";

<Toaster
richColors
className="mt-24 md:mt-12 lg:mt-20 z-50"
position="top-right"
/>
const ProductShowcase = () => {
  const handlecopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Text copied to clipboard");
    } catch (err) {
      console.error("Failed to copy: ", err);
      toast.error("Failed to copy: ");
    }
  }
  return (
    <div className="bg-gradient-to-r from-[#d1d5db] via-[#6b7280] to-[#374151] py-8 rounded-lg px-2 md:px-8">
      <div className="w-full grid grid-cols-2 md:gap-4 sm:grid-cols-3 gap-2">
        <div className="group block relative overflow-hidden rounded-lg" >
          <img
            className="w-full size-40 object-cover bg-gray-100 rounded  dark:bg-neutral-800"
            
            src="https://res.cloudinary.com/de7tyskql/image/upload/c_fill,g_auto,h_500,w_500/f_auto/q_auto/caramel-black-soap?_a=DATAg1AAZAA0"
            alt="Project"
          />
          <div onClick={(e) => {
                e.preventDefault();
                handlecopy("Caramel Black Soap");
              }} className="cursor-pointer absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
            <div className="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
              <svg
                className="shrink-0 size-3"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <span  className="text-xs">copy</span>
         
            </div>
          </div>
        </div>

        <div className="group block relative overflow-hidden rounded-lg" >
          <img
            className="w-full size-40 object-cover bg-gray-100 rounded   dark:bg-neutral-800"
            src="https://res.cloudinary.com/de7tyskql/image/upload/c_fill,g_auto,h_500,w_500/f_auto/q_auto/glam-glow-face?_a=DATAg1AAZAA0"
            alt="Project"
          />
          <div onClick={(e) => {
                e.preventDefault();
                handlecopy("Glam Glow Face");
              }} className="cursor-pointer absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
            <div className="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
              <svg
                className="shrink-0 size-3"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <span  className="text-xs">copy</span>
            </div>
          </div>
        </div>

        <div className="group block relative overflow-hidden rounded-lg" >
          <img
            className="w-full size-40 object-cover rounded  bg-gray-100  dark:bg-neutral-800"
            src="https://res.cloudinary.com/de7tyskql/image/upload/c_fill,g_auto,h_500,w_500/f_auto/q_auto/elegance-body-scrub-2?_a=DATAg1AAZAA0"
            alt="Project"
          />
          <div onClick={(e) => {
                e.preventDefault();
                handlecopy("Elegance Body Scrub");
              }} className="cursor-pointer absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
            <div className="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
              <svg
                className="shrink-0 size-3"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <span  className="text-xs">copy</span>
            </div>
          </div>
        </div>

        <div className="group block relative overflow-hidden rounded-lg" >
          <img
            className="w-full size-40 object-cover bg-gray-100 rounded  dark:bg-neutral-800"
            src="https://res.cloudinary.com/de7tyskql/image/upload/c_fill,g_auto,h_500,w_500/f_auto/q_auto/lighting-body-oil?_a=DATAg1AAZAA0"
            alt="Project"
          />
          <div onClick={(e) => {
                e.preventDefault();
                handlecopy("Lighting Body Oil");
              }} className="cursor-pointer absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
            <div className="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
              <svg
                className="shrink-0 size-3"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <span  className="text-xs">copy</span>
            </div>
          </div>
        </div>

        <div className="group block relative overflow-hidden rounded-lg" >
          <img
            className="w-full size-40 object-cover bg-gray-100 rounded  dark:bg-neutral-800"
            src="https://res.cloudinary.com/de7tyskql/image/upload/c_fill,g_auto,h_500,w_500/f_auto/q_auto/xwhite-molato-soap?_a=DATAg1AAZAA0"
            alt="Project"
          />
          <div onClick={(e) => {
                e.preventDefault();
                handlecopy("White Molato Soap");
              }} className="cursor-pointer absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
            <div className="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
              <svg
                className="shrink-0 size-3"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <span  className="text-xs">copy</span>
            </div>
          </div>
        </div>

        <div className="group block relative overflow-hidden rounded-lg" >
          <img
            className="w-full size-40 object-cover   bg-gray-100 rounded-lg dark:bg-neutral-800"
            src="https://res.cloudinary.com/de7tyskql/image/upload/c_fill,g_auto,h_500,w_500/f_auto/q_auto/facial-cleanser-and-cream?_a=DATAg1AAZAA0"
            alt="Project"
          />
          <div onClick={(e) => {
                e.preventDefault();
                handlecopy("Facial Cleanser and Cream");
              }} className="cursor-pointer absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
            <div className="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
              <svg
                className="shrink-0 size-3"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <span  className="text-xs">copy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
