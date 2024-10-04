import { FaGithub, FaLinkedin, FaTwitch } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import "./SocialMedia.sass";

const SocialMedia = () => {
	return (
		<nav className="socialMedia">
			<a href="https://www.linkedin.com/in/miller-javier-arias-quintero/?locale=en_US">
				<FaLinkedin />
			</a>
			<a href="https://github.com/Miller1999">
				<FaGithub />
			</a>
			<a href="https://drive.google.com/file/d/1eDDdUEPttIfmsRzJT8X-bYnHsTtbdBeK/view?usp=sharing">
				<TbFileCv />
			</a>
			<a href="https://x.com/miller_arias">
				<FaXTwitter />
			</a>
			<a href="https://www.twitch.tv/devarias11">
				<FaTwitch />
			</a>
		</nav>
	);
};

export default SocialMedia;
