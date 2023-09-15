import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import AboutMe from "./components/Informations/AboutMe";

import "./index.css";
import Tab from "./components/Tab/Tab";
import { PortfolioContext } from "./Context/context";
import Skills from "./components/Informations/Skills";
import { Fragment, useContext } from "react";

function App() {
  const { showAM, showSkills } = useContext(PortfolioContext);

  return (
    <Fragment>
      <NavBar />
      <Tab>
        {showAM ? <AboutMe /> : <Fragment />}
        {showSkills ? <Skills /> : <Fragment />}
      </Tab>
      <Footer />
    </Fragment>
  );
}

export default App;
