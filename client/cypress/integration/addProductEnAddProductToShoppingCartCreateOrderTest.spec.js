describe('add peoduct', function(){
    it('add new product', function() {
        cy.visit('http://localhost:4200/');
        cy.get('[data-cy=login-button-nav]').click();
        cy.get('[data-cy=login-email]').type('fake@email.com').should('have.value', 'fake@email.com');
        cy.get('[data-cy=login-password]').type('Azerty123+').should('have.value', 'Azerty123+');
        cy.get('[data-cy=login-button]').click();

        cy.visit('http://localhost:4200/product/add');
        cy.get('[data-cy=add-product-name]').type('adza').should('have.value', 'adza');
        cy.get('[data-cy=add-product-price]').type('9').should('have.value', '9');
        cy.get('[data-cy=add-product-button]').click();

        cy.visit('http://localhost:4200/product/list');
        cy.get('[data-cy=product-card-list]').should('have.length', 3)
   
 
    });

    it('add product to shoppingCart en create order', function(){
        cy.visit('http://localhost:4200/product/list');
 
        cy.get('[data-cy=login-button-nav]').click();
        cy.get('[data-cy=login-email]').type('fake@email.com').should('have.value', 'fake@email.com');
        cy.get('[data-cy=login-password]').type('Azerty123+').should('have.value', 'Azerty123+');
        cy.get('[data-cy=login-button]').click();

        cy.get('button').last().click();

        cy.visit('http://localhost:4200/shoppingCart');
        
        cy.get('[data-cy=create-order-button]').click();
        //cy.get('[data-cy=orderCardList]').should('have.value', 'fake@email.com [{"name":"fzefez","price":99}]')
    });
});