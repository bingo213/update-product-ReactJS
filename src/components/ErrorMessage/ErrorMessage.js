import React, { useEffect, useState } from 'react';
import style from './ErrorMessage.module.css';

function ErrorMessage({ message }) {
  const [showClass, setShowClass] = useState(style.show);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowClass("");
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  },[]);
  
  return <div className={`${style.snackbar} ${showClass}`}>{message}</div>;
}

export default ErrorMessage;
