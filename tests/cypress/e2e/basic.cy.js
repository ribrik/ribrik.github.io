describe('Ribrik PWA', () => {
  it('Laddar sidan korrekt', () => {
    cy.visit('https://ribrik.github.io/');
    cy.contains('Ribrik PWA Demo');
  });
});
