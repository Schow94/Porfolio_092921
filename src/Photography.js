import React, { Suspense } from "react";

import SideBar from "./SideBar";
import NavBar from "./NavBar";
import Loading from "./Loading";

import "./Photography.css";

const Image = React.lazy(() => import("./Image"));

const images = [
	{
		url: "./amsterdam.webp",
		alt: "amsterdam",
	},
	{
		url: "./arch.webp",
		alt: "arch",
	},
	{
		url: "./bldg.webp",
		alt: "bldg",
	},
	{
		url: "./cat.webp",
		alt: "cat",
	},
	{
		url: "./goldenGate.webp",
		alt: "goldenGate",
	},
	{
		url: "./versailles.webp",
		alt: "versailles",
	},
	{
		url: "./goldenGate2.webp",
		alt: "goldenGate2",
	},
	{
		url: "./versailles2.webp",
		alt: "versailles2",
	},
	{
		url: "./waikiki.webp",
		alt: "waikiki",
	},
	{
		url: "./yosemite.webp",
		alt: "yosemite",
	},
	{
		url: "./zion2.webp",
		alt: "zion2",
	},
	{
		url: "./zion.webp",
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
							<Suspense fallback={<Loading />}>
								<Image image={x} key={idx} />
							</Suspense>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Photography;
