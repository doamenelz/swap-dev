import { FC, useState, useContext } from "react";
import { TextInput } from "../../../common/components/forms/Inputs/TextInput";
import { Button } from "../../../common/components/forms/Buttons/PrimaryButton";
import {
  Icon,
  IconList,
  ICON_POSITION,
  ICON_SIZES,
} from "../../../common/components/design/Icons";
import {
  FieldProps,
  ValidFieldLengths,
} from "../../../common/models/FieldProps";
import { RootContext } from "../../../context/RootContext";
import { RegistrationLayoutContext } from "../../../context/RegistrationLayoutContext";
import { Navigate, useNavigate, redirect } from "react-router";

export const MerchantBasicInput: FC<{ isLoading: boolean }> = ({
  isLoading,
}) => {
  const navigate = useNavigate();
  const rootStore = useContext(RootContext);
  const [businessName, setBusinessName] = useState<FieldProps>({
    value: rootStore.merchant.businessName ?? "",
    showError: false,
    errorMessage: "Please enter a valid Business Name",
  });
  const [businessEmail, setBusinessEmail] = useState<FieldProps>({
    value: rootStore.merchant.businessEmail ?? "",
    showError: false,
    errorMessage: "Please enter a Business Email",
  });
  const [password, setPassword] = useState<FieldProps>({
    value: "",
    showError: false,
    errorMessage: "Password must be a minimum of 6 characters",
  });
  const [confirmPassword, setConfirmPassword] = useState<FieldProps>({
    value: "",
    showError: false,
    errorMessage: "Passwords do not match",
  });

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      validateFields(
        setBusinessName,
        businessName,
        businessName.value.toString().length <= 4 ? true : false
      ) &&
      validateFields(
        setBusinessEmail,
        businessEmail,
        businessEmail.value.toString().length <= 4 ? true : false
      ) &&
      validateFields(
        setPassword,
        password,
        password.value.toString().length <= 6 ? true : false
      ) &&
      validateFields(
        setConfirmPassword,
        confirmPassword,
        confirmPassword.value.toString() !== password.value ? true : false
      )
    ) {
      rootStore.setMerchant({
        ...rootStore.merchant,
        businessEmail: businessEmail.value,
        businessName: businessName.value,
      });

      navigate("merchantSignup");
      console.log(rootStore.merchant);
    }
  };

  const validateFields = (
    update: Function,
    fieldProp: FieldProps,
    test: boolean
  ) => {
    if (fieldProp.value === "" || test) {
      update({ ...fieldProp, showError: true });
      console.log("Error FOund");
      return false;
    } else {
      console.log("Error not found");
      return true;
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="my-4 space-y-6 text-gray-25">
        <TextInput
          label="Business Name"
          id="name"
          name={"name"}
          placeHolder="Enter your Business Name"
          required={true}
          disabled={isLoading}
          handleChange={(value: string) => {
            setBusinessName({
              ...businessName,
              value: value,
              showError: businessName.showError && value.toString() === "",
            });
          }}
          errorLabel={businessName.errorMessage}
          showError={businessName.showError}
        />
        <TextInput
          label="Business Email"
          id="email"
          name={"email"}
          type="email"
          placeHolder="Enter your Business Email"
          required={true}
          disabled={isLoading}
          handleChange={(value: string) => {
            setBusinessEmail({
              ...businessEmail,
              value: value,
              showError: businessEmail.showError && value.toString() === "",
            });
          }}
          errorLabel={businessEmail.errorMessage}
          showError={businessEmail.showError}
        />
        <TextInput
          label="Password"
          id="password"
          placeHolder="Enter your password"
          type="password"
          name={"password"}
          required={true}
          disabled={isLoading}
          handleChange={(value: string) => {
            setPassword({
              ...password,
              value: value,
              showError: password.showError && value.toString() === "",
            });
          }}
          errorLabel={password.errorMessage}
          showError={password.showError}
        />
        <TextInput
          label="Confirm Password"
          id="confirmPassword"
          placeHolder="Confirm your password"
          type="password"
          name={"confirmPassword"}
          required={true}
          disabled={isLoading}
          handleChange={(value: string) => {
            setConfirmPassword({
              ...confirmPassword,
              value: value,
              showError: confirmPassword.showError && value.toString() === "",
            });
          }}
          errorLabel={confirmPassword.errorMessage}
          showError={confirmPassword.showError}
        />
        <Button
          // link="merchantSignup"
          label="Create an Account"
          type="submit"
          fillWidth={true}
          isLoading={isLoading}
          icon={
            isLoading
              ? {
                  position: ICON_POSITION.leading,
                  asset: <Icon icon={IconList.email} size={ICON_SIZES.sm} />,
                }
              : undefined
          }
        />
      </div>
    </form>
  );
};
