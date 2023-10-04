import { cva } from "class-variance-authority";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

const inputVariants = cva(
  "py-[18px] px-3 outline outline-1 outline-[#828282] hover:outline-[#333] focus:outline-[#2962FF] duration-150 rounded-lg",
  {
    variants: {
      size: {
        sm: "",
        md: "",
      },
    },
    defaultVariants: {
      // size: "md",
    },
  }
);

const Input = (props) => {
  const [isInputFocused, setInputFocused] = useState(false);

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

  const {
    value,
    helperText,
    disabled,
    error,
    startIcon,
    endIcon,
    size,
    fullwidth,
    row,
    multiline,
    className,
    labelClassName,
  } = props;

  const inputClasses = twMerge(
    inputVariants({ size, className }),
    "",
    error && "outline-[#D32F2F] focus:outline-[#D32F2F] hover:outline-[#333]",
    disabled && "",
    fullwidth && "",
    startIcon || (endIcon && "")
  );

  console.log(labelClassName);

  return (
    <p
      className={`flex flex-col gap-1 input-wrapper ${
        error ? "input-error" : ""
      }`}
    >
      <label
        htmlFor="inputComponent"
        className={`text-xs text-333 duration-150 ${
          isInputFocused && !error ? "!text-[#2962FF]" : ""
        } 
        ${error ? "text-[#D32F2F]" : ""}
        ${isInputFocused && error ? 'text-[#333]' : ''}
        ${labelClassName ? labelClassName : ""}
        `}
      >
        Label
      </label>
      {multiline ? (
        <textarea
          type="text"
          rows={row ? row : 2}
          placeholder="Placeholder"
          id="inputComponent"
          name="inputComponent"
          defaultValue={value}
          className={inputClasses}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
      ) : (
        <input
          type="text"
          placeholder="Placeholder"
          id="inputComponent"
          name="inputComponent"
          defaultValue={value}
          className={inputClasses}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
      )}
      {helperText && <span>{helperText}</span>}
    </p>
  );
};

export default Input;
