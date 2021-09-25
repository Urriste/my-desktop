//React imports
import { React, Fragment, useState, useEffect } from "react";

//Internal imports
import "./main.scss";
import windowsLogo from "../../img/windows.png";
import aboutMeIcon from "../../img/blocnotas.png";
import folderIcon from "../../img/projects.png";
import openFolderIcon from "../../img/open.ico";

import FolderIcon from "../folderIcon/FolderIcon";
import htmlIcon from "../../img/skills/html-5.png";
import cssIcon from "../../img/skills/css-3.png";
import angularIcon from "../../img/skills/angular.png";
import gitIcon from "../../img/skills/git.svg";
import jsIcon from "../../img/skills/js.png";
import reactIcon from "../../img/skills/react.png";
import bootstrapIcon from "../../img/skills/bootstrap.png";

import myChats from "../../img/projects/my-chats.png";
import MyEarnings from "../../img/projects/MyEarnings.png";
import myJournal from "../../img/projects/MyJournal.png";
import myLottery from "../../img/projects/myLottery.png";
import theWorldNews from "../../img/projects/TheWorldNews.png";
import tiendaCielop from "../../img/projects/tienda-cielo.png";
import tusCompras from "../../img/projects/TusCompras.jpg";

import Icon from "../icon/Icon";
import ModalAbout from "../modalAbout/ModalAbout";
import FolderModal from "../folderModal/FolderModal";
import FolderProjects from "../folderProjects/FolderProjects";

//External imports
import { useHistory } from "react-router";

function Main() {
  //Util Instances
  let today = new Date();
  const history = useHistory();

  let start = new Audio(
    "https://www.winhistory.de/more/winstart/ogg/winxp.ogg"
  );

  let end = new Audio(
    "https://www.winhistory.de/more/winstart/ogg/winxpshutdown.ogg"
  );

  //States

  const [isAboutOpen, setIsAboutOpen] = useState();
  const [isSkillsOpen, setIsSkillsOpen] = useState();
  const [isProjectsOpen, setIsProjectsOpen] = useState();

  //Functions and Effects

  useEffect(() => {
    start.play();
  }, []);

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

  const onProjectsClose = () => {
    setIsProjectsOpen(false);
  };

  const onProjectsOpen = () => {
    setIsProjectsOpen(true);
  };

  const handleClick = () => {
    history.push("/");
    end.play();
  };

  return (
    <Fragment>
      <div className="main-container">
        <div className="icons-container">
          {/* About me Icon and modal */}
          <Icon click={onAboutOpen} img={aboutMeIcon} text={"Sobre mi"}></Icon>
          <ModalAbout
            img={aboutMeIcon}
            open={isAboutOpen}
            onClose={onAboutClose}
          ></ModalAbout>

          {/* Skills Folder */}
          <Icon click={onSkillsOpen} img={folderIcon} text={"Skills"}></Icon>
          <FolderModal
            img={folderIcon}
            open={isSkillsOpen}
            onClose={onSkillsClose}
            title={"Skills"}
          >
            <FolderIcon
              nameOfClass={"icon-img"}
              text={"HTML"}
              img={htmlIcon}
            ></FolderIcon>
            <FolderIcon
              nameOfClass={"icon-img"}
              text={"CSS"}
              img={cssIcon}
            ></FolderIcon>
            <FolderIcon
              nameOfClass={"icon-img"}
              text={"Bootstrap"}
              img={bootstrapIcon}
            ></FolderIcon>
            <FolderIcon
              nameOfClass={"icon-img"}
              text={"Javascript"}
              img={jsIcon}
            ></FolderIcon>
            <FolderIcon
              nameOfClass={"icon-img"}
              text={"React"}
              img={reactIcon}
            ></FolderIcon>
            <FolderIcon
              nameOfClass={"icon-img"}
              text={"Angular"}
              img={angularIcon}
            ></FolderIcon>
            <FolderIcon
              nameOfClass={"icon-img"}
              text={"Git"}
              img={gitIcon}
            ></FolderIcon>
          </FolderModal>

          {/*  Projects folder */}
          <Icon
            click={onProjectsOpen}
            img={folderIcon}
            text={"Proyectos"}
          ></Icon>
          <FolderModal
            img={folderIcon}
            open={isProjectsOpen}
            onClose={onProjectsClose}
            title={"Proyectos"}
          >
            <FolderProjects
              link={"https://my--chats.web.app/"}
              nameOfClass={"project-img"}
              text={"myChats"}
              img={myChats}
            ></FolderProjects>
            <FolderProjects
              link={"https://mis-ganancias0.web.app/"}
              nameOfClass={"project-img"}
              text={"MyEarnings"}
              img={MyEarnings}
            ></FolderProjects>
            <FolderProjects
              link={"https://my-journal1.web.app/"}
              nameOfClass={"project-img"}
              text={"myJournal"}
              img={myJournal}
            ></FolderProjects>
            <FolderProjects
              link={"https://my--lottery.web.app/"}
              nameOfClass={"project-img"}
              text={"myLottery"}
              img={myLottery}
            ></FolderProjects>
            <FolderProjects
              link={"https://theworld-news.web.app/"}
              nameOfClass={"project-img"}
              text={"theWorldNews"}
              img={theWorldNews}
            ></FolderProjects>
            <FolderProjects
              link={"https://tiendacielo.netlify.app/"}
              nameOfClass={"project-img"}
              text={"tiendaCielo"}
              img={tiendaCielop}
            ></FolderProjects>
            <FolderProjects
              link={"https://tuscompras.netlify.app/"}
              nameOfClass={"project-img"}
              text={"tusCompras"}
              img={tusCompras}
            ></FolderProjects>
          </FolderModal>
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
            {isProjectsOpen && (
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
