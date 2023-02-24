import { useEffect, useState } from "react";
import { theme } from "twin.macro";

const twBreakpoint = theme`screens`;

const breakpointInt = (str = "") => {
  return parseInt(str.replace("px", ""));
};

const breakpoint = {
  "2xl": breakpointInt(twBreakpoint["2xl"]), // 1536
  xl: breakpointInt(twBreakpoint.xl), // 1280
  lg: breakpointInt(twBreakpoint.lg), // 1024
  md: breakpointInt(twBreakpoint.md), // 768
  sm: breakpointInt(twBreakpoint.sm), // 640
  xs: breakpointInt(twBreakpoint.xs), // 576
};

const useResponsive = () => {
  const getAllSizes = (comparator = "smaller") => {
    try {
      const currentWindowWidth = window.innerWidth;
      return Object.fromEntries(
        Object.entries(breakpoint).map(([key, value]) => [
          key,
          comparator === "larger"
            ? currentWindowWidth > value
            : currentWindowWidth < value,
        ])
      );
    } catch (err) {
      console.log(err);
    }
  };

  const getResponsiveState = () => {
    try {
      const currentWindowWidth = window.innerWidth;
      return {
        windowWidth: currentWindowWidth,
        larger: getAllSizes("larger"),
        smaller: getAllSizes("smaller"),
      };
    } catch (err) {
      console.log(err);
    }
  };

  const [responsive, setResponsive] = useState(getResponsiveState());

  const resizeHandler = () => {
    const responsiveState = getResponsiveState();
    setResponsive(responsiveState);
  };

  useEffect(() => {
    try {
      window.addEventListener("resize", resizeHandler);
      return () => window.removeEventListener("resize", resizeHandler);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    } catch (err) {
      console.log(err);
    }
  }, [responsive.windowWidth]);

  return responsive;
};

export default useResponsive;
