import { ICON_SIZES, Icon, IconList } from "./design/Icons";

export const Footer = () => {
  return (
    <div className="inset-0 inset-y-full bg-primary-25">
      <div className="flex justify-between text-sm text-gray-700 py-4 px-8">
        <p>SWAP 2023 ©</p>
        <p className="flex space-x-2 gap-1 items-center">
          <span className="text-gray-600">
            <Icon size={ICON_SIZES.sm} icon={IconList.email} />
          </span>
          email@swap.com
        </p>
      </div>
    </div>
  );
};
