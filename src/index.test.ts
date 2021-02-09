import * as actions from '../src/actions/tournamentsAction';
import { TournamentActions } from '../src/constants/constantEnums';

describe('actions', () => {
  it('should create an action to add a tournament', () => {
    const text = 'First';
    const expectedAction = {
      type: TournamentActions.CREATE_TOURNAMENT,
      text
    };
    expect(actions.addTournament(text)).toEqual(expectedAction);
  }),
    it('should create an action to delete a tournament', () => {
      const text = 'First';
      const expectedAction = {
        payload: text,
        type: TournamentActions.DELETE_TOURNAMENT
      };
      expect(actions.deleteTournamentCreator(text)).toEqual(expectedAction);
    }),
    it('should create an action to edit a tournament', () => {
      const text = 'First';
      const expectedAction = {
        payload: text,
        type: TournamentActions.EDIT_TOURNAMENT
      };
      expect(actions.editTournamentCreator(text)).toEqual(expectedAction);
    });
});
