import { connect, useSelector } from "react-redux";
import {
  LAYOUT_TYPE_CLASSIC,
  LAYOUT_TYPE_MODERN,
  LAYOUT_TYPE_STACKED_SIDE,
  LAYOUT_TYPE_DECKED,
  LAYOUT_TYPE_SIMPLE,
  LAYOUT_TYPE_BLANK,
} from "@/constants/theme.constant";
import dynamic from "next/dynamic";

function useLayout() {
  const layouts = {
    [LAYOUT_TYPE_CLASSIC]: dynamic(
      () => import("@/components/layout/ClassicLayout"),
      {
        ssr: false,
      }
    ),
    [LAYOUT_TYPE_MODERN]: dynamic(
      () => import("@/components/layout/ModernLayout"),
      {
        ssr: false,
      }
    ),
    [LAYOUT_TYPE_STACKED_SIDE]: dynamic(
      () => import("@/components/layout/StackedSideLayout"),
      {
        ssr: false,
      }
    ),
    [LAYOUT_TYPE_SIMPLE]: dynamic(
      () => import("@/components/layout/SimpleLayout"),
      {
        ssr: false,
      }
    ),
    [LAYOUT_TYPE_DECKED]: dynamic(
      () => import("@/components/layout/DeckedLayout"),
      {
        ssr: false,
      }
    ),
    [LAYOUT_TYPE_BLANK]: dynamic(
      () => import("@/components/layout/BlankLayout"),
      {
        ssr: false,
      }
    ),
  };
  const layoutType = useSelector((state) => state?.theme?.layout?.type);

  return layouts[layoutType];
}

export default useLayout;
