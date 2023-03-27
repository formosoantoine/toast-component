import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider";

function ToastShelf() {
  const { toasts, removeToast, removeAllToasts } =
    React.useContext(ToastContext);

  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        removeAllToasts();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [removeAllToasts]);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
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
