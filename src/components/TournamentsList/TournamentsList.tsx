import React from 'react';
import { TournamentInterface } from '../../types/types';
import Tournament from '../layout/SearchInput/Tournament/TournamentFunctions';
import { Grid } from './TournamentsList.styles';

interface IProps {
  tournaments: TournamentInterface[];
  onDelete: (name: string) => void;
  onEdit: (id: string, name: string) => void;
}

const TournamentsList = ({ tournaments, onDelete, onEdit }: IProps) => {
  return (
    <Grid>
      {tournaments.map((tournament: TournamentInterface) => (
        <Tournament
          tournament={tournament}
          key={tournament.id}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </Grid>
  );
};

export default TournamentsList;
