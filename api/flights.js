const route = '/flights';
const url = "http://localhost:3000";

export const getFlights = async () => {
    const res = await fetch(url + route);
    const data = await res.json();
    return data;
}

export const getOrigins = async () => {
    const res = await fetch(url + route + "/cities/origins");
    const data = await res.json();
    return data;
}

export const getDestinations = async () => {
    const res = await fetch(url + route + "/cities/destinations");
    const data = await res.json();
    return data;
}

export const getQuery = async (origin, destination) => {
    const res = await fetch(`${url}${route}/query/${origin}/${destination}`);
    const data = await res.json();
    return data;
}

export const addFlight = async (json) => {
    const res = await fetch(url + route, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(json)
    });
    const data = await res.json();
    return data;
}

export const removeFlight = async (id) => {
    const res = await fetch(`${url}${route}/${id}`, { method: "DELETE" });
    const data = await res.json();
    return data;
}

export const updateFlight = async (id, json) => {
    const res = await fetch(`${url}${route}/${id}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(json)
    });
    const data = await res.json();
    return data;
}