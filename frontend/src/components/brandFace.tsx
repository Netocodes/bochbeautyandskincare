import { Button } from "@material-tailwind/react";
import Face from "../assets/face.png";


const BrandFace = () => {
  return (
    <div>
   <div  className=" flex flex-col-reverse items-center justify-between gap-x-6 lg:px-12 md:flex-row-reverse bg-white  overflow-hidden py-12">
    <div className="  mx-auto">
        <div className="  z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            


            <main className=" mt-10 mx-auto max-w-7xl px-4 sm:mt-12 md:mt-16 lg:mt-20  xl:mt-28">
                <div className="sm:text-center lg:text-left">
                    <p className="text-gray-600 text-lg leading-wide tracking-wide ">Boch Beauty and Skincare World Founder & skincare formulator </p>
                    <h2 className="my-6 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                       Meet Chinenye Ngwu (chiri)
                    </h2>

                    <p className="text-lg text-gray-700 font-playfair leading-relaxed mb-6">
                    As a skincare expert and beauty therapist, I was inspired by the organic products that helped fix my skin issues. This led me to study scientifically backed formulations to properly address and maintain healthy skin. Now, I’ve decided to share this knowledge with all of you!
                    </p>
                </div>
                <Button className="mt-6 bg-[#8c2643] capitalize"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}><a href="https://wa.me/+905384085304?text=Hello%2C%20I%27m%20interested%20in%20your%20services%21">Book Appointment</a></Button>
            </main>
        </div>
    </div>
    <div className=" w-full max-w-md h-42 flex items-center justify-center ">
        <img className="w-full  object-cover rounded-lg object-center   " src={Face} alt="" />
    </div>
</div>
    </div>
  )
}

export default BrandFace
