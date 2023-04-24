/// <reference types="cypress" />

describe('Main page', () => {
  it('shows home page renders properly', () => {
    cy.visit('/');
    cy.contains('Home');
  });
});
