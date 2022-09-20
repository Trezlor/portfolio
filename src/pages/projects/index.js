import { useState } from "react";
import { Carousel, Container, Controls, Section, Slider } from "./style";

export default function ProjectsPage() {
	const [position, setPosition] = useState(0);

	const positionLeft = () => {
		setPosition((oldPosition) => oldPosition + 20);
	};

	const positionRight = () => {
		setPosition((oldPosition) => oldPosition - 20);
	};

	return (
		<>
			<Container>
				<Carousel>
					<Slider
						className="slider"
						style={{ transform: `translate(${position}%)` }}
						addEventListener={{}}
					>
						<Section>1</Section>
						<Section>2</Section>
						<Section>3</Section>
						<Section>4</Section>
						<Section>5</Section>
					</Slider>
					<Controls>
						<div className="arrow-left" onClick={positionLeft}>
							Prev
						</div>
						<div className="arrow-right" onClick={positionRight}>
							Next
						</div>
					</Controls>
				</Carousel>
			</Container>
		</>
	);
}
