import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { togglePortal } from "../reducers/PortalReducer";
import { fetchPosts, deletePostData } from "../reducers/postsReducer";
import Portal from "../components/Portal";
import ReactPaginate from "react-paginate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import "../css/pagination.css";
import Swal from "sweetalert2";

const PostsTable = () => {
  const dispatch = useDispatch();
  const isPortalVisible = useSelector((state) => state.portal.isVisible);
  const posts = useSelector((state) => state.posts);

  const handleViewClick = () => {
    dispatch(togglePortal());
  };
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleDeletePost = (postId) => {
    Swal.fire({
      title: "Confirm Delete",
      text: "Are you sure you want to delete this user?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deletePostData(postId));
        Swal.fire("Deleted!", "The user has been deleted.", "success");
      }
    });
  };

  // Pagination
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage] = useState(5); // Set the number of items per page
  const totalPages = Math.ceil(posts.data.length / perPage);

  const offset = currentPage * perPage;
  const currentPosts = posts.data.slice(offset, offset + perPage);

  // Auto numbering
  let counter = offset + 1;
  return (
    <>
      {posts.loading ? (
        <p>Loading...</p>
      ) : posts.error ? (
        <p>Error: {posts.error}</p>
      ) : (
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
                    <th className="px-6 py-4 font-medium text-gray-900">
                      Number
                    </th>
                    <th className="px-6 py-4 font-medium text-gray-900">
                      Author{" "}
                    </th>
                    <th className="px-6 py-4 font-medium text-gray-900">
                      Title
                    </th>
                    <th className="px-6 py-4 font-medium text-gray-900">
                      Publication Date
                    </th>
                    <th className="px-6 py-4 font-medium text-gray-900">
                      Comments Count
                    </th>
                    <th className="px-6 py-4 font-medium text-gray-900">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                  {currentPosts.map((post) => (
                    <tr className="hover:bg-violet-50" key={post._id}>
                      <td className="px-6 py-4">{counter++}</td>

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
                            onClick={handleViewClick}
                          />
                          <FontAwesomeIcon
                            icon={faTrashAlt}
                            className="text-gray-500 hover:text-red-500 cursor-pointer text-lg"
                            onClick={() => handleDeletePost(post._id)} // Add this line
                          />
                        </div>
                      </td>
                      {isPortalVisible && (
                        <Portal data={posts.data} onView={handleViewClick} />
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <ReactPaginate
            previousLabel={
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="text-gray-500 hover:text-gray-700"
              />
            }
            nextLabel={
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-gray-500 hover:text-gray-700"
              />
            }
            pageCount={totalPages}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={(selected) => setCurrentPage(selected.selected)}
            containerClassName="pagination flex items-center justify-center mt-4"
            activeClassName="pagination-active"
            previousClassName="pagination-item"
            nextClassName="pagination-item"
            pageClassName="pagination-item"
            breakClassName="pagination-item"
            previousLinkClassName="pagination-link"
            nextLinkClassName="pagination-link"
            pageLinkClassName="pagination-link"
            breakLinkClassName="pagination-link"
          />
        </>
      )}
    </>
  );
};

export default PostsTable;
