import Header from "./Header"

const App = (props) => {
    return (
        <>
            <Header />
            <main>
                {props.children}
            </main>
        </>
    );
}

export default App;