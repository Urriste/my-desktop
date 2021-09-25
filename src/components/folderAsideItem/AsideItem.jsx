//React Imports
import { React, Fragment } from "react";

//Internal Imports
import "./asideItem.scss";

function AsideItem({ text }) {
  return (
    <Fragment>
      <div className="item">
        <p className="item-text">{text}</p>
      </div>
    </Fragment>
  );
}

export default AsideItem;
