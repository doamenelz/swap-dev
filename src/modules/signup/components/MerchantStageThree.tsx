import { FC, useContext, useState } from "react";
import { GRID_TYPE, GridLayout } from "../../../common/layouts/Grids";
import { RegistrationContentLayout } from "../../../common/layouts/RegistrationContentLayout";
import { RootContext } from "../../../context/RootContext";
import { RegistrationLayoutContext } from "../../../context/RegistrationLayoutContext";
import { STAGE_STATUS } from "../../../common/layouts/RegistrationLayout";
import { TextInput } from "../../../common/components/forms/Inputs/TextInput";
import { Button } from "../../../common/components/forms/Buttons/PrimaryButton";
import {
  Icon,
  ICON_POSITION,
  ICON_SIZES,
  IconList,
} from "../../../common/components/design/Icons";
import {
  BUTTON_SIZES,
  BUTTON_SKIN,
} from "../../../common/components/forms/Buttons/ButtonTypes";
import { Dropdown } from "../../../common/components/forms/Inputs/Dropdown";
import { HeadCountOptions } from "../../../common/models/Headcount";
import { Personnel } from "../../../common/models/Merchant";
import { Transition } from "@headlessui/react";
export const MerchantStageThree = () => {
  const rootStore = useContext(RootContext);

  const registrationContext = useContext(RegistrationLayoutContext);
  const [isEditingDirector, setIsEditingDirector] = useState(false);
  const [selectedDirector, setSelectedDirector] = useState<Personnel>();
  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(rootStore.merchant);
    toggleStages();
  };

  const toggleStages = () => {
    registrationContext.setStages(
      registrationContext.stages.map((stage) => {
        if (stage.id === "stepThree") {
          return { ...stage, status: STAGE_STATUS.completed };
        } else if (stage.id === "stepFour") {
          return { ...stage, status: STAGE_STATUS.active };
        } else {
          return stage;
        }
      })
    );

    registrationContext.setSelectedId("stepFour");
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <RegistrationContentLayout
        header="Personnel Information"
        copy="Ownership Information, Team and Directors"
        businessType={rootStore.merchant.businessType}
      >
        <GridLayout type={GRID_TYPE.twoCol}>
          <TextInput
            label="First Name"
            id="firstName"
            placeHolder="Enter your First Name"
            disabled={false}
            defaultValue={rootStore.merchant.personnel?.firstName}
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
          />
          <TextInput
            label="Last Name"
            id="lastName"
            placeHolder="Enter your Last Name"
            disabled={false}
            required={true}
            defaultValue={rootStore.merchant.personnel?.lastName}
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
          <TextInput
            label="National Identity Number (NIN)"
            id="nin"
            placeHolder="0000 0000 0000 0000"
            disabled={false}
            defaultValue={rootStore.merchant.personnel?.nin}
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
          />
          <TextInput
            label="Biometric Verification Number (BVN)"
            id="bvn"
            placeHolder="0000 0000 0000"
            disabled={false}
            required={true}
            defaultValue={rootStore.merchant.personnel?.bvn}
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
          <TextInput
            label="Phone Number"
            id="phoneNumber"
            placeHolder="123456789"
            disabled={false}
            defaultValue={rootStore.merchant.personnel?.phoneNumber}
            prefix={<p className="text-gray-400 text-xs">+234</p>}
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
          />
          <TextInput
            label="Date of Birth"
            id="dob"
            type="date"
            disabled={false}
            required={true}
            defaultValue={rootStore.merchant.personnel?.dob}
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
          <Dropdown
            label="Current Staff Headcount"
            id="nin"
            disabled={false}
            options={HeadCountOptions}
            defaultValue={rootStore.merchant.headCount}
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
          />
        </GridLayout>
        <div className="mt-8">
          <div className="flex justify-between border-b">
            <p className=" py-2 font-medium text-gray-700 text-sm">
              Board of Directors
            </p>
            <Transition
              show={!isEditingDirector}
              enter="transition-opacity duration-75"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Button
                label="Add a Director"
                type="button"
                onClick={() => {
                  setSelectedDirector(undefined);
                  setIsEditingDirector(true);
                }}
                skin={BUTTON_SKIN.linkColor}
                icon={{
                  position: ICON_POSITION.leading,
                  asset: <Icon icon={IconList.plus} size={ICON_SIZES.sm} />,
                }}
              />
            </Transition>
          </div>

          <Transition
            show={isEditingDirector}
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <AddDirectorComponent
              setIsEditingDirector={setIsEditingDirector}
              selectedDirector={selectedDirector}
            />
          </Transition>
          <Transition
            show={!isEditingDirector}
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-75"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {rootStore.merchant.directors?.map((director, index) => (
              <DirectorShell
                director={director}
                setSelectedDirector={setSelectedDirector}
                key={index}
                setIsEditingDirector={setIsEditingDirector}
              />
            ))}
          </Transition>
        </div>

        <div className="flex justify-between mt-6">
          <Button
            type="button"
            onClick={() => registrationContext.setSelectedId("stepTwo")}
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

