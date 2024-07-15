// cypress/integration/app.spec.ts

describe('App', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json*', { fixture: 'articles.json' })
      .as('getArticles');
  });

  it('successfully loads', () => {
    cy.visit('http://localhost:3000');

    // Wait for the API request to complete
    cy.wait('@getArticles', { timeout: 50000 }).then((interception) => {
      cy.log('Intercepted request:', interception);
    });

    // Check if the header, banner, listing, and footer are visible
    cy.get('.cp-header', { timeout: 10000 }).should('be.visible');
    cy.get('.banner', { timeout: 10000 }).should('be.visible');
    cy.get('.listing', { timeout: 10000 }).should('be.visible');
    cy.get('footer', { timeout: 10000 }).should('be.visible');
  });

  it('displays article data', () => {
    cy.visit('http://localhost:3000');

    // Wait for the API request to complete
    cy.wait('@getArticles', { timeout: 50000 }).then((interception) => {
      cy.log('Intercepted request:', interception);
    });

    // Assert that the article data is displayed correctly
    cy.get('.listing .listing-item', { timeout: 10000 }); 
  });
});
