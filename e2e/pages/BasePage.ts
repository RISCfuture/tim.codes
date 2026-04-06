import type { Locator, Page } from '@playwright/test'

export class BasePage {
  readonly page: Page
  readonly homeLink: Locator
  readonly projectsLink: Locator
  readonly resumeLink: Locator

  constructor(page: Page) {
    this.page = page
    this.homeLink = page.getByRole('link', { name: 'Home' })
    this.projectsLink = page.getByRole('link', { name: 'Projects' })
    this.resumeLink = page.getByRole('link', { name: /Résumé/i })
  }

  async clickHomeLink(): Promise<void> {
    await this.homeLink.click()
  }

  async clickProjectsLink(): Promise<void> {
    await this.projectsLink.click()
  }

  async clickResumeLink(): Promise<void> {
    await this.resumeLink.click()
  }
}
