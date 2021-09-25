//React imports
import { React, Fragment, useState } from "react";

//Internal imports
import "./main.scss";
import windowsLogo from "../../img/windows.png";
import aboutMeIcon from "../../img/blocnotas.png";
import skillsIcon from "../../img/skills.png";
import projectsIcon from "../../img/projects.png";
import contactIcon from "../../img/contact.png";

//External imports
import { useHistory } from "react-router";

import Icon from "../icon/Icon";
import ModalSkills from "../modal/ModalSkills";

function Main() {
  let today = new Date();
  const history = useHistory();

  const [isAboutOpen, setIsAboutOpen] = useState();

  const onClose = () => {
    setIsAboutOpen(false);
  };

  const onOpen = () => {
    setIsAboutOpen(true);
  };

  const handleClick = () => {
    history.push("/");
  };

  return (
    <Fragment>
      <div className="main-container">
        <div className="icons-container">
          <Icon click={onOpen} img={aboutMeIcon} text={"Sobre mi"}></Icon>
          <ModalSkills
            img={aboutMeIcon}
            open={isAboutOpen}
            onClose={onClose}
          ></ModalSkills>

          <Icon img={skillsIcon} text={"Skills"}></Icon>

          <Icon img={projectsIcon} text={"Proyectos"}></Icon>
          <Icon img={contactIcon} text={"Contacto"}></Icon>
        </div>

        <footer className="footer">
          <div className="start" onClick={handleClick}>
            <img className="windows-logo" src={windowsLogo} alt="windows" />
            <p className="start-text">Inicio</p>
          </div>
          <div className="icon-open__container">
            {isAboutOpen && (
              <div className="img-container">
                <img src={aboutMeIcon} alt="icon" className="footer-img" />
              </div>
            )}
          </div>
          <div className="hour">
            <p className="hour-text">
              {`${today.getHours()}:${
                today.getMinutes() < 9
                  ? "0" + today.getMinutes()
                  : today.getMinutes()
              } ${today.getHours() < 12 ? "AM" : "PM"} `}{" "}
            </p>
          </div>
        </footer>
      </div>
    </Fragment>
  );
}

export default Main;
