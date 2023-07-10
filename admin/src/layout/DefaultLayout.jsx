import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const DefaultLayout = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex flex-col w-full">
        <Header />

        {/* Main content */}
        <div className="p-6">{/* Content goes here */}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
