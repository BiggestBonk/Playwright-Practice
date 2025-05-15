import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test.describe('landing page', () => {
  test('should have no detectable WCAG A or AA violations', async ({
    page,
  }) => {
    await page.goto('https://seek.co.nz')

    const wcagScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze()

    expect(wcagScanResults.violations).toEqual([40])
  })
})
