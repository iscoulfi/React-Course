import React from 'react';

type SelectProps = { selectRef: React.RefObject<HTMLSelectElement>; selectError: string };

class Select extends React.Component<SelectProps> {
  render() {
    return (
      <div>
        <div>
          <label>Choose a country:</label>
          <select name="language" ref={this.props.selectRef}>
            <option value="" hidden>
              Choose
            </option>
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
            <option value="german">German</option>
          </select>
        </div>
        {this.props.selectError ? <p>{this.props.selectError}</p> : ''}
      </div>
    );
  }
}

export default Select;
