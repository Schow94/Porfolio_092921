import React from "react";

import NavBar from "./NavBar";
import SideBar from "./SideBar";
import "./Contact.css";

const Contact = () => {
	return (
		<div className="App">
			<NavBar />

			<div className="contact-body">
				<SideBar />
				<div className="contact-container">
					<h1 className="name-is">Contact</h1>
					<h1 className="in-touch">
						Want to get in touch?
						<span className="shoot-email"> Shoot me an email!</span>
					</h1>

					<form className="email-form">
						<div className="name-email">
							<input autoComplete="none" placeholder="name"></input>
							<input
								type="text"
								autoComplete="none"
								placeholder="email"></input>
						</div>
						<input
							autoComplete="none"
							className="subject"
							placeholder="subject"></input>
						<textarea className="email-body" placeholder="message"></textarea>
						<button className="touch-btn">Send Email</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
