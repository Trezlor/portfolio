import emailjs from 'emailjs-com';
import { useRef, useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { SiDiscord } from 'react-icons/si';
import * as style from './style';

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_pe1wcx5',
				'template_lp0tj9w',
				form.current,
				'q0E_SlrDXBX5jbt8i'
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);

		e.target.reset();
	};

	const [activeCopied, setActiveCopied] = useState('');

	return (
		<section id='contact'>
			<h5>
				{/* Get in touch */}
				Send en melding
			</h5>
			<h2>
				{/* Contact Me */}
				Kontakt Meg
			</h2>

			<style.Container className='container'>
				<style.ContactOptions>
					<style.ContactOption
						onClick={() => {
							navigator.clipboard.writeText(
								'+47 971 416 88'
							);
							setActiveCopied('copied');
							setTimeout(() => {
								setActiveCopied('');
							}, 1500);
						}}
					>
						<style.ContactOptionHeader>
							<FaPhoneAlt className='icon' />
							<h4>
								{/* Phone */}
								Mobil
							</h4>
						</style.ContactOptionHeader>
						<h5>+47 971 41 688</h5>
						<p
							className={
								activeCopied === 'copied'
									? 'active'
									: ''
							}
						>
							{/* Copied! */}
							Kopiert
						</p>
					</style.ContactOption>
					<a href='mailto:sondre-h@hotmail.com'>
						<style.ContactOption>
							<style.ContactOptionHeader>
								<IoIosMail className='icon' />
								<h4>Email</h4>
							</style.ContactOptionHeader>
							<h5>sondre-h@hotmail.com</h5>
						</style.ContactOption>
					</a>
					<a
						href='https://discordapp.com/users/212315187124895744'
						target='_blank'
						rel='noreferrer noopener'
					>
						<style.ContactOption>
							<style.ContactOptionHeader>
								<SiDiscord className='icon' />
								<h4>Discord</h4>
							</style.ContactOptionHeader>
							<h5>Send a message</h5>
						</style.ContactOption>
					</a>
				</style.ContactOptions>
				<style.Form ref={form} onSubmit={sendEmail}>
					<input
						type='text'
						name='name'
						placeholder='Fullt Navn'
						// "Your Full Name"
						required
					/>

					<input
						type='email'
						name='email'
						placeholder='Email'
						// "Your Email"
						required
					/>

					<textarea
						name='message'
						rows='7'
						placeholder='Din Melding'
						// "Your Message"
						required
					/>

					<button
						type='submit'
						className='btn btn-primary'
					>
						{/* Send Message */}
						Send Melding
					</button>
				</style.Form>
			</style.Container>
		</section>
	);
};

export default Contact;
