import { FC } from "react";
import { classNames } from "../../../../utilities/helperFunctions";
import { Icon, ICON_SIZES, ICON_POSITION } from "../../design/Icons";
import { Link } from "react-router-dom";
import { BUTTON_SIZES, BUTTON_SKIN } from "./ButtonTypes";

export interface ButtonProps {
  size?: BUTTON_SIZES.sm | BUTTON_SIZES.md | BUTTON_SIZES.lg;
  skin?:
    | BUTTON_SKIN.primary
    | BUTTON_SKIN.secondary
    | BUTTON_SKIN.secondaryColor
    | BUTTON_SKIN.link
    | BUTTON_SKIN.linkColor;
  /** Use from the IconList provided in assets/Icon. These icons require a "size" prop, and an "icon" prop */
  label: string;
  onClick?: () => void;
  type?: "button" | "reset" | "submit";
  fillWidth?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
  componentType?: "button" | "link";
  link?: string;
  destructive?: boolean;
  icon?: { position: ICON_POSITION; asset: JSX.Element };
}

/** Only use this button if you require an action performed on a page, for navigation, use Link instead */
export const Button: FC<ButtonProps> = ({
  size,
  skin,
  label,
  onClick,
  type,
  fillWidth,
  componentType,
  link,
  destructive,
  icon,
  disabled,
  isLoading,
}) => {
  let sizeClass = getSizeStyle(
    size ? size : BUTTON_SIZES.md,
    skin ? skin : BUTTON_SKIN.primary,
    fillWidth ? fillWidth : false
  );
  let skinStyleClass = getSkinStyle(
    skin ? skin : BUTTON_SKIN.primary,
    destructive ? destructive : false
  );

  return (
    <>
      {componentType === "button" ? (
        <button
          disabled={disabled || isLoading}
          type={type}
          onClick={onClick}
          className={classNames(
            sizeClass,
            skinStyleClass,
            `items-center text-sm font-medium text-center rounded-md gap-x-2 sm:text-sm ${
              (disabled || isLoading) && "cursor-not-allowed"
            } `
          )}
        >
          <ButtonLabel label={label} icon={icon} isLoading={isLoading} />
        </button>
      ) : (
        <Link
          type={type}
          to={link ?? ""}
          className={classNames(
            sizeClass,
            skinStyleClass,
            `items-center text-sm font-medium text-center rounded-md gap-x-2 sm:text-sm ${
              (disabled || isLoading) && "cursor-not-allowed"
            } `
          )}
        >
          <ButtonLabel label={label} icon={icon} isLoading={isLoading} />
        </Link>
      )}
    </>
  );
};

export const ButtonLabel: FC<{
  label: string;
  icon?: { position: ICON_POSITION; asset: JSX.Element };
  isLoading?: boolean;
}> = ({ label, icon, isLoading }) => {
  return (
    <>
      {icon ? (
        icon.position === ICON_POSITION.leading ? (
          <div className="flex items-center justify-center gap-x-2">
            <span className={`${isLoading && "animate-spin"}`}>
              {icon.asset}
            </span>
            {label}
          </div>
        ) : (
          <div className="flex items-center justify-between px-4 gap-x-2">
            {label}
            <span className={`${isLoading && "animate-spin"}`}>
              {icon.asset}
            </span>
          </div>
        )
      ) : (
        label
      )}
    </>
  );
};

Button.defaultProps = {
  size: BUTTON_SIZES.md,
  skin: BUTTON_SKIN.primary,
  type: "button",
  componentType: "button",
  destructive: false,
};

const getSizeStyle = (
  size: BUTTON_SIZES,
  skin: BUTTON_SKIN,
  fillWidth: boolean
) => {
  switch (size) {
    case BUTTON_SIZES.sm:
      return `${
        skin === BUTTON_SKIN.link || BUTTON_SKIN.linkColor ? "py-0" : "py-1"
      } ${fillWidth ? "w-full mx-auto" : "px-4 inline-flex"}`;
    case BUTTON_SIZES.md:
      return `py-2.5
           ${fillWidth ? "w-full mx-auto" : "px-4 inline-flex"}`;
    case BUTTON_SIZES.lg:
      return `py-3
          ${fillWidth ? "w-full mx-auto" : "px-4 inline-flex"}`;
    default:
      return (
        (skin === BUTTON_SKIN.link || BUTTON_SKIN.linkColor) &&
        `py-1 ${fillWidth ? "w-full mx-auto" : "px-4 inline-flex"}`
      );
  }
};

const getSkinStyle = (skin: BUTTON_SKIN, destructive: boolean) => {
  switch (skin) {
    case BUTTON_SKIN.primary:
      return `${
        destructive ? "bg-error-600" : "bg-primary-600"
      } border border-${destructive ? "error" : "primary"}-600 hover:bg-${
        destructive ? "error" : "primary"
      }-800 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 ${
        destructive
          ? "focus-visible:outline-error-200"
          : "focus-visible:outline-primary-200"
      }`;

    case BUTTON_SKIN.secondary:
      return `bg-white ring-1 ${
        destructive ? "ring-error-300" : "ring-gray-300"
      } hover:bg-${destructive ? "error" : "gray"}-50 ${
        destructive ? "text-error-700" : "text-gray-700"
      } focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 ${
        destructive
          ? "focus-visible:outline-error-100"
          : "focus-visible:outline-gray-100"
      } `;

    case BUTTON_SKIN.secondaryColor:
      return `${destructive ? "bg-error-50" : "bg-primary-50"} ring-1 ring-${
        destructive ? "error" : "primary"
      }-300 ${destructive ? "hover:bg-error-200" : "hover:bg-primary-200"}  ${
        destructive ? "text-error-900" : "text-primary-900"
      } focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 ${
        destructive
          ? "focus-visible:outline-error-100"
          : "focus-visible:outline-primary-100"
      }`;

    case BUTTON_SKIN.link:
      return `hover:bg-${destructive ? "error" : "gray"}-50 text-${
        destructive ? "error" : "gray"
      }-700 hover:text-${
        destructive ? "error" : "gray"
      }-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 ${
        destructive
          ? "focus-visible:outline-error-100"
          : "focus-visible:outline-gray-100"
      }`;

    case BUTTON_SKIN.linkColor:
      return ` text-${destructive ? "error" : "primary"}-700 hover:text-${
        destructive ? "error" : "primary"
      }-900 focus:outline-none`;

    default:
      return `bg-${destructive ? "error" : "primary"}-600 ring-1 ring-${
        destructive ? "error" : "primary"
      }-600 hover:bg-${
        destructive ? "error" : "primary"
      }-800 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-${
        destructive ? "error" : "primary"
      }-200`;
  }
};
