describe('Navigation', () => {
  it('moves from Projects to Resume', () => {
    cy.visit('/#/projects')
    cy.findByRole('link', { name: 'Résumé' }).click()
    // cy.get('article>[data-cy=navigation-root-resume]').should('have.class', 'shift-right-enter')
    cy.location('hash').should('eq', '#/resume')
  })

  it('moves from Projects to Home', () => {
    cy.visit('/#/projects')
    cy.findByRole('link', { name: 'Home' }).click()
    // cy.get('article>[data-cy=navigation-root-home]').should('have.class', 'shift-left-enter')
    cy.location('hash').should('eq', '#/')
  })
})
