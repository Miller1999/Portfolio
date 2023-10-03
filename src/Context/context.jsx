import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const PortfolioContext = createContext();

export const PortfolioContextProvider = ({ children }) => {
  const [aboutMe, setAboutMe] = useState(true);
  const [tab, setTab] = useState(false);
  const [biography, setBiography] = useState(false);
  const [showAM, setShowAM] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [skills, setSkills] = useState(false);
  const [technical, setTechnical] = useState(false);
  const [soft, setSoft] = useState(false);

  const [ListSkills, setListSkills] = useState([]);

  useEffect(() => {
    try {
      axios
        .get("../../info.json")
        .then((res) => setListSkills(res.data.skills));
    } catch (error) {
      console.warn("Error en el axios");
    }
  }, []);

  const handleAboutMe = () => {
    setAboutMe(true);
    setBiography(false);
    setTab(true);
    setShowAM(true);
    setShowSkills(false);
  };
  const handleBiography = () => {
    setAboutMe(false);
    setBiography(true);
    setShowAM(true);
  };
  const handleSkills = () => {
    setSkills(true);
    setAboutMe(false);
    setTechnical(false);
    setSoft(false);
    setShowAM(false);
    setShowSkills(true);
    setTab(true);
  };
  const handleTechnical = () => {
    setShowSkills(true);
    setTechnical(true);
    setSkills(false);
    setSoft(false);
  };
  const handleSoft = () => {
    setShowSkills(true);
    setSoft(true);
    setSkills(false);
    setTechnical(false);
  };
  const handleClose = () => {
    setAboutMe(false);
    setSkills(false);
    setTab(false);
    setShowAM(false);
    setShowSkills(false);
  };

  return (
    <PortfolioContext.Provider
      value={{
        aboutMe,
        setAboutMe,
        handleAboutMe,
        tab,
        setTab,
        handleClose,
        biography,
        setBiography,
        handleBiography,
        showAM,
        handleSkills,
        handleTechnical,
        handleSoft,
        showSkills,
        skills,
        technical,
        soft,
        ListSkills,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};
