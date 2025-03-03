import React from "react";

const Button = React.forwardRef(
  ({ children, className, variant = "default", ...props }, ref) => {
    const baseStyles = "px-4 py-2 rounded-md font-medium transition-colors";
    const variantStyles = {
      default: "text-white",
      outline: "border border-gray-300 hover:bg-gray-100",
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export default Button;