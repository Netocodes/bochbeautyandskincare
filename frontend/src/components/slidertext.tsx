function SlidingText() {
  return (
    <div className="relative w-full overflow-hidden bg-gray-900 h-8 py-8 text-center">
      {/* Container for the sliding text */}
      <div
        className=" absolute top-5  flex items-center text-center py-auto justify-center whitespace-nowrap animate-slide-in"
        style={{ fontFamily: "Arial, sans-serif" }}
      >
        <span className="text-white text-xl text-center leading-tight sm:text-xl lg:text-xl font-semibold">
          We deliver worldwide, including Nigeria, Turkey, and more. Get free
          deliveries on select products.
        </span>
      </div>
    </div>
  );
}

export default SlidingText;
