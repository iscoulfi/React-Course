import React from 'react';

type RadioInputProps = {
  genderRef1: React.RefObject<HTMLInputElement>;
  genderRef2: React.RefObject<HTMLInputElement>;
};

class RadioInput extends React.Component<RadioInputProps> {
  render() {
    return (
      <div>
        <div>
          <input type="radio" name="gender" ref={this.props.genderRef1} />
          <label> Male</label>
        </div>
        <div>
          <input type="radio" name="gender" ref={this.props.genderRef2} />
          <label> Female</label>
        </div>
      </div>
    );
  }
}

export default RadioInput;
