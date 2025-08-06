# 🧪 Testes Automatizados com Cypress – Swag Labs

Este projeto é um exemplo profissional de automação de testes end-to-end usando [Cypress](https://www.cypress.io/) na aplicação [Swag Labs](https://www.saucedemo.com/).

Foi desenvolvido com foco em boas práticas de QA, seguindo padrões do mercado e aplicando técnicas aprendidas.

---

## 📋 Funcionalidades testadas

✅ Login (usuário válido e inválido)  
✅ Adição de produtos ao carrinho  
✅ Remoção de produtos do carrinho  
✅ Validação de quantidade de itens
✅ Finalização da compra
✅ Verificação de preço final

---

## ⚙️ Tecnologias e ferramentas

- [Cypress](https://www.cypress.io/)
- Node.js + npm
- JavaScript ES6
- Estrutura modular usando fixtures e custom commands

---

## 🏗 Estrutura do projeto

- **fixtures/**: dados reutilizáveis como usuários
- **commands.js**: comandos customizados (`cy.loginAsValidUser()`, `cy.addCart()` etc.)
- **e2e/**: testes divididos por funcionalidade

---

## 🚀 Como rodar o projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/EhrickAyrhand/Cypress-SwagLabs
