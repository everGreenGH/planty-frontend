import clsx from "clsx";
import { forwardRef } from "react";
import type { UIProps } from "../../UIProps";

export type ButtonProps = UIProps.Button & {
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  // theme?: "light" | "dark";
  // variant?: "primary" | "secondary" | "assertive" | "nonOutlined";
  iconOnly?: boolean;
  size?: "large" | "small";
  selected?: boolean;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    type = "button",
    className,
    children,
    leadingIcon,
    trailingIcon,
    // theme = "light",
    // variant = "primary",
    iconOnly = false,
    size = "large",
    selected = false,
    ...props
  },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type === "button" ? "button" : "submit"}
      className={clsx(
        "flex h-[50px] w-[592px] items-center justify-center gap-2.5 p-2 px-4",
        "bg-brand-primary rounded-md text-theme-white",
        className,
      )}
      {...props}
    >
      {!!leadingIcon && leadingIcon}
      {children}
      {!!trailingIcon && trailingIcon}
    </button>
  );
});

export default Button;
