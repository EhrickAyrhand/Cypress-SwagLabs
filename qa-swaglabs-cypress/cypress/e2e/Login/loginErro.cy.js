describe('Login usando dados invalidos', () => {
  it('Deve fazer login com sucesso', () => {
    cy.loginAsinvalidUser();
  });
});