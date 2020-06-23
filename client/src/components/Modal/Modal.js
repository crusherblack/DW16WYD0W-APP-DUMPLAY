import React from "react";
import "./Modal.css";

const Modal = ({ children, show }) => {
  return (
    <div>
      <div
        className="modal-wrapper"
        style={{
          transform: show ? "translateY(0vh)" : "translateY(-100vh)",
          opacity: show ? "1" : "0",
        }}
      >
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
