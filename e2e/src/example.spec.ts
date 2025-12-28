import { expect, test } from '@playwright/test';

test('can load', { tag: ['@smoke'] }, async ({ page }) => {
    await page.goto('/');

    const element = page.getByText('AdminClient');

    await expect(page).toHaveTitle('D&D Mapp: Admin client');
    await expect(element.innerText()).resolves.toEqual('AdminClientApp works!');
});
