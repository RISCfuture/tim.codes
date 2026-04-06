import { ProjectsPage } from '../pages/ProjectsPage'

describe('Navigation', () => {
  const projectsPage = new ProjectsPage()

  it('moves from Projects to Resume', () => {
    projectsPage.visit()
    projectsPage.clickResumeLink()
    projectsPage.locationHash().should('eq', '#/resume')
  })

  it('moves from Projects to Home', () => {
    projectsPage.visit()
    projectsPage.clickHomeLink()
    projectsPage.locationHash().should('eq', '#/')
  })
})
