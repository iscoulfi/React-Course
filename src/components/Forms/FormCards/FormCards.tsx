import React from 'react';
import { FormCardsProps } from '../../../types/formTypes';
import FormCard from './FormCard/FormCard';

class FormCards extends React.Component<FormCardsProps> {
  render() {
    return (
      <div className="cards">
        {this.props.cards.map((card) => (
          <FormCard key={card.id} {...card} />
        ))}
      </div>
    );
  }
}

export default FormCards;
