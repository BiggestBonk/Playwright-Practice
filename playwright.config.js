const config = {
  retries: 0,
  timeout: 20000,
  use: {
    baseURL: 'https://the-internet.herokuapp.com',
    headless: false,
    viewport: { width: 1200, height: 720 },
    screenshot: 'only-on-failure',
    video: 'off',
  },
  projects: [
    {
      name: 'Chrome',
      use: { browserName: 'chromium' },
    },
    {
      name: 'Firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'Webkit',
      use: { browserName: 'webkit' },
    },
  ],
}

export default config
