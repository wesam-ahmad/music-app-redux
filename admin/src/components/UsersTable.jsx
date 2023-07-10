import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, deleteUserData } from "../reducers/UserReducer";
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

const UsersTable = () => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users);
  const { loading, error } = users;

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleDeleteUser = (userId) => {
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
        dispatch(deleteUserData(userId));
        Swal.fire("Deleted!", "The user has been deleted.", "success");
      }
    });
  };

  //Pagination
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage] = useState(5); // Set the number of items per page
  const totalPages = Math.ceil(users.data.length / perPage);

  const offset = currentPage * perPage;
  const currentUsers = users.data.slice(offset, offset + perPage);
  let counter = offset + 1;

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <div className="container pt-2 px-8">
            <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-md m-5">
              <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                <thead className="">
                  <tr>
                    <th
                      scope="col"
                      colSpan="6" // Spanning all columns
                      className="px-6 py-4 font-medium text-gray-900 bg-violet-200"
                    >
                      <h4 className=" uppercase">Users</h4>
                    </th>
                  </tr>
                  <hr />
                  <tr className="bg-gray-50">
                    <th
                      scope="col"
                      className="px-6 py-4 font-medium text-gray-900"
                    >
                      Number
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-medium text-gray-900"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-medium text-gray-900"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-medium text-gray-900"
                    >
                      State
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-medium text-gray-900"
                    ></th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-medium text-gray-900 flex justify-end pr-16"
                    >
                      Action{" "}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                  {currentUsers.map((user) => (
                    <tr className="hover:bg-violet-50" key={user._id}>
                      <td className="px-6 py-4">{counter++}</td>

                      <td className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                        <div className="text-sm">
                          <div className="font-medium text-gray-700">
                            {user.username}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        {" "}
                        <div className="text-gray-400">{user.email}</div>
                      </td>
                      <td className="px-6 py-4">
                        {user.active ? (
                          <div className="flex gap-2">
                            <div className="w-4 h-4 bg-green-500 rounded-full"></div>{" "}
                            {/* Green mark */}
                          </div>
                        ) : (
                          <div className="flex gap-2">
                            <div className="w-4 h-4 bg-red-500 rounded-full"></div>{" "}
                            {/* Red "X" */}
                          </div>
                        )}
                      </td>

                      <td className="px-6 py-4">
                        <div className="flex gap-2"></div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex justify-end gap-4 pr-8">
                          <FontAwesomeIcon
                            icon={faTrashAlt}
                            className="text-gray-500 hover:text-red-500 cursor-pointer text-lg pr-4"
                            onClick={() => handleDeleteUser(user._id)}
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

export default UsersTable;
