import { CardData } from '../../../types/formTypes';

export enum Status {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'completed',
  ERROR = 'error',
}

export interface SearchState {
  searchValue: string;
  cards: CardData[] | [];
  card: CardData | null;
  statusCards: Status;
  statusCard: Status;
}

export interface QueryCharactersData extends CardData {
  results: CardData[];
}
