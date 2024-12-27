function SlidingText() {
  return (
    <div className="relative w-full overflow-hidden bg-gray-900 h-24">
      {/* Container for the sliding text */}
      <div
        className=" absolute  flex items-center justify-center mt-5 whitespace-nowrap animate-slide-in"
        style={{ fontFamily: "Arial, sans-serif" }}
      >
        <span className="text-white text-2xl text-center sm:text-3xl lg:text-5xl font-semibold">
          We deliver worldwide, including Nigeria, Turkey, and more. Get free
          deliveries on select products.
        </span>
      </div>
    </div>
  );
}

export default SlidingText;
