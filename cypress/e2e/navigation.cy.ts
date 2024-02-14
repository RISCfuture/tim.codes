describe('Navigation', () => {
  it('moves from Projects to Resume', () => {
    cy.visit('/#/projects')
    cy.get('[data-cy=menu-resume]').click()
    // cy.get('article>[data-cy=navigation-root-resume]').should('have.class', 'shift-right-enter')
    cy.location('hash').should('eq', '#/resume')
  })

  it('moves from Projects to Home', () => {
    cy.visit('/#/projects')
    cy.get('[data-cy=menu-home]').click()
    // cy.get('article>[data-cy=navigation-root-home]').should('have.class', 'shift-left-enter')
    cy.location('hash').should('eq', '#/')
  })
})
