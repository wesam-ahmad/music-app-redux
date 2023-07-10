import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Sidebar from "./components/Sidebar";
import UsersTable from "./components/UsersTable";
import DefaultLayout from "./layout/DefaultLayout";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Comments from "./pages/Comments";
import PostsTable from "./components/PostsTable";
import PostsRequestsTable from "./components/PostsRequestsTable";

function App() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full">
          <div className="fixed left-0 top-0 h-full">
            <Sidebar />
          </div>
          <div>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/comments" element={<Comments />} />
              <Route path="/posts" element={<PostsTable />} />
              <Route path="/postsrequests" element={<PostsRequestsTable />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
