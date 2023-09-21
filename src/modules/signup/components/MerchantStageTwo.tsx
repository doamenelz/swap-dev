import { useContext, useState } from "react";
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
import {
  FieldProps,
  ValidFieldLengths,
} from "../../../common/models/FieldProps";

export const MerchantStageTwo = () => {
  const rootStore = useContext(RootContext);
  const registrationContext = useContext(RegistrationLayoutContext);

  const [tin, setTin] = useState<FieldProps>({
    value: rootStore.merchant.taxesAndFinancial?.tin ?? "",
    showError: false,
    errorMessage: "Please enter a valid TIN",
  });

  const [dateRegistered, setDateRegistered] = useState<FieldProps>({
    value: rootStore.merchant.taxesAndFinancial?.dateRegistered ?? "",
    showError: false,
    errorMessage: "Please select a date",
  });

  const [lastTaxYear, setLastTaxYear] = useState<FieldProps>({
    value: rootStore.merchant.taxesAndFinancial?.lastTaxYear ?? "",
    showError: false,
    errorMessage: "Please enter a value",
  });

  const [lastTaxAmount, setLastTaxAmount] = useState<FieldProps>({
    value: rootStore.merchant.taxesAndFinancial?.lastTaxAmount ?? "",
    showError: false,
    errorMessage: "Please enter an amount",
  });

  const [annualGross, setAnnualGross] = useState<FieldProps>({
    value: rootStore.merchant.taxesAndFinancial?.annualGrossRevenue ?? "",
    showError: false,
    errorMessage: "Please enter a value",
  });

  const [annualNet, setAnnualNet] = useState<FieldProps>({
    value: rootStore.merchant.taxesAndFinancial?.annualNetRevenue ?? "",
    showError: false,
    errorMessage: "Please enter a valid phone number",
  });

  const [courtCase, setCourtCase] = useState<FieldProps>({
    value: rootStore.merchant.taxesAndFinancial?.courtCaseDescription ?? "",
    showError: false,
    errorMessage: "",
  });

  const [debtAmount, setDebtAmount] = useState<FieldProps>({
    value: rootStore.merchant.taxesAndFinancial?.debtAmount ?? "",
    showError: false,
    errorMessage: "Please enter a valid phone number",
  });

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(rootStore.merchant);

    if (
      validateFields(
        setTin,
        tin,
        tin.value.toString().length <= ValidFieldLengths.tin ? true : false
      ) &&
      validateFields(
        setDateRegistered,
        dateRegistered,
        dateRegistered.value.toString() === "" ? true : false
      ) &&
      validateFields(
        setAnnualGross,
        annualGross,
        annualGross.value.toString() === "" ? true : false
      ) &&
      validateFields(
        setAnnualNet,
        annualNet,
        annualNet.value.toString() === "" ? true : false
      )
    ) {
      rootStore.setMerchant({
        ...rootStore.merchant,
        taxesAndFinancial: {
          ...rootStore.merchant.taxesAndFinancial,
          tin: tin.value,
          lastTaxYear: lastTaxYear.value,
          lastTaxAmount: lastTaxAmount.value,
          annualGrossRevenue: annualGross.value,
          annualNetRevenue: annualNet.value,
          debtAmount: debtAmount.value,
          courtCaseDescription: courtCase.value,
          dateRegistered: dateRegistered.value,
        },
      });
      toggleStages();
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
            placeHolder=""
            disabled={false}
            defaultValue={rootStore.merchant.taxesAndFinancial?.dateRegistered}
            handleChange={(value: string) => {
              setDateRegistered({
                ...dateRegistered,
                value: value,
                showError: dateRegistered.showError && value === "",
              });
            }}
            errorLabel={dateRegistered.errorMessage}
            showError={dateRegistered.showError}
            required={true}
            type="date"
          />
          <TextInput
            label="Tax Identification Number (TIN)"
            id="dateRegistered"
            placeHolder="00000000000"
            disabled={false}
            required={true}
            defaultValue={tin.value.toString()}
            handleChange={(value: string) => {
              setTin({
                ...tin,
                value: value,
                showError:
                  tin.showError &&
                  value.toString().length <= ValidFieldLengths.tin,
              });
            }}
            errorLabel={tin.errorMessage}
            showError={tin.showError}
          />
          <DateInput
            label="Last Tax Year"
            id="dateRegistered"
            placeHolder="Enter your Business name"
            disabled={false}
            defaultValue={rootStore.merchant.taxesAndFinancial?.lastTaxYear}
            handleChange={(value: string) => {
              setLastTaxYear({
                ...lastTaxYear,
                value: value,
                showError: lastTaxYear.showError && value === "",
              });
            }}
            errorLabel={lastTaxYear.errorMessage}
            showError={lastTaxYear.showError}
            type="date"
          />
          <TextInput
            label="Amount Paid"
            id="dateRegistered"
            placeHolder="0000000"
            disabled={false}
            defaultValue={rootStore.merchant.taxesAndFinancial?.lastTaxAmount}
            handleChange={(value: string) => {
              setLastTaxAmount({
                ...lastTaxAmount,
                value: value,
                showError: lastTaxAmount.showError && value === "",
              });
            }}
            type="number"
            errorLabel={lastTaxAmount.errorMessage}
            showError={lastTaxAmount.showError}
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
            handleChange={(value: string) => {
              setAnnualGross({
                ...annualGross,
                value: value,
                showError: annualGross.showError && value === "",
              });
            }}
            type="number"
            errorLabel={annualGross.errorMessage}
            showError={annualGross.showError}
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
            type="number"
            handleChange={(value: string) => {
              setAnnualNet({
                ...annualNet,
                value: value,
                showError: annualNet.showError && value === "",
              });
            }}
            errorLabel={annualNet.errorMessage}
            showError={annualNet.showError}
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
            options={["Yes", "No"]}
          />
          <TextInput
            label="How much Debt do you have?"
            id="dateRegistered"
            placeHolder="000000000"
            defaultValue={rootStore.merchant.taxesAndFinancial?.debtAmount}
            disabled={false}
            handleChange={(value: string) => {
              setDebtAmount({
                ...debtAmount,
                value: value,
                showError: debtAmount.showError && value === "",
              });
            }}
            type="number"
            errorLabel={debtAmount.errorMessage}
            showError={debtAmount.showError}
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
            handleChange={(value: string) => {
              setCourtCase({
                ...courtCase,
                value: value,
                showError: courtCase.showError && value === "",
              });
            }}
            errorLabel={courtCase.errorMessage}
            showError={courtCase.showError}
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
