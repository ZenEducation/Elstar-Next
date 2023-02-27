import React, { useEffect, useCallback } from "react";
import { setLayout, setPreviousLayout } from "store/theme/themeSlice";
import { setCurrentRouteKey } from "store/base/commonSlice";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useRouter } from "next/router";

const AppRoute = ({ component: Component, routeKey, ...props }) => {
  const location = useRouter();

  const dispatch = useDispatch();

  const layoutType = useSelector((state) => state.theme.layout.type);
  const previousLayout = useSelector(
    (state) => state.theme.layout.previousType
  );

  const handleLayoutChange = useCallback(() => {
    dispatch(setCurrentRouteKey(routeKey));

    if (props.layout && props.layout !== layoutType) {
      dispatch(setPreviousLayout(layoutType));
      dispatch(setLayout(props.layout));
    }

    if (!props.layout && previousLayout && layoutType !== previousLayout) {
      dispatch(setLayout(previousLayout));
      dispatch(setPreviousLayout(""));
    }
  }, [dispatch, layoutType, previousLayout, props.layout, routeKey]);

  useEffect(() => {
    handleLayoutChange();
  }, [location, handleLayoutChange]);

  return <Component {...props} />;
};

export default AppRoute;
