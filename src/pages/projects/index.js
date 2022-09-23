import Carousel from "nuka-carousel";
import { useState } from "react";
import * as S from "./style";
import { Projects } from "./utils/data";

export default function ProjectsPage() {
	let [size, setSize] = useState(Boolean(window.innerWidth <= 1024));

	window.addEventListener("resize", () => {
		setSize(Boolean(window.innerWidth <= 1024));
	});

	return (
		<>
			<S.Container>
				<Carousel
					style={
						!size
							? {
									// border: "1px solid black",
							  }
							: {
									// border: "1px solid black",
									height: "100%",
							  }
					}
					animation="fade"
					speed={1000}
					wrapAround={true}
					defaultControlsConfig={
						!size
							? {
									prevButtonStyle: {
										padding: "20px 30px",
										fontSize: "20px",
										borderRadius: "4px",
									},
									nextButtonStyle: {
										padding: "20px 30px",
										fontSize: "20px",
										borderRadius: "4px",
									},
									pagingDotsStyle: {
										fill: "white",
										margin: "0 16px 12px",
										transform: "scale(2)",
									},
							  }
							: {
									prevButtonText: <i className="fa-solid fa-arrow-left"></i>,
									nextButtonText: <i className="fa-solid fa-arrow-right"></i>,
									prevButtonStyle: {
										borderRadius: "4px",
										position: "relative",
										left: "-35px",
										background: "none",
										fontSize: "20px",
									},
									nextButtonStyle: {
										borderRadius: "4px",
										position: "relative",
										right: "-35px",
										background: "none",
										fontSize: "20px",
									},
									pagingDotsStyle: {
										fill: "white",
										margin: "0 12px 12px",
									},
							  }
					}
				>
					{Projects.map((val, key) => {
						return (
							<S.Section key={key}>
								<S.Title>{val.title}</S.Title>
								<S.Image
									src={require("./images/" + val.image)}
									alt="Project preview"
								/>
								<S.LinkContainer>
									<S.Link
										href={val.github}
										target="_blank"
										rel="noreferrer noopener"
									>
										Github
									</S.Link>
									<S.Link
										href={val.link}
										target="_blank"
										rel="noreferrer noopener"
									>
										Webpage
									</S.Link>
								</S.LinkContainer>
							</S.Section>
						);
					})}
				</Carousel>
			</S.Container>
		</>
	);
}
