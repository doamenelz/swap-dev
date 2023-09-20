import { FC } from "react";

export const RegistrationContentLayout: FC<{
  header: string;
  copy: string;
  children: React.ReactNode;
  businessType?: string;
}> = ({ header, children, copy, businessType }) => {
  return (
    <div className="p-24 w-full">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">{header}</h1>
          <h3 className="mt-3 mb-8 text-gray-600 text-sm">{copy}</h3>
        </div>
        {businessType && (
          <p className="text-sm py-1.5 px-4  bg-success-50 text-primary-700 text-center rounded-full">
            {businessType}
          </p>
        )}
      </div>

      {children}
    </div>
  );
};
