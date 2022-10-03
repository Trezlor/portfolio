// import Carousel from "nuka-carousel";
// import { useState } from "react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import * as s from "./style";
import { ProjectsData } from "./utils/data";

const Projects = () => {
	// let [size, setSize] = useState(Boolean(window.innerWidth <= 1024));

	// window.addEventListener("resize", () => {
	// 	setSize(Boolean(window.innerWidth <= 1024));
	// });

	return (
		<section id="projects">
			<h5>My work</h5>
			<h2>Projects</h2>

			<Swiper
				className="container"
				modules={[Pagination]}
				spaceBetween={40}
				slidesPerView={1}
				pagination={{ clickable: true }}
				style={{ border: "1px solid red" }}
			>
				<article className="testimonial">
					{ProjectsData.map(({ title, image, github, link }, key) => {
						return (
							<SwiperSlide key={key}>
								<s.Title>{title}</s.Title>
								<s.Image src={require("./images/" + image)} alt="Project preview" />
								<s.LinkContainer>
									<a href={github} target="_blank" rel="noreferrer noopener">
										Github
									</a>
									<a href={link} target="_blank" rel="noreferrer noopener">
										Webpage
									</a>
								</s.LinkContainer>
							</SwiperSlide>
						);
					})}
				</article>
			</Swiper>
		</section>
	);
};
export default Projects;