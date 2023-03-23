import React from 'react';

type SelectProps = { selectRef: React.RefObject<HTMLSelectElement> };

class Select extends React.Component<SelectProps> {
  render() {
    return (
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
    );
  }
}

export default Select;
