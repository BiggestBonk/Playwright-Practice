import { test, expect } from '@playwright/test'

test.describe.parallel('Smoke Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })
  test('Checkbox Test ', async ({ page, browserName }) => {
    await page.goto('/checkboxes')
    const title = page.getByRole('heading', { name: 'Checkboxes' })
    await expect(title).toBeVisible()
    const checkbox = page.getByRole('checkbox').first()
    checkbox.check()
    await expect(checkbox).toBeChecked()
  })

  test('Add Element Test', async ({ page, browserName }) => {
    await page.locator('text=Add/Remove Elements').click()
    const addElement = page.locator('text=Add Element')
    await addElement.click()
  })

  test('Delete Element Test', async ({ page, browserName }) => {
    await page.locator('text=Add/Remove Elements').click()
    const addElement = page.locator('text=Add Element')
    await addElement.click()
    await page.click('text=Delete')
  })
})
