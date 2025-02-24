// src/ui/button.jsx
import React from "react";

export const Button = ({ children, className, variant, ...props }) => {
  const baseStyles = "px-4 py-2 rounded-md font-medium transition-colors";
  const variantStyles = {
    default: "bg-blue-500 text-white hover:bg-blue-600",
    outline: "border border-gray-300 hover:bg-gray-100",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant || "default"]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};