import { FC, useRef, useState } from "react";
import { TEXT_INPUT_SIZE } from "./InputTypes";
import { classNames } from "../../../../utilities/helperFunctions";
//TODO: Add is required indicator

export const TextArea: FC<{
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
}) => {
  let refValue = useRef<HTMLTextAreaElement | null>(null);
  const [showError, setShowError] = useState(false);
  const [value, setValue] = useState("");

  const onChangeHandler = (event: React.FormEvent<HTMLTextAreaElement>) => {
    setValue(event.currentTarget.value);
    handleChange(event.currentTarget.value);
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
      <div className="mt-1">
        <textarea
          onChange={onChangeHandler}
          value={value}
          rows={4}
          name={name}
          id={id}
          defaultValue={defaultValue}
          placeholder={placeHolder}
          disabled={disabled}
          required={required}
          //   autoComplete="given-name"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring- focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
        />
      </div>
      {showError ||
        (checkValidation && refValue.current?.value === "" && (
          <p className="mt-1 text-xs text-error-600">{errorLabel}</p>
        ))}
    </div>
  );
};

TextArea.defaultProps = {
  type: "text",
  span: TEXT_INPUT_SIZE.span1,
};
