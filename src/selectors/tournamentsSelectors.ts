import { RootState } from '../reducers';
import { createSelector } from 'reselect';
import { TournamentStateInterface } from '../types/types';

const rootTournamentSelector = (state: RootState) => state.tournaments;

export const tournamentListSelector = createSelector(
  rootTournamentSelector,
  (tournaments: TournamentStateInterface) => tournaments.tournaments
);
export const loadingTournamentSelector = createSelector(
  rootTournamentSelector,
  (tournaments: TournamentStateInterface) => tournaments.loading
);
export const errorTournamentSelector = createSelector(
  rootTournamentSelector,
  (tournaments: TournamentStateInterface) => tournaments.error
);
