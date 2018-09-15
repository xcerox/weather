import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ErrorToast = ({ isError }) => {

  if (!isError) {
    return null;
  }

  let showError = () => {
    toast.error("⚠️This city couldn't be found.");
  }

  return (
    <div>
      {showError()}
      <ToastContainer autoClose={3000} />
    </div>
  )
}

export default ErrorToast;