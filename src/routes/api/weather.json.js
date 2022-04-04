import { API_KEY } from "$lib/api";

export async function get() {
    let result;
    try {
        result = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Stuttgart`);
    } catch (error) {
        return error;
    }
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