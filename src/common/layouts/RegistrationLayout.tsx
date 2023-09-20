import coa from "../../common/assets/coa.png";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { FC, useState } from "react";
import { RegistrationLayoutContext } from "../../context/RegistrationLayoutContext";
import { ScrollToTop } from "../components/ScrollToTop";
export enum STAGE_STATUS {
  active,
  completed,
  pending,
}

export interface StageHeaderProps {
  id: string;
  status: STAGE_STATUS;
  header: string;
  copy: string;
  hideIndicator: boolean;
}
export const RegistrationLayout: FC<{
  stages: StageHeaderProps[];
  children: React.ReactNode;
  activeId: string;
  setActiveId: Function;
  setStages: Function;
}> = ({ stages, children, activeId, setActiveId, setStages }) => {
  return (
    <RegistrationLayoutContext.Provider
      value={{
        selectedId: activeId,
        setSelectedId: setActiveId,
        stages: stages,
        setStages: setStages,
      }}
    >
      <ScrollToTop />
      <div className="hidden h-screen border-r bg-primary-900 lg:fixed lg:flex lg:flex-col overscroll-contain group w-96 p-10">
        <img src={coa} alt="main-logo" className="w-12 h-12 " />
        <p className="text-lg font-semibold text-gray-100 mb-6 mt-4">
          Complete your Registration
        </p>
        <div className="flex-col justify-between">
          {stages.map((stage, index) => (
            <StageHeader key={index} stage={stage} />
          ))}
          <p className="fixed text-xs font-light text-primary-200 bottom-4 origin-bottom-left">
            © SWAP 2023
          </p>
        </div>
      </div>
      <div className="lg:pl-96">{children}</div>
    </RegistrationLayoutContext.Provider>
  );
};

const StageHeader: FC<{ stage: StageHeaderProps }> = ({ stage }) => {
  return (
    <div className="flex gap-3">
      <StageIconIndicator
        status={stage.status}
        hideIndicator={stage.hideIndicator}
      />

      <div className="text-left text-sm space-y-1">
        <p className="font-semibold text-white">{stage.header}</p>
        <p className="text-primary-100 font-normal">{stage.copy}</p>
      </div>
    </div>
  );
};

const StageIconIndicator: FC<{
  status: STAGE_STATUS;
  hideIndicator: boolean;
}> = ({ status, hideIndicator }) => {
  return (
    <div className="w-8 h-[86px] pb-1 flex-col justify-start items-center gap-1 inline-flex">
      {status === STAGE_STATUS.completed && (
        <div className="w-8 h-8 relative bg-primary-200 rounded-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22.7952 9.85338L13.2485 19.0667L10.7152 16.3601C10.2485 15.9201 9.51516 15.8934 8.98182 16.2667C8.46182 16.6534 8.31515 17.3334 8.63515 17.8801L11.6352 22.7601C11.9285 23.2134 12.4352 23.4934 13.0085 23.4934C13.5552 23.4934 14.0752 23.2134 14.3685 22.7601C14.8485 22.1334 24.0085 11.2134 24.0085 11.2134C25.2085 9.98672 23.7552 8.90672 22.7952 9.84005V9.85338Z"
              fill="#358F80"
            />
            <rect
              x="1"
              y="1"
              width="30"
              height="30"
              rx="15"
              stroke="#88D4AB"
              strokeWidth="2"
            />
          </svg>
        </div>
      )}

      {status === STAGE_STATUS.active && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <rect x="1" y="1" width="30" height="30" rx="15" fill="#88D4AB" />
          <circle cx="16" cy="16" r="5" fill="#358F80" />
          <rect
            x="1"
            y="1"
            width="30"
            height="30"
            rx="15"
            stroke="#88D4AB"
            strokeWidth="2"
          />
        </svg>
      )}

      {status === STAGE_STATUS.pending && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <circle cx="16" cy="16" r="5" fill="#78C6A3" />
          <rect
            x="1"
            y="1"
            width="30"
            height="30"
            rx="15"
            stroke="#78C6A3"
            strokeWidth="2"
          />
        </svg>
      )}

      {!hideIndicator && (
        <div className="w-0.5 grow shrink basis-0 bg-primary-300 rounded-sm" />
      )}
    </div>
  );
};
