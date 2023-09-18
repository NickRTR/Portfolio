import { get, writable } from "svelte/store";
import { browser } from "$app/environment";

export const theme = writable((browser && localStorage.getItem("theme")) || "light");
theme.subscribe((val) => browser && (localStorage.theme = val));

export function toggleTheme() {
	if (get(theme) === "light") {
		theme.set("dark");
	} else {
		theme.set("light");
	}
}
