import axios from "axios";
import { LOGIN_USER } from "./types";

export const createUser = async (username, password, email) => {
  const body = { username, password, email };

  const response = await axios.post("/users", { ...body });

  if (response.status !== 200) {
    throw new Error(response.error);
  }

  return { type: LOGIN_USER, user: response.data };
};

export const loginUser = async (username, password) => {
  const response = await axios.get("/users", {
    params: { username, password }
  });

  if (response.status !== 200) {
    throw new Error(response.error);
  }

  return { type: LOGIN_USER, user: response.data };
};
