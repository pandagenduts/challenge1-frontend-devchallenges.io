import { cva } from "class-variance-authority";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

const inputVariants = cva(
  "px-3 outline outline-1 outline-[#828282] hover:outline-[#333] focus:outline-[#2962FF] duration-150 rounded-lg",
  {
    variants: {
      size: {
        sm: "py-2.5",
        md: "py-[18px]",
      },
    },
    defaultVariants: {
      size: "md",
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
    fullWidth,
    row,
    multiline,
    className,
    labelClassName,
  } = props;

  const inputClasses = twMerge(
    inputVariants({ size, className }),
    error && "outline-[#D32F2F] focus:outline-[#D32F2F] hover:outline-[#333]",
    disabled && "cursor-not-allowed outline-[#E0E0E0]",
    fullWidth && "w-full",
    startIcon && 'pl-11',
    endIcon && 'pr-11',

  );

  const labelClasses = twMerge(
    clsx(
      "text-xs text-333 duration-150",
      isInputFocused && !error && "!text-[#2962FF]",
      error && "text-[#D32F2F]",
      labelClassName && labelClassName
    )
  );

  const helperTextClasses = twMerge(
    clsx("text-828282 text-[10px] font-normal", error && "text-[#D32F2F]")
  );

  return (
    <div
      className={`flex flex-col gap-1 input-container ${
        error ? "input-error" : ""
      }`}
    >
      <label htmlFor="inputComponent" className={labelClasses}>
        Label
      </label>
      <div className='relative w-auto input-wrapper'>
        {startIcon && <span className="absolute text-xl left-3 material-icons top-4 text-828282">{startIcon}</span>}
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
            disabled={disabled}
          />
        ) : (
          <input
            type="text"
            placeholder="Placeholder"
            id="inputComponent"
            name="inputComponent"
            defaultValue={value ? value : undefined}
            className={inputClasses}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            disabled={disabled}
          />
        )}
        {endIcon && <span className="absolute text-xl material-icons top-4 right-3 text-828282">{endIcon}</span>}
      </div>
      {helperText && <span className={helperTextClasses}>{helperText}</span>}
    </div>
  );
};

export default Input;
