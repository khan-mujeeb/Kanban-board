import React from "react";
import CardHeader from "./CardHeader.jsx";
import Card from "./Card.jsx";
import GlobalStateStore from "../../store/GlobalStateStore.jsx";

const ContentListItem = ({ data, title, id }) => {
    const [updatedData, setUpdatedData] = React.useState([]);
    const temp = data;
    var filteredData = temp?.filter((item) => item.priority == id);
    const order = GlobalStateStore((state) => state.ordering);

    React.useEffect(()=> {
        console.log(order);
        if(order === "priority") {
            filteredData?.sort((a,b) => a.priority - b.priority);
            setUpdatedData(filteredData);
        } else if(order === "title") {
            filteredData?.sort((a,b) => a.title.localeCompare(b.title));
            console.log(filteredData);
            setUpdatedData(filteredData);
        } else {
            setUpdatedData(filteredData);
        }
    }, [order])

    return (
        <div className="flex flex-col gap-6">
            {/* category title */}
            <CardHeader id={id} title={title} count={filteredData?.length}/>

            {/* card */}
            {updatedData?.map((item, index) => (
                <Card data={item} key={index} />
            ))}
        </div>
    );
};

export default ContentListItem;
