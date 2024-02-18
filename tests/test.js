import { expect, test } from '@playwright/test';

test('Hero section has expected p', async ({ page }) => {
	await page.goto('/');
	await expect(
		page.getByText(
			'Press Join us Now to find out more about becoming a Samoa Stack Overflow Member'
		)
	).toBeVisible();
});

test('Media section has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByText('Samoa Stack Overflow Meet Ups')).toBeVisible();
});

test('Contact section has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Contact Us' })).toBeVisible();
});

test('Contributors section has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByText('Meet our Seki Devs')).toBeVisible();
});
