import React from "react";

export const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [toasts, setToasts] = React.useState([]);

  const addToast = React.useCallback((message, variant) => {
    setToasts((items) => [
      ...items,
      {
        id: crypto.randomUUID(),
        message: message,
        type: variant,
      },
    ]);
    setMessage("");
    setVariant(VARIANT_OPTIONS[0]);
  }, []);

  const removeToast = React.useCallback((id) => {
    setToasts((items) => items.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider
      value={{
        message,
        setMessage,
        variant,
        setVariant,
        toasts,
        addToast,
        removeToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
