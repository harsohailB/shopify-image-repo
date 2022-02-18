import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "../contexts/UserContext";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import Navbar from "./Navbar";

const App = () => {
  return (
    <UserProvider>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
