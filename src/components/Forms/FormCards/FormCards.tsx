import { useAppSelector } from '../../../redux/store';
import FormCard from './FormCard/FormCard';

const FormCards = () => {
  const { cards } = useAppSelector((state) => state.form);
  return (
    <div className="cards">
      {cards.map((card) => (
        <FormCard key={card.id} {...card} />
      ))}
    </div>
  );
};

export default FormCards;
