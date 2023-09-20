import { FC } from "react";
import { TextInput } from "../../../common/components/forms/Inputs/TextInput";
import { Button } from "../../../common/components/forms/Buttons/PrimaryButton";
import {
  Icon,
  IconList,
  ICON_POSITION,
  ICON_SIZES,
} from "../../../common/components/design/Icons";

export const BeneficiaryBasicInput: FC<{ isLoading: boolean }> = ({
  isLoading,
}) => {
  return (
    <>
      <div className="my-4 space-y-6 text-gray-25">
        <TextInput
          label="Name"
          id="name"
          name={"name"}
          placeHolder="Enter your Name"
          required={true}
          disabled={isLoading}
          handleChange={() => {}}
        />
        <TextInput
          label="Email"
          id="email"
          name={"email"}
          placeHolder="Enter your Email"
          required={true}
          disabled={isLoading}
          handleChange={() => {}}
          type="email"
        />
        <TextInput
          label="Biometric Verification Number (BVN)"
          id="bvn"
          name="bvn"
          placeHolder="Enter your Email"
          required={true}
          disabled={isLoading}
          handleChange={() => {}}
        />
        <TextInput
          label="Password"
          id="password"
          placeHolder="Enter your password"
          type="password"
          name={"password"}
          required={true}
          disabled={isLoading}
          handleChange={() => {}}
        />
        <TextInput
          label="Confirm Password"
          id="confirmPassword"
          placeHolder="Confirm your password"
          type="password"
          name={"confirmPassword"}
          required={true}
          disabled={isLoading}
          handleChange={() => {}}
        />
        <Button
          type="submit"
          label="Create an Account"
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
    </>
  );
};
