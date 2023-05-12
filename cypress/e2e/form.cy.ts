/// <reference types="cypress" />
import 'cypress-file-upload';

describe('Form page', () => {
  it('shows form page renders properly', () => {
    cy.visit('/forms');
    cy.contains('username', { matchCase: false });
  });

  it('shows form validate works correctly', () => {
    cy.visit('/forms');
    cy.get('[type="submit"]').click();
    cy.contains('Please enter username');
  });

  it('shows create form works correctly', () => {
    cy.visit('/forms');

    cy.get('[type="text"]').type('Erich');
    cy.get('[type="date"]').type('1898-06-22');
    cy.get('[data-cy="radio-male"]').click();
    cy.get('select').select('German');
    cy.get('[type="file"]').attachFile('remark.jpg');
    cy.get('[type="checkbox"]').click();
    cy.get('[type="submit"]').click();

    cy.contains('Data has been saved');
  });
});
