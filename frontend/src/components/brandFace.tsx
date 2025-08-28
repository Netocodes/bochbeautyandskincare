import { Button } from "@material-tailwind/react";
import Face from "../assets/face.png";
import Threads from "../blocks/Backgrounds/Threads/Threads";
import { FaWhatsapp } from "react-icons/fa";

const BrandFace = () => {
  return (
    <div className="relative bg-[#f6f6f6] py-12">
      <div
        className="z-10 bottom-0"
        style={{ width: "100%", height: "200px", position: "absolute" }}
      >
        <Threads
          amplitude={4.3}
          distance={1.0}
          enableMouseInteraction={false}
        />
      </div>
      <div className="max-w-[65rem] mx-auto px-4 grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-8 items-center py-12">
        <main className=" mx-auto ">
          <div className="sm:text-center lg:text-left">
            <p className="text-gray-600 text-lg leading-wide tracking-wide ">
              Boch Beauty and Skincare World Founder & skincare formulator{" "}
            </p>
            <h2 className="my-6 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
              Meet Chinenye Ngwu (chiri)
            </h2>

            <p className="text-lg text-gray-800 font-playfair leading-relaxed mb-6">
              Let’s be real: good skincare shouldn’t require a chemistry degree
              or blind faith. After years of helping clients (and fixing my own
              problematic skin), I make simple-but-smart products that do what
              they promise—no smoke and mirrors, just results you can see and
              feel.
            </p>
          </div>
          <Button
            className="mt-6 bg-[#8c2643] capitalize"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <a
              href="https://wa.me/+905384085304?text=Hello%2C%20I%27m%20interested%20in%20your%20services%21"
              className="flex gap-x-1"
            >
              <FaWhatsapp className="size-4" /> Book Appointment
            </a>
          </Button>
        </main>

        <div className=" w-full h-[200px] flex items-center justify-center ">
          <img
            className="w-full h-full object-cover rounded-lg object-center   "
            src={Face}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default BrandFace;
