import React from "react";

const ImagePreview = ({ url }) => {
  return (
    <img className="rounded-md shadow-md w-60 h-60 object-cover" src={url} />
  );
};

export default ImagePreview;
