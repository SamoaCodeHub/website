import { goto, afterNavigate } from '$app/navigation';
import { tick } from 'svelte';

export async function goToSection(section) {
	if (section === 'Contributors') {
		await goto('/contributors');
		return;
	}

	if (window.location.pathname === '/') {
		document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
		return;
	}

	await goto('/');
	await tick();
	requestAnimationFrame(() => {
		document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
	});
}
