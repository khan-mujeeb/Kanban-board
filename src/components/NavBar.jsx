import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import FliterBox from "./FliterBox.jsx";

// Inside your NavBar component
const NavBar = () => {
    const [darkMode, setDarkMode] = React.useState(true);

    React.useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <div className="bg-white dark:bg-darkNavBar p-4 flex justify-between items-center">
            {/* filter box */}
            <FliterBox />

            {/* theme toggle btn */}
            <div>
                {darkMode ? (
                    <FaSun
                        onClick={() => setDarkMode(!darkMode)}
                        className="text-white h-4 w-4 cursor-pointer"
                    />
                ) : (
                    <FaMoon
                        onClick={() => setDarkMode(!darkMode)}
                        className=" h-4 w-4 cursor-pointer"
                    />
                )}
            </div>
        </div>
    );
};

export default NavBar;
