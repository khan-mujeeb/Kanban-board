import React from "react";

import priorityList from "../../data/priority.js";
import ContentListItem from "./ContentListItem.jsx";
const Content = ({ data }) => {
    return (
        <div className="bg-lightBackground dark:bg-darkBackground p-6 h-screen overflow-y-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {priorityList.map((item, index) => (
                    <ContentListItem
                        data={data}
                        title={item}
                        key={index}
                        id={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default Content;
