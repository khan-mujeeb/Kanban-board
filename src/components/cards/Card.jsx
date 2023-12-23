import React from "react";
import StatusImage from "./FilterImageComponents/StatusImage.jsx";
import PriorityImage from "./FilterImageComponents/PriorityImage.jsx";
import GlobalStateStore from "../../store/GlobalStateStore.jsx";
import UserIcon from "./FilterImageComponents/UserIcon.jsx";

function Card({data, TitileIcon, setIconData, group, IconData}) {
    React.useEffect(() => {
        setIconData(data);
    }, [data, setIconData]);
    return (
        <div className="p-4 flex gap-1 flex-col dark:bg-gray-900 shadow-md border dark:border-gray-700 rounded-md">
            <div className="flex justify-between items-center">
                <p className="dark:text-gray-400">{data.id}</p>

                <div className=" h-4 w-4 rounded-full relative flex items-center justify-center bg-yellow-300">
                    <p className=" text-white text-[10px]">Y</p>
                    <div className="w-1.5 h-1.5 bg-gray-700 rounded-full absolute top-3 right-0"></div>
                </div>
            </div>

            <div className="flex gap-2">
                {
                    group === "priority" && (
                        <StatusImage data={data} />
                        )
                    }
                {
                    group === "status" && (
                        <PriorityImage id={data.priority} />
                    )
                }
                <p className=" text-sm dark:text-gray-100">
                    {data.title}
                </p>
            </div>

            <div className="px-1 py-1.5 rounded-sm max-w-max flex gap-1 items-center shadow-sm border border-gray-700">
                <div className=" h-3 w-3 rounded-full bg-gray-700 flex"></div>
                <p className=" text-xs dark:text-gray-400">{data.tag[0]}</p>
            </div>
        </div>
    );
}

export default Card;
