import React from 'react';

type ImageInputProps = { imageRef: React.RefObject<HTMLInputElement>; imageError: string };

class ImageInput extends React.Component<ImageInputProps> {
  render() {
    return (
      <div className="field field_input">
        <input type="file" name="myImage" accept="image/*" ref={this.props.imageRef} />
        {this.props.imageError ? <p>{this.props.imageError}</p> : <br />}
      </div>
    );
  }
}

export default ImageInput;
