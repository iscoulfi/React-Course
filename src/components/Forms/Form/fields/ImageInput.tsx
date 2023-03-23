import React from 'react';

type ImageInputProps = { imageRef: React.RefObject<HTMLInputElement> };

class ImageInput extends React.Component<ImageInputProps> {
  render() {
    return (
      <div>
        <label>Upload image</label>
        <input type="file" name="myImage" accept="image/*" ref={this.props.imageRef} />
      </div>
    );
  }
}

export default ImageInput;
