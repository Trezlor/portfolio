import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { SiDiscord } from "react-icons/si";
import * as s from "./style";

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm("service_pe1wcx5", "template_lp0tj9w", form.current, "q0E_SlrDXBX5jbt8i")
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

	const [activeCopied, setActiveCopied] = useState("");

	return (
		<section id="contact">
			<h5>
				{/* Get in touch */}
				Send en melding
			</h5>
			<h2>
				{/* Contact Me */}
				Kontakt Meg
			</h2>

			<s.Container className="container">
				<s.ContactOptions>
					<s.ContactOption>
						<FaPhoneAlt className="icon" />
						<h4>
							{/* Phone */}
							Mobil
						</h4>
						<h5
							onClick={() => {
								navigator.clipboard.writeText("+47 971 416 88");
								setActiveCopied("copied");
								setTimeout(() => {
									setActiveCopied("");
								}, 1500);
							}}
						>
							+47 971 41 688
						</h5>
						<p className={activeCopied === "copied" ? "active" : ""}>
							{/* Copied! */}
							Kopiert
						</p>
					</s.ContactOption>
					<s.ContactOption>
						<IoIosMail className="icon" />
						<h4>Email</h4>
						<a href="mailto:sondre-h@hotmail.com">sondre-h@hotmail.com</a>
					</s.ContactOption>
					<s.ContactOption>
						<SiDiscord className="icon" />
						<h4>Discord</h4>
						<a
							href="https://discordapp.com/users/212315187124895744"
							target="_blank"
							rel="noreferrer noopener"
						>
							Send a message
						</a>
					</s.ContactOption>
				</s.ContactOptions>
				<s.Form ref={form} onSubmit={sendEmail}>
					<input type="text" name="name" placeholder=
					// "Your Full Name"
					"Fullt Navn"
					 required />
					<input type="email" name="email" placeholder=
					// "Your Email"
					"Email"
					 required />
					<textarea name="message" rows="7" placeholder=
					// "Your Message"
					"Din Melding"
					 required />
					<button type="submit" className="btn btn-primary">
						{/* Send Message */}
						Send Melding
					</button>
				</s.Form>
			</s.Container>
		</section>
	);
};

export default Contact;

// export default function ContactPage() {
// 	return (
// 		<>
// 			<BsGithub />
// 			<BsLinkedin />
// 		</>
// 		<S.MainContainer>
// 			<S.ContactContainer>
// 				<S.ContactInfoH3>
// 					<S.ContactIcon className="fa-solid fa-phone"></S.ContactIcon>
// 					+47 971 41 688
// 				</S.ContactInfoH3>
// 				<S.ContactInfoA href="mailto:sondre-h@hotmail.com">
// 					<S.ContactIcon className="fa-solid fa-envelope"></S.ContactIcon>
// 					sondre-h@hotmail.com
// 				</S.ContactInfoA>
// 				<S.ContactInfoA
// 					href="https://github.com/SondreHal"
// 					target="_blank"
// 					rel="noreferrer noopener"
// 				>
// 					<S.ContactIcon className="fa-brands fa-github"></S.ContactIcon>
// 					GitHub
// 				</S.ContactInfoA>
// 				<S.ContactInfoA
// 					href="https://www.linkedin.com/in/sondre-halvorsen-74a453241/"
// 					target="_blank"
// 					rel="noreferrer noopener"
// 				>
// 					<S.ContactIcon className="fa-brands fa-linkedin"></S.ContactIcon>
// 					LinkedIn
// 				</S.ContactInfoA>
// 			</S.ContactContainer>
// 			<S.ContactContainer className="contact-container-2">
// 				<S.ContactInfoA
// 					href="https://discordapp.com/users/212315187124895744"
// 					target="_blank"
// 					rel="noreferrer noopener"
// 				>
// 					<S.ContactIcon className="fa-brands fa-discord"></S.ContactIcon>
// 					Discord
// 				</S.ContactInfoA>
// 			</S.ContactContainer>
// 		</S.MainContainer>
// 	);
// }
