const App = (props) => {
    const style = {
        "marginTop": "10px",
        "backgroundColor": "white",
        "width": "80%",
        "height": "80%",
        "padding": "20px"
    }

    const styleheaders = {
        "display": "flex",
        "flexDirection": "row",
        "borderBottom": "1px solid #ccc",
        "width": "100%"
    }

    const styleCell = {
        "flex": "1"
    }

    const styleResult = {
        "display": "flex",
        "flexDirection": "row"
    }

    const convertDate = (date) => {
        const newDate = new Date(date);
        let year = newDate.getFullYear();
        let monthAux = newDate.getMonth() + 1;
        let month = (monthAux < 10) ? "0" + String(monthAux) : String(monthAux);
        let dayAux = newDate.getDate();
        let day = (dayAux < 10) ? "0" + String(dayAux) : String(dayAux);
        return `${day}/${month}/${year}`;
    }

    const getResult = () => {
        return props.list.map((element) => {
            return <div style={styleResult} key={"result" + element.id}>
                <div style={styleCell} key={"cellFlightNumber" + element.id}>{element.flightNumber}</div>
                <div style={styleCell} key={"cellDepart" + element.id}>{convertDate(element.depart)}</div>
                <div style={styleCell} key={"cellArrive" + element.id}>{convertDate(element.arrive)}</div>
                <div style={styleCell} key={"cellNonStop" + element.id}>{String(element.nonstop)}</div>
            </div>;
        });
    }

    return (<div style={style}>
        <div style={styleheaders}>
            <div style={styleCell}> Flight # </div>
            <div style={styleCell}> Departs </div>
            <div style={styleCell}> Arrives </div>
            <div style={styleCell}> Nonstop </div>
        </div>
        {props.list.length == 0 ? <div>-- no flights found --</div> : getResult()}
    </div>);
}

export default App;