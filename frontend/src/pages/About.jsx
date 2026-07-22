import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";

import "./About.css";


function About() {
	const highlights = [
		{
			title: "Professional Team",
			text:
				"Experienced photographers and videographers dedicated to capturing every important moment.",
		},
		{
			title: "Affordable Packages",
			text:
				"Flexible packages designed to fit different budgets without compromising quality.",
		},
		{
			title: "Easy Booking",
			text:
				"Book your preferred photography package in just a few simple steps.",
		},
		{
			title: "Trusted Service",
			text:
				"Reliable professionals committed to delivering memorable and high-quality results.",
		},
	];

	return (
		<div className="about-page">
			<Navbar />

			<main className="about-shell">
				<section className="about-hero">
					<p className="eyebrow">About Us</p>
					<h1>About SnapSmart</h1>
					<p className="lead">
						SnapSmart is a modern event photography and videography booking
						platform designed to make finding trusted professionals simple and
						hassle-free. Whether you're planning a birthday, wedding,
						christening, corporate event, or any special celebration,
						SnapSmart helps you connect with experienced creatives who are
						passionate about capturing life's most meaningful moments.
					</p>
					<p className="lead">
						Our mission is to provide a seamless booking experience while
						ensuring every memory is preserved through high-quality photos and
						cinematic videos. With carefully curated packages, transparent
						pricing, and reliable service, we make it easier than ever to focus
						on your event while we take care of preserving every smile, every
						laugh, and every unforgettable moment.
					</p>
				</section>

				<section className="about-grid">
					<article className="about-panel about-statement">
						<h2>Mission</h2>
						<p>
							To provide a seamless and reliable platform that connects clients
							with professional photographers and videographers, making every
							special occasion easy to book and beautifully documented.
						</p>
					</article>

					<article className="about-panel about-statement">
						<h2>Vision</h2>
						<p>
							To become one of the leading digital booking platforms for
							photography and videography services, recognized for exceptional
							customer experience, creativity, and innovation.
						</p>
					</article>
				</section>

				<section className="about-highlights">
					<div className="section-heading">
						<p className="eyebrow">Why Choose SnapSmart</p>
						<h2>Everything you need for a stress-free event</h2>
					</div>

					<div className="highlight-grid">
						{highlights.map((item) => (
							<article key={item.title} className="highlight-card">
								<h3>{item.title}</h3>
								<p>{item.text}</p>
							</article>
						))}
					</div>
				</section>

				<section className="about-cta">
					<div>
						<p className="eyebrow">Ready to Capture Your Next Celebration?</p>
						<h2>Book your photography or videography package today.</h2>
						<p>
							Let SnapSmart preserve the moments you'll cherish forever.
						</p>
					</div>

					<Link to="/login" className="cta-button">
						Book Now
					</Link>
				</section>
			</main>
		</div>
	);
}

export default About;
