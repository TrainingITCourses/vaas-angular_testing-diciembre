import { TripsList } from './trips.list';

describe('The trips Component', () => {
  beforeEach(() => {
    cy.fixture('trips').then((trips) =>
      cy.mount(TripsList, { componentProperties: { trips } })
    );
  });
  it('should display the trip destination', () => {
    cy.get('li').should('contain', 'The Moon');
  });
});
