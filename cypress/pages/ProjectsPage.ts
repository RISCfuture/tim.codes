import { BasePage } from './BasePage'

export class ProjectsPage extends BasePage {
  visit(): this {
    return this.wrap(cy.visit('/#/projects'))
  }
}
