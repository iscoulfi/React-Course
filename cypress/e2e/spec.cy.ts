describe('Main page', () => {
  it('shows Main page renders properly', () => {
    cy.visit('/');
    cy.contains('home', { matchCase: false });
  });
});
