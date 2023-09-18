export interface InputProps {
  label?: string;
  id: string;
  errorLabel?: string;
  type: string;
  defaultValue: string;
  placeHolder: string;
  disabled: boolean;
}

export enum TEXT_INPUT_SIZE {
  full = "col-span-full",
  span1 = "sm:col-span-1",
  span2 = "sm:col-span-2",
  span3 = "sm:col-span-3",
  span4 = "sm:col-span-4",
  span5 = "sm:col-span-5",
}
