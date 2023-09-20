import { FC, useState } from "react";
import { TEXT_INPUT_SIZE } from "./InputTypes";

export const Dropdown: FC<{
  label?: string;
  id: string;
  errorLabel?: string;
  disabled?: boolean;
  required?: boolean;
  pattern?: string;
  span?: TEXT_INPUT_SIZE;
  checkValidation?: boolean;
  name?: string;
  handleChange: Function;
  options: string[];
  defaultValue?: string;
}> = ({
  label,
  id,
  errorLabel,
  disabled,
  required,
  pattern,
  span,
  checkValidation,
  name,
  handleChange,
  options,
  defaultValue,
}) => {
  const [value, setDropdownValue] = useState(defaultValue);

  const onChangeHandler = (event: React.FormEvent<HTMLSelectElement>) => {
    setDropdownValue(event.currentTarget.value);

    handleChange(event.currentTarget.value);
  };

  return (
    <div className="">
      {label !== null && (
        <label
          htmlFor={label}
          className="block text-xs font-light leading-6 text-gray-600 text-left"
        >
          {label}
          {required && <span className="text-error-600"> •</span>}
        </label>
      )}

      <div className="relative mt-1 rounded-md ">
        <div className="inset-y-0 left-0 flex items-center ">
          <select
            value={value}
            onChange={onChangeHandler}
            name={id}
            id={id}
            className="block w-full rounded-md border-0 py-1.5 text-gray-700  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
          >
            {options.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
