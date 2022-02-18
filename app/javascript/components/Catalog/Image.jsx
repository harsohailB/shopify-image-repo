import React from "react";

const Image = ({ imageData, publicPermissions }) => {
  return (
    <div className="flex flex-col">
      <img className="rounded-md" src={imageData.image_url} />
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h4 className="font-bold">{imageData.name}</h4>
          <p className="font-light">{imageData.user.username}</p>
        </div>
        {!publicPermissions && (
          <span className="cursor-pointer text-red-500 font-bold text-sm">
            DELETE
          </span>
        )}
      </div>
    </div>
  );
};

export default Image;
