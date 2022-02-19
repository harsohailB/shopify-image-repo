import React, { useContext, useEffect, useState } from "react";
import ImageItem from "./ImageItem";
import { getAllImages, getPersonalImages } from "../../actions/images";
import { UserContext } from "../../contexts/UserContext";

const Catalog = ({ title, publicPermissions }) => {
  const [user] = useContext(UserContext);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = () => {
    setLoading(true);
    const userId = user ? user.id : null;

    if (publicPermissions) {
      getAllImages()
        .then((fetchedImagesData) => {
          setImages(fetchedImagesData);
          setLoading(false);
        })
        .catch((error) => console.log(error));
    } else {
      getPersonalImages(user.id, user.auth_token)
        .then((fetchedImagesData) => {
          setImages(fetchedImagesData);
          setLoading(false);
        })
        .catch((error) => console.log(error));
    }
  };

  const renderImages = () => {
    return images.map((imageData) => (
      <ImageItem
        key={imageData.id}
        imageData={imageData}
        publicPermissions={publicPermissions}
        loadImages={loadImages}
      />
    ));
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {images.length ? (
            <div className="grid grid-cols-3 gap-12">{renderImages()}</div>
          ) : (
            <p>No images.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Catalog;
