import React, { useState } from "react";

export const SelectContent = ({ children, ...props }) => (
  <div
    className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg"
    {...props}
  >
    {children}
  </div>
);

export const Select = ({ defaultValue, children, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const handleSelect = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  return (
    <div className="relative" {...props}>
      <SelectTrigger onClick={() => setIsOpen(!isOpen)}>
        <SelectValue>{selectedValue}</SelectValue>
      </SelectTrigger>
      {isOpen && (
        <SelectContent>
          {React.Children.map(children, (child) =>
            React.cloneElement(child, {
              onClick: () => handleSelect(child.props.value),
            })
          )}
        </SelectContent>
      )}
    </div>
  );
};

export const SelectTrigger = ({ children, ...props }) => (
  <div
    className="flex items-center justify-between p-2 border border-gray-300 rounded-md cursor-pointer"
    {...props}
  >
    {children}
  </div>
);

export const SelectItem = ({ children, value, onClick, ...props }) => (
  <div
    className="p-2 cursor-pointer hover:bg-gray-100"
    onClick={() => onClick(value)}
    {...props}
  >
    {children}
  </div>
);

export const SelectValue = ({ children, ...props }) => (
  <span {...props}>{children}</span>
);