import React from 'react';

type TextInputProps = { nameRef: React.RefObject<HTMLInputElement>; nameError: string };

class TextInput extends React.Component<TextInputProps> {
  render() {
    return (
      <div className="field">
        <div className="field_input">
          <label>Username</label>
          <input
            className="input"
            type="text"
            ref={this.props.nameRef}
            placeholder="Enter username..."
          />
        </div>
        {this.props.nameError ? <p>{this.props.nameError}</p> : <br />}
      </div>
    );
  }
}

export default TextInput;
