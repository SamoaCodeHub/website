import { goto } from '$app/navigation';

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
	setTimeout(() => {
		document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
	}, 100);
}
