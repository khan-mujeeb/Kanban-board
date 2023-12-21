import React from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoAddOutline } from "react-icons/io5";
import { LuSignalLow } from "react-icons/lu";
import { PiCellSignalMediumBold } from "react-icons/pi";
import { PiCellSignalHighLight } from "react-icons/pi";
import { GoAlertFill } from "react-icons/go";

const CardHeader = ({id, title, count}) => {
    return (
        <div className="flex items-center justify-between w-full gap-4">
            {/* icon */}
            <div className="flex gap-2 items-center">
                <div className="dark:text-gray-600">

                    {id === 0 && <HiOutlineDotsHorizontal />}
                    {id === 1 && <LuSignalLow className="text-white" />}
                    {id === 2 && (
                        <PiCellSignalMediumBold className="text-white" />
                    )}
                    {id === 3 && (
                        <PiCellSignalHighLight className="text-white" />
                    )}
                    {id === 4 && <GoAlertFill className="text-red-600" />}
                </div>
                <h2 className="dark:text-gray-200">{title}</h2>
                <p className="text-gray-500"> {count}</p>
            </div>
            <div className="flex gap-1  items-center">
                <div className="dark:text-gray-400">
                    <IoAddOutline />
                </div>
                <div className="dark:text-gray-400">
                    <HiOutlineDotsHorizontal />
                </div>
            </div>
        </div>
    );
};

export default CardHeader;
