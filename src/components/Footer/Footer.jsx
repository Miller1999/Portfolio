import Person4Icon from "@mui/icons-material/Person4";
import PsychologyIcon from "@mui/icons-material/Psychology";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";

const Footer = () => {
  return (
    <footer className="flex h-10 justify-center w-full">
      <div className="relative">
        <div
          id="floor"
          className="flex relative z-10 bg-blue-500 h-fit rounded-2xl px-3 py-1 text-white gap-3"
        >
          <div className="flex flex-col items-center">
            <span>Sobre mi</span>
            <Person4Icon fontSize="large" />
          </div>
          <div className="flex flex-col items-center">
            <span>Habilidades</span>
            <PsychologyIcon fontSize="large" />
          </div>
          <div className="flex flex-col items-center">
            <span>Hobbies</span>
            <HeadphonesIcon fontSize="large" />
          </div>
          <div className="flex flex-col items-center">
            <span>Educacion</span>
            <SchoolIcon fontSize="large" />
          </div>
          <div className="flex flex-col items-center">
            <span>Experiencia</span>
            <WorkIcon fontSize="large" />
          </div>
          <div className="flex flex-col items-center">
            <span> Contacto</span>
            <ConnectWithoutContactIcon fontSize="large" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
