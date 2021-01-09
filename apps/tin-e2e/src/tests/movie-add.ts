import {
  getDescriptionInput,
  getReleaseDateInput,
  getSaveButton,
  getThumbnailUrl,
  getTitleInput,
} from '../support/movie-add.po';

export const testAddMovie = () => {
  getTitleInput().type('ZIELONA MILA');
  getThumbnailUrl().type('https://fwcdn.pl/fpo/08/62/862/7517878.6.jpg');
  getReleaseDateInput().type('1999-06-12');
  getDescriptionInput().type(
    'Emerytowany strażnik więzienny opowiada przyjaciółce o niezwykłym mężczyźnie, którego skazano na śmierć za zabójstwo dwóch 9-letnich dziewczynek.'
  );
  getSaveButton().click();
  cy.location('pathname').should('eq', '/movie-database/movie/1');
};
