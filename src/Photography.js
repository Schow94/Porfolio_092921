import React from "react";
import SideBar from "./SideBar";
import NavBar from "./NavBar";
import "./Photography.css";

const images = [
	{
		url: "https://images.unsplash.com/photo-1632952745637-a104d96d8405?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
		alt: "airplane",
	},
	{
		url: "https://images.unsplash.com/photo-1632235623196-cf0a9d0bf0ac?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
		alt: "fall",
	},
	{
		url: "https://images.unsplash.com/photo-1607858066933-1e2e91382182?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
		alt: "window",
	},
	{
		url: "https://images.unsplash.com/photo-1632971306870-9f54e5706994?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2M3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
		alt: "aerial",
	},
	{
		url: "https://images.unsplash.com/photo-1633049919683-672362346394?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
		alt: "car",
	},
	{
		url: "https://images.unsplash.com/photo-1632952745637-a104d96d8405?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
		alt: "airplane",
	},
];

const Photography = () => {
	return (
		<div className="Photography">
			<NavBar />

			<div className="photos-body">
				<SideBar />

				<div className="photos-container">
					{images.map((x, idx) => {
						return <img className="photo-image" src={x.url} alt={x.alt} />;
					})}
				</div>
			</div>
		</div>
		// </div>
	);
};

export default Photography;
