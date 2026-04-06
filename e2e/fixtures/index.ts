import { test as base } from '@playwright/test'
import { ProjectsPage } from '../pages/ProjectsPage'

interface Fixtures {
  projectsPage: ProjectsPage
}

export const test = base.extend<Fixtures>({
  projectsPage: async ({ page }, use) => {
    await use(new ProjectsPage(page))
  },
})

export { expect } from '@playwright/test'
