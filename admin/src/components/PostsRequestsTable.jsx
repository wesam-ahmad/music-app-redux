import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { togglePortal } from "../reducers/PortalReducer";
import {
  acceptPostData,
  rejectPostData,
  fetchNotActivePosts,
} from "../reducers/postsReducer";

import Portal from "../components/Portal";
import ReactPaginate from "react-paginate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import "../css/pagination.css";

const PostsRequestsTable = () => {
  const dispatch = useDispatch();
  const notActivePosts = useSelector((state) => state.posts.notActivePosts);

  useEffect(() => {
    dispatch(fetchNotActivePosts());
  }, [dispatch]);

  const handleAccept = (postId) => {
    dispatch(acceptPostData(postId));
  };

  const handleReject = (postId) => {
    dispatch(rejectPostData(postId));
  };

  return (
    <>
      <div className="container pt-8 px-8">
        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-md m-5">
          <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
            <thead className="">
              <tr>
                <th
                  scope="col"
                  colSpan="6" // Spanning all columns
                  className="px-6 py-4 font-medium text-gray-900 bg-violet-200"
                >
                  <h4 className=" uppercase">Posts</h4>
                </th>
              </tr>

              <hr />
              <tr className="bg-gray-50">
                <th className="px-6 py-4 font-medium text-gray-900">Number</th>
                <th className="px-6 py-4 font-medium text-gray-900">Author </th>
                <th className="px-6 py-4 font-medium text-gray-900">Title</th>
                <th className="px-6 py-4 font-medium text-gray-900">
                  Publication Date
                </th>
                <th className="px-6 py-4 font-medium text-gray-900">
                  Comments Count
                </th>
                <th className="px-6 py-4 font-medium text-gray-900">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
              {Array.isArray(notActivePosts) &&
                notActivePosts.map((post) => (
                  <tr className="hover:bg-violet-50">
                    <td className="px-6 py-4"></td>

                    <td className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                      <div className="text-sm">
                        <div className="font-medium text-gray-700">
                          {post.author}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">{post.title}</td>
                    <td className="px-6 py-4">{post.createdAt}</td>
                    <td className="px-6 py-4">{post.commentCount}</td>

                    <td className="px-6 py-4">
                      <div className="flex justify-start gap-4">
                        <FontAwesomeIcon
                          icon={faEye}
                          className="text-gray-500 hover:text-violet-700 text-lg cursor-pointer "
                        />
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="text-green-500 text-lg cursor-pointer"
                          onClick={() => handleAccept(post._id)}
                        />
                        <FontAwesomeIcon
                          icon={faTimes}
                          className="text-red-500 text-lg cursor-pointer"
                          onClick={() => handleReject(post._id)}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default PostsRequestsTable;
