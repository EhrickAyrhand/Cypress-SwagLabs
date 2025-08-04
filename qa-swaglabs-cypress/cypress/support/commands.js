// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// cypress/support/commands.js
Cypress.Commands.add('loginAsinvalidUser', () => {
  cy.fixture('user').then((user) => {
    cy.visit('/');
    cy.get('[data-test="username"]').type(user.invalidUser.username);
    cy.get('[data-test="password"]').type(user.invalidUser.password);
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('be.visible');
  });
});


Cypress.Commands.add('loginAsValidUser', () => {
  cy.fixture('user').then((user) => {
    cy.visit('/');
    cy.get('[data-test="username"]').type(user.validUser.username);
    cy.get('[data-test="password"]').type(user.validUser.password);
    cy.get('[data-test="login-button"]').click();
  });
});

Cypress.Commands.add('addCart', () => {
  cy.get('.btn_primary').then(($btns) => {
    const primeiros4 = $btns.slice(0, 4);
    Cypress._.each(primeiros4, (btn) => {
      cy.wrap(btn).click();
    });
  });

  cy.get('.btn_secondary').first().click();

  cy.get('.shopping_cart_badge').should('have.text', '3');

  cy.get('.shopping_cart_link').click();
  cy.get('.cart_item').should('have.length', 3);
});


