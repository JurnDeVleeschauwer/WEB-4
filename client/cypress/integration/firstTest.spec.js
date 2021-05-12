describe('my first test', function(){
    it('our app runs', function() {
        cy.visit('http://localhost:4200/product/list');
        cy.get('[data-cy=productCardList]').should('be.visible');
        cy.get('[data-cy=productCard]').should('be.visible');
    });

    it('mock product get', function(){
        cy.server();
        cy.route({methode: 'Get', url:'http://localhost:4200/api/Webshop',
        status: 200,
        response: [{            "id": 0,            "name": "string",            "price": 0          }]
        });
    });
});