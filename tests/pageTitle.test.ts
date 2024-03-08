import { expect, test } from '@playwright/test';

test('home page title', async ({ page }) => {
	await page.goto('/');

	const title = await page.textContent('title');
	expect(title).toEqual(`Home - Danyal Lakzian`);
});

test('my playlist page title', async ({ page }) => {
	await page.goto('/my-playlist');

	const title = await page.textContent('title');
	expect(title).toEqual(`My Playlist - Danyal Lakzian`);
});

test('page title of invalid route', async ({ page }) => {
	await page.goto('/not-found-page');
	expect(await page.textContent('title')).toBe('Danyal Lakzian');
});
