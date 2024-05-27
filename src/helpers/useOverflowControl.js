import { useEffect } from "react";

function useOverflowControl(sidebarOpen) {
  useEffect(() => {
    if (sidebarOpen) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "";
    }
  }, [sidebarOpen]);
}

export default useOverflowControl;
