import "./CustomDiv.sass";

interface CustomDivProps {
	name?: string;
	children?: React.ReactNode;
}

const CustomDiv = ({ name, children }: CustomDivProps) => {
	if (name == "About") {
		return <div className="About"></div>;
	} else if (name == "Experience") {
		return <div className="Experience"></div>;
	} else if (name == "Education") {
		return <div className="Education"></div>;
	} else if (name == "Content") {
		return <div className="Content"></div>;
	} else if (name == "Contact") {
		return <div className="Contact"></div>;
	} else if (name == "CTA") {
		return <div className="CTA">{children}</div>;
	} else {
		return <div>{children}</div>;
	}
};

export default CustomDiv;
