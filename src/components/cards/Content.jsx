import React from "react";

import priorityList from "../../data/priority.js";
import GlobalStateStore from "../../store/GlobalStateStore.jsx";
import ContentListItem from "./ContentListItem.jsx";
import status from "../../data/status.js";

const Content = ({ data, users}) => {
    const group = GlobalStateStore((state) => state.grouping);
    const [usersList, setUsers] = React.useState([]);
    React.useEffect(() => {
        setUsers(users);
    }, [group]);

    return (
        <div className="bg-lightBackground dark:bg-darkBackground p-6 h-screen">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {
                    group == "priority" && (
                        priorityList.map((item, index) => (
                            <ContentListItem
                                data={data}
                                title={item}
                                key={index}
                                id={index}
                            />
                        ))
                    )
                }
                {
                    group == "status" && (
                        status.map((item, index) => (
                            <ContentListItem
                                data={data}
                                title={item}
                                key={index}
                                id={index}
                            />
                        ))
                    )
                }
                {
                    group == "users" && (
                        usersList?.map((item, index) => (
                            <ContentListItem
                                data={data}
                                title={item.name}
                                key={index}
                                id={item.id}
                            />
                        ))
                    )
                }
            </div>
        </div>
    );
};

export default Content;
