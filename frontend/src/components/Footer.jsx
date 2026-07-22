import { Link } from "react-router-dom";

import "./Footer.css";


function Footer() {
	return (
		<footer className="site-footer">
			<div className="footer-top">
				<div>
					<p className="footer-eyebrow">SnapSmart</p>
					<h2>Capture every moment with confidence.</h2>
					<p className="footer-copy">
						A modern event photography and videography booking platform for
						weddings, birthdays, christenings, and every special celebration.
					</p>
				</div>

				<div className="footer-links">
					<div>
						<h3>Explore</h3>
						<Link to="/">Home</Link>
						<Link to="/about">About Us</Link>
						<Link to="/gallery">Gallery</Link>
					</div>

					<div>
						<h3>Book</h3>
						<Link to="/packages">Packages</Link>
						<Link to="/login">Login</Link>
						<Link to="/login">Book Now</Link>
					</div>
				</div>
			</div>

			<div className="footer-bottom">
				<span>© 2026 SnapSmart. All rights reserved.</span>
				<span>Photography and videography made simple.</span>
			</div>
		</footer>
	);
}

export default Footer;
