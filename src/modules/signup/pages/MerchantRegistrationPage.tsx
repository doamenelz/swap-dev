import { useContext, useEffect, useState } from "react";
import { PageLayout } from "../../../common/layouts/PageLayout";
import { RegistrationContentLayout } from "../../../common/layouts/RegistrationContentLayout";
import {
  RegistrationLayout,
  StageHeaderProps,
} from "../../../common/layouts/RegistrationLayout";
import { STAGE_STATUS } from "../../../common/layouts/RegistrationLayout";
import { RegistrationLayoutContext } from "../../../context/RegistrationLayoutContext";
import { MerchantStageOne } from "../components/MerchantStageOne";
import { MerchantStageTwo } from "../components/MerchantStageTwo";
import { MerchantStageThree } from "../components/MerchantStageThree";

const stages: StageHeaderProps[] = [
  {
    id: "stepOne",
    status: STAGE_STATUS.active,
    header: "Business Information",
    copy: "Basic Geo and Profile Data",
    hideIndicator: false,
  },
  {
    id: "stepTwo",
    status: STAGE_STATUS.pending,
    header: "Taxes and Financial Information",
    copy: "Information about your Revenue and Taxes",
    hideIndicator: false,
  },
  {
    id: "stepThree",
    status: STAGE_STATUS.pending,
    header: "Personnel Information",
    copy: "Directors and Personnel Information",
    hideIndicator: false,
  },
  {
    id: "stepFour",
    status: STAGE_STATUS.pending,
    header: "Document Information",
    copy: "Upload your supporting KYC Documentation",
    hideIndicator: true,
  },
];

export const MerchantRegistrationPage = () => {
  const [activeId, setActiveId] = useState("");
  const [allStages, setStages] = useState<StageHeaderProps[]>(stages);

  useEffect(() => {
    setActiveId("stepOne");
  }, []);
  return (
    <PageLayout pageTitle="Merchant Registration">
      <RegistrationLayout
        stages={allStages}
        activeId={activeId}
        setActiveId={setActiveId}
        setStages={setStages}
        children={
          <>
            {activeId === "stepOne" && <MerchantStageOne />}{" "}
            {activeId === "stepTwo" && <MerchantStageTwo />}
            {activeId === "stepThree" && <MerchantStageThree />}
          </>
        }
      />
    </PageLayout>
  );
};

// allStages.find(
//     (stage) =>
//       stage.id === "stepOne" &&
//       stage.status === STAGE_STATUS.active && <MerchantStageOne />
//   )
