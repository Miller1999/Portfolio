import { Fragment, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/header/header";
import "./style.sass";
import Menu from "./components/menu/menu";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Work from "./pages/work/work";
import Education from "./pages/education/education";
import Contact from "./pages/contact/contact";

function App() {
	const [showNav, setShowNav] = useState(false);
	const [showHome, setShowHome] = useState(true);
	return (
		<Fragment>
			<Router>
				<Header
					setShowNav={setShowNav}
					showNav={showNav}
					showHome={showHome}
					setShowHome={setShowHome}
				/>
				{showNav ? (
					<Menu
						setShowNav={setShowNav}
						showNav={showNav}
						showHome={showHome}
						setShowHome={setShowHome}
					/>
				) : (
					<Fragment></Fragment>
				)}
				<Routes>
					{showHome ? (
						<Fragment>
							<Route path="/" element={<Home />} />
							<Route path="/about" element={<About />} />
							<Route path="/work" element={<Work />} />
							<Route path="/education" element={<Education />} />
							<Route path="/contact" element={<Contact />} />
						</Fragment>
					) : (
						<Fragment></Fragment>
					)}
				</Routes>
			</Router>
		</Fragment>
	);
}

export default App;
