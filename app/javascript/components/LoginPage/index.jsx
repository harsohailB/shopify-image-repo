import React, { useContext, useState } from "react";
import { createUser, loginUser } from "../../actions/users";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const LoginPage = (props) => {
  const [user, dispatchUser] = useContext(UserContext);
  const [loginState, setLoginState] = useState(true);
  const [formState, setFormState] = useState({
    username: "",
    password: "",
    email: ""
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const onFormChange = (event) => {
    setFormState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (hasErrors()) return;

    if (loginState) {
      loginUser(formState.username, formState.password)
        .then((user) => {
          dispatchUser(user);
          navigate("/");
        })
        .catch((error) => setError(error.response.data.error));
    } else {
      createUser(formState.username, formState.password, formState.email)
        .then((user) => {
          dispatchUser(user);
          navigate("/");
        })
        .catch((error) => setError(error.response.data.error));
    }
  };

  const hasErrors = () => {
    if (
      loginState &&
      (formState.username.length == 0 || formState.password.length == 0)
    ) {
      return true;
    }

    if (!loginState && formState.email.length == 0) {
      return true;
    }

    return false;
  };

  return (
    <div className="h-full flex flex-col items-center">
      {user ? (
        <h3 className="font-bold text-4xl my-8">You are already logged in!</h3>
      ) : (
        <div>
          <h3 className="font-bold text-4xl my-8">
            {loginState ? "Login" : "Create Account"}
          </h3>
          <div className="w-full max-w-xs">
            <form
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              onSubmit={handleSubmit}
            >
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Username
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight mb-3 focus:outline-none focus:shadow-outline"
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Username"
                  value={formState.username}
                  onChange={onFormChange}
                />
                {formState.username.length == 0 && (
                  <p className="text-red-500 text-xs italic">
                    Please enter a username.
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="******************"
                  value={formState.password}
                  onChange={onFormChange}
                />
                {formState.password.length == 0 && (
                  <p className="text-red-500 text-xs italic">
                    Please choose a password.
                  </p>
                )}
              </div>
              {!loginState && (
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john.smith@gmail.com"
                    value={formState.email}
                    onChange={onFormChange}
                  />
                  {formState.email.length == 0 && (
                    <p className="text-red-500 text-xs italic">
                      Please enter an email.
                    </p>
                  )}
                </div>
              )}
              <div className="flex items-center justify-between">
                <input
                  className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  value={loginState ? "Login" : "Create Account"}
                />
                <div
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 cursor-pointer"
                  onClick={() => setLoginState(!loginState)}
                >
                  {!loginState ? "Login" : "Create Account"}
                </div>
              </div>
              {error && (
                <p className="mt-4 text-red-500 text-xs italic">{error}</p>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
