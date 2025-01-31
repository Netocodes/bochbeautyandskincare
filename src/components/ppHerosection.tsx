const Herosection = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-indigo-900 to-purple-900  font-[sans-serif]">
        <div className="relative overflow-hidden">
          <div className="max-w-screen-xl mx-auto py-16 px-4 sm:px-6 lg:py-32 lg:px-8">
            <div className="relative z-10 text-center lg:text-left">
              <h1 className="text-4xl tracking-tight leading-10 font-extrabold text-white sm:text-5xl sm:leading-none md:text-6xl lg:text-7xl">
                Welcome to
                <br className="xl:hidden" />
                <span className="text-indigo-400"> Premium Delights</span>
              </h1>
              <p className="max-w-md mx-auto text-lg text-gray-300 sm:text-xl mt-4 md:mt-6 md:max-w-3xl">
                Elevate your culinary experience with our exclusive premium
                services. Indulge in exquisite flavors and extraordinary
                moments.
              </p>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src="https://i.pinimg.com/736x/93/af/44/93af446a185deb1a5a1e873c751505f4.jpg"
              alt="Delicious Food"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
