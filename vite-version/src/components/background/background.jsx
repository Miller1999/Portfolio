import { useTheme } from "../../App";
import "./background.sass";

const Background = () => {
	const { theme } = useTheme();
	return (
		<div className="bg">
			{theme ? (
				<div className="bg__light">
					<div className="clouds">
						{Array.from({ length: 50 }, (_, index) => (
							<div className={`cloud${index + 1}`} key={index}>
								<div className="basecloud"></div>
								<div className="cloudp1"></div>
								<div className="cloudp2"></div>
							</div>
						))}
						<div className="bird bird1">
							<div className="wingl"></div>
							<div className="wingr"></div>
						</div>
						<div className="bird bird2">
							<div className="wingl"></div>
							<div className="wingr"></div>
						</div>
						<div className="bird bird3">
							<div className="wingl"></div>
							<div className="wingr"></div>
						</div>
						<div className="bird bird4">
							<div className="wingl"></div>
							<div className="wingr"></div>
						</div>
						<div className="bird bird5">
							<div className="wingl"></div>
							<div className="wingr"></div>
						</div>
					</div>
					<div className="mountain1">
						<div className="peak">
							{Array.from({ length: 50 }, (_, index) => (
								<div className={`snow${index + 1}`} key={index}></div>
							))}
						</div>
					</div>
					<div className="mountain2"></div>
					<div className="mountain3"></div>
					<div className="mountain4">
						<div className="peak">
							{Array.from({ length: 50 }, (_, index) => (
								<div className={`snow${index + 1}`} key={index}></div>
							))}
						</div>
					</div>
					<div className="mountain5">
						<div className="peak">
							{Array.from({ length: 50 }, (_, index) => (
								<div className={`snow${index + 1}`} key={index}></div>
							))}
						</div>
					</div>
				</div>
			) : (
				<div className="bg__dark">
					<div className="stars">
						{Array.from({ length: 200 }, (_, index) => (
							<div className={`star${index + 1}`} key={index}></div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default Background;
