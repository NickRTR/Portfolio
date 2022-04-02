import { API_KEY } from "$lib/api";

export async function get() {
    const result = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=Stuttgart`);
    let data = await result.json();

    if (result.ok) {
        return {
            status: 200,
            body: data
        }
    } else {
        return {
            status: 404,
        }
    }
}