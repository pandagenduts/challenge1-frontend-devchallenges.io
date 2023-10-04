import { cva } from "class-variance-authority";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

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
  } = props;

  const inputClasses = twMerge(
    inputVariants({ size, className }),
    "",
    error && "",
    disabled && "",
    fullwidth && "",
    startIcon || (endIcon && "")
  );

  return (
    <p className="flex flex-col gap-1">
      <label
        htmlFor="inputComponent"
        className={`text-xs text-333 ${isInputFocused && 'text-[#2962FF]'}`}
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
