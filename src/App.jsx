import { Fragment, useState, createContext, useContext } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Work from "./pages/work/work";
import Education from "./pages/education/education";
import Contact from "./pages/contact/contact";
import Layout from "./components/layout/layout";
import Template from "./pages/work/projects/template";
import "./style.sass";
import { projects } from "./info.json";

const ThemeContext = createContext();
function App() {
	const [showNav, setShowNav] = useState(false);
	const [showHome, setShowHome] = useState(true);
	const [theme, setTheme] = useState(true);

	return (
		<Fragment>
			<ThemeContext.Provider value={{ theme, setTheme }}>
				<Router>
					<Layout
						setShowNav={setShowNav}
						showNav={showNav}
						showHome={showHome}
						setShowHome={setShowHome}
					>
						<Routes>
							{showHome ? (
								<Fragment>
									<Route path="/" element={<Home />} />
									<Route path="/about" element={<About />} />
									<Route path="/work" element={<Work />} />
									<Route
										path={`/work/:name`}
										element={<Template projects={projects} />}
									/>
									<Route path="/education" element={<Education />} />
									<Route path="/contact" element={<Contact />} />
								</Fragment>
							) : (
								<Fragment></Fragment>
							)}
						</Routes>
					</Layout>
				</Router>
			</ThemeContext.Provider>
		</Fragment>
	);
}
export function useTheme() {
	return useContext(ThemeContext);
}
export default App;
