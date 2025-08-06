describe('Adicionar itens ao carrinho', () => {
  beforeEach(() => {
    cy.loginAsValidUser(); // Login antes de cada teste
  });

it('Deve validar que o subtotal está correto com base nos produtos adicionados', () => {
  cy.addCart(); // Adiciona os produtos corretamente
  cy.get('#checkout').click();

  cy.get('#first-name').type('Ehrick');
  cy.get('#last-name').type('Koczak');
  cy.get('#postal-code').type('12345');
  cy.get('[data-test="continue"]').click();

  // Pega todos os preços dos itens, converte para número e soma
  let somaDosProdutos = 0;

  cy.get('[data-test="inventory-item-price"]').each(($el) => {
    const preco = parseFloat($el.text().replace('$', ''));
    somaDosProdutos += preco;
  }).then(() => {
    // Pega o subtotal exibido
    cy.get('[data-test="subtotal-label"]').invoke('text').then((subtotalText) => {
      const subtotal = parseFloat(subtotalText.replace('Item total: $', ''));

      // Faz a verificação
      expect(subtotal).to.eq(somaDosProdutos);
    });
  });
});
});
