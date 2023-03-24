export type FormsProps = Record<string, never>;

export interface ICard {
  id?: string;
  username?: string;
  birthday?: string;
  gender?: string;
  image?: string;
  agreement?: string;
  language?: string;
}

export type FormsState = { cards: ICard[] };

export type FormProps = {
  refreshCards: (card: ICard) => void;
};

export interface FormErrors {
  nameError: string;
  dateError: string;
  genderError: string;
  imageError: string;
  checkboxError: string;
  selectError: string;
}

export interface FormState {
  message: string;
  errors: FormErrors;
}

export type FormCardsProps = FormsState;
