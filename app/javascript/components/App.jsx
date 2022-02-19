import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "../contexts/UserContext";
import AccountPage from "./AccountPage";
import AddImagePage from "./AddImagePage";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import Navbar from "./Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <Navbar />
        <Routes>
          <Route exact path="/account/add" element={<AddImagePage />} />
          <Route exact path="/account" element={<AccountPage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
