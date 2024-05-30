describe('e2e-demo spec', () => {
  it('check caluclator', () => {
    cy.visit('/calculator');
    cy.get('.calculator').should('be.visible');
  })
})