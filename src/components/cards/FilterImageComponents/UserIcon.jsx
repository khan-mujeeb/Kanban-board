import React from "react";
import GlobalStateStore from "../../../store/GlobalStateStore";
function UserIcon({data}) {
    return (
        <div className=" h-4 w-4 rounded-full relative flex items-center justify-center bg-yellow-300">
            <p className=" text-black font-semibold text-[10px]">{data.name[0]}</p>
            <div className={`w-1.5 h-1.5 rounded-full absolute top-3 right-0 ${data.available?`bg-green-700`:`bg-red-700`}`}></div>
        </div>
    );
}

export default UserIcon;
