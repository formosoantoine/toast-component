import React from "react";

import styles from "./VariantToast.module.css";
import { ToastContext, VARIANT_OPTIONS } from "../ToastProvider";

function VariantToast() {
  const { variant, setVariant } = React.useContext(ToastContext);

  return (
    <>
      <div className={`${styles.radioWrapper}`}>
        {VARIANT_OPTIONS.map((v) => {
          const id = `variant-${v}`;
          return (
            <label key={id} htmlFor={id}>
              <input
                id={id}
                type="radio"
                name="variant"
                value={v}
                checked={v === variant}
                onChange={(event) => {
                  setVariant(event.target.value);
                }}
              />
              {v}
            </label>
          );
        })}
      </div>
    </>
  );
}

export default VariantToast;
