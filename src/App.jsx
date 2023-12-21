import React from "react";
import NavBar from "./components/NavBar.jsx";
import Content from "./components/Content.jsx";
import callApi from "./utils/api.jsx";
function App() {

    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        callApi("ticketAndUsers").then((data) => {
            setData(data);
        });
    }, []);

    return (
        <div className="h-full">
            <NavBar />
            <Content data={data.tickets}/>
        </div>
    );
}

export default App;
