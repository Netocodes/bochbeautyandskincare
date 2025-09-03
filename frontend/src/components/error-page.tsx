import { Button } from "@material-tailwind/react";
import Errorsvg from "../assets/error.svg";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div>
      <div className="grid h-screen place-content-center bg-white px-4">
        <div className="text-center">
          <img
            className="mx-auto h-56 w-auto text-black sm:h-64"
            src={Errorsvg}
            alt=""
          />
          <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            404 - Page Not Found
          </h1>

          <p className="mt-4 text-gray-500">We can't find that page.</p>
          <div className="mt-5">
            <Link to={"/"}>
              <Button
                className="bg-[#8c2643]"
                children={"Go back to Homepage"}
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
