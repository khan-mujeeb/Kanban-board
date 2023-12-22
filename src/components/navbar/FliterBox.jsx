import React from "react";
import DropDownItem from "./DropDownItem";

function FliterBox() {
    const [dropdownOpen, setDropdownOpen] = React.useState(false);
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div>
            <button
                id="dropdownDefaultButton"
                onClick={toggleDropdown}
                className="text-black dark:text-gray-300 flex gap-2 items-center transition-all duration-100 rounded-md py-1 px-1.5 border-2  cursor-pointer shadow-md  dark:border-gray-700"
                type="button"
            >
                <div className="switch-icon">
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 16 16"
                        className="icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3.5 2h-1v5h1V2zm6.1 5H6.4L6 6.45v-1L6.4 5h3.2l.4.5v1l-.4.5zm-5 3H1.4L1 9.5v-1l.4-.5h3.2l.4.5v1l-.4.5zm3.9-8h-1v2h1V2zm-1 6h1v6h-1V8zm-4 3h-1v3h1v-3zm7.9 0h3.19l.4-.5v-.95l-.4-.5H11.4l-.4.5v.95l.4.5zm2.1-9h-1v6h1V2zm-1 10h1v2h-1v-2z"
                        ></path>
                    </svg>
                </div>
                <p>Display</p>
                <svg
                    className={`w-2.5 h-2.5 ms-3 transform ${
                        dropdownOpen ? "rotate-180 " : ""
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                    />
                </svg>
            </button>

            <div
                id="dropdown"
                className={`z-50 absolute top-16 w-80 p-5   ${
                    dropdownOpen ? "block" : "hidden"
                } bg-white divide-y divide-gray-100 rounded-md shadow w-44 dark:bg-gray-700`}
            >
                <DropDownItem  />

            </div>
        </div>
    );
}

export default FliterBox;
