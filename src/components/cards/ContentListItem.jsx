
import CardHeader from "./CardHeader.jsx";
import Card from "./Card.jsx";


const ContentListItem = ({ data, title, id }) => {

    const temp = data;
    const filteredData = temp?.filter((item) => item.priority == id);

    return (
        <div className="flex flex-col gap-6">
            {/* category title */}
            <CardHeader id={id} title={title} count={filteredData?.length}/>

            {/* card */}
            {filteredData?.map((item, index) => (
                <Card data={item} key={index} />
            ))}
        </div>
    );
};

export default ContentListItem;
