import clsx from "clsx";
import React, { forwardRef, useEffect, useId, useState } from "react";
import type { UIProps } from "../../UIProps";
import { Icon20 } from "../Icon/Icon20";
import { Label } from "../Label/Label";

export interface InputProps extends UIProps.Input {
  id?: string;
  type?: "text" | "number" | "password" | "email" | "tel" | "phone" | "search";
  label?: string;
  labelDirection?: "row" | "column";
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  placeholder?: string;
  theme?: "light" | "dark";
  isClearable?: boolean;
  value?: string | number;
  defaultValue?: string | number;
  error?: string;
  onClear?: () => void;
}

const getDefaultValue = (
  type?: "text" | "number" | "password" | "email" | "tel" | "phone" | "search",
  value?: string | number,
  defaultValue?: string | number,
) => {
  if (value !== undefined) return value;
  if (defaultValue !== undefined) return defaultValue;
  if (type === "number") return 0;
  return "";
};

const fieldCommon = clsx(
  "flex h-[38px] px-3 py-2 gap-2.5 items-center justify-between self-stretch rounded-md border transition-all duration-300",
  "border-gray-300 focus-within:border-theme-primary",
);
const inputCommon =
  "text-14/subtle peer w-full self-stretch overflow-ellipsis bg-transparent focus:outline-none text-gray-950 placeholder:text-gray-400 disabled:text-gray-400";

export const Textfield = forwardRef<HTMLInputElement, InputProps>(function Textfield(
  {
    id,
    type = "text",
    label,
    labelDirection = "column",
    leadingIcon,
    trailingIcon,
    placeholder,
    isClearable = false,
    children,
    disabled = false,
    required,
    error,
    onChange,
    onClear,
    className,
    value,
    ...props
  },
  ref,
) {
  const localId = `planty-${useId()}`;
  const inputId = id || localId;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
  };

  const handleClear = () => {
    onClear?.();
    onChange?.({ target: { value: "" } } as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <div className={clsx("flex items-start gap-4", labelDirection === "column" ? "flex-col" : "", className)}>
      {label && <Label htmlFor={localId} label={label} required={required} error={error} />}
      {!!leadingIcon && leadingIcon}
      <div className={clsx(fieldCommon, disabled && "bg-gray-150")}>
        <input
          id={inputId}
          ref={ref}
          disabled={disabled}
          placeholder={placeholder}
          required={required}
          type={type}
          value={value}
          onChange={handleChange}
          className={inputCommon}
          {...props}
        />
        {!!isClearable && (
          <Icon20.Close
            className={clsx(
              "text-gray-200 opacity-0 transition-all duration-300 hover:cursor-pointer hover:text-gray-300",
              value && value.toString().length > 0 && "peer-focus:opacity-100",
            )}
            onClick={handleClear}
          />
        )}
      </div>
      {!!trailingIcon && trailingIcon}
    </div>
  );
});

export default Textfield;
