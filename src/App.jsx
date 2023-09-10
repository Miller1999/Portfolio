import { Fragment } from "react";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import "./index.css";
import Tab from "./components/Tab/Tab";

function App() {
  return (
    <Fragment>
      <NavBar />
      <Tab />
      <Footer />
    </Fragment>
  );
}

export default App;
