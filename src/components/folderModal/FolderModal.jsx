import { React, Fragment } from "react";
import ReactDom from "react-dom";
import Item from "../folderAsideItem/AsideItem";
import FolderIcon from "../folderIcon/FolderIcon";
import "./folderModal.scss";
import htmlIcon from "../../img/skills/html-5.png";
import cssIcon from "../../img/skills/css-3.png";
import angularIcon from "../../img/skills/angular.png";
import gitIcon from "../../img/skills/git.svg";
import jsIcon from "../../img/skills/js.png";
import reactIcon from "../../img/skills/react.png";

import bootstrapIcon from "../../img/skills/bootstrap.png";

function FolderModal({ title, img, open, onClose }) {
  if (!open) return null;
  return ReactDom.createPortal(
    <Fragment>
      <div className="modal">
        <header className="header">
          <div className="header-text__container">
            <img src={img} alt="icon" className="header-img" />
            <p className="header-text">{title} </p>
          </div>

          <button className="close-btn" onClick={onClose}>
            X
          </button>
        </header>
        <div className="subheader">
          <p className="subheader-text">Archivo</p>
          <p className="subheader-text">Edición</p>
          <p className="subheader-text">Ver</p>
          <p className="subheader-text">Favoritos</p>
          <p className="subheader-text">Herramientas</p>
          <p className="subheader-text">Ayuda</p>
        </div>
        <div className="content-container">
          <aside className="aside">
            <Item text={"Tareas de archivo"}></Item>
            <Item text={"Otros sitios"}></Item>
            <Item text={"Detalles"}></Item>
          </aside>
          <div className="icons-container">
            <FolderIcon text={"HTML"} img={htmlIcon}></FolderIcon>
            <FolderIcon text={"CSS"} img={cssIcon}></FolderIcon>
            <FolderIcon text={"Bootstrap"} img={bootstrapIcon}></FolderIcon>
            <FolderIcon text={"Javascript"} img={jsIcon}></FolderIcon>
            <FolderIcon text={"React"} img={reactIcon}></FolderIcon>
            <FolderIcon text={"Angular"} img={angularIcon}></FolderIcon>
            <FolderIcon text={"Git"} img={gitIcon}></FolderIcon>
          </div>
        </div>
      </div>
    </Fragment>,
    document.getElementById("portal")
  );
}

export default FolderModal;
