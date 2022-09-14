export default function ContactPage() {
	return (
		<div className="page-container">
			<div className="contact-container-1">
				<h3 className="contact-info">
					<i className="fa-solid fa-phone"></i>
					+47 971 41 688
				</h3>
				<a href="mailto:sondre-h@hotmail.com" className="contact-info">
					<i className="fa-solid fa-envelope"></i>
					sondre-h@hotmail.com
				</a>
				<a
					href="https://github.com/SondreHal"
					target="_blank"
					className="contact-info"
					rel="noreferrer"
				>
					<i className="fa-brands fa-github"></i>
					GitHub
				</a>
				<a
					href="https://www.linkedin.com/in/sondre-halvorsen-74a453241/"
					target="_blank"
					className="contact-info"
					rel="noreferrer"
				>
					<i className="fa-brands fa-linkedin"></i>
					LinkedIn
				</a>
			</div>
			<div className="contact-container-2">
				<a
					href="https://discordapp.com/users/212315187124895744"
					target="_blank"
					className="contact-info"
					rel="noreferrer"
				>
					<i className="fa-brands fa-discord"></i>
					Discord
				</a>
			</div>
		</div>
	);
}