const DirectorShell: FC<{
  director: Personnel;
  setIsEditingDirector: Function;
  setSelectedDirector: Function;
}> = ({ director, setIsEditingDirector, setSelectedDirector }) => {
  const [edit, setEdit] = useState(false);

  const editHandler = () => {
    setSelectedDirector(director);
    setIsEditingDirector(true);
  };

  return (
    <>
      <div className="border-b w-full py-3 flex justify-between pr-4 items-center">
        <div className="space-y-1 ">
          <div className="text-sm text-gray-700 flex space-x-2">
            <p>{director.firstName}</p>
            <p>{director.lastName}</p>
          </div>
          <p className="font-semibold text-xs text-gray-500">
            NIN: <span className="font-normal">{director.nin}</span> | BVN:{" "}
            <span className="font-normal">{director.bvn}</span>
          </p>
        </div>

        <button
          type="button"
          className="hover:text-blue-700"
          onClick={editHandler}
        >
          <Icon icon={IconList.edit} size={ICON_SIZES.md} />
        </button>
      </div>
    </>
  );
};

const AddDirectorComponent: FC<{
  selectedDirector?: Personnel;
  setIsEditingDirector: Function;
}> = ({ selectedDirector, setIsEditingDirector }) => {
  const rootStore = useContext(RootContext);
  const [director, setDirector] = useState<Personnel>();

  const updatePersonnel = () => {};

  const toggleEdit = () => {
    setIsEditingDirector(false);
  };
  return (
    <div className=" p-6 mt-2 ring-1 ring-gray-200 rounded-md">
      <GridLayout type={GRID_TYPE.twoCol}>
        <TextInput
          label="First Name"
          id="directorFirstName"
          placeHolder="Enter a First Name"
          disabled={false}
          defaultValue={selectedDirector?.firstName}
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
        />
        <TextInput
          label="Last Name"
          id="directorLastName"
          placeHolder="Enter a Last Name"
          disabled={false}
          defaultValue={selectedDirector?.lastName}
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
        />
        <TextInput
          label="National Identity Number (NIN)"
          id="nin"
          placeHolder="0000 0000 0000 0000"
          disabled={false}
          defaultValue={selectedDirector?.nin}
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
        />
        <TextInput
          label="Biometric Verification Number (BVN)"
          id="bvn"
          placeHolder="0000 0000 0000"
          disabled={false}
          required={true}
          defaultValue={selectedDirector?.bvn}
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
        <div className="space-x-3">
          <Button label="Save" skin={BUTTON_SKIN.secondary} />
          <Button
            label="Cancel"
            type="button"
            onClick={toggleEdit}
            skin={BUTTON_SKIN.linkColor}
          />
        </div>
        {selectedDirector && (
          <div className="justify-end flex">
            <Button
              label="Delete Director"
              type="button"
              onClick={toggleEdit}
              skin={BUTTON_SKIN.linkColor}
              destructive={true}
              icon={{
                position: ICON_POSITION.leading,
                asset: <Icon icon={IconList.trash} size={ICON_SIZES.md} />,
              }}
            />
          </div>
        )}
      </GridLayout>
    </div>
  );
};
