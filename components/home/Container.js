import TopBar from "./TopBar";
import TransparentBg from "./TransparentBg";

import { useState } from "react";
import { useEffect } from "react";
import { getFlights } from "../../api/flights";

const App = () => {
    const [loading, setLoading] = useState(true);
    const [list, setList] = useState([]);

    useEffect(() => {
        getFlights().then(data => setList(data));
        setLoading(false);
    }, []);

    const style = {
        "width": "90%",
        "marginTop": "40px",
        "display": "flex",
        "flexDirection": "column"
    }

    return (<div style={style}>
        <TopBar loading={loading} />
        <TransparentBg list={list} setList={setList} setLoading={setLoading} />
    </div>);
}

export default App;