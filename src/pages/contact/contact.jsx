import "./contact.sass";
import { social } from "../../info.json";

const Contact = () => {
	return (
		<main>
			<h1>Contact</h1>
			<section className="contact">
				{social.map((item) => (
					<div key={item.name}>
						<h2>{item.name}</h2>
						<a href={item.link}>{item.name}</a>
					</div>
				))}
			</section>
		</main>
	);
};

export default Contact;
