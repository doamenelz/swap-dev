export const testForNumber = (value: string) => {
  const re = /^[0-9\b]+$/;
  if (value === "" || re.test(value)) {
    return true;
  } else {
    return false;
  }
};

export const testForAmount = (value: string) => {
  const re = /^[0-9]*[.,]?[0-9]*$/;
  if (value === "" || re.test(value)) {
    return true;
  } else {
    return false;
  }
};

const PHONE_REGEX = new RegExp(
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/gim
);

export const handleValidate = (phoneNumber: string) => {
  return PHONE_REGEX.test(phoneNumber);
};
