import React, { useEffect, useState } from "react";
import Image from "./Image";
import { getPublicImages } from "../../actions/images";

const Catalog = ({ title }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getPublicImages().then((fetchedImagesData) => {
      setImages(cleanImageData(fetchedImagesData));
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
      <Image key={imageData.id} imageData={imageData} />
    ));
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="grid grid-cols-3 gap-12">{renderImages()}</div>
    </div>
  );
};

export default Catalog;
