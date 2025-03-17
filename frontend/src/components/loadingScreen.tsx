const Loadingscreen = () => {
  return (
    <div className=" bg-[#8c2643] relative w-full h-screen overflow-x-hidden">
      <div className="absolute inset-0  z-50 flex items-center justify-center">
        <div className="loader"></div>
      </div>
    </div>
  );
};

export default Loadingscreen;
