import React from 'react';
import { ICard } from '../../../../types/formTypes';

class FormCard extends React.Component<ICard> {
  render() {
    return (
      <div className="formcard">
        <img width={180} height={150} src={this.props.image} alt="Image" />
        <div>
          <div>
            <span>Username:</span>
            <b> {this.props.username}</b>
          </div>
          <div>
            <span>Birthday:</span>
            <b> {this.props.birthday}</b>
          </div>
          <div>
            <span>Gender:</span>
            <b> {this.props.gender}</b>
          </div>
          <div>
            <span>Native language:</span>
            <b> {this.props.language}</b>
          </div>
          <div>
            <span>Agreement:</span>
            <b> {this.props.agreement}</b>
          </div>
        </div>
      </div>
    );
  }
}

export default FormCard;
