import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Image from "next/image";
import { APP_NAME } from "constants/app.constant";
import image from "../../public/img/logo/logo-light-full.png";
import image1 from "../../public/img/logo/logo-dark-full.png";
import { THEME_ENUM } from "constants/theme.constant";
const { MODE_DARK } = THEME_ENUM;
const LOGO_SRC_PATH = "/../../public/img/logo/";

const Logo = (props) => {
  const { type, mode, gutter, className, imgClass, style, logoWidth } = props;

  return (
    <div
      className={classNames("logo", className, gutter)}
      style={{
        ...style,
        ...{ width: logoWidth },
      }}
    >
      <Image
        className={imgClass}
        src={mode == MODE_DARK ? image1 : image}
        alt={`${APP_NAME} logo`}
        width={110}
        height={110}
      />
    </div>
  );
};

Logo.defaultProps = {
  mode: "light",
  type: "full",
  logoWidth: "auto",
};

Logo.propTypes = {
  mode: PropTypes.oneOf(["light", "dark"]),
  type: PropTypes.oneOf(["full", "streamline"]),
  gutter: PropTypes.string,
  imgClass: PropTypes.string,
  logoWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Logo;
