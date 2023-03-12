import React from "react";
import { DoubleSidedImage } from "components/shared";
// import image from "../../../../"
import image from "../../../../../public/img/logo/logo-light-full.png";
const Example = () => {
  return (
    <DoubleSidedImage
      src={image}
      darkModeSrc="../../../../../public/img/logo/logo-dark-full.png"
      alt="elstar"
    />
  );
};

export default Example;
