import React from "react";

export const Alert = ({ alert }) => {
  const { text, status } = alert;

  return (
    <div className={`alert alert-${status}`} role="alert">
      {text}
    </div>
  );
};
