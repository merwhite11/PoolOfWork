import React, { useState } from "react";
import "./AboutModal.scss";

const AboutModal = ({ aboutModalOpen, toggleAboutModal, title, summary }) => {
  return (
    <div>
      {aboutModalOpen && (
        <div
          className="modal modal__main"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal__header d-flex align-items-center border-bottom px-3 py-2">
                <h5 className="modal-title">{title}</h5>
                <button
                  type="button"
                  className="btn-close ms-auto"
                  onClick={toggleAboutModal}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">{summary}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutModal;
