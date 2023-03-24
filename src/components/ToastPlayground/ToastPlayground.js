import React from "react";

import Button from "../Button";
import VariantToast from "../VariantToast";
import Toast from "../Toast";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [popToast, setPopToast] = React.useState(false);

  function submitToast(event) {
    event.preventDefault();
    setPopToast(true);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {popToast && (
        <Toast
          message={message}
          type={variant}
          handleClose={() => setPopToast(false)}
        />
      )}

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
