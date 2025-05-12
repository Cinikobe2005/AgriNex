import React from "react";

const Modal = ({ isOpen, onClose, title, message, color }) => {
  if (!isOpen) return null;

  return (
    <div className="modal modal-open fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="modal-box bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md">
        <h3 className={`${color} font-bold text-lg`}>{title}</h3>
        <p className="py-4 text-black">{message} </p>
        <div className="modal-action flex justify-end">
          <button
            onClick={onClose}
            className="btn bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
