import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <aside className="flex flex-col w-20 sm:w-20 md:w-32 lg:w-64 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700 transition-width duration-300">
        <a href="#" className="mb-4">
          <span className="text-gray-800 font-semibold text-xl">Tunes</span>
        </a>
        <hr />
        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav className="-mx-3 space-y-6 ">
            <div className="space-y-3">
              <NavLink
                exact
                className="flex items-center px-3 py-8 text-gray-800 transition-colors duration-100 transform rounded-lg dark:text-gray-200 hover:bg-violet-50 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                to="/"
              >
                <i className="fas fa-chart-bar"></i>
                <span className="hidden md:inline mx-2 text-sm font-medium">
                  Overview
                </span>
              </NavLink>

              <NavLink
                className="flex items-center px-3 py-8 text-gray-800 transition-colors duration-100 transform rounded-lg dark:text-gray-200 hover:bg-violet-50 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                to="/users"
              >
                <i className="far fa-user-circle"></i>
                <span className="hidden md:inline mx-2 text-sm font-medium">
                  Users
                </span>
              </NavLink>

              <NavLink
                className="flex items-center px-3 py-8 text-gray-800 transition-colors duration-100 transform rounded-lg dark:text-gray-200 hover:bg-violet-50 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                to="/posts"
              >
                <i className="far fa-file"></i>
                <span className="hidden md:inline mx-2 text-sm font-medium">
                  Blog Posts
                </span>
              </NavLink>

              <NavLink
                className="flex items-center px-3 py-8 text-gray-800 transition-colors duration-100 transform rounded-lg dark:text-gray-200 hover:bg-violet-50 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                to="/postsrequests"
              >
                <i className="far fa-paper-plane"></i>
                <span className="hidden md:inline mx-2 text-sm font-medium">
                  Blog Posts Requests
                </span>
              </NavLink>

              <NavLink
                className="flex items-center px-3 py-8 text-gray-800 transition-colors duration-100 transform rounded-lg dark:text-gray-200 hover:bg-violet-50 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                to="/comments"
              >
                <i className="fas fa-comments"></i>
                <span className="hidden md:inline mx-2 text-sm font-medium">
                  Comments
                </span>
              </NavLink>
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
