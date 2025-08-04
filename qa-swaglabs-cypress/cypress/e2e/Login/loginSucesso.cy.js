describe('Login usando dados validos', () => {
  it('Deve fazer login com sucesso', () => {
    cy.loginAsValidUser();
    cy.url().should('include', '/inventory.html');
  });
});