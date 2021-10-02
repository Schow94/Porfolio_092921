import React from "react";

const Image = ({ image }) => {
	return <img className="photo-image" src={image.url} alt={image.alt} />;
};

export default Image;
