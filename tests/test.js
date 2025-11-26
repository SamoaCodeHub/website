import { expect, test } from '@playwright/test';

// HERO SECTION (h1)
test('Hero section has expected heading', async ({ page }) => {
	await page.goto('/');
	await expect(
		page.getByRole('heading', {
			name: 'The developer network built for progress.',
			level: 1
		})
	).toBeVisible();
});

// PROJECTS NAVIGATION (h2 on the projects page)
test('Clicking "Projects" button navigates to projects page and displays Featured Projects heading', async ({
	page
}) => {
	await page.goto('/');
	await page.click('text=Projects');
	await expect(page.getByRole('heading', { name: 'Featured Projects', level: 2 })).toBeVisible();
});

// CONTACT SECTION (h2)
test('Contact section has expected heading', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Contact Us', level: 2 })).toBeVisible();
});

// CONTRIBUTORS PAGE (now at /contributors, h2)
test('Contributors page has expected heading', async ({ page }) => {
	await page.goto('/contributors');
	await expect(page.getByRole('heading', { name: 'Meet our Seki Devs', level: 2 })).toBeVisible();
});
