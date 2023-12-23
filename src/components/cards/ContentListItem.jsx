import React from "react";
import CardHeader from "./CardHeader.jsx";
import Card from "./Card.jsx";
import GlobalStateStore from "../../store/GlobalStateStore.jsx";
import StatusImage from "./FilterImageComponents/StatusImage.jsx";


const ContentListItem = ({ data, title, id }) => {
    const temp = data;
    const [filteredData, setFilteredData] = React.useState(temp);
    const group = GlobalStateStore((state) => state.grouping);
    const order = GlobalStateStore((state) => state.ordering);
    const [updatedData, setUpdatedData] = React.useState(temp);

    React.useEffect(() => {


        if (group === "priority") {
            setFilteredData(temp?.filter((item) => item.priority === id));
        } else if (group === "status") {
            setFilteredData(temp?.filter((item) => item.status === title));
        } else if (group === "users"){
            setFilteredData(temp?.filter((item) => item.userId === id));
        }

        if (order == "priority") {
            filteredData?.sort((a, b) => a.priority - b.priority);
            setUpdatedData(filteredData);
        } else if (order === "title") {
            filteredData?.sort((a, b) => a.title.localeCompare(b.title));
            setUpdatedData(filteredData);
        } else {
            setUpdatedData(filteredData);
        }
    }, [group, order, temp, title, filteredData, updatedData]);

    return (
        <div className="flex flex-col gap-6">
            {/* category title */}

            <div className="flex flex-col gap-2">
            <CardHeader id={id} title={title} count={filteredData?.length } data={data}/>
                {/* card */}
                {updatedData?.map((item, index) => (
                    <Card data={item} key={index} TitileIcon={StatusImage}/>
                ))}
            </div>
        </div>
    );
};

export default ContentListItem;
