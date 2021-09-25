import { React, Fragment } from "react";

import "./folderIcon.scss";

function folderIcon({ img, text }) {
  return (
    <Fragment>
      <div className="folder-icon">
        <img src={img} alt="icon" className="icon-img" />
        <p className="folder-icon__text">{text}</p>
      </div>
    </Fragment>
  );
}

export default folderIcon;
