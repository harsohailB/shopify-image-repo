import React, { createContext, useReducer, useEffect } from "react";
import { LOGIN_USER, LOGOUT_USER } from "../actions/types";

const user_storage_key = "shopify-image-repo-user";
const rawInitialState = localStorage.getItem(user_storage_key);
const initialState =
  rawInitialState != "undefined" ? JSON.parse(rawInitialState) : null;

const userReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_USER:
      localStorage.setItem(user_storage_key, JSON.stringify(action.user.data));
      return action.user.data;
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

  return (
    <UserContext.Provider value={[user, dispatchUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
