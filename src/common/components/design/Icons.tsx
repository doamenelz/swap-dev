import { FC } from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
export enum ICON_SIZES {
  sm = "w-4 h-4",
  md = "w-5 h-5",
  lg = "w-6 h-6",
  xl = "w-7 h-7",
  xxl = "w-10 h-10",
}

export interface IconProps {
  size: string;
  icon: JSX.Element;
}

export enum ICON_POSITION {
  leading,
  trailing,
}

export const Icon: FC<IconProps> = ({ size, icon }) => {
  return <div className={size}>{icon}</div>;
};

export const IconList = {
  email: <EnvelopeIcon />,
};
