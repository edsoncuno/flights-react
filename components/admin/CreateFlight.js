import { useState } from "react"
import { addFlight } from "../../api/flights";

const App = (props) => {
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");
    const [flightNumber, setFlightNumber] = useState(0);
    const [depart, setDepart] = useState("");
    const [arrive, setArrive] = useState("");
    const [nonstop, setNonstop] = useState(false);

    const clear = () => {
        setOrigin("");
        setDestination("");
        setFlightNumber(0);
    };

    const create = async () => {
        let data = {
            origin: origin,
            destination: destination,
            flightNumber: flightNumber,
            depart: depart,
            arrive: arrive,
            nonstop: nonstop
        }
        if (depart == "") { return }
        if (arrive == "") { return }
        await addFlight(data);
        props.refresh();
        clear();
    }

    const style = {
        "fontSize": "1.1em",
        "fontFamily": "Arial, Helvetica, sans-serif",
        "margin": "10px",
        "backgroundColor": "white",
        "border": "1px solid grey",
        "boxShadow": "2px 2px 2px",
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "left",
        "justifyContent": "flexStart",
        "width": "90%",
        "padding": "5px",
        "borderRadius": "5px"
    }

    const styleInput = {
        "width": "200px",
        "border": "1px solid grey"
    }

    const styleSpan = {
        "fontSize": "0.9em",
        "marginTop": "10px"
    }

    return (<div style={style}>
        <h1>Add a Flight</h1>
        <input style={styleInput} placeholder="origin" onChange={(e) => { setOrigin(e.target.value) }} value={origin} />
        <input style={styleInput} placeholder="destination" onChange={(e) => { setDestination(e.target.value) }} value={destination} />
        <input style={styleInput} type="number" placeholder="flight number" onChange={(e) => { setFlightNumber(e.target.value) }} value={flightNumber} />
        <span style={styleSpan}>depart:</span>
        <input style={styleInput} type="date" onChange={(e) => { setDepart(e.target.value) }} />
        <span style={styleSpan}>arrive:</span>
        <input style={styleInput} type="date" onChange={(e) => { setArrive(e.target.value) }} />
        <div style={{ "display": "flex", "flexDirection": "row" }}>
            <div>nonstop:</div>
            <div><input style={styleInput} type="checkbox" checked={nonstop} onChange={() => { setNonstop(!nonstop) }} /></div>
        </div>
        <button style={{ "backgroundColor": "green" }} onClick={create}>create flight</button>
    </div>);
}

export default App;