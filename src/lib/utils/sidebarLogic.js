import { writable } from 'svelte/store';

export const toggleSidebar = writable(false);

export function closeSidebar() {
	toggleSidebar.set(false);
}

export function toggleSidebarState() {
	toggleSidebar.update((v) => !v);
}
