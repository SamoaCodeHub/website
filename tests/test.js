import { expect, test } from '@playwright/test';

test('Hero section has expected p', async ({ page }) => {
	await page.goto('/');
	await expect(
		page.getByText('Press Join us Now to find out more about becoming a Samoa Code Hub Member')
	).toBeVisible();
});

test('Clicking "Projects" button navigates to projects page and displays Featured Projects h1', async ({
	page
}) => {
	await page.goto('/');
	await page.click('text=Projects');
	await expect(page.locator('h1:has-text("Featured Projects")')).toBeVisible();
});

test('Media section has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByText('Samoa Code Hub Meet Ups')).toBeVisible();
});

test('Contact section has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Contact Us' })).toBeVisible();
});

test('Contributors section has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByText('Meet our Seki Devs')).toBeVisible();
});
