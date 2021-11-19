describe('autentication', function(){
    it('regitstreren user', function() {
        cy.visit('http://localhost:4200/product/list');
        cy.visit('http://localhost:4200/shoppingCart');
        cy.url();
        cy.get('[data-cy=register-button]').click();
        cy.get('[data-cy=register-firstname]').type('firstname').should('have.value', 'firstname');
        cy.get('[data-cy=register-lastname]').type('lastname').should('have.value', 'lastname');
        cy.get('[data-cy=register-email]').type('firstname@email.com').should('have.value', 'firstname@email.com');
        cy.get('[data-cy=register-password]').type('Azerty123+').should('have.value', 'Azerty123+');
        cy.get('[data-cy=register-confirm-password]').type('Azerty123+').should('have.value', 'Azerty123+');
        cy.get('[data-cy=register-button]').click();
   
        cy.visit('http://localhost:4200/shoppingCart');

    });

    it('login-logout', function(){
        cy.visit('http://localhost:4200/product/list');
        cy.visit('http://localhost:4200/shoppingCart');
 
        cy.get('[data-cy=login-button-nav]').click();
        cy.get('[data-cy=login-email]').type('firstname@email.com').should('have.value', 'firstname@email.com');
        cy.get('[data-cy=login-password]').type('Azerty123+').should('have.value', 'Azerty123+');
        cy.get('[data-cy=login-button]').click();
   
        cy.visit('http://localhost:4200/shoppingCart');


        cy.get('[data-cy=logout-button]').click();
   
        cy.visit('http://localhost:4200/shoppingCart');

    });
});