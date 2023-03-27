import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ id, message, type, handleClose }) {
  const IconType = ICONS_BY_VARIANT[type];

  return (
    <div className={`${styles.toast} ${styles[type]}`}>
      <div className={styles.iconContainer}>
        <IconType size={24} />
      </div>
      <p className={styles.content}>
        <div className={styles.visuallyHidden_wrapper}>{type} - </div>
        {message}
      </p>
      <button
        className={styles.closeButton}
        onClick={() => handleClose(id)}
        aria-label="Dismiss message"
        aria-live="off"
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
