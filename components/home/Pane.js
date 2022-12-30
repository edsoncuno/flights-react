import SearchPane from "./SearchPane";
import FlightPane from "./FlightPane";

const App = (props) => {
    const style = {
        "width": "100%",
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "justifyContent": "center"
    }
    return (<div style={style}>
        <SearchPane setList={props.setList} setLoading={props.setLoading} />
        <FlightPane list={props.list} />
    </div>);
}

export default App;