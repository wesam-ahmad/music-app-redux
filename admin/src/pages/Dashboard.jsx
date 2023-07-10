import React from "react";
import Users from "./Users";

import Comments from "./Comments";
import States from "../components/States";
import PostsTable from "../components/PostsTable";
import UsersTable from "../components/UsersTable";
import CommentsTable from "../components/CommentsTable";

const Dashboard = () => {
  return (
    <div>
      <div className="flex">
        <div className="flex flex-col w-full p-8">
          <States />
          <div className="flex w-full">
            <div className=" w-full">
              <Users />
            </div>
          </div>
          <div className="flex w-full">
            <div className="w-full">
              <Comments />
            </div>
          </div>
          <div className="flex w-full">
            <div className="w-full">
              <PostsTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
