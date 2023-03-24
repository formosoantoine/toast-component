import React from "react";

import Button from "../Button";
import VariantToast from "../VariantToast";
import ToastShelf from "../ToastShelf";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [toasts, setToasts] = React.useState([]);

  function submitToast(event) {
    event.preventDefault();

    const newToats = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        message: message,
        type: variant,
      },
    ];

    setToasts(newToats);
    setMessage("");
    setVariant(VARIANT_OPTIONS[0]);
  }

  function removeToast(id) {
    const newToasts = toasts.filter((t) => t.id !== id);
    setToasts(newToasts);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toasts={toasts} handleClose={removeToast} />

      <div className={styles.controlsWrapper}>
        <form onSubmit={submitToast}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: "baseline" }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                className={styles.messageInput}
                onChange={(event) => setMessage(event.target.value)}
                value={message}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper}`}>
              <VariantToast
                variants={VARIANT_OPTIONS}
                checked={variant}
                handleCheckChange={setVariant}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ToastPlayground;
