import React from 'react';

type DateInputProps = { birthRef: React.RefObject<HTMLInputElement> };

class DateInput extends React.Component<DateInputProps> {
  render() {
    return (
      <div>
        <label>Birthday</label>
        <input type="date" ref={this.props.birthRef} />
      </div>
    );
  }
}

export default DateInput;
