import { PropsWithChildren } from "react";

interface DialogBoxType extends PropsWithChildren {
  title: string;
  subText: string;
}

const DialogBox = ({ title, subText, children }: DialogBoxType) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full mx-4 text-center">
        <p className="heading-4 text-blueBlack mb-2">{title}</p>
        <p className="paragraph text-gray-600 mb-6">{subText}</p>
        {children}
      </div>
    </div>
  );
};

export default DialogBox;
