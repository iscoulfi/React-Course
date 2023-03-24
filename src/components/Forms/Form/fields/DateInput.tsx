import React from 'react';

type DateInputProps = { birthRef: React.RefObject<HTMLInputElement>; dateError: string };

class DateInput extends React.Component<DateInputProps> {
  render() {
    return (
      <div className="field">
        <div className="field_input">
          <label>Birthday</label>
          <input className="input" type="date" ref={this.props.birthRef} />
        </div>
        {this.props.dateError ? <p>{this.props.dateError}</p> : <br />}
      </div>
    );
  }
}

export default DateInput;
