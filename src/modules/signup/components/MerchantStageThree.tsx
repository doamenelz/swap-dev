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
import {
  FieldProps,
  ValidFieldLengths,
} from "../../../common/models/FieldProps";
import { Dropdown } from "../../../common/components/forms/Inputs/Dropdown";
import { HeadCountOptions } from "../../../common/models/Headcount";
import { Personnel } from "../../../common/models/Merchant";
import { Transition } from "@headlessui/react";
import { DateInput } from "../../../common/components/forms/Inputs/DateInput";
import { generateUUID } from "../../../utilities/helperFunctions";
export const MerchantStageThree = () => {
  const rootStore = useContext(RootContext);

  //Form Fields Start
  const [firstName, setFirstName] = useState<FieldProps>({
    value: rootStore.merchant.personnel?.firstName ?? "",
    showError: false,
    errorMessage: "Please enter a First Name",
  });

  const [lastName, setLastName] = useState<FieldProps>({
    value: rootStore.merchant.personnel?.lastName ?? "",
    showError: false,
    errorMessage: "Please enter a Last Name",
  });

  const [nin, setNin] = useState<FieldProps>({
    value: rootStore.merchant.personnel?.nin ?? "",
    showError: false,
    errorMessage: "Please enter a valid value",
  });

  const [bvn, setBVN] = useState<FieldProps>({
    value: rootStore.merchant.personnel?.bvn ?? "",
    showError: false,
    errorMessage: "Please enter a valid value",
  });

  const [phone, setPhoneNumber] = useState<FieldProps>({
    value: rootStore.merchant.personnel?.phoneNumber ?? "",
    showError: false,
    errorMessage: "Please enter a valid phone number",
  });

  const [dob, setDob] = useState<FieldProps>({
    value: rootStore.merchant.personnel?.dob ?? "",
    showError: false,
    errorMessage: "Please enter a valid date",
  });

  //Form Fields End

  const registrationContext = useContext(RegistrationLayoutContext);
  const [isEditingDirector, setIsEditingDirector] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [selectedDirector, setSelectedDirector] = useState<Personnel>();
  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(rootStore.merchant);

    if (
      validateFields(
        setFirstName,
        firstName,
        firstName.value.toString().length <= 1 ? true : false
      ) &&
      validateFields(
        setLastName,
        lastName,
        lastName.value.toString().length <= 1 ? true : false
      ) &&
      validateFields(
        setNin,
        nin,
        nin.value.toString().length <= ValidFieldLengths.nin ? true : false
      ) &&
      validateFields(
        setBVN,
        bvn,
        bvn.value.toString().length <= ValidFieldLengths.bvn ? true : false
      ) &&
      validateFields(
        setPhoneNumber,
        phone,
        phone.value.toString().length <= ValidFieldLengths.phoneNumber
          ? true
          : false
      ) &&
      validateFields(setDob, dob, dob.value.toString() === "" ? true : false)
    ) {
      rootStore.setMerchant({
        ...rootStore.merchant,
        personnel: {
          ...rootStore.merchant.personnel,
          id: generateUUID(),
          firstName: firstName.value,
          lastName: lastName.value,
          nin: nin.value,
          bvn: bvn.value,
          phoneNumber: phone.value,
          dob: dob.value,
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
            defaultValue={firstName.value.toString()}
            required={true}
            handleChange={(value: string) => {
              setFirstName({
                ...firstName,
                value: value,
                showError: firstName.showError && value.toString() === "",
              });
            }}
            errorLabel={firstName.errorMessage}
            showError={firstName.showError}
          />
          <TextInput
            label="Last Name"
            id="lastName"
            placeHolder="Enter your Last Name"
            disabled={false}
            required={true}
            defaultValue={lastName.value.toString()}
            handleChange={(value: string) => {
              setLastName({
                ...lastName,
                value: value,
                showError: lastName.showError && value.toString() === "",
              });
            }}
            errorLabel={lastName.errorMessage}
            showError={lastName.showError}
          />
          <TextInput
            label="National Identity Number (NIN)"
            id="nin"
            placeHolder="0000 0000 0000 0000"
            disabled={false}
            defaultValue={nin.value.toString()}
            handleChange={(value: string) => {
              setNin({
                ...nin,
                value: value,
                showError: nin.showError && value.toString() === "",
              });
            }}
            errorLabel={nin.errorMessage}
            showError={nin.showError}
            required={true}
          />
          <TextInput
            label="Biometric Verification Number (BVN)"
            id="bvn"
            placeHolder="0000 0000 0000"
            disabled={false}
            type="number"
            required={true}
            defaultValue={bvn.value.toString()}
            handleChange={(value: string) => {
              setBVN({
                ...bvn,
                value: value,
                showError: bvn.showError && value.toString() === "",
              });
            }}
            errorLabel={bvn.errorMessage}
            showError={bvn.showError}
          />
          <TextInput
            label="Phone Number"
            id="phoneNumber"
            placeHolder="123456789"
            type="tel"
            disabled={false}
            prefix={<p className="text-gray-400 text-xs">+234</p>}
            defaultValue={phone.value.toString()}
            handleChange={(value: string) => {
              setPhoneNumber({
                ...phone,
                value: value,
                showError: phone.showError && value.toString() === "",
              });
            }}
            errorLabel={phone.errorMessage}
            showError={phone.showError}
            required={true}
          />
          <DateInput
            label="Date of Birth"
            id="dob"
            type="date"
            disabled={false}
            required={true}
            defaultValue={rootStore.merchant.personnel?.dob}
            handleChange={(value: string) => {
              setDob({
                ...dob,
                value: value,
                showError: dob.showError && value.toString() === "",
              });
            }}
            errorLabel={dob.errorMessage}
            showError={dob.showError}
          />
          <Dropdown
            label="Current Staff Headcount"
            id="nin"
            disabled={false}
            options={HeadCountOptions}
            defaultValue={rootStore.merchant.headCount}
            handleChange={(value: string) =>
              rootStore.setMerchant({
                ...rootStore.merchant,
                headCount: value,
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
              setSelectedDirector={setSelectedDirector}
              setIsUpdate={setIsUpdate}
              isUpdate={isUpdate}
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
                setIsUpdate={setIsUpdate}
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
  setIsUpdate: Function;
}> = ({ director, setIsEditingDirector, setSelectedDirector, setIsUpdate }) => {
  const editHandler = () => {
    setSelectedDirector(director);
    setIsEditingDirector(true);
    setIsUpdate(true);
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
  setSelectedDirector: Function;
  setIsUpdate: Function;
  isUpdate: boolean;
}> = ({
  selectedDirector,
  setIsEditingDirector,
  setSelectedDirector,
  setIsUpdate,
  isUpdate,
}) => {
  const rootStore = useContext(RootContext);
  const [firstName, setFirstName] = useState(selectedDirector?.firstName ?? "");
  const [lastName, setLastName] = useState(selectedDirector?.lastName ?? "");
  const [nin, setNIN] = useState(selectedDirector?.nin ?? "");
  const [bvn, setBVN] = useState(selectedDirector?.bvn ?? "");

  const updatePersonnel = () => {
    const newDirector: Personnel = {
      id: generateUUID(),
      firstName: selectedDirector?.firstName ?? "",
      lastName: selectedDirector?.lastName ?? "",
      bvn: selectedDirector?.bvn ?? "",
      nin: selectedDirector?.nin ?? "",
    };

    const _directors = [...(rootStore.merchant.directors ?? [])];
    console.log(selectedDirector);

    if (isUpdate) {
      rootStore.setMerchant({
        ...rootStore.merchant,
        directors: rootStore.merchant.directors?.map((item) => {
          if (item.id === selectedDirector!.id) {
            return selectedDirector;
          } else {
            return item;
          }
        }),
      });
      setIsUpdate(false);
    } else {
      rootStore.setMerchant({
        ...rootStore.merchant,
        directors: [..._directors, newDirector],
      });
      setSelectedDirector(undefined);
      setIsUpdate(false);
    }

    toggleEdit();
  };

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
          handleChange={(value: string) =>
            setSelectedDirector({ ...selectedDirector, firstName: value })
          }
          required={true}
        />
        <TextInput
          label="Last Name"
          id="directorLastName"
          placeHolder="Enter a Last Name"
          disabled={false}
          defaultValue={selectedDirector?.lastName}
          handleChange={(value: string) =>
            setSelectedDirector({ ...selectedDirector, lastName: value })
          }
          required={true}
        />
        <TextInput
          label="National Identity Number (NIN)"
          id="nin"
          placeHolder="0000 0000 0000 0000"
          disabled={false}
          defaultValue={selectedDirector?.nin}
          handleChange={(value: string) =>
            setSelectedDirector({ ...selectedDirector, nin: value })
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
            setSelectedDirector({ ...selectedDirector, bvn: value })
          }
        />
        <div className="space-x-3">
          <Button
            label={`${isUpdate ? "Update" : "Save"}`}
            skin={BUTTON_SKIN.secondary}
            onClick={updatePersonnel}
            type="button"
          />
          <Button
            label="Cancel"
            type="button"
            onClick={toggleEdit}
            skin={BUTTON_SKIN.linkColor}
          />
        </div>
        {isUpdate && (
          <div className="justify-end flex">
            <Button
              label="Delete Director"
              type="button"
              onClick={() => {
                console.log(`Im deleting ${selectedDirector}`);
                const _newArray = rootStore.merchant.directors?.filter(
                  (director) => director.id !== selectedDirector?.id
                );
                rootStore.setMerchant({
                  ...rootStore.merchant,
                  directors: _newArray,
                });
                setIsUpdate(false);
                toggleEdit();
              }}
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
