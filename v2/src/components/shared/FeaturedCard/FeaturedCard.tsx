import "./FeaturedCard.sass";

interface FeaturedProps {
	title: string;
	subtitle?: string;
	tech?: string;
	repo?: string;
	link?: string;
	image?: string;
	date: string;
	logo?: string;
	institution?: string;
	info: string;
}

const FeaturedCard = ({
	title,
	subtitle,
	tech,
	repo,
	link,
	image,
	date,
	logo,
	institution,
	info,
}: FeaturedProps) => {
	if (info === "Project") {
		return (
			<article className="FeaturedCard">
				<img src={image} alt={title} className="FeaturedCard__img" />
				<h3>{title}</h3>
				<p>{subtitle}</p>
				<span>Tech:{tech}</span>
				<span>{date}</span>
				<div className="FeaturedCard__links">
					<a href={repo}>Github</a>
					<a href={link}>{title}</a>
				</div>
			</article>
		);
	} else {
		return (
			<article className="FeaturedCard">
				<img src={logo} alt={title} className="FeaturedCard__logo" />
				<h3>{title}</h3>
				<p>{institution}</p>
				<span>{date}</span>
			</article>
		);
	}
};

export default FeaturedCard;
