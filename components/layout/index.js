import React, { memo, useMemo, lazy, Suspense, Children } from "react";
import { Loading } from "components/shared";

import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import {
  LAYOUT_TYPE_CLASSIC,
  LAYOUT_TYPE_MODERN,
  LAYOUT_TYPE_SIMPLE,
  LAYOUT_TYPE_STACKED_SIDE,
  LAYOUT_TYPE_DECKED,
  LAYOUT_TYPE_BLANK,
} from "constants/theme.constant";
import useAuth from "utils/hooks/useAuth";
// const Loading = dynamic(() => import("components/shared"), {
//   ssr: false,
// });

// const useDirection = dynamic(() => import("utils/hooks/useDirection"), {
//   ssr: false,
// });
import useDirection from "utils/hooks/useDirection";
import useLocale from "utils/hooks/useLocale";
// const useLocale = dynamic(() => import("utils/hooks/useLocale"), {
//   ssr: false,
// });
const layouts = {
  [LAYOUT_TYPE_CLASSIC]: dynamic(() => import("./ClassicLayout"), {
    ssr: false,
  }),
  [LAYOUT_TYPE_MODERN]: dynamic(() => import("./ModernLayout"), {
    ssr: false,
  }),
  [LAYOUT_TYPE_STACKED_SIDE]: dynamic(() => import("./StackedSideLayout"), {
    ssr: false,
  }),
  [LAYOUT_TYPE_SIMPLE]: dynamic(() => import("./SimpleLayout"), {
    ssr: false,
  }),
  [LAYOUT_TYPE_DECKED]: dynamic(() => import("./DeckedLayout"), {
    ssr: false,
  }),
  [LAYOUT_TYPE_BLANK]: dynamic(() => import("./BlankLayout"), {
    ssr: false,
  }),
};

const Layout = ({ children }) => {
  const layoutType = useSelector((state) => state.theme.layout.type);

  const { authenticated } = useAuth();

  useDirection();

  useLocale();

  const AppLayout = useMemo(() => {
    if (authenticated) {
      return layouts[layoutType];
    }
    return dynamic(() => import("./AuthLayout"));
  }, [layoutType, authenticated]);

  return (
    <Suspense
      fallback={
        <div className="flex flex-auto flex-col h-[100vh]">
          <Loading loading={true} />
        </div>
      }
    >
      <AppLayout></AppLayout>
    </Suspense>
  );
};

export default memo(Layout);
