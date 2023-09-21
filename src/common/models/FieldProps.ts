export interface FieldProps {
  value: string | boolean | Date;
  showError: boolean;
  errorMessage: string;
}

export const ValidFieldLengths = {
  cac: 5,
  phoneNumber: 9,
  businessAddress: 5,
  tin: 7,
};
