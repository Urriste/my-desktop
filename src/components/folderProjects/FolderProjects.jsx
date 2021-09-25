//React Imports
import { React, Fragment } from "react";

//Internal Imports
import "./folderProjects.scss";

function FolderProjects({ img, text, link }) {
  return (
    <Fragment>
      <a href={link} target="_blank" className="folder-projects">
        <img src={img} alt="icon" className="folder-projects__img" />
        <p className="folder-projects__text">{text}</p>
      </a>
    </Fragment>
  );
}

export default FolderProjects;
