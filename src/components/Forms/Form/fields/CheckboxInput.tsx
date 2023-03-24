import React from 'react';

type CheckboxInputProps = { checkboxRef: React.RefObject<HTMLInputElement>; checkboxError: string };

class CheckboxInput extends React.Component<CheckboxInputProps> {
  render() {
    return (
      <div className="field">
        <div>
          <input type="checkbox" ref={this.props.checkboxRef} />
          <label> I accept the terms and conditions</label>
        </div>
        {this.props.checkboxError ? <p>{this.props.checkboxError}</p> : <br />}
      </div>
    );
  }
}

export default CheckboxInput;
