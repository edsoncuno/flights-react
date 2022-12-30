import { useState } from "react";
import { useEffect } from "react";

import { getOrigins } from "../../api/flights";
import { getDestinations } from "../../api/flights";

import { getQuery } from "../../api/flights";

const App = (props) => {
    const [origins, setOrigins] = useState([]);
    const [destionations, setDestinations] = useState([]);
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");

    useEffect(() => {
        getOrigins().then(data => setOrigins(data));
        getDestinations().then(data => setDestinations(data));
    }, []);

    const getOptionsOrigins = () => {
        return origins.map((element) => {
            return <option value={element.origin} key={"origin" + element.origin}>{element.origin}</option>;
        });
    }

    const getOptionsDestinations = () => {
        return destionations.map((element) => {
            return <option value={element.destination} key={"destination" + element.destination}>{element.destination}</option>;
        });
    }

    const handleOrigin = (e) => {
        setOrigin(e.target.value);
    }

    const handleDestination = (e) => {
        setDestination(e.target.value);
    }

    const style = {
        "marginTop": "20px",
        "width": "80%",
        "height": "80%",
        "display": "flex",
        "flexdirection": "row"
    }

    const styleSearchBox = {
        "display": "flex",
        "flexDirection": "column",
        "marginRight": "10px",
        "position": "relative"
    }

    const styleSelect = {
        "position": "relative",
        "right": "20px",
        "backgroundColor": "white",
        "boxShadow": "2px 2px 2px grey",
        "width": "auto",
        "height": "25px",
        "fontSize": "20px"
    }

    const styleButton = {
        "backgroundColor": "#415D65",
        "borderRadius": "5px",
        "width": "auto",
        "fontSize": "20px",
        "color": "white"
    }

    const search = async () => {
        if (origin == "" || destination == "") {
            return;
        }
        props.setLoading(true);
        getQuery(origin, destination).then((data) => {
            props.setList(data);
            props.setLoading(false);
        });
    }

    return (<div style={style}>
        <div style={styleSearchBox}>
            <select style={styleSelect} defaultValue={""} onChange={handleOrigin}>
                <option value={""} disabled>from</option>
                {getOptionsOrigins()}
            </select>
        </div>
        <div style={styleSearchBox}>
            <select style={styleSelect} defaultValue={""} onChange={handleDestination}>
                <option value={""} disabled>to</option>
                {getOptionsDestinations()}
            </select>
        </div>
        <button style={styleButton} onClick={search}>Go</button>
    </div>);
}

export default App;