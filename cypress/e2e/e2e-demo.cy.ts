describe('e2e-demo spec', () => {
  it('check caluclator', () => {
    cy.visit('/');
    cy.get('.calculator').should('be.visible');
  })
})