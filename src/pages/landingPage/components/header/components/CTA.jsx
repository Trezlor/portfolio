import CV from '../../../../../assets/cv.pdf';
import * as style from '../style';

const CTA = () => {
	return (
		<>
			<style.Div_CTA>
				<a
					href={CV}
					target='_blank'
					rel='noreferrer'
					className='btn'
				>
					{/* Download CV */}
					Åpne CV
				</a>
				<a href='#contact' className='btn btn-primary'>
					{/* Let's Talk */}
					Kom i kontakt
				</a>
			</style.Div_CTA>
		</>
	);
};

export default CTA;
