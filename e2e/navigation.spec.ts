import { test, expect } from './fixtures'

test.describe('Navigation', () => {
  test('moves from Projects to Resume', async ({ projectsPage }) => {
    await projectsPage.visit()
    await projectsPage.clickResumeLink()
    await expect(projectsPage.page).toHaveURL(/#\/resume/)
  })

  test('moves from Projects to Home', async ({ projectsPage }) => {
    await projectsPage.visit()
    await projectsPage.clickHomeLink()
    await expect(projectsPage.page).toHaveURL(/#\/$/)
  })
})
