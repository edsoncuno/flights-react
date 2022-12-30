import { useState } from "react";
import { removeFlight } from "../../api/flights";
import { updateFlight } from "../../api/flights"

const App = (props) => {
    const [id, setId] = useState(props.element.id);
    const [origin, setOrigin] = useState(props.element.origin);
    const [destination, setDestination] = useState(props.element.destination);
    const [flightNumber, setFlightNumber] = useState(props.element.flightNumber);
    const [depart, setNumber] = useState(props.element.depart);
    const [arrive, setArrive] = useState(props.element.arrive);
    const [nonstop, setNonstop] = useState(props.element.nonstop);

    const convertDate = (date) => {
        const newDate = new Date(date);
        let year = newDate.getFullYear();
        let monthAux = newDate.getMonth() + 1;
        let month = (monthAux < 10) ? "0" + String(monthAux) : String(monthAux);
        let dayAux = newDate.getDate();
        let day = (dayAux < 10) ? "0" + String(dayAux) : String(dayAux);
        return `${day}/${month}/${year}`;
    }

    const remove = () => {
        if (window.confirm('are you sure you want to delete this flight? ')) {
            removeFlight(id).then(() => {
                props.refresh();
            });
        }
    }

    const update = () => {
        let data = {
            id: id,
            origin: origin,
            destination: destination,
            flightNumber: flightNumber,
            depart: depart,
            arrive: arrive,
            nonstop: nonstop
        }
        updateFlight(data.id, data).then(() => {
            props.refresh();
        });
    }

    return (<tr>
        <td><input value={origin} onChange={(e) => { setOrigin(e.target.value) }} /></td>
        <td><input value={destination} onChange={(e) => { setDestination(e.target.value) }} /></td>
        <td><input value={flightNumber} onChange={(e) => { setFlightNumber(e.target.value) }} /></td>
        <td>{convertDate(depart)}</td>
        <td>{convertDate(arrive)}</td>
        <td>{String(nonstop)}</td>
        <td><button onClick={update} style={{ "backgroundColor": "yellow" }}>go</button></td>
        <td><button onClick={remove} style={{ "backgroundColor": "red" }}>go</button></td>
    </tr>);
}

export default App;