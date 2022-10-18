import { EffectFlip, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.css";
import * as style from "./style.js";
import { ProjectsData } from "./utils/data";

const Projects = () => {
	return (
		<section id="projects">
			<h5>
				{/* My work */}
				Mine
			</h5>
			<h2>
				{/* Projects */}
				Prosjekter
			</h2>

			<style.SwiperWrapper className="container">
				<Swiper
					className="container mySwiper"
					modules={[Pagination, Navigation, EffectFlip]}
					spaceBetween={40}
					navigation={true}
					loop={true}
					grabCursor={true}
					effect={"flip"}
					// loop={true}
					slidesPerView={1}
					pagination={{ clickable: true }}
				>
					<article className="testimonial">
						{ProjectsData.map(({ title, image, github, link }, key) => {
							return (
								<SwiperSlide key={key}>
									<style.Image
										src={require("./images/" + image)}
										alt="Project preview"
									/>

									<style.ProjectInfoContainer>
										<style.Title>{title}</style.Title>
										<style.LinkContainer>
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
												{/* Webpage */}
												Nettside
											</a>
										</style.LinkContainer>
									</style.ProjectInfoContainer>
								</SwiperSlide>
							);
						})}
					</article>
				</Swiper>
			</style.SwiperWrapper>
		</section>
	);
};
export default Projects;
