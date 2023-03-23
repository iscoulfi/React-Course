import React from 'react';

type TextInputProps = { nameRef: React.RefObject<HTMLInputElement>; nameError: string };

class TextInput extends React.Component<TextInputProps> {
  render() {
    return (
      <div>
        <div>
          <label>Username</label>
          <input type="text" ref={this.props.nameRef} placeholder="Enter username..." />
        </div>
        {this.props.nameError ? <p>{this.props.nameError}</p> : ''}
      </div>
    );
  }
}

export default TextInput;
