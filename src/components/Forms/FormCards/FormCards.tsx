import { FormCardsProps } from '../../../types/formTypes';
import FormCard from './FormCard/FormCard';

const FormCards = ({ cards }: FormCardsProps) => {
  return (
    <div className="cards">
      {cards.map((card) => (
        <FormCard key={card.id} {...card} />
      ))}
    </div>
  );
};

export default FormCards;
