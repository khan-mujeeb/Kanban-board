import React from "react";
import GlobalStateStore from "../../store/GlobalStateStore";
function DropDownItem() {
    const [selectedOption, setSelectedOption] = React.useState('priority');

    const onDropDownSelect = (value) => {
        setSelectedOption(value);
        GlobalStateStore.setState({ ordering: value });
    };
    return (
        <>
            <section className="flex flex-col gap-2  ">
                <div className="flex items-center justify-between text-base ">
                    <span className="text-gray-400">Grouping</span>
                    <select className="p-1.5 pr-8 rounded-md border border-gray-300">
                        <option value="status">status</option>
                        <option value="user">user</option>
                        <option value="priority">Priority</option>
                    </select>
                </div>
                <div className="flex items-center justify-between  text-base ">
                    <span className="text-gray-400">Ordering</span>
                    <select
                        value={selectedOption}
                        onChange={(e) => onDropDownSelect(e.target.value)}
                    >
                        <option value="priority">Priority</option>
                        <option value="title">Title</option>
                    </select>
                </div>
            </section>
        </>
    );
}

export default DropDownItem;
