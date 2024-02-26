import { Fragment } from "react";
import Header from "./components/header/header";
import "./style.sass";
import Menu from "./components/menu/menu";
function App() {
	return (
		<Fragment>
			<Header />
			<Menu />
		</Fragment>
	);
}

export default App;
