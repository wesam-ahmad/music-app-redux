import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { togglePortal } from "../reducers/PortalReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Portal = ({ data, onView }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.isOpen);

  const handleClose = () => {
    dispatch(togglePortal());
  };

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black opacity-50"></div>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg p-8 relative">
          <button
            className="absolute top-2 right-2 text-gray-900 hover:text-gray-700 focus:outline-none"
            onClick={handleClose}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <h3 className="text-xl font-semibold mb-4">Hi!</h3>
          <p>{data}</p>
        </div>
      </div>
    </>
  );
};

export default Portal;
