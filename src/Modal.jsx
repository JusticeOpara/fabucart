import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../redux/modalSlice';

const Modal = () => {
  const dispatch = useDispatch();
  const { isOpen, mode } = useSelector((state) => state.modal);

  const handleModalClose = () => {
    dispatch(closeModal());
  };

  return (
    <div className={`modal ${isOpen ? 'show' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={handleModalClose}>
          &times;
        </span>
        {mode === 'login' && <LoginForm />}
        {mode === 'signup' && <SignupForm />}
      </div>
    </div>
  );
};

export default Modal;
