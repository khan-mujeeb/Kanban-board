import React from "react";
import { TbCircleDotted } from "react-icons/tb";
import { TbProgress } from "react-icons/tb";
import { FaRegCircle } from "react-icons/fa6";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { MdCancel } from "react-icons/md";

const StatusImage = ({data, id}) => {
    return (
        <div>
            {data?.status === "Todo" && (
                <FaRegCircle className="text-gray-400" />
            )}

            {data?.status === "In progress" && (
                <TbCircleDotted className="text-yellow-400" />
            )}

            {data?.status === "Done" && (
                <IoCheckmarkDoneCircle className="text-green-400" />
            )}

            {data?.status === "Cancelled" && (
                <MdCancel className="text-red-400" />
            )}
            {data?.status === "Backlog" && (
                <TbProgress className="text-blue-400" />
            )}
        </div>
    );
};

export default StatusImage;
