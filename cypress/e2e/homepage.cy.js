describe('template spec', () => {
  it('passes', () => {
    cy.visit('localhost:3000');
    cy.get('#parameter').invoke('text').should('not.be.empty');
  })
})