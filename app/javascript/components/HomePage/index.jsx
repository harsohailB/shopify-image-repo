import React from "react";
import Catalog from "../Catalog";

const HomePage = () => {
  return (
    <div className="h-full flex flex-col p-20">
      <h1 className="font-bold text-6xl w-50 mb-10">
        Store your images with us.
      </h1>
      <Catalog title="Public Repository" />
    </div>
  );
};

export default HomePage;
