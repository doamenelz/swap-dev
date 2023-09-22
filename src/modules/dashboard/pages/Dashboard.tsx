import coa from "../../../common/assets/coa.png";
import { BUTTON_SKIN } from "../../../common/components/forms/Buttons/ButtonTypes";
import { Button } from "../../../common/components/forms/Buttons/PrimaryButton";
export const Dashboard = () => {
  return (
    <div className="flex h-screen place-content-center items-center">
      <div className="text-center space-y-4">
        <img src={coa} alt="main-logo" className="w-16 h-16 mx-auto " />
        <p className="text-3xl font-semibold text-gray-600">Welcome to SWAP</p>
        <p className="text-sm text-gray-700">
          This page is currently undergoing construction
        </p>
        <Button
          label="Back to login"
          skin={BUTTON_SKIN.linkColor}
          componentType="link"
          link="/login"
        />
      </div>
    </div>
  );
};
