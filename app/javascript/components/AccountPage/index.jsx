import React from "react";
import Catalog from "../Catalog";

const AccountPage = () => {
  return (
    <div className="flex flex-col items-center">
      <a
        href="/account/add"
        className="my-4 cursor-pointer bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Add Image
      </a>
      <Catalog title="Your Repository" publicPermissions={false} />
    </div>
  );
};

export default AccountPage;
