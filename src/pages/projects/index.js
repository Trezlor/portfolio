import Carousel from "nuka-carousel";
import { Container, Image, Section } from "./style";
import { Projects } from "./utils/data";

export default function ProjectsPage() {
	return (
		<>
			<Container>
				<Carousel
					animation="fade"
					speed={1000}
					wrapAround={true}
					// dragging={true}
					defaultControlsConfig={{
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
						},
					}}
				>
					{Projects.map((val, key) => {
						return (
							<Section key={key}>
								<Image
									src={require("./images/" + val.image)}
									alt="Project preview"
								/>
								<h1>{val.title}</h1>
							</Section>
						);
					})}
				</Carousel>
			</Container>
		</>
	);
}
