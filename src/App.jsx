import { Fragment, useState } from "react";
import Header from "./components/header/header";
import "./style.sass";
import Menu from "./components/menu/menu";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Work from "./pages/work/work";
function App() {
	const [showNav, setShowNav] = useState(false);
	const [showHome, setShowHome] = useState(true);
	return (
		<Fragment>
			<Header
				setShowNav={setShowNav}
				showNav={showNav}
				showHome={showHome}
				setShowHome={setShowHome}
			/>
			{showNav ? <Menu /> : <Fragment></Fragment>}
			<Work />
		</Fragment>
	);
}

export default App;
