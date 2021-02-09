import axios from 'axios';
// import { RootState } from '../reducers';
import { TournamentAction } from '../types/types';
import { TournamentActions } from '../constants/constantEnums';
import { API_TOURNAMENTS_URL } from '../constants/api';
import { Dispatch } from 'redux';

export const fetchAllTournaments = () => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: TournamentActions.FETCH_ALL_TOURNAMENT_START
    });
    const { data: tournaments } = await axios.get(API_TOURNAMENTS_URL);
    dispatch({
      type: TournamentActions.FETCH_ALL_TOURNAMENT_SUCCESS,
      payload: tournaments
    });
  } catch (error) {
    console.error(error.message);
    dispatch({
      type: TournamentActions.FETCH_ALL_TOURNAMENT_ERROR,
      payload: error.message
    });
  }
};

export const searchTournament = (query: string) => async (
  dispatch: Dispatch
) => {
  const URL = `${API_TOURNAMENTS_URL}?q=${query}`;
  try {
    dispatch({
      type: TournamentActions.SEARCH_TOURNAMENT_START
    });
    const { data: tournaments } = await axios.get(URL);
    dispatch({
      type: TournamentActions.SEARCH_TOURNAMENT_SUCCESS,
      payload: tournaments
    });
  } catch (error) {
    dispatch({
      type: TournamentActions.SEARCH_TOURNAMENT_FAIL,
      payload: error.message
    });
    console.error(error.message);
  }
};

export const createTournament = (name: string) => async (
  dispatch: Dispatch
) => {
  try {
    const { data } = await axios.post(API_TOURNAMENTS_URL, { name });
    dispatch({
      type: TournamentActions.CREATE_TOURNAMENT,
      payload: data
    });
  } catch (error) {
    console.error(error.message);
  }
};

export const addTournament = (text: any) => {
  return {
    type: TournamentActions.CREATE_TOURNAMENT,
    text
  };
};

export const deleteTournamentCreator = (payload: string): TournamentAction => {
  return {
    type: TournamentActions.DELETE_TOURNAMENT,
    payload
  };
};

export const deleteTournament = (id: string) => async (dispatch: Dispatch) => {
  const URL = `${API_TOURNAMENTS_URL}/${id}`;
  try {
    const res = await axios.delete(URL);
    dispatch({
      type: TournamentActions.DELETE_TOURNAMENT,
      payload: id
    });
  } catch (error) {
    console.error(error.message);
  }
};

export const editTournament = (id: string, name: string) => async (
  dispatch: Dispatch
) => {
  const URL = `${API_TOURNAMENTS_URL}/${id}`;
  try {
    const { data: tournament } = await axios.patch(URL, { name });
    dispatch({
      type: TournamentActions.EDIT_TOURNAMENT,
      payload: tournament
    });
  } catch (error) {
    console.error(error.message);
  }
};

export const editTournamentCreator = (payload: string): TournamentAction => {
  return {
    type: TournamentActions.EDIT_TOURNAMENT,
    payload
  };
};
