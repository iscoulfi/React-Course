/// <reference types="cypress" />

describe('Form page', () => {
  it('shows form page renders properly', () => {
    cy.visit('/forms');
    cy.contains('username', { matchCase: false });
  });
});
