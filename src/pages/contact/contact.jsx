import "./contact.sass";
import { social } from "../../info.json";

const Contact = () => {
	return (
		<main>
			<h1>Say Hello 👋🏽</h1>
			<p>Hey, wanna talk? Hit me up on WhatsApp for an easy convo!</p>
			<section className="contact">
				{social.map((item) => (
					<div key={item.name}>
						<a href={item.link}>
							{item.name}
							<div className="horizontal"></div>
						</a>
					</div>
				))}
			</section>
		</main>
	);
};

export default Contact;
