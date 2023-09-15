import { PortfolioContext } from "../../Context/context";
import { useContext } from "react";

import Person4Icon from "@mui/icons-material/Person4";
import PsychologyIcon from "@mui/icons-material/Psychology";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";

const Footer = () => {
  const { handleAboutMe, handleSkills } = useContext(PortfolioContext);

  return (
    <footer className="flex h-10 justify-center w-full fixed bottom-10">
      <div className="relative">
        <div
          id="floor"
          className="flex relative z-10  h-fit rounded-2xl px-3 py-1 text-white gap-3"
        >
          <div id="About Me" className="flex flex-col items-center">
            <button id="buttons-floor" onClick={() => handleAboutMe()}>
              <Person4Icon fontSize="large" />
            </button>
            <span id="titles">Sobre mi</span>
          </div>
          <div className="flex flex-col items-center">
            <button id="buttons-floor" onClick={() => handleSkills()}>
              <PsychologyIcon fontSize="large" />
            </button>
            <span id="titles">Habilidades</span>
          </div>
          <div className="flex flex-col items-center">
            <button id="buttons-floor">
              <HeadphonesIcon fontSize="large" />
            </button>
            <span id="titles">Hobbies</span>
          </div>
          <div className="flex flex-col items-center">
            <button id="buttons-floor">
              <SchoolIcon fontSize="large" />
            </button>
            <span id="titles">Educacion</span>
          </div>
          <div className="flex flex-col items-center">
            <button id="buttons-floor">
              <WorkIcon fontSize="large" />
            </button>
            <span id="titles">Experiencia</span>
          </div>
          <div className="flex flex-col items-center">
            <button id="buttons-floor">
              <ConnectWithoutContactIcon fontSize="large" />
            </button>
            <span id="titles"> Contacto</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
