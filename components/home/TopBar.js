const App = (props) => {
    const style = {
        "backgroundColor": "white",
        "height": "40px",
        "width": "100%",
        "display": "flex",
        "justifyContent": "flex-start",
        "alignItems": "center"
    }

    return (<div style={style}>
        <div style={{ "marginLeft": "20px" }}>
            Find Flights
            {props.loading && <div style={{ "fontSize": "0.8em", "color": "red" }}>LOADING FLIGHTS, PLEASE WAIT ! </div>}
        </div>
    </div>);
}

export default App;