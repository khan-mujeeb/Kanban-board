import React from "react";
import GlobalStateStore from "../../store/GlobalStateStore";
function DropDownItem({toggleDropdown}) {
    const [selectedOption, setSelectedOption] = React.useState('priority');

    const onDropDownOrderSelect = (value) => {
        toggleDropdown()
        setSelectedOption(value);
        GlobalStateStore.setState({ ordering: value });
    };
    const onDropDownGroupSelect = (value) => {
        setSelectedOption(value);
        toggleDropdown();
        GlobalStateStore.setState({ grouping: value });
    };
    return (
        <>
            <section className="flex flex-col gap-2  ">
                <div className="flex items-center justify-between text-base ">
                    <span className="text-gray-500">Grouping</span>
                    <select 
                    onChange={(e) => onDropDownGroupSelect(e.target.value)}
                    className="py-1 w-28 rounded-md border border-gray-300 focus:border-transparent focus:outline-none">
                        <option value="status">status</option>
                        <option value="users">user</option>
                        <option value="priority">Priority</option>
                    </select>
                </div>
                <div className="flex items-center justify-between  text-base ">
                    <span className="text-gray-500">Ordering</span>
                    <select
                    className="py-1 w-28 rounded-md border border-gray-300 focus:border-transparent focus:outline-none"
                        value={selectedOption}
                        onChange={(e) => onDropDownOrderSelect(e.target.value)}
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
