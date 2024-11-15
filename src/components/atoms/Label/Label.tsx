import clsx from "clsx";
import type { UIProps } from "../../UIProps";
import { Icon20 } from "../Icon/Icon20";

export interface LabelProps extends UIProps.Label {
  label: React.ReactNode;
  required?: boolean;
  error?: any;
}

export const ErrorMessage = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <span className={clsx("flex items-center gap-2 text-14/body/m text-red-600", className)}>
      <Icon20.Error />
      {children}
    </span>
  );
};

export const Label = ({ label, required = false, error, className, htmlFor, ...props }: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className={clsx("text-14/s/button flex h-[18px] justify-between self-stretch text-gray-600", className)}
      {...props}
    >
      <span className="whitespace-nowrap">
        {label}
        {required && <span className="ml-[2px] text-theme-primary">*</span>}
      </span>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </label>
  );
};
