import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  "flex justify-center items-center px-4 py-2 duration-300 rounded-md shadow-normal bg-E0E0E0 text-3F3F3F hover:bg-AEAEAE",
  {
    variants: {
      variant: {
        text: "!bg-transparent !shadow-none text-3D5AFE hover:!bg-EAF0FF",
        outline:
          "bg-white hover:bg-EAF0FF border-1 border border-3D5AFE shadow-none text-3D5AFE",
      },
      size: {
        sm: "px-3 py-1.5",
        md: "px-4 py-2",
        lg: "px-[22px] py-[11px]",
      },
      color: {
        default: "bg-E0E0E0 text-3F3F3F hover:bg-AEAEAE",
        primary: "bg-2962FF hover:bg-0039CB text-white",
        secondary: "bg-455A64 hover:bg-1C313A text-white",
        danger: "bg-D32F2F hover:bg-9A0007 text-white",
      }
    },
    defaultVariants: {
      size: "md",
    },
  }
);

const Button = (props) => {
  const {
    className,
    variant,
    size,
    color,
    disabled,
    disableShadow,
    startIcon,
    endIcon,
    children,
  } = props;

  return (
    <button
      className={twMerge(
        buttonVariants({ variant, size, color, className }),
        disableShadow && "!shadow-none",
        disabled && "bg-E0E0E0 hover:bg-E0E0E0 text-9E9E9E cursor-not-allowed",
        startIcon || endIcon
          ? "gap-2 bg-2962FF hover:bg-0039CB text-white "
          : undefined
      )}
      disabled={disabled}
    >
      {startIcon && <span className="text-lg material-icons">{startIcon}</span>}
      {children}
      {endIcon && <span className="text-lg material-icons">{endIcon}</span>}
    </button>
  );
};

export default Button;
