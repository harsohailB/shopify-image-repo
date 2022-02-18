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
      <div className="flex items-center">
        <img src={ShopifyLogo} className="w-8 h-auto" />
        <h1 className="italic font-bold text-xl ml-2">
          Shopify Image Repository
        </h1>
        <p className="font-light text-md ml-2">by Harsohail Brar</p>
      </div>

      {user ? (
        <div>
          <span className="text-gray-500 font-bold text-sm">
            Logged in as: {user.attributes.username}
          </span>
          <span
            className="p-4 font-bold text-md rounded-lg cursor-pointer"
            onClick={() => logout()}
          >
            Logout
          </span>
        </div>
      ) : (
        <a href="/login" className="p-4 font-bold text-md rounded-lg">
          Login
        </a>
      )}
    </div>
  );
};

export default Navbar;
