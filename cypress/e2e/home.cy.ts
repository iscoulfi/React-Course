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

  it('shows preload state works correctly', () => {
    cy.visit('/');
    cy.contains('rick', { matchCase: false });
  });

  it('shows search input works correctly', () => {
    cy.visit('/');
    cy.get('[data-cy="search"]').type('mag');
    cy.get('[data-cy="search-btn"]').click();
    cy.contains('magnesium', { matchCase: false });
  });

  it('shows popup works correctly', () => {
    cy.visit('/');
    cy.get('.card').first().click();
    cy.contains('gender', { matchCase: false });
  });
});
