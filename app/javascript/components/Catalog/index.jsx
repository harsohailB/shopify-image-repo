import React, { useContext, useEffect, useState } from "react";
import Image from "./Image";
import { getImages } from "../../actions/images";
import { UserContext } from "../../contexts/UserContext";

const Catalog = ({ title, publicPermissions }) => {
  const [user] = useContext(UserContext);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const userId = user ? user.id : null;
    getImages(publicPermissions, userId).then((fetchedImagesData) => {
      setImages(cleanImageData(fetchedImagesData));
      setLoading(false);
    });
  }, []);

  const cleanImageData = (rawData) => {
    return rawData.data.map((imageData) => ({
      id: imageData.id,
      ...imageData.attributes,
      user: rawData.included.find(
        (user) => user.id === imageData.relationships.user.data.id
      ).attributes
    }));
  };

  const renderImages = () => {
    return images.map((imageData) => (
      <Image
        key={imageData.id}
        imageData={imageData}
        publicPermissions={publicPermissions}
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
