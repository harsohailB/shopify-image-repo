import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full p-4">
      <div className="flex items-center">
        <img
          src="http://assets.stickpng.com/images/58482ec0cef1014c0b5e4a70.png"
          className="w-8 h-auto"
        />
        <h1 className="italic font-bold text-xl ml-2">
          Shopify Image Repository
        </h1>
        <p className="font-light text-md ml-2">by Harsohail Brar</p>
      </div>
    </div>
  );
};

export default Navbar;
