import { useEffect } from 'react';

const useLockBodyScroll = () => {
  useEffect(() => {
    // Get the original body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow;

    // Prevent scrolling on mount
    document.body.style.overflow = 'hidden';

    // Re-enable scrolling when the component unmounts
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []); // Empty dependency array ensures effect is only run on mount and unmount
};

export default useLockBodyScroll;
