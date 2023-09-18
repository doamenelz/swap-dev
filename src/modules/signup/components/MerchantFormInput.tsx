import { FC } from "react";
import { TextInput } from "../../../common/components/forms/Inputs/TextInput";
import { Button } from "../../../common/components/forms/Buttons/PrimaryButton";
import {
  Icon,
  IconList,
  ICON_POSITION,
  ICON_SIZES,
} from "../../../common/components/design/Icons";

export const MerchantBasicInput: FC<{ isLoading: boolean }> = ({
  isLoading,
}) => {
  return (
    <>
      <div className="my-4 space-y-6 text-gray-25">
        <TextInput
          label="Business Name"
          id="name"
          name={"name"}
          placeHolder="Enter your Business Name"
          required={true}
          disabled={isLoading}
        />
        <TextInput
          label="Business Email"
          id="email"
          name={"email"}
          type="email"
          placeHolder="Enter your Business Email"
          required={true}
          disabled={isLoading}
        />
        <TextInput
          label="Password"
          id="password"
          placeHolder="Enter your password"
          type="password"
          name={"password"}
          required={true}
          disabled={isLoading}
        />
        <TextInput
          label="Confirm Password"
          id="confirmPassword"
          placeHolder="Confirm your password"
          type="password"
          name={"confirmPassword"}
          required={true}
          disabled={isLoading}
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
