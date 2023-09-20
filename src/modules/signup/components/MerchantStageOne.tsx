import { useContext, useState } from "react";
import { RegistrationContentLayout } from "../../../common/layouts/RegistrationContentLayout";
import { GRID_TYPE, GridLayout } from "../../../common/layouts/Grids";
import { TextInput } from "../../../common/components/forms/Inputs/TextInput";
import { TEXT_INPUT_SIZE } from "../../../common/components/forms/Inputs/InputTypes";
import { RootContext } from "../../../context/RootContext";
import { Button } from "../../../common/components/forms/Buttons/PrimaryButton";
import {
  ICON_POSITION,
  ICON_SIZES,
  Icon,
  IconList,
} from "../../../common/components/design/Icons";
import { CheckBox } from "../../../common/components/forms/Inputs/CheckBox";
import { BusinessNature } from "../../../common/models/BusinessNature";
import { RegistrationLayoutContext } from "../../../context/RegistrationLayoutContext";
import { STAGE_STATUS } from "../../../common/layouts/RegistrationLayout";
import { TextArea } from "../../../common/components/forms/Inputs/TextArea";
import { Dropdown } from "../../../common/components/forms/Inputs/Dropdown";
import { BusinessTypes } from "../../../common/models/BusinessType";

//TODO: Set default Business Type

export const MerchantStageOne = () => {
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
        if (stage.id === "stepOne") {
          return { ...stage, status: STAGE_STATUS.completed };
        } else if (stage.id === "stepTwo") {
          return { ...stage, status: STAGE_STATUS.active };
        } else {
          return stage;
        }
      })
    );

    registrationContext.setSelectedId("stepTwo");
  };

  const handleCheckBox = (value: string, checked: boolean) => {
    let _allNature = rootStore.merchant.businessNature.split("|");
    console.log(`Initial ${_allNature}`);
    if (checked === true) {
      console.log("Value is checked");
      console.log(`Value = ${value}`);
      _allNature.push(value);
      console.log(`New All ${_allNature}`);
      rootStore.setMerchant({
        ...rootStore.merchant,
        businessNature: _allNature.map((item) => item).join("|"),
      });
    } else {
      console.log("Value is !checked");
      console.log(`Value = ${value}`);
      _allNature.filter((_item) => !_item);
      console.log(_allNature);
      // console.log(`New All ${_allNature}`);
      // rootStore.setMerchant({
      //   ...rootStore.merchant,
      //   businessNature: _allNature.map((item) => item).join("|"),
      // });

      // rootStore.setMerchant({inputs.map((survey) => {
      //   if (survey.SurveyId === obj.SurveyId) {
      //     return obj;
      //   } else {
      //     return survey;
      //   }
      // })})
    }
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <RegistrationContentLayout
        header="Business Information"
        copy="Basic Company Registration information about your business"
      >
        <GridLayout type={GRID_TYPE.twoCol}>
          <TextInput
            label="Business Name"
            id="businessName"
            span={TEXT_INPUT_SIZE.full}
            placeHolder="Enter your Business name"
            disabled={true}
            defaultValue={rootStore.merchant.businessName}
            handleChange={() => {}}
          />
          <TextInput
            label="Business Email"
            id="businessName"
            placeHolder="Enter your Business email"
            defaultValue={rootStore.merchant.businessEmail}
            disabled={true}
            handleChange={() => {}}
          />
          <TextInput
            label="Business Phone Number"
            id="businessPhone"
            placeHolder="123 456 789"
            defaultValue={rootStore.merchant.businessPhone}
            handleChange={(value: string) =>
              rootStore.setMerchant({
                ...rootStore.merchant,
                businessPhone: value,
              })
            }
            required={true}
          />
          <Dropdown
            label="Business Type"
            id="businessType"
            options={BusinessTypes}
            handleChange={(value: string) =>
              rootStore.setMerchant({
                ...rootStore.merchant,
                businessType: value,
              })
            }
            required={true}
          />
          <TextInput
            label="Business CAC #"
            id="cacNumber"
            placeHolder="XXXXX-XXXX"
            defaultValue={rootStore.merchant.cacNumber}
            handleChange={(value: string) =>
              rootStore.setMerchant({
                ...rootStore.merchant,
                cacNumber: value,
              })
            }
            required={true}
          />
          <TextArea
            label="Business Address"
            id="businessAddress"
            span={TEXT_INPUT_SIZE.full}
            defaultValue={rootStore.merchant.businessAddress}
            placeHolder="Enter your Full Business Address"
            handleChange={(value: string) =>
              rootStore.setMerchant({
                ...rootStore.merchant,
                businessAddress: value,
              })
            }
            required={true}
          />
        </GridLayout>
        <div className="mt-6">
          <GridLayout type={GRID_TYPE.fieldSetThree}>
            <label
              htmlFor={"businessNature"}
              className="block text-xs font-light col-span-full leading-6 mb-2 text-gray-600 text-left"
            >
              What is the nature of your business?
              <span className="text-error-600"> •</span>
            </label>
            {BusinessNature.split("|").map((item, index) => (
              <CheckBox
                key={index}
                id={item}
                label={item}
                handleChange={handleCheckBox}
              />
            ))}
          </GridLayout>
        </div>

        <div className="flex justify-end mt-4">
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
