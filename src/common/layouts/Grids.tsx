import { FC } from "react";

type GridProps = {
  /** Use this if the grid is ignorant of the sides (LHS, or RHS) and only needs to render items in the order at which they are entered as children */
  children?: React.ReactNode;
  /** Left Hand Side. Use this if you want the grid to be knowledgeable of the sides. Always pair with the RHS */
  lhs?: React.ReactNode;
  /** Right Hand Side. Use this if you want the grid to be knowledgeable of the sides. Always pair with the LHS*/
  rhs?: React.ReactNode;
  type: GRID_TYPE;
  verticalPadding?: boolean;
};

/** Grid Types */
export enum GRID_TYPE {
  /** Two Column */
  twoCol = "twoCol",
  twoOne = "twoOne",
  threeCol = "threeCol",
  oneTwo = "oneTwo",
  oneThree = "oneThree",
  fieldSetThree = "fieldSetThree",
}
export const GridLayout: FC<GridProps> = ({
  children,
  lhs,
  rhs,
  type,
  verticalPadding,
}) => {
  let classStyle = `${verticalPadding && "py-4"}`;
  switch (type) {
    case GRID_TYPE.twoCol:
      classStyle = "grid w-full grid-cols-1  gap-6 sm:grid-cols-2";
      break;
    case GRID_TYPE.twoOne:
      classStyle = "grid w-full grid-cols-1 gap-6  gap-y-6 sm:grid-cols-3";
      break;
    case GRID_TYPE.oneTwo:
      classStyle = "grid w-full grid-cols-1 sm:gap-4  gap-y-6 sm:grid-cols-3";
      break;
    case GRID_TYPE.oneThree:
      classStyle = "grid w-full grid-cols-1  gap-y-6 sm:grid-cols-3";
      break;
    case GRID_TYPE.threeCol:
      classStyle = "grid gap-10 mx-auto md:grid-cols-2 lg:grid-cols-3";
      break;
    case GRID_TYPE.fieldSetThree:
      classStyle = "grid gap-10 mx-auto md:grid-cols-2 lg:grid-cols-3";
      break;

    default:
      break;
  }
  return (
    <>
      {(type === GRID_TYPE.twoCol || type === GRID_TYPE.threeCol) && (
        <div className={`${verticalPadding && "my-4"} ${classStyle}`}>
          {children}
        </div>
      )}

      {type === GRID_TYPE.twoOne && (
        <div className={`${verticalPadding && "my-4"} ${classStyle}`}>
          <div className="col-span-2">{lhs}</div>
          <div className="col-span-2 md:col-span-1">{rhs}</div>
        </div>
      )}
      {type === GRID_TYPE.oneTwo && (
        <div className={`${verticalPadding && "my-4"} ${classStyle}`}>
          <div className="col-span-4 lg:col-span-1">{lhs}</div>
          <div className="col-span-4 lg:col-span-2">{rhs}</div>
        </div>
      )}
      {type === GRID_TYPE.oneThree && (
        <div className={`${verticalPadding && "my-4"} ${classStyle}`}>
          <div className="col-span-4 lg:col-span-1">{lhs}</div>
          <div className="col-span-4 lg:col-span-2">{rhs}</div>
        </div>
      )}
      {type === GRID_TYPE.fieldSetThree && (
        <div className="grid mx-auto md:grid-cols-2 space-y-2 lg:grid-cols-3">
          {children}
        </div>
      )}
    </>
  );
};
