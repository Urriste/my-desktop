//React imports
import { React, Fragment, useState } from "react";

//Internal imports
import "./main.scss";
import windowsLogo from "../../img/windows.png";
import aboutMeIcon from "../../img/blocnotas.png";
import folderIcon from "../../img/projects.png";
import openFolderIcon from "../../img/open.ico";

//External imports
import { useHistory } from "react-router";

import Icon from "../icon/Icon";
import ModalAbout from "../modalAbout/ModalAbout";
import FolderModal from "../folderModal/FolderModal";

function Main() {
  let today = new Date();
  const history = useHistory();

  const [isAboutOpen, setIsAboutOpen] = useState();
  const [isSkillsOpen, setIsSkillsOpen] = useState();

  const onAboutClose = () => {
    setIsAboutOpen(false);
  };

  const onAboutOpen = () => {
    setIsAboutOpen(true);
  };

  const onSkillsClose = () => {
    setIsSkillsOpen(false);
  };

  const onSkillsOpen = () => {
    setIsSkillsOpen(true);
  };

  const handleClick = () => {
    history.push("/");
  };

  return (
    <Fragment>
      <div className="main-container">
        <div className="icons-container">
          <Icon click={onAboutOpen} img={aboutMeIcon} text={"Sobre mi"}></Icon>
          <ModalAbout
            img={aboutMeIcon}
            open={isAboutOpen}
            onClose={onAboutClose}
          ></ModalAbout>

          <Icon click={onSkillsOpen} img={folderIcon} text={"Skills"}></Icon>
          <FolderModal
            img={folderIcon}
            open={isSkillsOpen}
            onClose={onSkillsClose}
            title={"Skills"}
          ></FolderModal>

          <Icon img={folderIcon} text={"Proyectos"}></Icon>
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
            {isSkillsOpen && (
              <div className="img-container">
                <img src={openFolderIcon} alt="icon" className="footer-img" />
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
