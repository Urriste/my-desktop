//React Imports
import { React, Fragment } from "react";
import ReactDom from "react-dom";

//Internal Imports
import Item from "../folderAsideItem/AsideItem";
import "./folderModal.scss";

function FolderModal({ children, title, img, open, onClose }) {
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
          <div className="icons-container">{children}</div>
        </div>
      </div>
    </Fragment>,
    document.getElementById("portal")
  );
}

export default FolderModal;
