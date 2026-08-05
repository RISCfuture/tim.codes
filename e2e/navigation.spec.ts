import { test, expect } from './fixtures'

test.describe('Navigation', () => {
  test('moves from Projects to Resume', async ({ projectsPage }) => {
    await projectsPage.visit()
    await projectsPage.clickResumeLink()
    await expect(projectsPage.page).toHaveURL(/\/resume$/)
  })

  test('moves from Projects to Home', async ({ projectsPage }) => {
    await projectsPage.visit()
    await projectsPage.clickHomeLink()
    await expect(projectsPage.page).toHaveURL(/\/$/)
  })

  test('rewrites legacy hash URLs published under the old router', async ({ projectsPage }) => {
    await projectsPage.page.goto('/#/resume')
    await expect(projectsPage.page).toHaveURL(/\/resume$/)
  })

  test('keeps a real path when a stray fragment rides along', async ({ projectsPage }) => {
    await projectsPage.page.goto('/projects#/')
    await expect(projectsPage.page).toHaveURL(/\/projects/)
  })

  test('resolves a deep link opened directly', async ({ projectsPage }) => {
    await projectsPage.page.goto('/resume')
    await expect(projectsPage.page).toHaveURL(/\/resume$/)
  })

  test('shows the not-found view for a path that matches no route', async ({ projectsPage }) => {
    await projectsPage.page.goto('/no-such-page')
    await expect(
      projectsPage.page.getByRole('heading', { name: 'Page not found' }),
    ).toBeVisible()
  })
})
