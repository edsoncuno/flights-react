import Pane from "./Pane";

const App = (props) => {
    const style = {
        "background": "linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5))",
        "height": "auto",
        "minHeight": "400px",
        "width": "100%",
    }
    return (<div style={style}>
        <Pane list={props.list} setList={props.setList} setLoading={props.setLoading} />
    </div>);
}

export default App;