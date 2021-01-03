import {
  getAddMovieButton,
  getMoviesContainer,
} from '../support/movie-list.po';

export const testEmptyMoviesList = () => {
  getMoviesContainer().should('be.empty');
};

export const testGoToAddMovie = () => {
  getAddMovieButton().click();
  cy.location('pathname').should('eq', '/movie-database/movie/add');
};
