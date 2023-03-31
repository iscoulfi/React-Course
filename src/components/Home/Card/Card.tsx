import { IProduct } from '../../../assets/data';

const Card = (props: IProduct) => {
  return (
    <div className="card" data-testid="card">
      <img width={60} height={250} src={props.imageUrl} alt="Image" />
      <div>
        <h5>{props.title}</h5>
        <div>
          <span>Price:</span>
          <b> ${props.price}</b>
        </div>
        <div>
          <span>Rating:</span>
          <b> {props.rating}</b>
        </div>
        <div className="buttons">
          <img className="plus" src="img/btn-plus.svg" alt="Plus" />
          <img src="img/heart-liked.svg" alt="Liked" />
        </div>
        <div className="favorite"></div>
      </div>
    </div>
  );
};

export default Card;
