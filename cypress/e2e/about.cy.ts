/// <reference types="cypress" />

describe('About page', () => {
  it('shows about page renders properly', () => {
    cy.visit('/about');
    cy.contains('about', { matchCase: false });
  });
});
