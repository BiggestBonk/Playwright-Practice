import { test, expect } from '@playwright/test'

const testParameters = ['cooking', 'troubleshooting', 'dogs skateboarding']

for (const searchQuery of testParameters) {
  test(`Parameterising Youtube ${searchQuery}`, async ({ page }) => {
    //Go To URL
    await page.goto('https://youtube.com')
    //Search with keywords
    await page.getByPlaceholder('Search').click()
    await page.getByPlaceholder('Search').fill(searchQuery)
    await page.getByPlaceholder('Search').press('Enter')
    //Wait for page load
    await page.waitForTimeout(5000)
  })
}
