import React, { forwardRef } from "react";
import "./InputField.css";

interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  id: string;
  multiline?: boolean;
}

export const InputField = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  InputFieldProps
>(({ label, id, multiline, className, ...props }, ref) => {
  const isFirst = id === "name";
  const fieldClassName = `input-field ${isFirst ? "first-input" : ""} ${
    multiline ? "text-area" : ""
  } ${className || ""}`;

  return (
    <>
      <label htmlFor={id} className="visually-hidden">
        {label}
      </label>
      {multiline ? (
        <textarea
          ref={ref as React.Ref<HTMLTextAreaElement>}
          id={id}
          className={fieldClassName}
          placeholder={label}
          aria-label={label}
          {...props}
        />
      ) : (
        <input
          ref={ref as React.Ref<HTMLInputElement>}
          id={id}
          className={fieldClassName}
          placeholder={label}
          aria-label={label}
          {...props}
        />
      )}
    </>
  );
});

InputField.displayName = "InputField";
