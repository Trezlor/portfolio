export default function ContactPage() {
	return (
		<div className="page-container">
			<div className="contact-container">
				<h3 className="contact-info">
					<i class="fa-solid fa-phone"></i>
					+47 123 45 678
				</h3>
				<a href="mailto:sondre-h@hotmail.com" className="contact-info">
					<i class="fa-solid fa-envelope"></i>
					sondre-h@hotmail.com
				</a>
				<a href="https://github.com/SondreHal" className="contact-info">
					<i class="fa-brands fa-github"></i>
					GitHub
				</a>
				<a
					href="https://www.linkedin.com/in/sondre-halvorsen-74a453241/"
					className="contact-info"
				>
					<i class="fa-brands fa-linkedin"></i>
					LinkedIn
				</a>
			</div>
		</div>
	);
}
