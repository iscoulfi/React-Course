import React from 'react';
import Form from '../../Forms/Form/Form';
import FormCards from '../../Forms/FormCards/FormCards';
import { FormsProps, ICard, FormsState } from '../../../types/formTypes';

class Forms extends React.Component<FormsProps, FormsState> {
  constructor(props: FormsProps) {
    super(props);
    this.state = { cards: [] };
  }

  refreshCards(card: ICard) {
    this.setState((prevState: FormsState) => ({ cards: [...prevState.cards, card] }));
  }

  render() {
    return (
      <div>
        <Form refreshCards={(card: ICard) => this.refreshCards(card)} />
        <FormCards />
      </div>
    );
  }
}

export default Forms;
