import Container from "./../components/home/Container";

const App = () => {
    const style = {
        "width": "100vw",
        "height": "90vh",
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "top"
    }

    return (<div style={style}><Container /></div>);
}

export default App;