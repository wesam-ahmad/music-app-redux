import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments, deleteComment } from "../reducers/CommentReducer";
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

const CommentsTable = () => {
  const dispatch = useDispatch();
  const isPortalVisible = useSelector((state) => state.portal.isVisible);
  const comments = useSelector((state) => state.comments);

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  const handleDeleteComment = (commentId) => {
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
        dispatch(deleteComment(commentId));
        Swal.fire("Deleted!", "The user has been deleted.", "success");
        console.log(commentId);
      }
    });
  };

  //Pagination
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage] = useState(5); // Set the number of items per page
  const totalPages = Math.ceil(comments.data.length / perPage);

  const offset = currentPage * perPage;
  const currentComments = comments.data.slice(offset, offset + perPage);

  let counter = offset + 1;

  return (
    <>
      {comments.loading ? (
        <p>Loading...</p>
      ) : comments.error ? (
        <p>Error: {comments.error}</p>
      ) : (
        <>
          <div className="container pt-8 px-8">
            <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-md m-5">
              <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                <thead className="">
                  <tr>
                    <th
                      scope="col"
                      colSpan="7" // Spanning all columns
                      className="px-6 py-4 font-medium text-gray-900 bg-violet-200"
                    >
                      <h4 className=" uppercase">Comments</h4>
                    </th>
                  </tr>
                  <hr />
                  <tr className="bg-gray-50">
                    <th className="px-6 py-4 font-medium text-gray-900">
                      Number
                    </th>
                    <th className="px-6 py-4 font-medium text-gray-900">
                      Author
                    </th>
                    <th className="px-6 py-4 font-medium text-gray-900">
                      Email
                    </th>
                    <th className="px-6 py-4 font-medium text-gray-900">
                      Publication Date
                    </th>
                    <th className="px-6 py-4 font-medium text-gray-900">
                      Title
                    </th>

                    <th className="px-6 py-4 font-medium text-gray-900">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                  {currentComments.map((comment) => (
                    <tr className="hover:bg-violet-50" key={comment._id}>
                      <td className="px-6 py-4">{counter++}</td>
                      <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                        <div className="text-sm">
                          <div className="font-medium text-gray-700">
                            {comment.authorName}
                          </div>
                        </div>
                      </th>
                      <td className="px-6 py-4">
                        {" "}
                        <div className="text-gray-400">
                          {comment.authorEmail}
                        </div>
                      </td>
                      <td className="px-6 py-4">{comment.createdAt}</td>
                      <td className="px-6 py-4">{comment.title}</td>

                      <td className="px-6 py-4">
                        <div className="flex justify-end gap-4">
                          <FontAwesomeIcon
                            icon={faTrashAlt}
                            className="text-gray-500 hover:text-red-500 cursor-pointer text-lg pr-8"
                            onClick={() => handleDeleteComment(comment._id)}
                          />
                        </div>
                      </td>
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

export default CommentsTable;
