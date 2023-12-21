import React from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoAddOutline } from "react-icons/io5";
import Card from "./Card.jsx";
import { LuSignalLow } from "react-icons/lu";
import { PiCellSignalMediumBold } from "react-icons/pi";
import { PiCellSignalHighLight } from "react-icons/pi";
import { GoAlertFill } from "react-icons/go";
const ContentListItem = ({ data, title, id }) => {
    // console.log(data?.[0]);
    const temp = data;
    const filteredData = temp?.filter((item) => item.priority == id);
    console.log(filteredData);

    return (
        <div className="flex flex-col gap-6">
            {/* category title */}
            <div className="flex items-center justify-between w-full gap-4">
                {/* icon */}
                <div className="flex gap-2 items-center">
                    <div className="dark:text-gray-600">
                    {/* <LuSignalLow /> */}
                        
                        {
                            id === 0 && (<HiOutlineDotsHorizontal  />)
                        }
                    </div>
                    <h2 className="dark:text-gray-200">{title}</h2>
                    <p className="dark:text-gray-400"> {filteredData?.length}</p>
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

            {/* card */}
            {
                filteredData?.map((item, index) => (
                    <Card data={item} key={index} />
                ))
            }
        </div>
    );
};

export default ContentListItem;
