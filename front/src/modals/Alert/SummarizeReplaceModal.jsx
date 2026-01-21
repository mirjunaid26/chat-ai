import { Trans } from "react-i18next";
import BaseModal from "../BaseModal";

export default function SummarizeReplaceModal({ isOpen, onClose, onConfirm }) {
  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      titleKey="common.summarize"
      maxWidth="max-w-md"
    >
      <div className="pt-0 pb-2">
        <p className="dark:text-white text-black text-justify text-sm">
          <Trans i18nKey="alert.summarize_replace" />
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-2 justify-between w-full text-sm">
        <button
          type="button"
          className="cursor-pointer px-5 py-3 rounded-lg font-medium
                    text-gray-700 bg-gray-200 border border-gray-300
                    hover:bg-gray-300 hover:border-gray-400
                    active:scale-95 transition-all duration-200
                    dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600
                    dark:hover:bg-gray-600"
          onClick={onClose}
        >
          <Trans i18nKey="common.cancel" />
        </button>

        <button
          type="button"
          className="cursor-pointer px-5 py-3 rounded-lg font-medium
                    text-white bg-red-600 border border-red-700
                    hover:bg-red-700 hover:border-red-800
                    active:scale-95 transition-all duration-200 shadow-md
                    dark:shadow-black/30"
          onClick={() => {
            if (typeof onConfirm === "function") {
              onConfirm();
            }
            onClose();
          }}
        >
          <Trans i18nKey="common.summarize" />
        </button>
      </div>
    </BaseModal>
  );
}

