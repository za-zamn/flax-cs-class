// @ts-check
import { defineConfig } from '@playwright/test';

export default defineConfig({
  webServer: {
    command: 'PORT=9000 npm run start',
    url: 'http://localhost:9000',
    timeout: 120 * 1000,
    reuseExistingServer: false,
  },
  use: {
    baseURL: 'http://localhost:9000',
  },
});
