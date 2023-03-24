import React from "react";

import styles from "./VariantToast.module.css";

function VariantToast({ variants, checked, handleCheckChange }) {
  return (
    <>
      <div className={`${styles.radioWrapper}`}>
        {variants.map((v) => {
          const id = `variant-${v}`;
          return (
            <label key={id} htmlFor={id}>
              <input
                id={id}
                type="radio"
                name="variant"
                value={v}
                checked={v === checked}
                onChange={(event) => {
                  handleCheckChange(event.target.value);
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
