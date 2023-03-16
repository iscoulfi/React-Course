import React from 'react';
import { IProduct } from '../../assets/data';

class Card extends React.Component<IProduct> {
  render() {
    return (
      <div className="card">
        <img width={60} height={250} src={this.props.imageUrl} alt="Image" />
        <div>
          <h5>{this.props.title}</h5>
          <div>
            <span>Price:</span>
            <b> ${this.props.price}</b>
          </div>
          <div>
            <span>Rating:</span>
            <b> {this.props.rating}</b>
          </div>
          <div className="buttons">
            <img className="plus" src="img/btn-plus.svg" alt="Plus" />
            <img src="img/heart-liked.svg" alt="Liked" />
          </div>
          <div className="favorite"></div>
        </div>
      </div>
    );
  }
}

export default Card;
