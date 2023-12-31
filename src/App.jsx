import React from "react";
import NavBar from "./components/navbar/NavBar.jsx";
import Content from "./components/cards/Content.jsx";
import callApi from "./utils/api.jsx";
function App() {

    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        callApi("ticketAndUsers").then((data) => {
            setData(data);
        });
    }, []);

    return (
        <div className="flex flex-col h-screen">
            <NavBar />
            <Content className=" " data={data.tickets} users={data.users}/>
        </div>
    );
}

export default App;
