

import "cypress-axe";
import './commands'
import compareSnapshotCommand from 'cypress-image-diff-js/command';
compareSnapshotCommand();
/*
after(() => {
  cy.task("generateReport");
});
after(() => {
  cy.task('generateJsonReport');
})
*/