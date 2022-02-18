import React from "react";

const Image = ({ imageData }) => {
  return (
    <div className="flex flex-col">
      <img className="rounded-md" src={imageData.image_url} />
      <h4 className="font-bold">{imageData.name}</h4>
      <p className="font-light">{imageData.user.username}</p>
    </div>
  );
};

export default Image;
