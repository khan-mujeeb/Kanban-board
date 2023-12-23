import React from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoAddOutline } from "react-icons/io5";
import PriorityImage from "./FilterImageComponents/PriorityImage";
import StatusImage from "./FilterImageComponents/StatusImage";
const CardHeader = ({ id, title, count, group, data, status }) => {

    console.log("status", status);
    console.log("data", data);
    return (
        <div className="flex items-center justify-between w-full gap-4">
            {/* title */}
            <div className="flex gap-2 items-center">
                {/* icon */}
                {group === "priority" && <PriorityImage id={id} />}
                {group === "status" && <StatusImage status={data[0]} />}
                {group === "users" && <HiOutlineDotsHorizontal />}
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
