import { FC, useRef, useState } from "react";
import { TEXT_INPUT_SIZE } from "./InputTypes";
import { classNames } from "../../../../utilities/helperFunctions";
import {
  handleValidate,
  testForAmount,
  testForNumber,
} from "../../../../utilities/RegexUtils";
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
  handleChange: Function;
  prefix?: JSX.Element;
  showError?: boolean;
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
  handleChange,
  prefix,
  showError,
}) => {
  let refValue = useRef<HTMLInputElement | null>(null);
  // const [showError, setShowError] = useState(false);
  const [value, setValue] = useState(defaultValue ?? "");

  const onChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    if (type === "tel") {
      if (testForNumber(event.currentTarget.value)) {
        setValue(event.currentTarget.value);
        handleChange(event.currentTarget.value);
      }
    } else if (type === "number") {
      if (testForAmount(event.currentTarget.value)) {
        setValue(event.currentTarget.value);
        handleChange(event.currentTarget.value);
      }
    } else {
      setValue(event.currentTarget.value);
      handleChange(event.currentTarget.value);
    }
  };

  return (
    <div className={span}>
      <label
        htmlFor={label}
        className="block text-xs font-light leading-6 text-gray-600 text-left"
      >
        {label}
        {required && <span className="text-error-600"> •</span>}
      </label>
      <div className="mt-1 relative items-center">
        {prefix && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            {prefix}
          </div>
        )}
        <input
          value={value}
          onChange={onChangeHandler}
          ref={refValue}
          type={type}
          name={name}
          id={id}
          pattern={pattern}
          // defaultValue={defaultValue}
          placeholder={placeHolder}
          disabled={disabled}
          required={required}
          className={classNames(
            disabled ? "cursor-not-allowed bg-gray-100" : "",
            prefix ? "pl-12" : "",
            "block items-center w-full rounded-md border-0 py-1.5 text-gray-700 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:font-light focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
          )}
        />
      </div>
      {showError && <p className="mt-1 text-xs text-error-600">{errorLabel}</p>}
    </div>
  );
};

TextInput.defaultProps = {
  type: "text",
  span: TEXT_INPUT_SIZE.span1,
};
