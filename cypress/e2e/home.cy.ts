/// <reference types="cypress" />

describe('Main page', () => {
  it('shows home page renders properly', () => {
    cy.visit('/');
    cy.contains('home', { matchCase: false });
  });

  it('shows routing works correctly', () => {
    cy.visit('/');
    cy.contains('About us').click();
    cy.url().should('include', '/about');
  });

  it('input shows value', () => {
    cy.visit('/');
    cy.get('[data-cy="search"]').type('Rick');
    cy.get('[data-cy="search"]').should('have.value', 'Rick');
  });
});
