import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { HEADER_HEIGHT_CLASS } from "constants/theme.constant";

const Header = (props) => {
  // const { headerStart, headerEnd, headerMiddle, className, container } = props

  return (
    <header className={classNames("header", props.className)}>
      <div
        className={classNames(
          "header-wrapper",
          HEADER_HEIGHT_CLASS,
          props.container && "container mx-auto"
        )}
      >
        <div className="header-action header-action-start">
          {props.headerStart}
        </div>
        {props.headerMiddle && (
          <div className="header-action header-action-middle">
            {props.headerMiddle}
          </div>
        )}
        <div className="header-action header-action-end">{props.headerEnd}</div>
      </div>
    </header>
  );
};

Header.propTypes = {
  headerStart: PropTypes.node,
  headerEnd: PropTypes.node,
  container: PropTypes.bool,
};

export default Header;
