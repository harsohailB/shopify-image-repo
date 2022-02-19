import { faEyeSlash, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { deleteImage } from "../../actions/images";
import { UserContext } from "../../contexts/UserContext";
import ImagePreview from "./ImagePreview";

const ImageItem = ({ imageData, publicPermissions, loadImages }) => {
  const [user] = useContext(UserContext);

  const handleDelete = () => {
    deleteImage(imageData.id, user.id, user.auth_token).then((response) => {
      loadImages();
    });
  };

  return (
    <div className="flex flex-col w-60">
      <ImagePreview url={imageData.image_url} />
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h4 className="font-bold">{imageData.name}</h4>
          <p className="text-gray-500 font-light text-xs">
            {imageData.description}
          </p>
          <div>
            <span className="text-gray-500 font-bold text-sm">Author: </span>
            <span className="font-light text-gray-500 text-sm">
              {imageData.user.username}
            </span>
          </div>
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
