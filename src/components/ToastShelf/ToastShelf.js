import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider";

function ToastShelf() {
  const { toasts, removeToast } = React.useContext(ToastContext);

  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ id, message, type }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast
            id={id}
            message={message}
            type={type}
            handleClose={removeToast}
          />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
