import { faEyeSlash, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { deleteImage } from "../../actions/images";
import ImagePreview from "./ImagePreview";

const ImageItem = ({ imageData, publicPermissions, loadImages }) => {
  const handleDelete = () => {
    deleteImage(imageData.id).then((response) => {
      loadImages();
    });
  };

  return (
    <div className="flex flex-col">
      <ImagePreview url={imageData.image_url} />
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h4 className="font-bold">{imageData.name}</h4>
          <p className="font-light">{imageData.user.username}</p>
        </div>
        <div>
          {!imageData.public && (
            <FontAwesomeIcon className="text-grey-500 mr-2" icon={faEyeSlash} />
          )}
          {!publicPermissions && (
            <FontAwesomeIcon
              className="cursor-pointer text-red-500 font-bold text-sm"
              onClick={handleDelete}
              icon={faTrash}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageItem;
