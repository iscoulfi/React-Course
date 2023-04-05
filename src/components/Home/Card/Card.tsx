import { CardData } from '../../../types/formTypes';

const Card = (props: CardData) => {
  return (
    <div className="card" data-testid="card">
      <img height={200} src={props.image} alt="Image" />
      <div className="person">
        <p> {props.name}</p>
      </div>
    </div>
  );
};

export default Card;
