import { ActorId } from '@tin/movie-database/domain';

export const getTitleInput = () => cy.get('[data-test=movie-add__title-input]');
export const getThumbnailUrl = () =>
  cy.get('[data-test=movie-add__thumbnailUrl-input]');
export const getReleaseDateInput = () =>
  cy.get('[data-test=movie-add__releaseDate-input]');
export const getDescriptionInput = () =>
  cy.get('[data-test=movie-add__description-input]');
export const getActorInput = (id: ActorId) =>
  cy.get('[data-test=movie-add__actor-' + id + '-input]');
export const getActorRoleInput = (id: ActorId) =>
  cy.get('[data-test=movie-add__role-' + id + '-input]');
export const getActorRemoveButton = (id: ActorId) =>
  cy.get('[data-test=movie-add__actor-' + id + '-remove-button]');
export const getAddActorButton = () =>
  cy.get('[data-test=movie-add__actor-add-button]');
export const getSaveButton = () => cy.get('[data-test=movie-add__save-button]');
