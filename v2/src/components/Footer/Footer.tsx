import { FaRegCopyright } from "react-icons/fa";

import "./Footer.sass";
import SocialMedia from "../shared/SocialMedia/SocialMedia";

const Footer = () => {
	return (
		<footer>
			<FaRegCopyright />
			<div>
				<p>2024 Miller Arias - DevArias</p>
			</div>
			<SocialMedia />
		</footer>
	);
};

export default Footer;
