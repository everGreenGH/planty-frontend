import clsx from "clsx";
import mergeRefs from "merge-refs";
import { forwardRef, useRef, useState } from "react";
import type { UIProps } from "../../UIProps";
import { Icon20 } from "../Icon/Icon20";

export interface TextareaProps extends UIProps.TextArea {
  label?: React.ReactNode;
  showCount?: boolean;
  error?: any;
}

const MAX_LENGTH = 300;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Input(
  { label, className, children, required, onChange, disabled = false, showCount = true, error, ...props },
  _forwardRef,
) {
  const ref = useRef<HTMLTextAreaElement>(null);
  const mergedRef = mergeRefs(ref, _forwardRef);
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(props.value || "");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= MAX_LENGTH) {
      setValue(e.target.value);
      setCount(e.target.value.length);
      onChange?.(e);
    }
  };

  return (
    <label className={clsx("flex w-full flex-col gap-[13px]")}>
      {label && (
        <p className="flex h-[18px] justify-between text-14/subtle text-gray-600">
          <span>
            {label}
            {required && <span className="text-primary-500 ml-[2px]">*</span>}
          </span>
          {error && (
            <span className="text-etc-alert flex items-center gap-[8px] text-14/small">
              <Icon20.Error />
              {error}
            </span>
          )}
        </p>
      )}
      <div
        className={clsx(
          "autofill-hide group relative flex h-[142px] w-full flex-col self-stretch overflow-ellipsis rounded-[6px] border border-gray-200 bg-theme-white p-[12px] text-16/p text-gray-950 ",
          "focus-within:box-border focus-within:border focus-within:border-brand-primary focus:outline-none",
          { "bg-gray-200": disabled },
          { "bg-theme-white": !disabled },
          className,
        )}
      >
        <textarea
          ref={mergedRef}
          disabled={disabled}
          value={value}
          className={clsx(
            "autofill-hide group flex h-full w-full resize-none gap-[10px] self-stretch overflow-ellipsis border-gray-200 bg-transparent text-16/p text-gray-950 ",
            "placeholder:text-gray-400",
            "border-none outline-none disabled:text-gray-300 disabled:placeholder:text-gray-300",
            className,
          )}
          {...props}
          onChange={handleChange}
        />
        {showCount && (
          <div className="text-end text-14/subtle text-gray-600">
            {count}/{MAX_LENGTH}
          </div>
        )}
      </div>
    </label>
  );
});

export default Textarea;
