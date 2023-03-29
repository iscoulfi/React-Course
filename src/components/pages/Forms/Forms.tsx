import { useState } from 'react';
import Form from '../../Forms/Form/Form';
import FormCards from '../../Forms/FormCards/FormCards';
import { ICard, FormsState } from '../../../types/formTypes';

const Forms = () => {
  const [cards, setCards] = useState<FormsState | []>([]);

  const refreshCards = (card: ICard) => {
    setCards((cards: FormsState) => [...cards, card]);
  };
  return (
    <div>
      <Form refreshCards={(card: ICard) => refreshCards(card)} />
      <FormCards cards={cards} />
    </div>
  );
};

export default Forms;
