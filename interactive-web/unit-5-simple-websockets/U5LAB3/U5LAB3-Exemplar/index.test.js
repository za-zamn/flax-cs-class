/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import { test, expect } from '@playwright/test';
import tick from './tick.js';

test.beforeEach(async ({ context }) => {
  await context.addInitScript({
    path: './node_modules/sinon/pkg/sinon.js',
  });
  await context.addInitScript(() => {
    window.__clock = sinon.useFakeTimers();
  });
});

test('Page loads', async ({ page }) => {
  await page.goto('/');

  const heading = page.getByRole('heading', { name: 'Mesg' });

  await expect(heading).toHaveText('Mesg');
});

test('Ashley chat loads', async ({ page }) => {
  await page.goto('/');

  await tick(24, page);

  const items = page
    .getByRole('log', {
      name: 'Chat',
    }).getByRole('listitem');

  await expect(items).toHaveCount(12);
});

test('Bo chat loads', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('button', { name: 'Bo' }).click();

  await tick(24, page);

  const items = page
    .getByRole('log', {
      name: 'Chat',
    }).getByRole('listitem');

  await expect(items).toHaveCount(15);
});

test('Caitlin chat loads', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('button', { name: 'Caitlin' }).click();

  await tick(24, page);

  const items = page
    .getByRole('log', {
      name: 'Chat',
    }).getByRole('listitem');

  await expect(items).toHaveCount(17);
});
