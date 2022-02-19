import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import ShopifyLogo from "../../assets/images/shopifyLogo.png";
import { LOGOUT_USER } from "../actions/types";

const Navbar = () => {
  const [user, dispatchUser] = useContext(UserContext);

  const logout = () => {
    dispatchUser({ type: LOGOUT_USER, user: null });
  };

  return (
    <div className="flex items-center justify-between w-full p-4">
      <a className="flex items-center" href="/">
        <img src={ShopifyLogo} className="w-8 h-auto" />
        <h1 className="italic font-bold text-xl ml-2">
          Shopify Image Repository
        </h1>
        <p className="font-light text-md ml-2">by Harsohail Brar</p>
      </a>

      {user ? (
        <div className="space-x-2">
          <span className="text-gray-500 font-bold text-sm">
            Logged in as: {user.username}
          </span>
          <a
            href="/account"
            className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            My Catalog
          </a>
          <span
            className="cursor-pointer bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => logout()}
          >
            Logout
          </span>
        </div>
      ) : (
        <a
          href="/login"
          className="cursor-pointer bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Login
        </a>
      )}
    </div>
  );
};

export default Navbar;
