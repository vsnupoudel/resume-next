import { useState, useEffect } from "react";

const useDeviceType = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check screen width on initial render
    const checkDeviceType = () => {
      setIsMobile(window.innerWidth <= 768); // 768px is a common breakpoint for mobile devices
    };

    // Check on initial load
    checkDeviceType();

    // Add event listener for window resize
    window.addEventListener("resize", checkDeviceType);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", checkDeviceType);
  }, []);

  return isMobile;
};

export default useDeviceType;