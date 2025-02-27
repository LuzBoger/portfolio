import React from "react";
import clsx from "clsx";
import ProgressBar from "./List/ProgressBar";
const ListPourcent = ({ ths, data }) => {
  return (
    <div className="block w-full overflow-x-auto ">
      <table className="items-center w-full bg-secondary-800">
        <thead className="">
          <tr>
            {ths?.map((item, index) => {
              const isLast = index === ths.length - 1;
              return (
                <th
                  className={clsx(
                    "px-4 bg-secondary-700 text-white align-middle py-3 text-xs font-semibold uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px",
                    {
                      "text-right": isLast,
                      "text-left": !isLast,
                    }
                  )}
                  key={index + "_th"}
                >
                  {item}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="divide-y divide-secondary-700">
          {data?.map((item, index) => {
            return (
              <tr className="text-gray-50" key={index + "_lign"}>
                {item?.map((subItem, yndex) => {
                  const isLast = yndex === item.length - 1;
                  return (
                    <td
                      key={index + "_" + yndex + "_td"}
                      className="border-t-0 px-4 align-middle text-xs font-medium text-gray-50 whitespace-nowrap p-4"
                    >
                      {!isLast ? (
                        subItem
                      ) : (
                        <div className="flex items-center">
                          <span className="mr-2 text-xs font-medium">
                            {subItem}
                          </span>
                          <div className="relative w-full">
                            <ProgressBar subItem={subItem} />
                          </div>
                        </div>
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default ListPourcent;
