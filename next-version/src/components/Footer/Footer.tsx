import { FaRegCopyright } from "react-icons/fa";

import "./Footer.sass";
import SocialMedia from "../shared/SocialMedia/SocialMedia";

const Footer = () => {
	return (
		<footer>
			<FaRegCopyright />
			<p>2024 Miller Arias - DevArias | Web Developer - Content Creator</p>
			<SocialMedia />
		</footer>
	);
};

export default Footer;
