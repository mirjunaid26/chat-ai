import { Trans, useTranslation } from "react-i18next";
import { useState } from "react";
import { HelpCircle } from "lucide-react";
import { useModal } from "../../modals/ModalContext";

export default function ChoiceProposer({ localState, setLocalState }) {
  const { openModal } = useModal();
  const enabled = !!localState?.settings?.choiceProposer;

  return (
    <div className="w-full flex gap-4">
      <div className="flex-shrink-0 flex items-center gap-2">
        <p className="text-sm font-medium">Suggest user prompts</p>
        <HelpCircle
          className="h-[16px] w-[16px] cursor-pointer text-[#009EE0]"
          alt="help"
          onClick={() => openModal("helpChoiceProposer")}
        />
      </div>
      <div className="w-full">
        {/* <div className="flex bg-white dark:bg-bg_secondary_dark border dark:border-border_dark rounded-xl shadow-lg dark:shadow-dark overflow-hidden">
          Off Option
          <div
            className={`choiceProposer-option-off flex-1 p-2 text-center cursor-pointer transition-all duration-200 select-none ${
              !localState.settings?.choiceProposer
                ? "bg-tertiary text-white"
                : "text-tertiary hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
            onClick={() =>
              setLocalState((prev) => ({
                ...prev,
                settings: {
                  ...prev.settings,
                  choiceProposer: 0,
                },
              }))
            }
          >
            <p className="text-xs font-medium">Off</p>
          </div> */}

          {/* On */}
          {/* <div
            className={`choiceProposer-option-on flex-1 p-2 text-center cursor-pointer transition-all duration-200 select-none border-l border-r dark:border-border_dark ${
              localState.settings?.choiceProposer === 1
                ? "bg-tertiary text-white"
                : "text-tertiary hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
            onClick={() =>
              setLocalState((prev) => ({
                ...prev,
                settings: {
                  ...prev.settings,
                  choiceProposer: 1,
                },
              }))
            }
          > <p className="text-xs font-medium">On</p>
          </div>
          </div>
          */}

            <button
              type="button"
              onClick={() =>
                setLocalState((prev) => ({
                  ...prev,
                  settings: { ...prev.settings, choiceProposer: !enabled },
                  flush: true,
                }))
              }
              className={[
                "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none cursor-pointer",
                enabled ? "bg-green-500" : "bg-gray-300 dark:bg-gray-600",
              ].join(" ")}
              aria-label={
                enabled
                  ? "On"
                  : "Off"
              }
            >
              <span
                className={[
                  "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
                  enabled ? "translate-x-6" : "translate-x-1",
                ].join(" ")}
              />
            </button>
      </div>
    </div>
  );
}
