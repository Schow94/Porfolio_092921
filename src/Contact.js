import React, { useState } from "react";
import { send } from "emailjs-com";

import NavBar from "./NavBar";
import SideBar from "./SideBar";
import "./Contact.css";

const Contact = () => {
	const [from, setFrom] = useState("");
	const [msg, setMsg] = useState("");
	const [senderEmail, setSenderEmail] = useState("");

	const handleSender = (e) => {
		e.preventDefault();
		setFrom(e.target.value);
	};

	const handleSenderEmail = (e) => {
		e.preventDefault();
		setSenderEmail(e.target.value);
	};

	const handleMsg = (e) => {
		e.preventDefault();
		setMsg(e.target.value);
	};

	const clearForm = () => {
		setFrom("");
		setMsg("");
		setSenderEmail("");
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const params = {
			from_name: from,
			to_name: "Stephen",
			from_email: senderEmail,
			message: msg,
			reply_to: senderEmail,
		};

		// send('SERVICE_ID', 'TEMPLATE_ID', 'EMAIL_PARAMS', 'USER_ID')
		send(
			"service_kbavvlh",
			"template_ta0p39q",
			params,
			"user_qTcVZl0NxtqNIjfClck0f"
		);

		console.log("Submitted");
		clearForm();
	};

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

					<form className="email-form" onSubmit={(e) => handleSubmit(e)}>
						<div className="name-email">
							<input
								type="text"
								autoComplete="none"
								placeholder="name"
								value={from}
								onChange={(e) => handleSender(e)}></input>
							<input
								type="email"
								autoComplete="none"
								placeholder="email"
								value={senderEmail}
								onChange={(e) => handleSenderEmail(e)}></input>
						</div>
						<textarea
							className="email-body"
							placeholder="message"
							value={msg}
							onChange={(e) => handleMsg(e)}></textarea>

						<button className="touch-btn">Send Email</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
