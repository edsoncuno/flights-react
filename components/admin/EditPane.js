import RowEdit from "./RowEdit";

const App = (props) => {

    const getResult = () => {
        return props.list.map((element) => {
            return <RowEdit element={element} key={"re" + String(element.id)} refresh={props.refresh} />
        });
    }

    const style = {
        "fontFamily": "Arial, Helvetica, sans-serif",
        "margin": "10px",
        "backgroundColor": "#ddd",
        "border": "1px solid grey",
        "boxShadow": "2px 2px 2px",
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "left",
        "justifyContent": "flex-start",
        "width": "90%",
        "padding": "5px",
        "borderRadius": "5px"
    }

    const styleLoading = {
        "fontFamily": "Arial, Helvetica, sans-serif",
        "margin": "10px",
        "backgroundColor": "#ddd",
        "border": "1px solid grey",
        "boxShadow": "2px 2px 2px",
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "left",
        "justifyContent": "flex-start",
        "width": "90%",
        "padding": "5px",
        "borderRadius": "5px",
        "backgroundColor": "white",
        "color": "red"
    }

    return (<>
        {props.loading ? <div style={styleLoading}>LOADING FLIGHTS, PLEASE WAIT</div> : <div style={style}>
            <table>
                <thead>
                    <tr>
                        <th>origin</th>
                        <th>destination</th>
                        <th>flight #</th>
                        <th>depart</th>
                        <th>arrive</th>
                        <th>nonstop</th>
                        <th>update</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {getResult()}
                </tbody>
            </table>
        </div>}
    </>);
}

export default App;