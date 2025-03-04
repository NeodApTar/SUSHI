import React, { useEffect } from "react";
import "./Modal.css";

const IngredientModal = ({ isOpen, onClose, image, title, description }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => document.body.classList.remove("modal-open");
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={`modal ${isOpen ? "modal--open" : ""}`}>
      <div className="modal__overlay" onClick={onClose}></div>
      <div className="modal__content">
        <button className="modal__close" onClick={onClose}>&times;</button>
        <div className="modal__body">
          <div className="modal__image-wrapper">
            <img src={image} alt={title} className="modal__image" />
          </div>
          <div className="modal__info">
            <span className="modal__title">{title}</span>
            <p className="modal__description">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IngredientModal;