const App = (props) => {
    const style = {
        "borderRadius": "9px",
        "width": "100px",
        "height": "30px",
        "backgroundColor": "#415D65",
        "color": "white",
        "textAlign": "center"
    }

    return (<button style={style} onClick={props.onClick}>{props.name}</button>);
}

export default App;