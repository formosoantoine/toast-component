import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, handleClose }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ id, message, type }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast
            id={id}
            message={message}
            type={type}
            handleClose={handleClose}
          />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
