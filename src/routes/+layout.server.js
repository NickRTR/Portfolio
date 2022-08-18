import { error } from "@sveltejs/kit";
import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.API_KEY;

export async function load() {
	let result;
	try {
		result = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Stuttgart`);
	} catch (err) {
		throw error(500, err);
	}

	if (result.ok) {
		let data = await result.json();
		return {
			weather: data
		};
	} else {
		throw error(500, "Not able to fetch Weather data.");
	}
}
