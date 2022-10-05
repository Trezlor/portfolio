import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.css";
import * as s from "./style.js";
import { ProjectsData } from "./utils/data";

const Projects = () => {
	return (
		<section id="projects">
			<h5>My work</h5>
			<h2>Projects</h2>

			<s.SwiperWrapper>
				<Swiper
					className="container"
					modules={[Pagination]}
					spaceBetween={40}
					slidesPerView={1}
					pagination={{ clickable: true }}
				>
					<article className="testimonial">
						{ProjectsData.map(({ title, image, github, link }, key) => {
							return (
								<SwiperSlide key={key}>
									<s.Image
										src={require("./images/" + image)}
										alt="Project preview"
									/>

									<s.ProjectInfoContainer>
										<s.Title>{title}</s.Title>
										<s.LinkContainer>
											<a
												href={github}
												target="_blank"
												rel="noreferrer noopener"
											>
												Github
											</a>
											<a
												href={link}
												target="_blank"
												rel="noreferrer noopener"
											>
												Webpage
											</a>
										</s.LinkContainer>
									</s.ProjectInfoContainer>
								</SwiperSlide>
							);
						})}
					</article>
				</Swiper>
			</s.SwiperWrapper>
		</section>
	);
};
export default Projects;
