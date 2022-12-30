import ButtonLink from "./ButtonLink";
import { useRouter } from 'next/router';

const App = () => {

    const style = {
        "height": "80px",
        "margin": "18px 10px",
        "alignSelf": "flex-end",
        "display": "flex",
        "flexDirection": "row",
        "alignItems": "center",
        "justifyContent": "center"
    }

    const router = useRouter();

    const toFlights = () => {
        router.push("/home");
    }

    const toAdmin = () => {
        router.push("/admin");
    }

    return (
        <div style={style}>
            <ButtonLink name="Flights" onClick={toFlights} />
            <ButtonLink name="Admin" onClick={toAdmin} />
        </div>
    );
}

export default App;