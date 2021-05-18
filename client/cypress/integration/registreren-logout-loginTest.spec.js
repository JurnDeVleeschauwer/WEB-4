describe('autentication', function(){
    it('regitstreren user', function() {
        cy.visit('http://localhost:4200/product/list');
        cy.visit('http://localhost:4200/shoppingCart');
        cy.url();
        cy.get('[data-cy=register-button]').click();
        cy.get('[data-cy=register-firstname]').type('fakefirstname').should('have.value', 'fakefirstname');
        cy.get('[data-cy=register-lastname]').type('fakelastname').should('have.value', 'fakelastname');
        cy.get('[data-cy=register-email]').type('fake@email.com').should('have.value', 'fake@email.com');
        cy.get('[data-cy=login-password]').type('a')
        cy.get('[data-cy=login-password]').type('azertyfzefz')
        cy.get('[data-cy=login-password]').type('Azertyfzefz')
        cy.get('[data-cy=login-password]').type('Azertyfzefz123')
        cy.get('[data-cy=register-password]').type('Azerty123+').should('have.value', 'Azerty123+');
        cy.get('[data-cy=register-confirm-password]').type('Azerty123+').should('have.value', 'Azerty123+');
        cy.get('[data-cy=register-button]').click();
   
        cy.visit('http://localhost:4200/shoppingCart');

    });

    it('login-logout', function(){
        cy.visit('http://localhost:4200/product/list');
        cy.visit('http://localhost:4200/shoppingCart');
 
        cy.get('[data-cy=login-button-nav]').click();
        cy.get('[data-cy=login-email]').type('fake@email.com').should('have.value', 'fake@email.com');
        cy.get('[data-cy=login-password]').type('Azerty123+').should('have.value', 'Azerty123+');
        cy.get('[data-cy=login-button]').click();
   
        cy.visit('http://localhost:4200/shoppingCart');


        cy.get('[data-cy=logout-button]').click();
   
        cy.visit('http://localhost:4200/shoppingCart');

    });
});