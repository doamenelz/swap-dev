import { createContext } from "react";
import { StageHeaderProps } from "../common/layouts/RegistrationLayout";

export const RegistrationLayoutContext = createContext<{
  selectedId: string;
  setSelectedId: Function;
  stages: StageHeaderProps[];
  setStages: Function;
}>({
  selectedId: "",
  setSelectedId: () => {},
  stages: [],
  setStages: () => {},
});
