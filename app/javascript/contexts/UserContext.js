import React, { createContext, useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LOGIN_USER, LOGOUT_USER } from "../actions/types";
import { authenticateUser } from "../actions/users";

const user_storage_key = "shopify-image-repo-user";
const rawInitialState = localStorage.getItem(user_storage_key);
const initialState =
  rawInitialState != "undefined" ? JSON.parse(rawInitialState) : null;

const userReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_USER:
      localStorage.setItem(user_storage_key, JSON.stringify(action.user));
      return action.user;
    case LOGOUT_USER:
      localStorage.setItem(user_storage_key, null);
      return null;
    default:
      return state;
  }
};

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, dispatchUser] = useReducer(userReducer, initialState);
  const navigate = useNavigate();

  useEffect(() => {
    if (user == null) return;

    const tokenExpiry = new Date(user.token_expiry);
    if (new Date() >= tokenExpiry) {
      logoutUser();
    } else {
      authenticateUser(user.username, user.auth_token).catch((err) =>
        logoutUser()
      );
    }
  }, []);

  const logoutUser = () => {
    dispatchUser({ type: LOGOUT_USER, user: null });
    navigate("/");
  };

  return (
    <UserContext.Provider value={[user, dispatchUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
