import { Link } from "react-router-dom";
import Logo from "../assets/logo2.svg"

  const Footer = ()  => {
return(
<div>


<footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
 
  <div className="w-full flex items-center justify-end">
    <div className="hidden md:block px-12">
    <div className="w-[150px] h-24">
          <img className="w-full h-auto" src={Logo} alt="" />
          </div>
          
          <p className="mt-1 text-xs sm:text-sm text-[#c79528] dark:text-neutral-400">
            © 2025 Chiri Products.
          </p>
    </div>
   

   
   
  </div>


  <div className="pt-5 mt-5 border-t border-gray-200 dark:border-neutral-700">
    <div className="sm:flex sm:justify-between sm:items-center">
      <div className="flex flex-wrap items-center gap-3">
      
        
        

        <div className="space-x-4 text-md ">
          <Link className="inline-flex gap-x-2 text-gray-200 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200" to="/terms-and-conditions">Terms </Link>
          <Link className="inline-flex gap-x-2 text-gray-200 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200" to="/terms-and-conditions">Conditions </Link>
          <Link className="inline-flex gap-x-2 text-gray-200 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200" to="/contact">Contact</Link>
        </div>
      </div>

      <div className="flex flex-wrap justify-between items-end gap-3">
      <div className="w-full flex md:hidden items-center justify-start">
    <div className=" px-3 py-6">
    <div className="w-[150px] h-24">
          <img className="w-full h-auto" src={Logo} alt="" />
          </div>
          
          <p className="mt-1 text-xs sm:text-sm text-[#c79528] dark:text-neutral-400">
            © 2025 Chiri Products.
          </p>
    </div>
   

   
   
  </div>

        <div className="flex gap-2 text-gray-200">
      <h2>Built and Developed by</h2> 
     <a href="https://www.netocodes.pro/" className="text-md underline underline-offset-4 ">NetoCodes</a>
        </div>
        
      </div>
     
    </div>
  </div>
</footer>

    
</div>
)
  }
  export default Footer;