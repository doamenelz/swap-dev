import { TextInput } from "../../../common/components/forms/Inputs/TextInput";
import { Button } from "../../../common/components/forms/Buttons/PrimaryButton";
import { Link } from "react-router-dom";
import { useState, FC } from "react";
import { classNames } from "../../../utilities/helperFunctions";

import coa from "../../../common/assets/coa.png";
import { MerchantBasicInput } from "./MerchantFormInput";
import { BeneficiaryBasicInput } from "./BeneficiaryBasicInput";

export const SignUpBasic = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedId, setSelectedId] = useState("merchant");

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <form
        onSubmit={onSubmitHandler}
        className="max-w-sm mx-auto sm:px-4 w-80 sm:w-96 mt-4"
      >
        <img src={coa} alt="main-logo" className="w-16 h-16 mx-auto" />
        <h1 className="mt-4 text-2xl font-semibold text-gray-800 text-center">
          Create your SWAP Account
        </h1>
        <div className="flex -mb-px overflow-x-scroll mt-3 text-center">
          <Tab
            name="I am a Beneficiary"
            id="beneficiary"
            isSelected={selectedId === "beneficiary"}
            updateTab={setSelectedId}
          />
          <Tab
            name="I am a Merchant"
            id="merchant"
            isSelected={selectedId === "merchant"}
            updateTab={setSelectedId}
          />
        </div>
        {selectedId === "merchant" && (
          <MerchantBasicInput isLoading={isLoading} />
        )}
        {selectedId === "beneficiary" && (
          <BeneficiaryBasicInput isLoading={isLoading} />
        )}

        <p className="text-sm text-center text-gray-700">
          Already have an account?{" "}
          <span>
            <button className="text-sm text-primary-700 font-semibold">
              Log In
            </button>
          </span>
        </p>

        {/* {showError && (
          <SimpleErrorComponent
            message="Something went wrong"
            copy={errorMessage}
          />
        )} */}
      </form>
    </>
  );
};

const Tab: FC<{
  name: string;
  id: string;
  isSelected: boolean;
  updateTab: Function;
}> = ({ name, id, isSelected, updateTab }) => {
  return (
    <button
      onClick={() => updateTab!(id)}
      key={name}
      className={classNames(
        isSelected
          ? "border-primary-500 text-primary-900 border-b-2"
          : "border-gray-100 text-gray-500  hover:border-gray-300 hover:text-gray-700",
        " flex items-center border-b-2 py-4 px-1 text-sm font-normal w-full  text-center "
      )}
      aria-current={isSelected ? "page" : undefined}
    >
      <p className="text-center mx-auto">{name}</p>
    </button>
  );
};
