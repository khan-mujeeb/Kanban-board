import React from "react";

import priorityList from "../data/priority";
import ContentListItem from "./cards/ContentListItem.jsx";
const Content = ({data}) => {
    return (
        <div className="bg-white dark:bg-darkBackground p-6 h-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {
                priorityList.map((item, index) => (
                    <ContentListItem data={data} title={item} key={index} id={index}/>
                ))}
            </div>
        </div>
    );
};

export default Content;
