import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { THEME_ENUM } from "constants/theme.constant";
import Image from "next/image";
const { MODE_DARK } = THEME_ENUM;

const DoubleSidedImage = ({ src, darkModeSrc, alt, ...rest }) => {
  const mode = useSelector((state) => state.theme.mode);

  return (
    <Image
      src={mode === MODE_DARK ? darkModeSrc : src}
      alt={alt}
      {...rest}
      width={40}
      height={40}
    />
  );
};

DoubleSidedImage.propTypes = {
  darkModeSrc: PropTypes.string,
};

export default DoubleSidedImage;
