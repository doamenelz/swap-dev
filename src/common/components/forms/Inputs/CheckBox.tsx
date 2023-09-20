import { FC, useState } from "react";
export const CheckBox: FC<{
  id: string;
  label: string;
  handleChange: Function;
}> = (props) => {
  const [checked, setChecked] = useState(false);
  const checkBoxHandler = (event: React.FormEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.checked);
    setChecked(event.currentTarget.checked);
    props.handleChange(props.label, event.currentTarget.checked);
  };

  return (
    <div className="relative flex items-start">
      <div className="flex items-center h-6">
        <input
          id={props.label}
          aria-describedby={props.label}
          name={props.label}
          checked={checked}
          onChange={checkBoxHandler}
          type="checkbox"
          className="w-4 h-4 border-gray-300 rounded text-primary-600 focus:ring-primary-600"
        />
      </div>
      <div className="leading-6">
        <label htmlFor={props.label} className="ml-1 text-sm text-gray-700">
          {props.label}
        </label>
      </div>
    </div>
  );
};
