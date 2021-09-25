import { React, Fragment } from "react";
import ReactDom from "react-dom";
import "./modal.scss";

function ModalSkills({ img, open, onClose }) {
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
        <div className="text-container">
          {" "}
          <p className="modal-text">
            Hola! Mi nombre es Lucas Urriste. <br />
            Tengo 19 años, y soy desarrollador Frontend. <br />
            Hace más de un año que empecé con este camino de la programación{" "}
            <br />
            con la ilusión de crear cosas desde 0 , <br />
            ¡Y acá andamos!
          </p>
        </div>
      </div>
    </Fragment>,
    document.getElementById("portal")
  );
}

export default ModalSkills;
