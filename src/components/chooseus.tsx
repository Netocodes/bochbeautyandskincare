import { FaLeaf } from "react-icons/fa6";
import { RxTimer } from "react-icons/rx";
import { LiaShippingFastSolid } from "react-icons/lia";
import { GrMoney } from "react-icons/gr";
const ChooseUs = () => {
  return (
    <div>
      <section className="mt-12 ">
        <div className="max-w-[85rem] mx-auto py-5">
          <h2 className="text-4xl md:text-6xl font-semibold leading-tight text-center">
            Why Choose Us
          </h2>
        </div>

        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12">
            <div className="text-center hover:outline-dashed">
              <div className="flex justify-center items-center size-12 bg-gray-50/50 border border-gray-200 rounded-full mx-auto dark:bg-neutral-800 dark:border-neutral-700">
                <FaLeaf className="size-80" />
              </div>
              <div className="mt-3">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  100% Natural
                </h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                  Responsive, and mobile-first project on the web
                </p>
              </div>
            </div>

            <div className="text-center hover:outline-dashed">
              <div className="flex justify-center items-center size-12 bg-gray-50 border border-gray-200 rounded-full mx-auto dark:bg-neutral-800 dark:border-neutral-700">
                <RxTimer className="size-80" />
              </div>
              <div className="mt-3">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  Quick Order
                </h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                  Components are easily customized and extendable
                </p>
              </div>
            </div>

            <div className="text-center hover:outline-dashed">
              <div className="flex justify-center items-center size-12 bg-gray-50 border border-gray-200 rounded-full mx-auto dark:bg-neutral-800 dark:border-neutral-700">
                <LiaShippingFastSolid className="size-80" />
              </div>
              <div className="mt-3">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  Fast Delivery
                </h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                  Every component and plugin is well documented
                </p>
              </div>
            </div>

            <div className="text-center hover:outline-dashed">
              <div className="flex justify-center items-center size-12 bg-gray-50 border border-gray-200 rounded-full mx-auto dark:bg-neutral-800 dark:border-neutral-700">
                <GrMoney className="size-80" />
              </div>
              <div className="mt-3">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  Best Prices
                </h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                  Every component and plugin is well documented
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChooseUs;
