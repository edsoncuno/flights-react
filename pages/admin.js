import CreateFlight from "./../components/admin/CreateFlight"
import EditPane from "../components/admin/EditPane";

import { useState } from "react";
import { useEffect } from "react";

import { getFlights } from "../api/flights";

const App = () => {
    const [loading, setLoading] = useState(true);
    const [list, setList] = useState([]);

    const refresh = async () => {
        setLoading(true);
        getFlights().then((data) => {
            setList(data);
            setLoading(false);
        });
    }

    useEffect(() => {
        getFlights().then((data) => {
            setList(data);
            setLoading(false);
        });
    }, [list, loading]);

    return (<>
        <CreateFlight refresh={refresh} />
        <EditPane loading={loading} list={list} refresh={refresh} />
    </>);
}

export default App;