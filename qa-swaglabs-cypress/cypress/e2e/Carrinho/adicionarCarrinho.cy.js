describe('Adicionar itens ao carrinho', () => {
  beforeEach(() => {
    cy.loginAsValidUser();  // login antes de cada teste
  });

  it('Deve adicionar 4 produtos, remover 1 e ficar com 3 no carrinho', () => {
    cy.addCart(); // chama seu comando customizado que adiciona e valida
  });
});
