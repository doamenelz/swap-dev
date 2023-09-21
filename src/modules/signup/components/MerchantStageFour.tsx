import { useContext, useState, FC } from "react";
import { RegistrationContentLayout } from "../../../common/layouts/RegistrationContentLayout";
import { RootContext } from "../../../context/RootContext";
import { Table, TableCell } from "../../../common/components/Tables";
import { classNames, generateUUID } from "../../../utilities/helperFunctions";
import { Button } from "../../../common/components/forms/Buttons/PrimaryButton";
import { BUTTON_SKIN } from "../../../common/components/forms/Buttons/ButtonTypes";
import { RequiredDocuments } from "../../../common/models/RequiredDocuments";
import {
  Icon,
  ICON_POSITION,
  ICON_SIZES,
  IconList,
} from "../../../common/components/design/Icons";
import { RegistrationLayoutContext } from "../../../context/RegistrationLayoutContext";
import { STAGE_STATUS } from "../../../common/layouts/RegistrationLayout";

enum REQUIRED_DOCS {
  cac,
  taxReceipt,
  driversLicense,
  utilityBill,
}

interface FileContent {
  type: string;
  filename: string;
  docType: REQUIRED_DOCS;
}

export const MerchantStageFour = () => {
  const rootStore = useContext(RootContext);
  const options: string[] = ["Required Document"];
  const registrationContext = useContext(RegistrationLayoutContext);
  const [allFiles, setAllFiles] = useState<FileContent[]>(RequiredDocuments);
  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(rootStore.merchant);
    toggleStages();
  };

  const toggleStages = () => {
    // registrationContext.setStages(
    //   registrationContext.stages.map((stage) => {
    //     if (stage.id === "stepThree") {
    //       return { ...stage, status: STAGE_STATUS.completed };
    //     } else if (stage.id === "stepFour") {
    //       return { ...stage, status: STAGE_STATUS.active };
    //     } else {
    //       return stage;
    //     }
    //   })
    // );

    /**
     * Validate the fields
     * store the data to Local Storage with an isLogged in state
     * Route to the login screen
     * If logged creds matches, route to Dashboard screen
     *
     */

    registrationContext.setSelectedId("stepFour");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <RegistrationContentLayout
        header="Document Upload"
        copy="Upload all your supporting Registration Documents"
        businessType={rootStore.merchant.businessType}
      >
        <>
          <div className="text-sm font-semibold text-gray-600">
            Files Uploaded
            <span
              className={classNames(
                allFiles && allFiles.length <= 3
                  ? "text-error-900 bg-error-50"
                  : "text-primary-900 bg-success-50",
                "ml-2 text-xs font-semibold py-1 px-2 rounded-full"
              )}
            >
              {allFiles.length} / 4 Uploaded
            </span>
          </div>
          <Table options={options} hasButton={true}>
            {allFiles.map((file) => (
              <tr key={file.docType} className="">
                <TableCell value={file.type} />
                <TableCell
                  value={file.type}
                  button={<FileUpload key={file.docType} requiredDoc={file} />}
                />
              </tr>
            ))}
          </Table>
        </>
        <div className="flex justify-between mt-6">
          <Button
            type="button"
            onClick={() => registrationContext.setSelectedId("stepThree")}
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
const FileUpload: FC<{ requiredDoc: FileContent }> = ({ requiredDoc }) => {
  const rootStore = useContext(RootContext);
  const [file, setFile] = useState<File | null>(null);
  const onChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    if (event.currentTarget.files && event.currentTarget.files[0]) {
      if (event.currentTarget.files[0].size > 1 * 1000 * 1024) {
        rootStore.setNotificationStatus(false);
        rootStore.setNotificationHeader("Could not upload your file");
        rootStore.setNotificationCopy!("Maximum size of 1MB is allowed");
        rootStore.toggleNotification(true);
        return false;
      }
    }
    setFile(event.currentTarget.files![0]);
    // props.handleChange(event.currentTarget.files![0]);
  };

  return (
    <div className={classNames(file ? "text-primary-600" : "text-blue-700")}>
      <div className="text-left">
        <div className="flex text-sm leading-6 text-gray-600">
          <label
            htmlFor={requiredDoc.type}
            className="relative text-left font-semibold bg-white rounded-md cursor-pointer focus-within:outline-none focus-within:ring-1 focus-within:ring-primary-600 focus-within:ring-offset-2 "
          >
            <span
              className={classNames(
                file ? "text-primary-600" : "text-blue-700"
              )}
            >
              {file ? file.name : "Upload"}
            </span>
            <input
              type="file"
              name={requiredDoc.type}
              id={requiredDoc.type}
              className="sr-only"
              required={true}
              accept=".pdf"
              onChange={onChangeHandler}
            />
          </label>
        </div>
        {!file && (
          <p className="text-xs text-left leading-5 text-gray-400 font-light">
            <span className="text-error-700">Pending</span> | PDF only | 1MB max
          </p>
        )}
      </div>
    </div>
  );
};
