import { useState, useEffect } from "react";

const DelayedFallback = ({ delay }: { delay: number }) => {
  const [isDelayed, setIsDelayed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDelayed(true); // Update the state after the delay
    }, 1500);

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, [delay]);

  if (!isDelayed) {
    return null; // Don't render anything until the delay has passed
  }

  // Once delay is over, render the fallback UI
  return (
    <div className="flex items-center justify-center h-screen bg-[#811f55]">
      <div className="text-center">
        <div className="text-4xl font-bold text-gray-100 dark:text-gray-200">
          Loading...
        </div>
      </div>
    </div>
  );
};

export default DelayedFallback;
