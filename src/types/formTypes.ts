export interface ICard {
  id: string;
  username: string;
  birthday: string;
  gender: string;
  image: string;
  agreement: string;
  language: string;
}

export type Inputs = {
  username: string;
  birthday: string;
  gender: string;
  language: string;
  image: FileList;
  agreement: boolean;
};

export interface CardData {
  id: number;
  name: string;
  gender: string;
  species: string;
  image: string;
  status: string;
}
