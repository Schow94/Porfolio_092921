import React, { Suspense } from "react";

import SideBar from "./SideBar";
import NavBar from "./NavBar";
import Loading from "./Loading";

import "./Photography.css";

const Image = React.lazy(() => import("./Image"));

const images = [
	{
		url: "./amsterdam-1.webp",
		alt: "amsterdam",
	},
	{
		url: "./arch-1.webp",
		alt: "arch",
	},
	{
		url: "./bldg-1.webp",
		alt: "bldg",
	},
	{
		url: "./cat-1.webp",
		alt: "cat",
	},
	{
		url: "./goldenGate-1.webp",
		alt: "goldenGate",
	},
	{
		url: "./versailles-1.webp",
		alt: "versailles",
	},
	{
		url: "./goldenGate2-1.webp",
		alt: "goldenGate2",
	},
	{
		url: "./versailles2-1.webp",
		alt: "versailles2",
	},
	{
		url: "./waikiki-1.webp",
		alt: "waikiki",
	},
	{
		url: "./yosemite-1.webp",
		alt: "yosemite",
	},
	{
		url: "./zion2-1.webp",
		alt: "zion2",
	},
	{
		url: "./zion-1.webp",
		alt: "zion",
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
						return (
							<Suspense fallback={<Loading />} key={idx}>
								<Image image={x} />
							</Suspense>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Photography;
