import { EffectFlip, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import './style.css';
import * as style from './style.js';
import { ProjectsData } from './utils/data';

const Projects = () => {
	return (
		<section id='projects'>
			<h5>
				{/* My work */}
				Mine
			</h5>
			<h2>
				{/* Projects */}
				Prosjekter
			</h2>

			<style.Container className='container'>
				<Swiper
					className='container'
					modules={[Pagination, Navigation, EffectFlip]}
					navigation={true}
					loop={true}
					grabCursor={true}
					effect={'flip'}
					slidesPerView={1}
					pagination={{ clickable: true }}
				>
					<article>
						{ProjectsData.map(({ title, image, github, link }, key) => {
							return (
								<SwiperSlide key={key}>
									<a
										href={link}
										target='_blank'
										rel='noreferrer noopener'
									>
										<style.ProjectImage
											src={image}
											alt='Project preview'
										/>
									</a>

									<style.ProjectInfoContainer>
										<h3>{title}</h3>
										<style.ProjectLinks>
											<a
												href={github}
												target='_blank'
												rel='noreferrer noopener'
											>
												Github
											</a>
											<a
												href={link}
												target='_blank'
												rel='noreferrer noopener'
											>
												{/* Webpage */}
												Nettside
											</a>
										</style.ProjectLinks>
									</style.ProjectInfoContainer>
								</SwiperSlide>
							);
						})}
					</article>
				</Swiper>
			</style.Container>
		</section>
	);
};
export default Projects;
