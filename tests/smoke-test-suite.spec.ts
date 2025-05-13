import { test, expect } from '@playwright/test'

test.describe.parallel('Smoke Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('User Can Add and Delete Elements', async ({ page, browserName }) => {
    await page.locator('text=Add/Remove Elements').click()
    const addElement = page.locator('text=Add Element')
    await addElement.click()
    await page.click('text=Delete')
  })

  test('User Can Check and Uncheck Checkboxes', async ({ page }) => {
    await page.goto('/checkboxes')
    const title = page.getByRole('heading', { name: 'Checkboxes' })
    await expect(title).toBeVisible()
    const checkbox = page.getByRole('checkbox').first()
    checkbox.check()
    await expect(checkbox).toBeChecked()
    const checkbox2 = page.getByRole('checkbox').last()
    checkbox2.uncheck()
    await expect(checkbox2).not.toBeChecked()
  })

  test('User Can Drag and Drop Box At Other Location', async ({ page }) => {
    await page.goto('/drag_and_drop')
    const title = page.getByRole('heading', { name: 'Drag And Drop' })
    await expect(title).toBeVisible()
    await page.dragAndDrop('#column-a', '#column-b')
    await page.dragAndDrop('#column-b', '#column-a')
  })
})
