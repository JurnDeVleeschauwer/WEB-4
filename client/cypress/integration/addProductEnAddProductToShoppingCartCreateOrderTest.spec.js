describe('add product', function(){
    it('add new product', function() {
        cy.visit('http://localhost:4200/');
        cy.get('[data-cy=login-button-nav]').click();
        cy.get('[data-cy=login-email]').type('admin@email.com').should('have.value', 'admin@email.com');
        cy.get('[data-cy=login-password]').type('Azerty123+').should('have.value', 'Azerty123+');
        cy.get('[data-cy=login-button]').click();

        cy.visit('http://localhost:4200/product/add');
        cy.get('[data-cy=add-product-name]').type('adza').should('have.value', 'adza');
        cy.get('[data-cy=add-product-price]').type('9').should('have.value', '9');
        cy.get('[data-cy=add-product-button]').click();

        cy.visit('http://localhost:4200/product/list');
        cy.get('[data-cy=product-card-list]').should('have.length', 3)
   
 
    });

    it('add product to shoppingCart and create order', function(){
        cy.visit('http://localhost:4200/product/list');
 
        cy.get('[data-cy=login-button-nav]').click();
        cy.get('[data-cy=login-email]').type('fake@email.com').should('have.value', 'fake@email.com');
        cy.get('[data-cy=login-password]').type('Azerty123+').should('have.value', 'Azerty123+');
        cy.get('[data-cy=login-button]').click();

        cy.get('button').last().click();

        cy.visit('http://localhost:4200/shoppingCart');
        
        cy.get('[data-cy=create-order-button]').click();
        cy.get('[data-cy=order-card-username]').should('have.value', 'fake@email.com');
        cy.get('[data-cy=order-card-producten]').should('have.value', '[{"name":"fzefez","price":99}]');
    });
});