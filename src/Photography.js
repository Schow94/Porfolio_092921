import React, { Suspense } from "react";

import SideBar from "./SideBar";
import NavBar from "./NavBar";
import Loading from "./Loading";

import "./Photography.css";

const Image = React.lazy(() => import("./Image"));

const images = [
	{
		url: "./amsterdam.jpg",
		alt: "amsterdam",
	},
	{
		url: "./arch.jpg",
		alt: "arch",
	},
	{
		url: "./bldg.jpg",
		alt: "bldg",
	},
	{
		url: "./cat.jpg",
		alt: "cat",
	},
	{
		url: "./goldenGate.jpg",
		alt: "goldenGate",
	},
	{
		url: "./versailles.jpg",
		alt: "versailles",
	},
	{
		url: "./goldenGate2.jpg",
		alt: "goldenGate2",
	},
	{
		url: "./versailles2.jpg",
		alt: "versailles2",
	},
	{
		url: "./waikiki.jpg",
		alt: "waikiki",
	},
	{
		url: "./yosemite.jpg",
		alt: "yosemite",
	},
	{
		url: "./zion2.jpg",
		alt: "zion2",
	},
	{
		url: "./zion.jpg",
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
