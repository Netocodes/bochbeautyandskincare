import { Button } from "@material-tailwind/react";
import { Carousel } from "flowbite-react";
import { FaRegCircleLeft, FaRegCircleRight } from "react-icons/fa6";

const TestimonalPage = () => {
  return (
    <div className="py-12">
      <div className="w-full md:w-1/3 mx-auto px-3 py-4 bg-[#8c2643] ">
        <h2 className="text-lg text-center text-gray-200 font-bold tracking-tight font-sans">
        Some of our favorite responses.
        </h2>
      </div>
      <div className="max-w-[95rem] mx-auto bg-gray-500 h-[70dvh]  md:h-[80dvh] lg:h-[80dvh]">
        <Carousel
          indicators
          leftControl={<FaRegCircleLeft className="text-white/75" size={32} />}
          rightControl={
            <FaRegCircleRight className="text-white/75" size={32} />
          }
        >
          {/* First Testimonial */}
          <div className="flex h-dvh bg-center bg-cover bg-[url('https://i.pinimg.com/736x/4b/33/87/4b3387c5f0d799e121fa7c2f554e5ac1.jpg')] items-center justify-center">
            <div className="max-w-[85rem] px-8 py-10 sm:px-6 lg:px-14 lg:py-200 mx-auto">
              <div className="md:grid md:grid-cols-1 lg:grid-cols-2 md:gap-10 lg:gap-16 md:items-center">
                <div className="hidden md:hidden lg:block  mb-24 md:mb-0 sm:px-6">
                  <div className="relative flex items-center justify-center w-[450px] h-[350px]">
                    <img
                      className="rounded-xl object-cover"
                      src="https://res.cloudinary.com/de7tyskql/image/upload/c_fill,g_auto,h_500,w_500/f_auto/q_auto/elegance-body-scrub-2?_a=DATAg1AAZAA0"
                      alt="Avatar"
                    />
                  </div>
                </div>

                <div>
                  <blockquote className="relative  bg-black/45  mx-auto py-12 px-6">
                    <svg
                      className="absolute top-0 start-0 transform -translate-x-8 -translate-y-4 size-24 text-gray-200/50 dark:text-neutral-700"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                        fill="currentColor"
                      />
                    </svg>

                    <div className="relative z-10">
                      <p className="text-lg font-semibold text-gray-100 tracking-wide uppercase mb-3 dark:text-neutral-200">
                        Skincare Clients
                      </p>

                      <p className="text-xl font-medium px-4 italic text-gray-200 text-justify md:text-2xl md:leading-normal xl:text-3xl xl:leading-normal dark:text-neutral-200">
                      "Hey sis, I used the body scrub yesterday, and my skin feels incredibly soft—even softer than usual! It’s amazing! Where have you been all my life, especially here in Turkey? This scrub is a game-changer!"
                      </p>
                    </div>

                    <div className="mt-8 lg:mt-14">
                      <Button
                        children="Read More"
                        className="bg-red-500"
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                      />
                    </div>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
          {/* Second Testimonial */}
          <div className="flex h-full bg-center bg-cover bg-[url('https://i.pinimg.com/736x/84/2c/4c/842c4c3938e9e7ad1b1dd70ee0d6145f.jpg')] items-center justify-center">
            <div className="max-w-[85rem] px-8 py-10 sm:px-6 lg:px-14 lg:py-20 mx-auto">
              <div className="md:grid md:grid-cols-2 md:gap-10 lg:gap-16 md:items-center">
                <div className="hidden md:block  md:mb-0 sm:px-6">
                  <div className="relative flex items-center justify-center w-[450px] h-[350px]">
                    <img
                      className="rounded-xl"
                      src="https://res.cloudinary.com/de7tyskql/image/upload/c_fill,g_auto,h_500,w_500/f_auto/q_auto/facial-cleanser-and-cream?_a=DATAg1AAZAA0"
                      alt="Avatar"
                    />
                  </div>
                </div>

                <div>
                  <blockquote className="relative  bg-black/45 mx-auto py-12 px-6">
                    <svg
                      className="absolute top-0 start-0 transform -translate-x-8 -translate-y-4 size-24 text-gray-200/50 dark:text-neutral-700"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                        fill="currentColor"
                      />
                    </svg>

                    <div className="relative z-10">
                      <p className="text-lg font-semibold text-gray-100 tracking-wide uppercase mb-3 dark:text-neutral-200">
                        Skincare Clients
                      </p>

                      <p className="text-xl font-medium px-4 italic text-gray-200 text-justify md:text-2xl md:leading-normal xl:text-3xl xl:leading-normal dark:text-neutral-200">
                      "Your products are truly one-of-a-kind—trust me! Of course, I’m coming back this month. I can’t get enough of how amazing they are!"
                      </p>
                    </div>

                    <div className="mt-8 lg:mt-14">
                      <Button
                        children="Read More"
                        className="bg-red-500"
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                      />
                    </div>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
          {/* Third Testimonial */}
          <div className="flex h-full bg-center bg-cover bg-[url('https://i.pinimg.com/736x/f1/5d/fb/f15dfb52bb930512c255b06e7d53d91b.jpg')] items-center justify-center">
            <div className="max-w-[85rem] px-8 py-10 sm:px-6 lg:px-14 lg:py-20 mx-auto">
              <div className="md:grid md:grid-cols-2 md:gap-x-6 lg:gap-16 md:items-center">
                <div className="hidden md:block mb-24 md:mb-0 sm:px-6">
                  <div className="relative flex items-center justify-center w-[450px] h-[250px]">
                    <img
                      className="rounded-xl"
                      src="https://res.cloudinary.com/de7tyskql/image/upload/f_auto/q_auto/glam-glow-face?_a=DATAg1AAZAA0"
                      alt="Avatar"
                    />
                  </div>
                </div>

                <div>
                  <blockquote className="relative  bg-black/45 mx-auto py-12 px-6">
                    <svg
                      className="absolute top-0 start-0 transform -translate-x-8 -translate-y-4 size-24 text-gray-200/50 dark:text-neutral-700"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                        fill="currentColor"
                      />
                    </svg>

                    <div className="relative z-10">
                      <p className="text-lg font-semibold text-gray-100 tracking-wide uppercase mb-3 dark:text-neutral-200">
                        Skincare Clients
                      </p>

                      <p className="text-xl font-medium px-4  italic text-gray-200 text-justify md:text-2xl md:leading-normal xl:text-3xl xl:leading-normal dark:text-neutral-200">
                      "I just want to tell you how incredibly happy I am with your products—honestly, all I know is that I’m absolutely loving my skin right now!"
                      </p>
                    </div>

                    <div className="mt-8 lg:mt-14">
                      <Button
                        children="Read More"
                        className="bg-red-500"
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                      />
                    </div>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default TestimonalPage;
