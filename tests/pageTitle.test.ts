import { NAVIGATION_ITEMS } from '../src/lib/constants/navigation';
import { expect, test } from '@playwright/test';

test('page title of valid routes', async ({ page }) => {
	await Promise.allSettled(
		NAVIGATION_ITEMS.map(async (item) => {
			await page.goto(item.path);
			expect(await page.textContent('title')).toBe(`${item.title} - Danyal Lakzian`);
		})
	);
});

test('page title of invalid route', async ({ page }) => {
	await page.goto('/not-found-page');
	expect(await page.textContent('title')).toBe('Danyal Lakzian');
});
