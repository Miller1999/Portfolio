import { Fragment } from "react";
import Header from "../header/header";
import Menu from "../menu/menu";
import { useTheme } from "../../App";
import Background from "../background/background";

const Layout = ({ children, showNav, setShowNav, showHome, setShowHome }) => {
	const { theme } = useTheme();
	return (
		<Fragment>
			<div className={`layout ${theme ? "light" : "dark"}`}>
				<Header
					setShowNav={setShowNav}
					showNav={showNav}
					showHome={showHome}
					setShowHome={setShowHome}
				/>
				{showNav && (
					<Menu
						setShowNav={setShowNav}
						showNav={showNav}
						showHome={showHome}
						setShowHome={setShowHome}
					/>
				)}
				<Fragment>
					<Background />
					{children}
				</Fragment>
			</div>
		</Fragment>
	);
};

export default Layout;
