//React Imports
import { React, Fragment } from "react";

//Internal Imports
import "./icon.scss";

const Icon = ({ img, text, click }) => {
  return (
    <Fragment>
      <div className="icon-box" onClick={click}>
        <img src={img} alt="icon" className="icon-img" />
        <p className="icon-text">{text}</p>
      </div>
    </Fragment>
  );
};

export default Icon;
