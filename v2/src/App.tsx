import { Fragment } from "react/jsx-runtime";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import DefSection from "./components/shared/Section/Section";
import "./sass/global.sass";

function App() {
	return (
		<Fragment>
			<Menu side={true} />
			<main>
				<Header />
				<DefSection name="Hero"></DefSection>
				<DefSection name="AboutMe" />
				<DefSection name="FeaturedProject" />
				<DefSection name="FeaturedEducation" />
				<DefSection name="Contact" />
				<Footer />
			</main>
		</Fragment>
	);
}

export default App;
