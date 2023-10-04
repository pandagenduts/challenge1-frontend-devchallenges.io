import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const inputVariants = cva("", {
  variants: {
    size: {
      sm: "",
      md: "",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const Input = (props) => {
  const {
    value,
    helperText,
    disabled,
    error,
    startIcon,
    endIcon,
    size,
    fullwidth,
    multiline,
  } = props;

  const inputClasses = twMerge(
    inputVariants({ size }),
    error && "",
    disabled && "",
    fullwidth && "",
    startIcon || (endIcon && "")
  );

  return (
    <p className="flex flex-col">
      <label htmlFor="inputComponent">Test!</label>
      {multiline ? (
        <textarea
          type="text"
          placeholder="placeholder"
          id="inputComponent"
          name="inputComponent"
          defaultValue={value}
          className={inputClasses}
        />
      ) : (
        <input
          type="text"
          placeholder="placeholder"
          id="inputComponent"
          name="inputComponent"
          defaultValue={value}
          className={inputClasses}
        />
      )}
      {helperText && <span>{helperText}</span>}
    </p>
  );
};

export default Input;
