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
    //Go to checkbox endpoint
    await page.goto('/checkboxes')
    //Check title is correct
    const title = page.getByRole('heading', { name: 'Checkboxes' })
    await expect(title).toBeVisible()
    //Identify first checkbox
    const checkbox = page.getByRole('checkbox').first()
    //Check first checkbox and ensure it's checked
    checkbox.check()
    await expect(checkbox).toBeChecked()
    //Identify second checkbox
    const checkbox2 = page.getByRole('checkbox').last()
    //Uncheck second checkbox and ensure its unchecked
    checkbox2.uncheck()
    await expect(checkbox2).not.toBeChecked()
  })

  test('User Can Drag and Drop Box At Other Location', async ({ page }) => {
    //Go to drag and drop endpoint
    await page.goto('/drag_and_drop')
    //Check title is correct
    const title = page.getByRole('heading', { name: 'Drag And Drop' })
    await expect(title).toBeVisible()
    //Move drag and drop elements (missing assertions)
    await page.dragAndDrop('#column-a', '#column-b')
    await page.dragAndDrop('#column-b', '#column-a')
  })
})
