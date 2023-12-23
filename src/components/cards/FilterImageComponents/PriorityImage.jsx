import React from "react";
import { LuSignalLow } from "react-icons/lu";
import { PiCellSignalMediumBold } from "react-icons/pi";
import { PiCellSignalHighLight } from "react-icons/pi";
import { GoAlertFill } from "react-icons/go";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const PriorityImage = ({id, data}) => {
    return (
            <div className="dark:text-gray-600">
                {id === 0 && <HiOutlineDotsHorizontal />}
                {id === 1 && <LuSignalLow className="text-white" />}
                {id === 2 && <PiCellSignalMediumBold className="text-white" />}
                {id === 3 && <PiCellSignalHighLight className="text-white" />}
                {id === 4 && <GoAlertFill className="text-red-600" />}
            </div>
        
    );
};

export default PriorityImage;
