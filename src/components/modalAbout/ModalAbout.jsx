//React Imports
import { React, Fragment } from "react";
import ReactDom from "react-dom";

//Internal Imports
import "./modal.scss";

function ModalAbout({ img, open, onClose }) {
  if (!open) return null;
  return ReactDom.createPortal(
    <Fragment>
      <div className="modal">
        <header className="header">
          <div className="header-text__container">
            <img src={img} alt="icon" className="header-img" />
            <p className="header-text">Sobre Mi - Bloc de notas </p>
          </div>

          <button className="close-btn" onClick={onClose}>
            X
          </button>
        </header>
        <div className="subheader">
          <p className="subheader-text">Archivo</p>
          <p className="subheader-text">Edición</p>
          <p className="subheader-text">Formato</p>
          <p className="subheader-text">Ver</p>

          <p className="subheader-text">Ayuda</p>
        </div>
        <div className="text-container">
          {" "}
          <p className="modal-text">
            Hola! Mi nombre es Lucas Urriste. <br />
            Tengo 19 años, y soy desarrollador Frontend. <br />
            Hace más de un año que empecé con este camino de la programación{" "}
            <br />
            con la ilusión de crear cosas desde 0 , <br />
            ¡Y acá andamos! <br />
            <br />
            ¿Queres saber más sobre mi? <br />
            Escribime en:
            <br />
            <ul>
              <li>
                {" "}
                <a href="https://linkedin.com/in/urriste" target="_blank">
                  Linkedin
                </a>
              </li>
              <li>
                <a href="mailto: lukeu2002@gmail.com">Email</a>
              </li>
            </ul>
          </p>
        </div>
      </div>
    </Fragment>,
    document.getElementById("portal")
  );
}

export default ModalAbout;
