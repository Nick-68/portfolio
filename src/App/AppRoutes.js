import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../components/Home";
import { Profile } from "../components/Profile";
import { Navbar } from "../components/Navbar";

export const AppRoutes = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="w-14 md:w-32 min-h-full">
        <Navbar />
      </div>

      <div className="flex w-full min-h-full bg-slate-200 dark:bg-gray-800">
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
};
