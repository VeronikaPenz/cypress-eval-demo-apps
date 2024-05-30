import UserList from "@/components/user-list/UserList.vue";
import {User} from "@/shared/models/user.model";

describe('UserList E2E', () => {

  it('axe WCAG Accessibility test', () => {
    cy.visit('/');
    cy.injectAxe();
    cy.checkA11y();
  });


  it('ARIA test', () => {
    cy.visit('/');
    cy.get('.user-list').should('be.visible');

    cy.get('.user-image > img').first()
      .invoke('attr', 'aria-label')
      .should('exist');

    cy.get('.user-image > img').first()
      .then(e => {
        expect(e[0].getAttribute('aria-label')).to.exist;
      });

    cy.get('.user-image > img').first()
      .then(e => {
        cy.wrap(e[0].attributes)
          .its('aria-label')
          .should('exist');
      });

  });


  it('visual test', () => {
    cy.visit('/');
    cy.get('.user-list').should('be.visible');
    cy.wait(3000);
    cy.compareSnapshot('user-list');
  });


  it('check profilepic dimensions', () => {
    cy.visit('/');
    cy.get('.user-list').should('be.visible')
      .within(() => {
        cy.get('.user-image').each((i) => {
          cy.wrap(i).should('have.css', 'height', '100px')
            .should('have.css', 'width', '100px');
        })
      });
  });

});