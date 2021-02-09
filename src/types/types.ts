import { TournamentActions } from '../constants/constantEnums';

export interface TournamentInterface {
  id: string;
  name: string;
  organizer: string;
  game: string;
  participants: {
    current: number;
    max: number;
  };
  startDate: Date;
}

export interface TournamentStateInterface {
  tournaments: TournamentInterface[] | null;
  loading: Boolean;
  error: string | null;
}

export interface TournamentAction {
  type: TournamentActions;
  payload: any;
}
