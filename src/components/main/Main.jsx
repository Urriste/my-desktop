//React imports
import { React, Fragment } from "react";

//Internal imports
import "./main.scss";
import windowsLogo from "../../img/windows.png";

//External imports
import { useHistory } from "react-router";

function Main() {
  let today = new Date();
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <Fragment>
      <div className="main-container">
        <footer className="footer">
          <div className="start" onClick={handleClick}>
            <img className="windows-logo" src={windowsLogo} alt="windows" />
            <p className="start-text">Inicio</p>
          </div>
          <div className="hour">
            <p className="hour-text">
              {`${today.getHours()}:${
                today.length > 1 ? today.getMinutes() : "0" + today.getMinutes()
              } `}{" "}
            </p>
          </div>
        </footer>
      </div>
    </Fragment>
  );
}

export default Main;
