import { useContext } from "react";
import { GRID_TYPE, GridLayout } from "../../../common/layouts/Grids";
import { RegistrationContentLayout } from "../../../common/layouts/RegistrationContentLayout";
import { RootContext } from "../../../context/RootContext";
import { TextInput } from "../../../common/components/forms/Inputs/TextInput";
import { TEXT_INPUT_SIZE } from "../../../common/components/forms/Inputs/InputTypes";
import { Button } from "../../../common/components/forms/Buttons/PrimaryButton";
import {
  Icon,
  ICON_POSITION,
  ICON_SIZES,
  IconList,
} from "../../../common/components/design/Icons";
import { STAGE_STATUS } from "../../../common/layouts/RegistrationLayout";
import { BUTTON_SKIN } from "../../../common/components/forms/Buttons/ButtonTypes";
import { Dropdown } from "../../../common/components/forms/Inputs/Dropdown";
import { TextArea } from "../../../common/components/forms/Inputs/TextArea";
import { RegistrationLayoutContext } from "../../../context/RegistrationLayoutContext";
import { DateInput } from "../../../common/components/forms/Inputs/DateInput";

export const MerchantStageTwo = () => {
  const rootStore = useContext(RootContext);
  const registrationContext = useContext(RegistrationLayoutContext);
  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(rootStore.merchant);
    toggleStages();
  };

  const toggleStages = () => {
    registrationContext.setStages(
      registrationContext.stages.map((stage) => {
        if (stage.id === "stepTwo") {
          return { ...stage, status: STAGE_STATUS.completed };
        } else if (stage.id === "stepThree") {
          return { ...stage, status: STAGE_STATUS.active };
        } else {
          return stage;
        }
      })
    );

    registrationContext.setSelectedId("stepThree");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <RegistrationContentLayout
        header="Taxes and Financial Information"
        copy="Revenue, Taxes and other Financial Information related to your company"
      >
        <GridLayout type={GRID_TYPE.twoCol}>
          <DateInput
            label="Date Registered"
            id="dateRegistered"
            placeHolder="00000 00000 00000"
            disabled={false}
            defaultValue={rootStore.merchant.taxesAndFinancial?.dateRegistered}
            handleChange={(value: Date) =>
              rootStore.setMerchant({
                ...rootStore.merchant,
                taxesAndFinancial: {
                  ...rootStore.merchant.taxesAndFinancial,
                  dateRegistered: value,
                },
              })
            }
            required={true}
            type="date"
          />
          <TextInput
            label="Tax Identification Number (TIN)"
            id="dateRegistered"
            placeHolder="00000000000"
            disabled={false}
            required={true}
            defaultValue={rootStore.merchant.taxesAndFinancial?.tin}
            handleChange={(value: string) =>
              rootStore.setMerchant({
                ...rootStore.merchant,
                taxesAndFinancial: {
                  ...rootStore.merchant.taxesAndFinancial,
                  tin: value,
                },
              })
            }
          />
          <DateInput
            label="Last Tax Year"
            id="dateRegistered"
            placeHolder="Enter your Business name"
            disabled={false}
            defaultValue={rootStore.merchant.taxesAndFinancial?.dateRegistered}
            handleChange={(value: Date) =>
              rootStore.setMerchant({
                ...rootStore.merchant,
                taxesAndFinancial: {
                  ...rootStore.merchant.taxesAndFinancial,
                  lastTaxYear: value,
                },
              })
            }
            type="date"
          />
          <TextInput
            label="Amount Paid"
            id="dateRegistered"
            placeHolder="0000000"
            disabled={false}
            defaultValue={rootStore.merchant.taxesAndFinancial?.debtAmount}
            handleChange={(value: string) =>
              rootStore.setMerchant({
                ...rootStore.merchant,
                taxesAndFinancial: {
                  ...rootStore.merchant.taxesAndFinancial,
                  lastTaxAmount: value,
                },
              })
            }
            prefix={<p className="text-gray-400 text-xs">NGN</p>}
          />
          <TextInput
            label="Annual Gross Revenue"
            id="dateRegistered"
            placeHolder="0000000"
            disabled={false}
            defaultValue={
              rootStore.merchant.taxesAndFinancial?.annualGrossRevenue
            }
            handleChange={(value: string) =>
              rootStore.setMerchant({
                ...rootStore.merchant,
                taxesAndFinancial: {
                  ...rootStore.merchant.taxesAndFinancial,
                  annualGrossRevenue: value,
                },
              })
            }
            required={true}
            prefix={<p className="text-gray-400 text-xs">NGN</p>}
          />
          <TextInput
            label="Annual Net Revenue"
            id="dateRegistered"
            placeHolder="000000"
            disabled={false}
            defaultValue={
              rootStore.merchant.taxesAndFinancial?.annualNetRevenue
            }
            handleChange={(value: string) =>
              rootStore.setMerchant({
                ...rootStore.merchant,
                taxesAndFinancial: {
                  ...rootStore.merchant.taxesAndFinancial,
                  annualNetRevenue: value,
                },
              })
            }
            required={true}
            prefix={<p className="text-gray-400 text-xs">NGN</p>}
          />
          <Dropdown
            label="Do you have any debts?"
            id="dateRegistered"
            disabled={false}
            handleChange={(value: string) =>
              rootStore.setMerchant({
                ...rootStore.merchant,
                taxesAndFinancial: {
                  ...rootStore.merchant.taxesAndFinancial,
                  hasDebt: value,
                },
              })
            }
            required={true}
            options={["Select a value", "Yes", "No"]}
          />
          <TextInput
            label="How much Debt do you have?"
            id="dateRegistered"
            placeHolder="000000000"
            defaultValue={rootStore.merchant.taxesAndFinancial?.debtAmount}
            disabled={false}
            handleChange={(value: string) =>
              rootStore.setMerchant({
                ...rootStore.merchant,
                taxesAndFinancial: {
                  ...rootStore.merchant.taxesAndFinancial,
                  debtAmount: value,
                },
              })
            }
            required={true}
            prefix={<p className="text-gray-400 text-xs">NGN</p>}
          />
          <TextArea
            label="Do you have an active Court Case? If Yes, describe the current status"
            id="dateRegistered"
            placeHolder=""
            disabled={false}
            span={TEXT_INPUT_SIZE.full}
            defaultValue={
              rootStore.merchant.taxesAndFinancial?.courtCaseDescription
            }
            handleChange={(value: string) =>
              rootStore.setMerchant({
                ...rootStore.merchant,
                taxesAndFinancial: {
                  ...rootStore.merchant.taxesAndFinancial,
                  courtCaseDescription: value,
                },
              })
            }
            required={true}
          />
        </GridLayout>
        <div className="flex justify-between mt-6">
          <Button
            type="button"
            onClick={() => registrationContext.setSelectedId("stepOne")}
            label="Previous"
            skin={BUTTON_SKIN.linkColor}
            icon={{
              position: ICON_POSITION.leading,
              asset: <Icon icon={IconList.chevronLeft} size={ICON_SIZES.sm} />,
            }}
          />
          <Button
            type="submit"
            label="Next"
            icon={{
              position: ICON_POSITION.trailing,
              asset: <Icon icon={IconList.chevronRight} size={ICON_SIZES.sm} />,
            }}
          />
        </div>
      </RegistrationContentLayout>
    </form>
  );
};
