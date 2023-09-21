import { FC } from "react";

const people = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  // More people...
];

export const Table: FC<{
  hasButton: boolean;
  options: string[];
  children: React.ReactNode;
}> = ({ hasButton, options, children }) => {
  return (
    <div className="">
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <TableHeader options={options} />
                  {hasButton && (
                    <th scope="col" className="relative py-3 pl-3 pr-4 sm:pr-0">
                      <span className="sr-only">Edit</span>
                    </th>
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {children}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const TableHeader: FC<{ options: string[] }> = ({ options }) => {
  return (
    <>
      {options.map((item) => (
        <th
          scope="col"
          className="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-0"
        >
          {item}
        </th>
      ))}
    </>
  );
};

export const TableCell: FC<{ value: string; button?: JSX.Element }> = ({
  value,
  button,
}) => {
  return (
    <>
      {button ? (
        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
          {button}
        </td>
      ) : (
        <td className="whitespace-nowrap pr-3 py-4 text-sm text-gray-500">
          {value}
        </td>
      )}
    </>
  );
};
