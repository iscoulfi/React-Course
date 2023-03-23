import React from 'react';

type TextInputProps = { nameRef: React.RefObject<HTMLInputElement> };

class TextInput extends React.Component<TextInputProps> {
  render() {
    return (
      <div>
        <label>Username</label>
        <input type="text" ref={this.props.nameRef} placeholder="Enter username..." />
      </div>
    );
  }
}

export default TextInput;
