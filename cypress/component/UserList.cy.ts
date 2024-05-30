import UserList from "@/components/user-list/UserList.vue";
import {User} from "@/shared/models/user.model";

describe('UserList.cy.ts', () => {

  it('intercept API', () => {
    cy.intercept('http://evernote.s1810456025.student.kwmhgb.at/api/users/all', {
      statusCode: 404,
      body: '404 Not Found!',
      headers: {
        'x-not-found': 'true',
      },
    }).as('getAllUsers');

  });

  it('intercept API', () => {
    cy.intercept({
      method: 'GET',
      url: 'http://evernote.s1810456025.student.kwmhgb.at/api/users/all'
    }).as('getAllUsers');

    cy.mount(UserList);

    cy.wait('@getAllUsers').then(data => {
      expect(data.response?.body).not.be.undefined;
      expect(data.response?.statusCode).eq(200);
    });
    cy.get('.user-list').should('be.visible');

  });
});