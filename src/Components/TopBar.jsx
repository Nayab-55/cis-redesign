import { useEffect, useRef } from "react";

function TopBar() {
  const topbarRef = useRef(null);

  useEffect(() => {
    const setHeight = () => {
      if (topbarRef.current) {
        const height = topbarRef.current.offsetHeight;
        document.documentElement.style.setProperty(
          "--topbar-height",
          `${height}px`
        );
      }
    };

    setHeight();
    window.addEventListener("resize", setHeight);
    return () => window.removeEventListener("resize", setHeight);
  }, []);

  return (
    <div className="topbar" ref={topbarRef}>
      <span>Welcome to CIS Pvt Ltd.</span>
      <span>Company of Innovative Solutions & Networks Research</span>
    </div>
  );
}

export default TopBar;