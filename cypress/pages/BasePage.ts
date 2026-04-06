export class BasePage {
  protected wrap(_chainable: Cypress.Chainable): this {
    void _chainable
    return this
  }

  clickHomeLink(): this {
    return this.wrap(cy.findByRole('link', { name: 'Home' }).click())
  }

  clickProjectsLink(): this {
    return this.wrap(cy.findByRole('link', { name: 'Projects' }).click())
  }

  clickResumeLink(): this {
    return this.wrap(cy.findByRole('link', { name: 'Résumé' }).click())
  }

  locationHash(): Cypress.Chainable<string> {
    return cy.location('hash')
  }
}
