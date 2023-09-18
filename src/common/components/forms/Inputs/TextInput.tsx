import { FC, useRef, useState } from "react";
import { TEXT_INPUT_SIZE } from "./InputTypes";
//TODO: Add is required indicator

export const TextInput: FC<{
  label?: string;
  id: string;
  errorLabel?: string;
  type?: string;
  defaultValue?: string;
  placeHolder?: string;
  disabled?: boolean;
  required?: boolean;
  pattern?: string;
  span?: TEXT_INPUT_SIZE;
  checkValidation?: boolean;
  name?: string;
  value?: string;
  setValue?: (value: string) => void;
}> = ({
  label,
  id,
  errorLabel,
  type,
  defaultValue,
  placeHolder,
  disabled,
  required,
  pattern,
  span,
  checkValidation,
  name,
  value,
}) => {
  let refValue = useRef<HTMLInputElement | null>(null);
  const [showError, setShowError] = useState(false);

  const onChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    if (required) {
      if (refValue.current?.value === "") {
        setShowError(false);
      } else {
        setShowError(true);
      }
    } else {
      setShowError(false);
    }
  };

  return (
    <div className={span}>
      <label
        htmlFor={label}
        className="block text-sm font-normal leading-6 text-gray-900 text-left"
      >
        {label}
        {required && <span className="text-error-600">*</span>}
      </label>
      <div className="mt-2">
        <input
          value={value}
          onChange={onChangeHandler}
          ref={refValue}
          type={type}
          name={name}
          id={id}
          pattern={pattern}
          defaultValue={defaultValue}
          placeholder={placeHolder}
          disabled={disabled}
          required={required}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
        />
      </div>
      {showError ||
        (checkValidation && refValue.current?.value === "" && (
          <p className="mt-1 text-xs text-error-600">{errorLabel}</p>
        ))}
    </div>
  );
};

TextInput.defaultProps = {
  type: "text",
  span: TEXT_INPUT_SIZE.span1,
};
