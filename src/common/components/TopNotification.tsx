import { Fragment, useContext, useEffect, FC, useState } from "react";
import { Transition } from "@headlessui/react";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { classNames } from "../../utilities/helperFunctions";
import { RootContext } from "../../context/RootContext";

/**
 * TODO: Rename component to Toast
 *  */
export const TopNotification = () => {
  const store = useContext(RootContext);

  //   useEffect(() => {
  //     let timer = setTimeout(function () {
  //       store.setShowNotification(false);
  //     }, 4000);

  //     return () => clearTimeout(timer);
  //   }, [store]);

  return (
    <>
      <div
        aria-live="assertive"
        className="fixed inset-0 flex items-start px-4 py-6 pointer-events-none sm:items-start sm:p-6"
      >
        <div className="flex flex-col items-center w-full space-y-4 sm:items-end">
          <Transition
            show={store.showNotification}
            as={Fragment}
            enter="transform ease-out duration-500 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className={classNames(
                store.notificationStatus
                  ? "bg-success-25 border-success-600"
                  : "bg-error-25 border-error-600",
                "w-full max-w-sm overflow-hidden border-l-8 rounded-md shadow-xl pointer-events-auto shadow-gray-200 "
              )}
            >
              <div className="px-2 py-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    {store.notificationStatus ? (
                      <CheckCircleIcon
                        className={`w-6 h-6 text-success-500`}
                        aria-hidden="true"
                      />
                    ) : (
                      <ExclamationCircleIcon
                        className={`w-6 h-6 text-error-500`}
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-sm font-medium text-gray-900">
                      {store.notificationHeader}
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      {store.notificationCopy}
                    </p>
                  </div>
                  <div className="flex flex-shrink-0 ml-4">
                    <button
                      type="button"
                      className="inline-flex text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                      onClick={() => {
                        store.toggleNotification(false);
                      }}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon
                        className="w-5 h-5 text-gray-900"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  );
};
