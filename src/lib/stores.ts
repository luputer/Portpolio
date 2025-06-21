import { writable } from 'svelte/store';

export const darkMode = writable(false);
export const activeSection = writable('home');
export const isMenuOpen = writable(false);