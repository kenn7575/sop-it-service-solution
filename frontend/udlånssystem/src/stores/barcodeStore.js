import { writable } from "svelte/store";
export const barcodeStore = writable("");
export const barcodeBuilder = writable("");
export const barcodeBuilderTimeOut = writable(0);
export const controlStore = writable(false);
