import React from 'react';
import style from './Modal.module.css';
import ReactDOM from 'react-dom';

function Modal({ open, children, onClose }) {
  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div className={style.overlay}></div>
      <div className={style.modal}>
        <p className={style.title}>Re-uploaded Products</p>
        <div className={style.button} onClick={onClose}>
          <i className="fal fa-times"></i>
        </div>
        {children}
        <div className={style.btnContainer}>
          <span className={style.confirmBtn} onClick={onClose}>
            OK
          </span>
        </div>
      </div>
    </>,
    document.getElementById('portal')
  );
}

export default Modal;
