describe('renders the home page', () => {
  it('renders the home page correctly', () => {
    cy.visit('/');
    cy.get('.homePage-Wrapper').should('be.visible');
    cy.get('h1').should('contain', 'FIND YOUR MOVIE');
  });
  it('receives response from server', () => {
    cy.request('http://localhost:4000/movies').should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('data');
      expect(response.body.data).to.have.length(10);
      cy.wait(1000);
      cy.get('.movie-card').should('have.length', 10);
      cy.get('.moviesList-counts').should('contain', '10 movies found');
    });
  });
});

//test for the clicking on movie card then show the movie details
describe('renders the movie details page after movie card clicked', () => {
  it('renders the movie details page correctly', () => {
    cy.visit('/');
    cy.get('.click-container').first().click();
    cy.get('.movieDetails-Wrapper').should('be.visible');

    cy.request('http://localhost:4000/movies').should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('data');
      expect(response.body.data).to.have.length(10);
      cy.url().should(
        'eq',
        `http://localhost:3000/search?movie=${response.body.data[0].id}`
      );
      cy.wait(1000);
      cy.get('.title').should('contain', response.body.data[0].title);
    });
  });
});

//test for clicking on the search button, then search for the movie
describe('search movie functionality works correctly', () => {
  it('renders the search page correctly', () => {
    cy.url().should('include', 'search?movie=');
    cy.get('.search-btn').click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/search');
      expect(location.search).to.be.empty;
    });
    cy.get('#site-search').should('be.visible');
    cy.get('.submit-search').should('be.visible');
  });
  it('displays search results at content page', () => {
    cy.get('#site-search').type('fifty').should('have.value', 'fifty');
    cy.get('.submit-search').click();
    cy.url().should('include', 'search/fifty');
    cy.get('.movie-card').should('have.length', 1);
    cy.get('.moviesList-counts').should('contain', '1 movie found');
    cy.get('.movie-card').should('contain', 'Fifty');
  });
});
