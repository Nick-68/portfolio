import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../components/Home";
import { Profile } from "../components/Profile";
import { Navbar } from "../components/Navbar";
import { About } from "../components/About";
import { Projects } from "../components/Projects";

export const AppRoutes = () => {
  return (
    <div className="flex w-screen h-screen">
      <Navbar />

      <div className="flex flex-1 min-h-screen h-full bg-slate-200 dark:bg-gray-800">
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </div>
  );
};
