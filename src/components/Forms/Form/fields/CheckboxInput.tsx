import React from 'react';

type CheckboxInputProps = { checkboxRef: React.RefObject<HTMLInputElement> };

class CheckboxInput extends React.Component<CheckboxInputProps> {
  render() {
    return (
      <div>
        <input type="checkbox" ref={this.props.checkboxRef} />
        <label>I consent to my personal data</label>
      </div>
    );
  }
}

export default CheckboxInput;
