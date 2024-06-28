import React, { useState } from "react";
import Selections from "../Selections/Selections.jsx";
import "./Modal.scss";

const Modal = ({
  modalOpen,
  toggleModal,
  largeText,
  setLargeText,
  rend,
  selections,
  setSelections,
  title,
}) => {
  const handleFont = () => {
    setLargeText(!largeText);
  };

  return (
    <div>
      {modalOpen && (
        <div
          className="modal"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal__header d-flex align-items-center border-bottom px-3 py-2">
                <h5 className="modal-title">Reader Preferences</h5>
                <button
                  type="button"
                  className="btn-close ms-auto"
                  onClick={toggleModal}
                  aria-label="Close"
                >
                </button>
              </div>
              <div className="modal-body">
                <button
                  onClick={() => handleFont()}
                  className="btn btn-light btn-sm py-3 px-1 mb-2"
                >
                  {largeText ? "Smaller font" : "Bigger font"}
                </button>
                <Selections
                  rend={rend}
                  selections={selections}
                  setSelections={setSelections}
                  title={title}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
