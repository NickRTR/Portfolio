import { writable } from "svelte/store";

// using a store to show the loader only on first load
export const showLoader = writable(true);