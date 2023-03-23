import React from 'react';

type DateInputProps = { birthRef: React.RefObject<HTMLInputElement>; dateError: string };

class DateInput extends React.Component<DateInputProps> {
  render() {
    return (
      <div>
        <div>
          <label>Birthday</label>
          <input type="date" ref={this.props.birthRef} />
        </div>
        {this.props.dateError ? <p>{this.props.dateError}</p> : ''}
      </div>
    );
  }
}

export default DateInput;
