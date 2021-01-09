import { getSubmitButton } from '../support/login.po';

export const shouldRedirectAfterLogin = () => {
  getSubmitButton().contains('Zaloguj');
  getSubmitButton().click();
  cy.url().should('contain', '/movie-database/movie');
};
