import { React, Fragment } from "react";
import "./login.scss";
import myDesktopLogo from "../../img/mydesktop2.png";
import meImg from "../../img/yo.jpeg";
import powerOffImg from "../../img/poweroff.png";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/inicio");
  };

  const handlePowerOff = () => {
    window.open("", "_self");
    window.close();
  };

  return (
    <Fragment>
      <div className="login-container">
        <header className="header"></header>
        <div className="left-side">
          <img src={myDesktopLogo} alt="windows" />
        </div>
        <div className="right-side">
          <div className="user-cta" onClick={handleClick}>
            <img className="me-img" src={meImg} alt="yo" />
            <p className="user-text">
              Lucas Urriste <br />{" "}
              <span className="login-span">
                {" "}
                <i>Iniciar Sesion</i>{" "}
              </span>
            </p>
          </div>
        </div>

        <footer className="footer">
          <div className="poweroff-message" onClick={handlePowerOff}>
            <img className="poweroff-img" src={powerOffImg} alt="poweroff" />
            <p className="poweroff-text">Apagar equipo</p>
          </div>
        </footer>
      </div>
    </Fragment>
  );
}

export default Login;
