import React, { useState, useCallback } from "react";
import { ChevronDown } from "lucide-react";
import SelectItem from "./SelectItem";

const Select = React.forwardRef(
  ({ defaultValue, onChange, children, ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(defaultValue);

    const handleSelect = useCallback(
      (value) => {
        setSelectedValue(value);
        setIsOpen(false);
        if (onChange) onChange(value);
      },
      [onChange]
    );

    return (
      <div ref={ref} className="relative" {...props}>
        <div
          className="flex items-center justify-between p-2 border border-gray-300 rounded-md cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{selectedValue}</span>
          <ChevronDown className="h-4 w-4" />
        </div>
        {isOpen && (
          <div className="absolute z-10 min-w-[150px] max-w-[300px] mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
            {React.Children.map(children, (child) =>
              React.cloneElement(child, {
                onClick: () => handleSelect(child.props.children),
              })
            )}
          </div>
        )}
      </div>
    );
  }
);

export default Select;