import { shouldRedirectAfterLogin } from '../tests/login';
import { testEmptyMoviesList, testGoToAddMovie } from '../tests/movie-list';
import { testAddMovie } from '../tests/movie-add';

describe('tin', () => {
  it('should redirect to login from /', () => {
    cy.visit('/');
    cy.location('pathname').should('eq', '/login');
  });
  describe('login', () => {
    it('should redirect after login', shouldRedirectAfterLogin);
  });

  describe('movie list', () => {
    it('should be empty', testEmptyMoviesList);
    it('should go to add movie', testGoToAddMovie);
  });

  describe('add movie', () => {
    it('should add movie', testAddMovie);
  });
});
