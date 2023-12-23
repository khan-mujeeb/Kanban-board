import React from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoAddOutline } from "react-icons/io5";
import PriorityImage from "./FilterImageComponents/PriorityImage";
import StatusImage from "./FilterImageComponents/StatusImage";
import UserIcon from "./FilterImageComponents/UserIcon.jsx";
const CardHeader = ({ id, title, count, group, data, IconData }) => {
    return (
        <div className="flex items-center justify-between w-full gap-4">
            {/* title */}
            <div className="flex gap-2 items-center">
                {/* icon */}
                {group === "priority" && <PriorityImage id={id} />}
                {group === "status" && <StatusImage data={IconData} />}
                {group === "users" &&  <UserIcon data={title}/> }
                
                {
                    group === "users" && (<h2 className="dark:text-gray-200">{title.name}</h2>)
                }
                {
                    group === "priority" && (<h2 className="dark:text-gray-200">{title}</h2>)
                }
                {
                    group === "status" && (<h2 className="dark:text-gray-200">{title}</h2>)
                }
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
