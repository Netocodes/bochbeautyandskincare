const Loadingscreen = () => {
  return (
    <div className=" bg-black relative w-full h-screen overflow-x-hidden">
      <div className="absolute inset-0  z-50 flex items-center justify-center">
        <div className="w-20 h-20 border-8 border-t-8 text-white border-gray-200 rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Loadingscreen;
