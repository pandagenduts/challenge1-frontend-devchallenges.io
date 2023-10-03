import { cva } from "class-variance-authority";
import React from "react";

const buttonVariants = cva("px-4 py-2 duration-300 rounded-md shadow-normal", {
  variants: {
    variant: {
      text: "",
      outline: "",
    },
    size: {
      sm: "px-3 py-1.5",
      md: "px-4 py-2",
      lg: "px-[22px] py-[11px]",
    },
    color: {
      default: "bg-E0E0E0 text-3F3F3F hover:bg-AEAEAE",
      primary: "bg-2962FF text-white",
      secondary: " text-white",
      danger: " text-white",
    },
    defaultVariants: {
      size: 'md',
      color: 'default'
    }
  },
});

const Reusable = ({ className, variant, size, color, ...props }) => {
  return <button className={buttonVariants({variant, size, color})} {...props} />
};

export default Reusable;
