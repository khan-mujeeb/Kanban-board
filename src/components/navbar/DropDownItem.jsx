import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import FliterBox from "./FliterBox.jsx";
function DropDownItem({name}) {
    return (
        <div className="flex justify-between">

            <p>{name}</p>
        </div>
    );
}

export default DropDownItem;
