import { BasePage } from './BasePage'

export class ProjectsPage extends BasePage {
  async visit(): Promise<void> {
    await this.page.goto('/#/projects')
  }
}
