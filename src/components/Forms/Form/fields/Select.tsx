import React from 'react';

type SelectProps = { selectRef: React.RefObject<HTMLSelectElement>; selectError: string };

class Select extends React.Component<SelectProps> {
  render() {
    return (
      <div className="field">
        <div className="field_input">
          <label>Choose a language</label>
          <select name="language" className="input" ref={this.props.selectRef}>
            <option value="" hidden>
              Choose
            </option>
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
            <option value="german">German</option>
          </select>
        </div>
        {this.props.selectError ? <p>{this.props.selectError}</p> : <br />}
      </div>
    );
  }
}

export default Select;
