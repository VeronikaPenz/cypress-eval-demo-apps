import Calculator from "@/components/calculator/Calculator.vue";

describe('Calculator.cy.ts', () => {
  it('mount component', () => {
    cy.mount(Calculator);
    cy.get('.calculator').should('be.visible');
  });
});