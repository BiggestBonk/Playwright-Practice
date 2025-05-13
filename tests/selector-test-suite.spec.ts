import { test, expect } from '@playwright/test'

test.describe('Locator Tests', () => {
  test('Testing Selectors', async ({ page }) => {
    await page.goto('https://demoqa.com/text-box')
    await page.locator('#userName').fill('Test Username')
    await page
      .locator('[placeholder="name@example.com"]')
      .fill('Test@email.com')
    await page.locator('#currentAddress').fill('123 Test Street')
    await page.locator('#permanentAddress').fill('456 Test Road')
    await page.getByRole('button', { name: 'Submit' }).click()
    await expect(page.locator('#name')).toContainText('Test Username')
    await expect(page.getByText('Email:')).toContainText('Test@email.com')
    await expect(page.getByText('Current Address :')).toContainText(
      '123 Test Street'
    )
    await expect(page.getByText('Permananet Address :')).toContainText(
      '456 Test Road'
    )
  })
})
