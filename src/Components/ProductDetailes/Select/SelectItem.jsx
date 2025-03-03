import React from "react";

const SelectItem = React.forwardRef(({ children, onClick, ...props }, ref) => (
  <div
    ref={ref}
    className="p-2 cursor-pointer hover:bg-gray-100"
    onClick={onClick}
    {...props}
  >
    {children}
  </div>
));

export default SelectItem;